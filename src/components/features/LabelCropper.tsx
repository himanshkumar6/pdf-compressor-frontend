import React, { useState, useRef, useCallback } from "react";
import { Upload, Crop, Loader2, RefreshCw, Move, Maximize, Printer, FileText } from "lucide-react";
import { safeLoadLibrary } from "../../utils/lazyImport";
import type { PDFDocument } from "pdf-lib";

export type CropPreset = {
  name: string;
  label: string;
  width: number; // width in points (or ratio base)
  height: number; // height in points
  x?: number; // optional fixed crop x
  y?: number; // optional fixed crop y
};

interface LabelCropperProps {
  presets: CropPreset[];
  defaultPresetName?: string;
  toolName: string;
  labels?: {
    uploadTitle?: string;
    uploadHint?: string;
    startOver?: string;
    cropPreset?: string;
    tip?: string;
    cropButton?: string;
    errorValidPdf?: string;
    errorLoadPdf?: string;
    errorCropFailed?: string;
    thermalInfo?: string;
    a4Info?: string;
  };
}

const DEFAULT_LABELS = {
  uploadTitle: "Upload {toolName} PDF",
  uploadHint: "Select your shipping label file",
  startOver: "Start Over",
  cropPreset: "Crop Preset",
  tip: "💡 Tip: Drag the blue box to position. Drag the corner to resize (ratio locked).",
  cropButton: "Crop & Download PDF",
  errorValidPdf: "Please upload a valid PDF file",
  errorLoadPdf: "Failed to load PDF",
  errorCropFailed: "Crop failed",
  thermalInfo: "For 4x6 Thermal Printers",
  a4Info: "For Standard A4 Paper",
};

// Helper: Clamp value between min and max
const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

