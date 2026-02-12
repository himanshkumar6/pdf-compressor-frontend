import {
  Upload,
  Image as ImageIcon,
  Loader2,
  Trash2,
  Smartphone,
  Lock,
  Download,
} from "lucide-react";

import ToolLandingPage from "../components/ToolLandingPage";
import { safeLoadLibrary } from "../utils/lazyImport";
import ToolErrorBoundary from "../components/ToolErrorBoundary";
import type JSZip from "jszip";
import { useState } from "react";

// ---- Types ----
type Quality = "low" | "medium" | "high";

const PdfToJpgContent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pages, setPages] = useState<string[]>([]);
  const [quality] = useState<Quality>("medium");
  const [dpi] = useState<number>(150);
  const [progress, setProgress] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const reset = () => {
    setFile(null);
    setPages([]);
    setIsProcessing(false);
    setProgress(0);
    setCurrentPage(0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      alert("Please upload a valid PDF file");
      return;
    }

    setFile(selected);
    setPages([]);
  };

  const convertPdfToImages = async () => {
    if (!file) return;

    setIsProcessing(true);
    setPages([]);
    setProgress(0);
    setCurrentPage(0);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pdfjsLib = await safeLoadLibrary<any>(
        () => import("pdfjs-dist"),
        "pdfjs-dist"
      );

      const worker = await safeLoadLibrary<{ default: string }>(
        () => import("pdfjs-dist/build/pdf.worker?url"),
        "pdf-worker"
      );

      pdfjsLib.GlobalWorkerOptions.workerSrc = worker.default;

      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

      const totalPages = pdf.numPages;
      const scale = dpi / 72;

      for (let i = 1; i <= totalPages; i++) {
        setCurrentPage(i);

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) continue;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: ctx,
          viewport,
        }).promise;

        const q =
          quality === "high" ? 0.95 : quality === "medium" ? 0.8 : 0.6;

        // 🔥 Memory-Optimized Blob Conversion
        const blob = await new Promise<Blob>((resolve) =>
          canvas.toBlob((b) => resolve(b!), "image/jpeg", q)
        );

        const imgUrl = URL.createObjectURL(blob);

        setPages((prev) => [...prev, imgUrl]);
        setProgress(Math.round((i / totalPages) * 100));
      }
    } catch (err) {
      console.error("PDF to JPG failed:", err);
      alert("PDF conversion failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadAll = async () => {
    if (!pages.length || !file) return;

    try {
      const fileSaver = await safeLoadLibrary<{ saveAs: (b: Blob | string, n: string) => void }>(
        () => import("file-saver"),
        "file-saver"
      );

      const saveAs = fileSaver.saveAs;

      if (pages.length === 1) {
        saveAs(
          pages[0],
          `${file.name.replace(".pdf", "")}-page-1.jpg`
        );
        return;
      }

      const jszipModule = await safeLoadLibrary<{ default: new () => JSZip }>(
        () => import("jszip"), // ✅ FIXED IMPORT
        "jszip"
      );

      const zip = new jszipModule.default();
      const folder = zip.folder("images");

      for (let i = 0; i < pages.length; i++) {
        const response = await fetch(pages[i]);
        const blob = await response.blob();
        folder?.file(`page-${i + 1}.jpg`, blob);
      }

      const blob = await zip.generateAsync({ type: "blob" });
      saveAs(blob, `${file.name.replace(".pdf", "")}-images.zip`);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Download failed. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto bg-(--card) border border-(--border) rounded-3xl shadow-xl">
        {!file ? (
          <div className="p-14 text-center border-2 border-dashed border-(--border) hover:border-(--border-hover) rounded-3xl cursor-pointer relative bg-(--bg2)">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <Upload className="w-12 h-12 mx-auto text-purple-400 mb-4" />
            <p className="font-bold text-white">Select PDF File</p>
            <p className="text-xs text-gray-500 mt-2">No uploads • 100% Private</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6 bg-gray-900/40 p-4 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-white truncate max-w-50">{file.name}</span>
              </div>
              <button onClick={reset} className="p-2 hover:bg-white/5 rounded-lg transition">
                <Trash2 className="w-5 h-5 text-red-400" />
              </button>
            </div>

            {!pages.length && !isProcessing && (
              <button
                onClick={convertPdfToImages}
                className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold shadow-lg shadow-purple-900/20 transition flex items-center justify-center gap-2"
              >
                <ImageIcon className="w-5 h-5" />
                Convert PDF to JPG
              </button>
            )}

            {isProcessing && (
              <div className="text-center py-8">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-purple-400" />
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden max-w-xs mx-auto">
                  <div
                    className="h-full bg-purple-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Processing page {currentPage}...
                </p>
              </div>
            )}

            {pages.length > 0 && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-bold text-sm">{pages.length} Pages Extracted</h3>
                  <button
                    onClick={downloadAll}
                    className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download All (ZIP)
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-100 overflow-y-auto p-1 custom-scrollbar">
                  {pages.map((img, i) => (
                    <div key={i} className="relative group rounded-xl overflow-hidden border border-gray-800">
                      <img
                        src={img}
                        className="w-full h-auto object-cover"
                        alt={`page-${i + 1}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <a
                          href={img}
                          download={`page-${i + 1}.jpg`}
                          className="p-2 bg-white/10 rounded-lg text-white text-xs backdrop-blur-md"
                        >
                          Download Page
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-400">
          <Lock className="w-4 h-4 text-purple-400" /> 100% Private (No Uploads)
        </div>
        <div className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-400">
          <Smartphone className="w-4 h-4 text-purple-400" /> Mobile & Desktop Ready
        </div>
        <div className="flex items-center justify-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-gray-400">
          <ImageIcon className="w-4 h-4 text-purple-400" /> High Quality (300 DPI)
        </div>
      </div>
    </div>
  );
};

const PdfToJpg: React.FC = () => (
  <ToolErrorBoundary toolName="PDF to JPG">
    <ToolLandingPage
      routeKey="/pdf-to-jpg"
      heading={<>PDF to <span className="text-purple-400">JPG</span></>}
      tagline="Convert PDF pages into high-quality images • Private • Secure"
    >
      <PdfToJpgContent />
    </ToolLandingPage>
  </ToolErrorBoundary>
);

export default PdfToJpg;
