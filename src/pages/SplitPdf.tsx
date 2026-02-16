/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Upload, Download, Loader2, Trash2, Check,
  ShieldCheck, Zap,
  Globe, Layout
} from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";
import { safeLoadLibrary } from "../utils/lazyImport";
import ToolErrorBoundary from "../components/ToolErrorBoundary";

const UniqueSEOContent = () => (
  <div className="space-y-12 text-gray-700 dark:text-gray-300 mt-16 max-w-5xl mx-auto">
    {/* American Market Focused Hero Content */}
    <section className="bg-(--card) p-6 md:p-12 rounded-(--surface-radius) border border-(--border) shadow-theme-sm backdrop-blur-sm theme-transition relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Globe className="w-24 h-24 text-orange-500" />
      </div>
      <h2 className="text-xl md:text-3xl font-bold text-(--textHeading) mb-4 leading-tight">
        Reliable <span className="text-orange-500 italic">Split PDF</span> Tool: Extract Pages in Seconds
      </h2>
      <p className="leading-relaxed mb-8 text-base md:text-lg text-(--textBody) max-w-3xl">
        Are you wondering, <strong>"how do I split a pdf into multiple files"</strong> without paying for expensive software? Our professional-grade splitter is the perfect <strong>adobe pdf split alternative</strong>. Whether you're a student in NYC or a business owner in California, our tool allows you to <strong>split pdf in pages</strong> locally in your browser—meaning your sensitive data never leaves your computer.
      </p>
      <div className="flex flex-wrap gap-2">
        {['Instant Extraction', 'Zero Server Logs', 'High Resolution', 'No Sign-up'].map((tag) => (
          <span key={tag} className="px-3 md:px-4 py-1.5 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-full text-[9px] md:text-[10px] font-semibold tracking-wide text-orange-700 dark:text-orange-400 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </section>

    {/* Human-Centric Features */}
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          title: "Macbook & PC Ready",
          desc: "Looking for a <strong>macbook how to split pdf</strong> guide? No need to open Preview. Just drag, drop, and extract pages instantly.",
          icon: Layout,
          color: "text-orange-600 bg-orange-50 dark:bg-orange-500/10"
        },
        {
          title: "Browser Privacy",
          desc: "We prioritize your security. Unlike cloud converters, we don't 'read' your files. Processing is 100% <strong>client-side</strong>.",
          icon: ShieldCheck,
          color: "text-green-600 bg-green-50 dark:bg-green-500/10"
        },
        {
          title: "Custom Ranges",
          desc: "Easily <strong>split pdf into multiple files</strong> by selecting specific page ranges like 1-5 or extracting every page into a ZIP.",
          icon: Zap,
          color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10"
        }
      ].map((item, i) => (
        <div key={i} className="p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-1 transition-all duration-300">
          <div className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-inner`}>
            <item.icon className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <h3 className="font-bold text-(--textHeading) mb-2 md:mb-3 tracking-tight text-lg md:text-xl">{item.title}</h3>
          <p className="text-sm text-(--textBody) leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
        </div>
      ))}
    </section>

    {/* USA Search Intent FAQ */}
    <section className="space-y-8 md:space-y-10">
      <div className="text-center space-y-2">
        <h3 className="text-xl md:text-3xl font-bold text-(--textHeading) tracking-tight">Common Questions</h3>
        <p className="text-(--textMuted) font-medium text-[10px] md:text-xs tracking-wider uppercase">Helping you master your documents</p>
      </div>
      <div className="grid gap-4 md:gap-6">
        {[
          {
            q: "How to split a pdf into separate files easily?",
            a: "Our interface allows you to visually select pages. Once you hit 'Extract', it generates a <strong>separate PDF file</strong> containing only the pages you chose."
          },
          {
            q: "Is this better than Adobe PDF split?",
            a: "For most users, yes. It's free, requires no installation, and works on any OS including <strong>Linux and macOS</strong> without a subscription."
          },
          {
            q: "Can I split a PDF file into multiple files on mobile?",
            a: "Absolutely. Our mobile-optimized engine allows you to <strong>split pdf file into multiple files</strong> directly from your iPhone or Android gallery."
          }
        ].map((faq, i) => (
          <div
            key={i}
            className="p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition group"
          >

            <h4 className="font-bold text-(--textHeading) mb-2 md:mb-3 flex items-start gap-3 md:gap-4 text-base md:text-xl group-hover:text-orange-500 transition-colors">
              <span className="text-orange-500 font-bold shrink-0">Q.</span> {faq.q}
            </h4>
            <p className="text-sm md:text-base text-(--textBody) leading-relaxed pl-6 md:pl-9 border-l-2 border-orange-500/20" dangerouslySetInnerHTML={{ __html: faq.a }} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const SplitPdfContent: React.FC = () => {
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
      const pdfjsLib: any = await safeLoadLibrary(() => import("pdfjs-dist"), "pdfjs-dist");
      const pdfWorker = await safeLoadLibrary<{ default: string }>(() => import("pdfjs-dist/build/pdf.worker?url"), "pdfjs-worker");
      pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker.default;
      const arrayBuffer = await f.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const batchSize = 10;
      for (let i = 1; i <= count; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 0.3 });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) continue;
        canvas.width = viewport.width; canvas.height = viewport.height;
        await page.render({ canvasContext: ctx, viewport }).promise;
        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
        setPreviews((prev) => ({ ...prev, [i - 1]: dataUrl }));
        setPreviewsLoaded(i);
        if (i % batchSize === 0) await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      }
    } catch (err) { console.error(err); }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile || selectedFile.type !== "application/pdf") return;
    try {
      setIsProcessing(true);
      const pdfLib: any = await safeLoadLibrary(() => import("pdf-lib"), "pdf-lib");
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer);
      setFile(selectedFile);
      setPageCount(pdfDoc.getPageCount());
      loadPreviews(selectedFile, pdfDoc.getPageCount());
    } finally { setIsProcessing(false); }
  };

  const togglePage = (index: number) => {
    const newSet = new Set(selectedPages);
    if (newSet.has(index)) newSet.delete(index);
    else newSet.add(index);
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
          for (let i = start; i <= end; i++) if (i >= 1 && i <= pageCount) newSet.add(i - 1);
        }
      } else {
        const num = parseInt(trimmed);
        if (!isNaN(num) && num >= 1 && num <= pageCount) newSet.add(num - 1);
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
      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      const fileSaverModule = await safeLoadLibrary<any>(() => import("file-saver"), "file-saver");
      const saveAs = fileSaverModule.saveAs || fileSaverModule.default || fileSaverModule;
      saveAs(blob, `${file.name.replace(".pdf", "")}-extracted.pdf`);
    } finally { setIsProcessing(false); }
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto bg-(--card) border border-(--border) rounded-3xl shadow-theme-sm overflow-hidden min-h-100 theme-transition">
        {!file ? (
          <div className="p-8 md:p-20 text-center flex flex-col items-center justify-center h-full min-h-100 border-2 border-dashed border-(--border) hover:border-orange-500/50 hover:bg-orange-500/5 transition-all cursor-pointer relative group bg-(--bg2) rounded-3xl">
            <input type="file" accept="application/pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-orange-100 dark:bg-orange-500/10 rounded-2xl md:rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-sm border border-orange-200 dark:border-orange-500/20">
              <Upload className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-(--textHeading) mb-2">Select PDF to Split</h3>
            <p className="text-(--textMuted) text-sm">Click to browse or drag and drop files</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 bg-(--bg) p-3 md:p-4 rounded-2xl border border-(--border)">
              <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden min-w-0">
                <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold text-[10px] md:text-xs border border-orange-500/20 shadow-sm">PDF</div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-(--textHeading) truncate tracking-tight">{file.name}</div>
                  <div className="text-[10px] md:text-xs text-(--textMuted)">{pageCount} Pages Loaded {previewsLoaded < pageCount && <span className="ml-2 text-orange-500 font-bold animate-pulse">({previewsLoaded}/{pageCount})</span>}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
                <input type="text" placeholder="e.g. 1-3, 5, 8" value={rangeInput} onChange={handleRangeChange} className="grow md:w-40 bg-(--bg2) border border-(--border) text-(--textHeading) text-sm px-4 py-2 rounded-xl focus:ring-2 focus:ring-orange-500/50 outline-none shadow-sm" />
                <button onClick={reset} className="p-2 md:p-2.5 text-gray-400 hover:text-red-500 transition-colors bg-(--bg2) rounded-xl border border-(--border)"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mb-8 max-h-125 overflow-y-auto pr-2 custom-scrollbar p-1">
              {Array.from({ length: pageCount }).map((_, i) => (
                <div key={i} onClick={() => togglePage(i)} className={`relative cursor-pointer rounded-lg md:rounded-xl border-2 transition-all overflow-hidden aspect-[1/1.4] group ${selectedPages.has(i) ? "border-orange-500 shadow-lg" : "border-(--border) hover:border-gray-400 shadow-sm"}`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-(--bg2) text-(--textMuted) font-bold text-3xl md:text-4xl select-none opacity-10">{i + 1}</div>
                  {previews[i] && <img src={previews[i]} alt={`Page ${i + 1}`} className="absolute inset-0 w-full h-full object-contain bg-white shadow-inner" />}
                  <div className={`absolute inset-0 transition-colors ${selectedPages.has(i) ? "bg-orange-500/10" : "bg-transparent group-hover:bg-black/5"}`} />
                  <div className={`absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all shadow-sm ${selectedPages.has(i) ? "bg-orange-500 text-white scale-110" : "bg-black/30 text-transparent border border-white/30"}`}><Check className="w-3 h-3 md:w-4 md:h-4" /></div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] font-bold px-2 py-1 bg-black/70 text-white backdrop-blur-sm mx-2 rounded-md tracking-tight">Page {i + 1}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button onClick={extractPages} disabled={isProcessing || selectedPages.size === 0} className="w-full md:w-auto px-8 py-3 rounded-xl md:rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-lg shadow-orange-900/10 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                {isProcessing ? <><Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> Exporting...</> : <><Download className="w-4 h-4 md:w-5 md:h-5" /> Split & Download {selectedPages.size > 0 ? `(${selectedPages.size})` : ""}</>}
              </button>
            </div>
          </div>
        )}
      </div>
      <UniqueSEOContent />
    </div>
  );
};

interface SplitPdfProps { routeKey?: string; }

const SplitPdf: React.FC<SplitPdfProps> = ({ routeKey = "/split-pdf" }) => {
  return (
    <ToolErrorBoundary toolName="Split PDF">
      <ToolLandingPage
        routeKey={routeKey}
        heading={<span className="text-(--textHeading) font-bold">Split <span className="text-orange-500">PDF</span> Documents Instantly</span>}
        tagline="How to split a PDF into separate files easily on Mac, Windows, and Linux."
      >
        <SplitPdfContent />
      </ToolLandingPage>
    </ToolErrorBoundary>
  );
};

export default SplitPdf;