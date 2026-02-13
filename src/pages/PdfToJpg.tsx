import {
  Upload,
  Image as ImageIcon,
  Loader2,
  Trash2,
  Smartphone,
  Lock,
  Download,
  CheckCircle,
  HelpCircle,
  Zap,
  ShieldCheck,
  FileText
} from "lucide-react";

import ToolLandingPage from "../components/ToolLandingPage";
import { safeLoadLibrary } from "../utils/lazyImport";
import ToolErrorBoundary from "../components/ToolErrorBoundary";
import type JSZip from "jszip";
import { useState, useRef } from "react";

// ---- Types ----
type Quality = "low" | "medium" | "high";

const UniqueSEOContent = () => (
  <div className="space-y-12 text-gray-700 dark:text-gray-300 my-16">
    {/* Hero Section Content */}
    <section className="bg-(--card) p-6 md:p-8 rounded-(--surface-radius) border border-(--border) shadow-theme-sm backdrop-blur-sm theme-transition">
      <h2 className="text-xl md:text-3xl font-bold text-(--textHeading) mb-4 leading-tight">
        Professional <span className="text-purple-500 italic">PDF to JPG</span> Converter Online
      </h2>
      <p className="leading-relaxed mb-6 text-base md:text-lg text-(--textBody)">
        Transform your PDF documents into high-quality JPEG images effortlessly. Whether you need to extract individual pages or convert an entire document for <strong>social media, presentations, or school projects</strong>, our tool ensures your files stay sharp and clear. This is a 100% <strong>client-side tool</strong>, meaning your sensitive PDFs never touch any server.
      </p>
      <div className="flex flex-wrap gap-2">
        {['UPSC Optimized', 'High DPI', 'Zero Server Uploads', 'Batch Extraction'].map((tag) => (
          <span key={tag} className="px-3 md:px-4 py-1.5 bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 rounded-full text-[9px] md:text-[10px] font-semibold tracking-wide text-purple-700 dark:text-purple-400 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </section>

    {/* How it Works - Value Addition */}
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { step: "Select PDF", desc: "Choose your PDF file. It stays in your browser for 100% privacy.", icon: FileText, color: "text-purple-600 bg-purple-50 dark:bg-purple-500/10" },
        { step: "Instant Extract", desc: "Our engine renders each page into a crisp JPG at 150-300 DPI.", icon: Zap, color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10" },
        { step: "Download ZIP", desc: "Save individual pages or download everything in one neat ZIP file.", icon: Download, color: "text-green-600 bg-green-50 dark:bg-green-500/10" }
      ].map((item, i) => (
        <div key={i} className="p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-1 transition-transform duration-300">
          <div className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
            <item.icon className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <h3 className="font-bold text-(--textHeading) mb-2 md:mb-3 tracking-tight text-sm md:text-base">{item.step}</h3>
          <p className="text-sm text-(--textBody) leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>

    {/* Detailed Guide & FAQ - Crucial for AdSense */}
    <section className="space-y-6 md:space-y-8">
      <h3 className="text-lg md:text-2xl font-bold text-(--textHeading) flex items-center gap-3">
        <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
        PDF to JPG Help & Guide
      </h3>
      <div className="grid gap-4 md:gap-5">
        {[
          { q: "Will the image quality be blurred?", a: "No. We use high-resolution rendering (150 DPI baseline) which ensures that even small text in your PDF remains readable after converting to JPG." },
          { q: "Can I convert multiple pages at once?", a: "Yes. Our tool automatically processes every page of your PDF and allows you to download them all as a single ZIP folder." },
          { q: "Is it safe for sensitive government documents?", a: "Absolutely. Since the conversion happens locally on your device, your Aadhaar, PAN, or other certificates are never uploaded to the internet." }
        ].map((faq, i) => (
          <div key={i} className="p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition">
            <h4 className="font-bold text-(--textHeading) mb-2 md:mb-3 flex items-start gap-3 md:gap-4 text-base md:text-lg">
              <span className="text-purple-600 dark:text-purple-500 shrink-0">Q.</span> {faq.q}
            </h4>
            <p className="text-sm md:text-base text-(--textBody) leading-relaxed pl-6 md:pl-10 border-l-2 border-purple-500/20">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const PdfToJpgContent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pages, setPages] = useState<string[]>([]);
  const [quality] = useState<Quality>("medium");
  const [dpi] = useState<number>(150);
  const [progress, setProgress] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setFile(null);
    setPages([]);
    setIsProcessing(false);
    setProgress(0);
    setCurrentPage(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setPages([]);
    }
  };

  const convertPdfToImages = async () => {
    if (!file) return;
    setIsProcessing(true);
    setPages([]);
    setProgress(0);

    try {
      const pdfjsLib = await safeLoadLibrary<any>(() => import("pdfjs-dist"), "pdfjs-dist");
      const worker = await safeLoadLibrary<{ default: string }>(() => import("pdfjs-dist/build/pdf.worker?url"), "pdf-worker");
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
        await page.render({ canvasContext: ctx, viewport }).promise;

        const q = quality === "high" ? 0.95 : quality === "medium" ? 0.8 : 0.6;
        const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), "image/jpeg", q));
        const imgUrl = URL.createObjectURL(blob);

        setPages((prev) => [...prev, imgUrl]);
        setProgress(Math.round((i / totalPages) * 100));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadAll = async () => {
    if (!pages.length || !file) return;
    try {
      const fileSaver = await safeLoadLibrary<{ saveAs: (b: Blob | string, n: string) => void }>(() => import("file-saver"), "file-saver");
      if (pages.length === 1) {
        fileSaver.saveAs(pages[0], `${file.name.replace(".pdf", "")}-page-1.jpg`);
        return;
      }
      const jszipModule = await safeLoadLibrary<{ default: new () => JSZip }>(() => import("jszip"), "jszip");
      const zip = new jszipModule.default();
      const folder = zip.folder("images");

      for (let i = 0; i < pages.length; i++) {
        const response = await fetch(pages[i]);
        folder?.file(`page-${i + 1}.jpg`, await response.blob());
      }
      const blob = await zip.generateAsync({ type: "blob" });
      fileSaver.saveAs(blob, `${file.name.replace(".pdf", "")}-images.zip`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative bg-white dark:bg-transparent border border-(--border) rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 shadow-theme theme-transition overflow-hidden bg-transparent">
        {!file ? (
          <div onClick={() => fileInputRef.current?.click()} className="py-12 md:py-16 border-2 border-dashed border-(--border) rounded-xl md:rounded-[2rem] bg-gray-100 dark:bg-gray-900 cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-center group">
            <Upload className="w-12 h-12 md:w-16 md:h-16 text-purple-500 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white px-6">Select PDF Document</h3>
            <p className="text-gray-500 text-xs mt-2">No uploads • 100% Client-Side Processing</p>
            <input ref={fileInputRef} type="file" accept="application/pdf" onChange={handleFileChange} className="hidden" />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900/60 p-4 md:p-5 rounded-2xl md:rounded-3xl border border-(--border)">
              <div className="flex items-center gap-3 md:gap-4 text-left min-w-0">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-purple-500 shrink-0" />
                <div className="min-w-0">
                  <p className="text-gray-900 dark:text-white font-bold truncate max-w-[140px] md:max-w-xs">{file.name}</p>
                  <p className="text-gray-500 text-[10px] md:text-xs">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button onClick={reset} className="p-2 md:p-3 rounded-xl hover:bg-red-500/10 transition text-red-500 shrink-0"><Trash2 className="w-5 h-5" /></button>
            </div>

            {!pages.length && !isProcessing && (
              <button onClick={convertPdfToImages} className="w-full py-4 md:py-6 rounded-2xl md:rounded-3xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-base md:text-lg shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-3 tracking-tight">
                <ImageIcon className="w-5 h-5 md:w-6 md:h-6" /> Convert PDF to JPG
              </button>
            )}

            {isProcessing && (
              <div className="py-10 md:py-12 text-center space-y-6 md:space-y-8">
                <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-purple-500 animate-spin mx-auto" />
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Rendering Pages... {progress}%</h3>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden max-w-[240px] md:max-w-sm mx-auto shadow-inner"><div className="h-full bg-purple-500 transition-all duration-300" style={{ width: `${progress}%` }} /></div>
              </div>
            )}

            {pages.length > 0 && (
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-green-500/5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-green-500/10">
                  <div className="flex items-center gap-3"><CheckCircle className="text-green-500 w-5 h-5" /> <span className="font-bold text-sm md:text-base text-gray-900 dark:text-white tracking-tight">{pages.length} Pages Extracted</span></div>
                  <button onClick={downloadAll} className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl md:rounded-2xl font-bold shadow-lg shadow-green-500/10 transition-all flex items-center justify-center gap-2 md:gap-3"><Download className="w-4 h-4 md:w-5 md:h-5" /> Download All (ZIP)</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-h-[400px] md:max-h-[500px] overflow-y-auto p-3 md:p-4 bg-gray-50 dark:bg-gray-900/40 rounded-2xl md:rounded-3xl border border-(--border) custom-scrollbar">
                  {pages.map((img, i) => (
                    <div key={i} className="group relative rounded-xl md:rounded-2xl overflow-hidden border border-(--border) shadow-sm hover:shadow-md transition-all">
                      <img src={img} className="w-full h-auto object-cover" alt={`page-${i + 1}`} loading="lazy" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]"><a href={img} download={`page-${i + 1}.jpg`} className="px-3 py-1.5 bg-white text-black text-[10px] md:text-xs font-bold rounded-lg">Download JPG</a></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-12">
        <div className="flex items-center justify-center gap-3 p-4 md:p-5 bg-white/50 dark:bg-gray-950/10 rounded-2xl md:rounded-3xl border border-(--border) shadow-theme-sm"><Lock className="w-4 h-4 md:w-5 md:h-5 text-purple-500 md:font-semibold" /> <span className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-100 uppercase tracking-wider">100% Private Engine</span></div>
        <div className="flex items-center justify-center gap-3 p-4 md:p-5 bg-white/50 dark:bg-gray-950/10 rounded-2xl md:rounded-3xl border border-(--border) shadow-theme-sm"><Smartphone className="w-4 h-4 md:w-5 md:h-5 text-purple-500 md:font-semibold" /> <span className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-100 uppercase tracking-wider">Responsive UI</span></div>
        <div className="flex items-center justify-center gap-3 p-4 md:p-5 bg-white/50 dark:bg-gray-950/10  rounded-2xl md:rounded-3xl border border-(--border) shadow-theme-sm"><ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-purple-500 md:font-semibold" /> <span className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-100 uppercase tracking-wider">SSL Secure Conversion</span></div>
      </div>
      <UniqueSEOContent />
    </div>
  );
};

const PdfToJpg: React.FC = () => (
  <ToolErrorBoundary toolName="PDF to JPG">
    <ToolLandingPage
      routeKey="/pdf-to-jpg"
      heading={<span className="text-gray-900 dark:text-white font-bold">PDF to <span className="text-purple-600 dark:text-purple-500 italic">JPG</span></span>}
      tagline="Extract high-quality JPEG images from your PDF locally and securely."
    >
      <PdfToJpgContent />
    </ToolLandingPage>
  </ToolErrorBoundary>
);

export default PdfToJpg;