const LabelCropper: React.FC<LabelCropperProps> = ({
  presets,
  defaultPresetName,
  toolName,
  labels = DEFAULT_LABELS,
}) => {
  const t = { ...DEFAULT_LABELS, ...labels };

  const [file, setFile] = useState<File | null>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocument | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Canvas & Visual State
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 }); // Size of rendered image on screen
  const [pdfPageDimensions, setPdfPageDimensions] = useState({ width: 0, height: 0 }); // Actual PDF Point size

  // Crop Box State (in screen pixels relative to image)
  const [cropBox, setCropBox] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [selectedPreset, setSelectedPreset] = useState<string>(defaultPresetName || presets[0]?.name);

  // Interaction State
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState<"move" | "resize-se" | null>(null);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startBox, setStartBox] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // Reset tool
  const reset = () => {
    setFile(null);
    setPdfDoc(null);
    setIsProcessing(false);
    setImgDimensions({ width: 0, height: 0 });
    setCropBox({ x: 0, y: 0, width: 0, height: 0 });
  };

  // Initialize Crop Box based on Preset & Image Size
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initCropBox = useCallback((presetName: string, imgW: number, imgH: number) => {
    const preset = presets.find(p => p.name === presetName);
    if (!preset || imgW === 0 || imgH === 0) return;

    // Calculate Ratio from Preset (e.g., 4x6 = 0.66)
    // If preset has fixed coords (x,y), try to map them? Usually simpler to just AspectFit the box.
    const targetRatio = preset.width / preset.height;

    // Default: Fit 80% of width or height, centered
    let newW = imgW * 0.8;
    let newH = newW / targetRatio;

    if (newH > imgH * 0.8) {
      newH = imgH * 0.8;
      newW = newH * targetRatio;
    }

    const newX = (imgW - newW) / 2;
    const newY = (imgH - newH) / 2;

    setCropBox({ x: newX, y: newY, width: newW, height: newH });
  }, [presets]);

  // Load File
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (selected.type !== "application/pdf") {
      alert(t.errorValidPdf);
      return;
    }

    setFile(selected);
    setIsProcessing(true);

    try {
      const { PDFDocument } = await import("pdf-lib");
      const arrayBuffer = await selected.arrayBuffer();
      const loadedPdf = await PDFDocument.load(arrayBuffer);
      setPdfDoc(loadedPdf);

      // Render Preview
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdfjsLib = await safeLoadLibrary<any>(() => import("pdfjs-dist"), "pdfjs-dist");
      const worker = await safeLoadLibrary<{ default: string }>(() => import("pdfjs-dist/build/pdf.worker?url"), "pdf-worker");
      pdfjsLib.GlobalWorkerOptions.workerSrc = worker.default;

      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer.slice(0) });
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      // Determine Scale to fit in container (max height ~500px usually good for UI)
      const viewportRaw = page.getViewport({ scale: 1 });
      setPdfPageDimensions({ width: viewportRaw.width, height: viewportRaw.height });

      // Render high quality then display scaled
      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      if (canvas && containerRef.current) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: ctx, viewport }).promise;

          // Store actual display size (for crop math)
          // We let CSS handle the display size (max-w-full), but we need to know what that computed size is.
          // Actually, easiest is to use the canvas width/height as the coordinate space 
          // and just CSS scale it down. But event coords will need mapping.
          // Better: Set cropped box in CANVAS PIXELS.

          setImgDimensions({ width: canvas.width, height: canvas.height });

          // Init default crop
          initCropBox(selectedPreset, canvas.width, canvas.height);
        }
      }
    } catch (err) {
      console.error(err);
      alert(t.errorLoadPdf);
    } finally {
      setIsProcessing(false);
    }
  };

  // Change Preset
  const handlePresetChange = (name: string) => {
    setSelectedPreset(name);
    // Re-init crop box for new ratio
    if (imgDimensions.width > 0) {
      // We pass dummy PDF dims as they don't affect aspect calculation inside init
      initCropBox(name, imgDimensions.width, imgDimensions.height);
    }
  };

  // --- Mouse / Touch Interaction ---

  const handlePointerDown = (e: React.PointerEvent, mode: "move" | "resize-se") => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
    setDragMode(mode);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartBox({ ...cropBox });

    // Capture pointer
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragMode || !canvasRef.current || !containerRef.current) return;
    e.preventDefault();

    // Calculate delta adapted to visual scale
    // The canvas might be displayed smaller than its actual pixel width (CSS object-contain).
    // We need to map screen delta to canvas pixel delta.

    // Let's rely on the ratio of (Canvas Real Width / Rendered CSS Width).
    // We can get Rendered CSS Width from the canvas element itself (offsetWidth).
    const currentCanvas = canvasRef.current;
    const cssWidth = currentCanvas.offsetWidth;
    // const cssHeight = currentCanvas.offsetHeight;
    const ratio = imgDimensions.width / cssWidth;

    const dx = (e.clientX - startPos.x) * ratio;
    const dy = (e.clientY - startPos.y) * ratio;

    if (dragMode === "move") {
      let newX = startBox.x + dx;
      let newY = startBox.y + dy;

      // Clamp to bounds
      newX = clamp(newX, 0, imgDimensions.width - startBox.width);
      newY = clamp(newY, 0, imgDimensions.height - startBox.height);

      setCropBox(prev => ({ ...prev, x: newX, y: newY }));
    } else if (dragMode === "resize-se") {
      // Free resize or Ratio locked? 
      // Requirement: "Mode 1 ... ratio locked". "Mode 2 ... No ratio lock"
      // Let's check Selected Preset. If "Custom" (not yet impl) -> Free. 
      // If Preset -> Lock Ratio.

      const preset = presets.find(p => p.name === selectedPreset);
      const ratioLocked = true; // For now default to locked for safety in presets

      let newW = startBox.width + dx;
      let newH = startBox.height + dy;

      if (ratioLocked && preset) {
        const targetRatio = preset.width / preset.height;
        // Use logic to preserve ratio based on which delta is dominant?
        // Or just use Width to drive Height.
        newH = newW / targetRatio;
      }

      // Clamp Min Size
      if (newW < 50) newW = 50;
      if (newH < 50) newH = 50;

      // Clamp Max Size (Boundary)
      if (startBox.x + newW > imgDimensions.width) {
        newW = imgDimensions.width - startBox.x;
        if (ratioLocked && preset) newH = newW / (preset.width / preset.height);
      }
      if (startBox.y + newH > imgDimensions.height) {
        newH = imgDimensions.height - startBox.y;
        if (ratioLocked && preset) newW = newH * (preset.width / preset.height);
      }

      setCropBox(prev => ({ ...prev, width: newW, height: newH }));
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    setDragMode(null);
    (e.target as Element).releasePointerCapture(e.pointerId);
  };

  // -- Download Logic --
  const handleDownload = async () => {
    if (!pdfDoc || !file) return;
    setIsProcessing(true);

    try {
      const pages = pdfDoc.getPages();

      // 1. Calculate Crop Box in PDF Points
      // Ratio: PDF_Point_Width / Canvas_Pixel_Width
      const scaleX = pdfPageDimensions.width / imgDimensions.width;
      const scaleY = pdfPageDimensions.height / imgDimensions.height;

      const cropX = cropBox.x * scaleX;
      const cropW = cropBox.width * scaleX;
      const cropH = cropBox.height * scaleY;

      // PDF Coords (Bottom-Left is 0,0) vs Canvas (Top-Left is 0,0)
      // cropY_PDF = PDF_Height - (Canvas_Crop_Y * scaleY) - (Crop_Height_PDF)
      const cropY = pdfPageDimensions.height - (cropBox.y * scaleY) - cropH;

      pages.forEach(page => {
        page.setCropBox(cropX, cropY, cropW, cropH);
        page.setMediaBox(cropX, cropY, cropW, cropH);
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${toolName.toLowerCase().replace(/\s+/g, '-')}-cropped.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error(err);
      alert(t.errorCropFailed);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto bg-(--card) border border-(--border) rounded-3xl shadow-xl overflow-hidden">
        {!file ? (
          <div className="p-14 text-center border-2 border-dashed border-(--border) hover:border-(--border-hover) rounded-3xl cursor-pointer relative bg-(--bg2) m-8">
            <input type="file" accept="application/pdf" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
            <Upload className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{t.uploadTitle.replace("{toolName}", toolName)}</h3>
            <p className="text-gray-400">{t.uploadHint}</p>
          </div>
        ) : (
          <div className="p-4 lg:p-8 flex flex-col lg:flex-row gap-8">

            {/* Editor Area */}
            <div className="w-full lg:w-2/3 bg-gray-900/50 rounded-2xl border border-gray-800 flex items-center justify-center p-4 relative min-h-[500px]">
              {/* Canvas Container */}
              <div ref={containerRef} className="relative inline-block shadow-2xl">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto block rounded-sm pointer-events-none"
                  style={{ maxHeight: "70vh" }}
                />

                {/* Crop Overlay */}
                {imgDimensions.width > 0 && (
                  <div
                    className="absolute border-2 border-cyan-400 bg-cyan-500/10 cursor-move box-content"
                    style={{
                      left: `${(cropBox.x / imgDimensions.width) * 100}%`,
                      top: `${(cropBox.y / imgDimensions.height) * 100}%`,
                      width: `${(cropBox.width / imgDimensions.width) * 100}%`,
                      height: `${(cropBox.height / imgDimensions.height) * 100}%`,
                      touchAction: "none"
                    }}
                    onPointerDown={(e) => handlePointerDown(e, "move")}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                  >
                    {/* Drag Handle Icon - Center */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Move className="text-white drop-shadow-md w-8 h-8 opacity-80" />
                    </div>

                    {/* Resize Handle - Bottom Right */}
                    <div
                      className="absolute bottom-0 right-0 w-8 h-8 bg-cyan-500 cursor-nwse-resize flex items-center justify-center -mr-4 -mb-4 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
                      onPointerDown={(e) => handlePointerDown(e, "resize-se")}
                    >
                      <Maximize className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>
                )}

                {isProcessing && !imgDimensions.width && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="animate-spin text-cyan-400 w-12 h-12" />
                  </div>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="w-full lg:w-1/3 flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                <h3 className="font-bold text-white truncate max-w-[200px]">{file.name}</h3>
                <button onClick={reset} className="text-red-400 text-sm flex items-center gap-2 hover:bg-red-500/10 px-3 py-1.5 rounded-lg transition">
                  <RefreshCw className="w-4 h-4" /> {t.startOver}
                </button>
              </div>

              <div className="mb-6">
                <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-3 block">{t.cropPreset}</label>
                <div className="grid grid-cols-1 gap-2">
                  {presets.map(p => (
                    <button
                      key={p.name}
                      onClick={() => handlePresetChange(p.name)}
                      className={`p-4 rounded-xl border text-left transition-all ${selectedPreset === p.name
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-400"
                        : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-600"
                        }`}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        {p.name.includes("thermal") ? (
                          <Printer className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <FileText className="w-5 h-5 flex-shrink-0" />
                        )}
                        <span className="font-bold text-lg">{p.label}</span>
                      </div>
                      <div className="text-xs opacity-70">
                        {p.name.includes("thermal") ? t.thermalInfo : t.a4Info}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto bg-gray-800/30 p-4 rounded-xl border border-gray-800 mb-4">
                <p className="text-xs text-gray-400 mb-1">{t.tip}</p>
              </div>

              <button
                onClick={handleDownload}
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-3 transform active:scale-95 disabled:opacity-50"
              >
                {isProcessing ? <Loader2 className="animate-spin w-5 h-5" /> : <Crop className="w-5 h-5" />}
                {t.cropButton}
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default LabelCropper;
