import React, { useState } from "react";
import { Upload, Download, Loader2, Trash2, Check } from "lucide-react";
import ToolLandingPage from "../../components/ToolLandingPage";
import { safeLoadLibrary } from "../../utils/lazyImport";
import ToolErrorBoundary from "../../components/ToolErrorBoundary";

const RazdelitPdfContent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [rangeInput, setRangeInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [previews, setPreviews] = useState<Record<number, string>>({});
  const [previewsLoaded, setPreviewsLoaded] = useState(0);

  const reset = () => {
    setFile(null);
    setPageCount(0);
    setSelectedPages(new Set());
    setRangeInput("");
    setIsProcessing(false);
    setPreviews({});
    setPreviewsLoaded(0);
  };

  const loadPreviews = async (f: File, count: number) => {
    try {
      const pdfjsLib = await safeLoadLibrary<any>(() => import("pdfjs-dist"), "pdfjs-dist");
      const pdfWorker = await safeLoadLibrary<{ default: string }>(
        () => import("pdfjs-dist/build/pdf.worker?url"),
        "pdfjs-worker"
      );

      pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker.default;

      const arrayBuffer = await f.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      const batchSize = 10;
      setPreviewsLoaded(0);

      for (let i = 1; i <= count; i++) {
        const page = await pdf.getPage(i);
        const scale = 0.3;
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

        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);

        setPreviews(prev => ({ ...prev, [i - 1]: dataUrl }));
        setPreviewsLoaded(i);

        canvas.width = 0;
        canvas.height = 0;

        if (i % batchSize === 0) {
          await new Promise(resolve => window.requestAnimationFrame(resolve));
        }
      }
    } catch (err) {
      console.error("Preview generation failed:", err);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Пожалуйста, выберите корректный PDF файл");
      return;
    }

    try {
      setIsProcessing(true);
      const { PDFDocument } = await safeLoadLibrary<any>(() => import("pdf-lib"), "pdf-lib");
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const count = pdfDoc.getPageCount();

      setFile(selectedFile);
      setPageCount(count);
      setSelectedPages(new Set());
      setRangeInput("");
      setPreviews({});

      loadPreviews(selectedFile, count);
    } catch (err) {
      console.error(err);
      alert("Не удалось загрузить PDF. Файл может быть поврежден или защищен.");
    } finally {
      setIsProcessing(false);
    }
  };

  const togglePage = (index: number) => {
    const newSet = new Set(selectedPages);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedPages(newSet);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setRangeInput(val);

    const parts = val.split(",");
    const newSet = new Set<number>();

    parts.forEach(part => {
      const trimmed = part.trim();
      if (trimmed.includes("-")) {
        const [start, end] = trimmed.split("-").map(n => parseInt(n));
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= pageCount) newSet.add(i - 1);
          }
        }
      } else {
        const num = parseInt(trimmed);
        if (!isNaN(num) && num >= 1 && num <= pageCount) {
          newSet.add(num - 1);
        }
      }
    });

    setSelectedPages(newSet);
  };

  const extractPages = async () => {
    if (!file || selectedPages.size === 0) return;

    setIsProcessing(true);
    try {
      const { PDFDocument } = await safeLoadLibrary(() => import("pdf-lib"), "pdf-lib");

      const arrayBuffer = await file.arrayBuffer();
      const srcPdf = await PDFDocument.load(arrayBuffer);
      const newPdf = await PDFDocument.create();

      const sortedIndices = Array.from(selectedPages).sort((a, b) => a - b);
      const copiedPages = await newPdf.copyPages(srcPdf, sortedIndices);

      copiedPages.forEach(p => newPdf.addPage(p));

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" });

      const fileSaverModule = await safeLoadLibrary<any>(() => import("file-saver"), "file-saver");
      const saveAs = fileSaverModule.saveAs || fileSaverModule.default || fileSaverModule;

      saveAs(blob, `${file.name.replace(".pdf", "")}-split.pdf`);

    } catch (err) {
      console.error(err);
      alert("Ошибка извлечения страниц.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto bg-(--card) border border-(--border) rounded-3xl shadow-xl overflow-hidden min-h-[400px]">
        {!file ? (
          <div className="p-10 sm:p-20 text-center flex flex-col items-center justify-center h-full min-h-[400px] border-2 border-dashed border-gray-700 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-pointer relative group bg-(--bg2) rounded-3xl">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="mx-auto w-20 h-20 bg-(--bg) rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5">
              <Upload className="w-10 h-10 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Выберите PDF для разделения</h3>
            <p className="text-gray-400 text-sm">Просматривайте страницы и выбирайте диапазоны визуально</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-(--bg) p-4 rounded-2xl border border-(--border)">
              <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-bold text-xs border border-red-500/20">
                  PDF
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-(--text) truncate">{file.name}</div>
                  <div className="text-xs text-gray-500">
                    Страниц: {pageCount}
                    {previewsLoaded < pageCount && (
                      <span className="ml-2 text-orange-400 font-bold animate-pulse">
                        (Загрузка превью {previewsLoaded}/{pageCount})
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="напр. 1-5, 8"
                  value={rangeInput}
                  onChange={handleRangeChange}
                  className="grow md:w-40 bg-(--card) border border-(--border) text-(--text) text-sm px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500/50 outline-none"
                />
                <button
                  onClick={reset}
                  className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar p-1">
              {Array.from({ length: pageCount }).map((_, i) => (
                <div
                  key={i}
                  onClick={() => togglePage(i)}
                  className={`relative cursor-pointer rounded-lg border-2 transition-all overflow-hidden aspect-[1/1.4] group ${selectedPages.has(i)
                    ? "border-orange-500 shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)] scale-[1.02]"
                    : "border-(--border) hover:border-gray-500"
                    }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-(--bg) text-gray-800 font-bold text-4xl select-none">
                    {i + 1}
                  </div>

                  {previews[i] && (
                    <img src={previews[i]} alt={`Page ${i + 1}`} className="absolute inset-0 w-full h-full object-contain bg-white" />
                  )}

                  <div className={`absolute inset-0 transition-colors ${selectedPages.has(i) ? "bg-orange-500/20" : "bg-transparent group-hover:bg-black/10"
                    }`} />

                  <div className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${selectedPages.has(i) ? "bg-orange-500 text-white" : "bg-black/50 text-transparent border border-white/50"
                    }`}>
                    <Check className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-bold px-2 py-1 bg-black/60 text-white backdrop-blur-sm mx-2 rounded">
                    Стр. {i + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={extractPages}
                disabled={isProcessing || selectedPages.size === 0}
                className="w-full md:w-auto px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black shadow-lg shadow-orange-900/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Извлечение...
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6" />
                    Извлечь {selectedPages.size} {selectedPages.size === 1 ? 'страницу' : 'стр.'}
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function RazdelitPdf() {
  return (
    <ToolErrorBoundary toolName="Разделить PDF">
      <ToolLandingPage
        routeKey="/ru/razdelit-pdf"
        heading={<>Разделить <span className="text-orange-400">PDF</span> и извлечь страницы</>}
        tagline="100% Приватно • Без загрузки на сервер • Безопасно"
      >
        <RazdelitPdfContent />
      </ToolLandingPage>
    </ToolErrorBoundary>
  );
}
