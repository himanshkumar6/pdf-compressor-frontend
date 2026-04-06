import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload, Zap, FileText, Download,
  RefreshCcw, CheckCircle, AlertCircle, Loader2, Lock,
  Info, HelpCircle
} from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

// ✅ PDF.js initialization is now inside a guarded function
async function initPdfLibs() {
  if (typeof window === "undefined") return null;
  const [pdfjsLib, pdflib] = await Promise.all([
    import("pdfjs-dist"),
    import("pdf-lib")
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(pdfjsLib as any).GlobalWorkerOptions.workerSrc) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfjsWorker;
  }
  return { pdfjsLib, ...pdflib };
}

const UniqueSEOContent = () => (
  <div className="space-y-12 text-gray-600 dark:text-gray-300">
    {/* Hero Section Content */}
    <section className="bg-(--card) p-6 md:p-12 rounded-(--surface-radius) border border-(--border) shadow-theme backdrop-blur-sm theme-transition">
      <h2 className="text-xl md:text-3xl font-extrabold text-(--textHeading) mb-4 md:mb-6 leading-tight">
        <span className="text-cyan-600 dark:text-cyan-400 italic">50kb PDF Compressor</span> for Government Exams
      </h2>
      <p className="leading-relaxed mb-6 md:mb-8 text-sm md:text-lg text-(--textBody)">
        Struggling to upload certificates on <strong>SSC, UPSC, or IBPS</strong> portals? Most online tools fail to hit the exact 50KB limit without making the document unreadable. Our <strong>aggressive size-lock algorithm</strong> ensures your file stays under 50KB while keeping text sharp enough for verification.
      </p>
      <div className="flex flex-wrap gap-2">
        {['SSC GD', 'UPSC CSE', 'IBPS PO', 'State PSC', 'Aadhaar Card'].map((tag) => (
          <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-500/20 rounded-full text-[9px] md:text-[10px] font-bold tracking-wide text-cyan-700 dark:text-cyan-400 shadow-sm">
            {tag} Optimized
          </span>
        ))}
      </div>
    </section>

    {/* How it Works - Value Addition */}
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { step: "Step 1", desc: "Upload your PDF. Processing starts instantly.", icon: Info, color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-500/10" },
        { step: "Step 2", desc: "Algorithm locks target to 48KB for safety.", icon: Zap, color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10" },
        { step: "Step 3", desc: "Download and upload to any govt portal.", icon: Download, color: "text-green-600 bg-green-50 dark:bg-green-500/10" }
      ].map((item, i) => (
        <div key={i} className="p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-1 transition-transform duration-300">
          <div className={`w-10 h-10 md:w-14 md:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
            <item.icon className="w-5 h-5 md:w-7 md:h-7" />
          </div>
          <h3 className="font-bold text-(--textHeading) mb-2 md:mb-3 italic tracking-tight">{item.step}</h3>
          <p className="text-sm text-(--textBody) leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>

    {/* Detailed FAQ */}
    <section className="space-y-6 md:space-y-8">
      <h3 className="text-lg md:text-2xl font-bold text-(--textHeading) flex items-center gap-3 italic leading-tight">
        <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" />
        FAQ & Help
      </h3>
      <div className="grid gap-4 md:gap-5">
        {[
          { q: "Will my PDF quality be affected?", a: "To hit 50KB from a large file, some compression is necessary. We use a contrast-boosting filter specifically tuned for scanned text to keep it perfectly readable." },
          { q: "Is it safe to upload my Aadhaar/PAN?", a: "100%. Our tool is purely client-side. Your files never touch our servers or leave your browser." },
          { q: "Why 50KB target?", a: "Portals like SSC, UPSC, and IBPS have strict weight limits. We target 48KB-49KB to ensure 100% acceptance rates." }
        ].map((faq, i) => (
          <div key={i} className="p-6 md:p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition">
            <h4 className="font-bold text-(--textHeading) mb-2 md:mb-3 flex items-start gap-3 md:gap-4 tracking-tight text-base md:text-lg">
              <span className="text-cyan-600 dark:text-cyan-500 shrink-0">Q.</span> {faq.q}
            </h4>
            <p className="text-sm md:text-base text-(--textBody) leading-relaxed pl-6 md:pl-10 border-l-2 border-cyan-500/20">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const LocalCompressionTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ blob: Blob; url: string; size: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setResult(null);
      setError(null);
    }
  };

  const compressPDFLocal = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);

    try {
      const libs = await initPdfLibs();
      if (!libs) throw new Error("PDF libraries are unavailable on the server.");
      const { pdfjsLib, PDFDocument, PDFName } = libs;

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const numPages = pdf.numPages;

      const TARGET_LIMIT = 49000; // Aiming for 48KB-49KB for safety
      let finalBlob: Blob | null = null;
      let currentScale = 0.8;
      let currentQuality = 0.4;
      let attempts = 0;

      while (attempts < 8) {
        setProgress(Math.min(95, attempts * 15));
        const newPdfDoc = await PDFDocument.create();
        newPdfDoc.catalog.delete(PDFName.of('Metadata'));
        newPdfDoc.catalog.delete(PDFName.of('PieceInfo'));

        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: currentScale });
          if (typeof document === "undefined") throw new Error("DOM is unavailable.");
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) throw new Error("Canvas failure");

          canvas.height = viewport.height;
          canvas.width = viewport.width;
          ctx.imageSmoothingEnabled = false;
          ctx.filter = "grayscale(100%) contrast(1.6) brightness(1.1)";

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (page as any).render({ canvasContext: ctx, viewport }).promise;

          const jpegDataUrl = canvas.toDataURL("image/jpeg", currentQuality);
          const imageBytes = await fetch(jpegDataUrl).then(r => r.arrayBuffer());
          const image = await newPdfDoc.embedJpg(imageBytes);

          const newPage = newPdfDoc.addPage([viewport.width, viewport.height]);
          newPage.drawImage(image, { x: 0, y: 0, width: viewport.width, height: viewport.height });
        }

        const pdfBytes = await newPdfDoc.save({ useObjectStreams: true });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const blob = new Blob([pdfBytes as any], { type: "application/pdf" });

        if (blob.size <= TARGET_LIMIT) {
          finalBlob = blob;
          break;
        }

        currentScale -= 0.15;
        currentQuality -= 0.1;
        if (currentScale < 0.3) currentScale = 0.3;
        if (currentQuality < 0.05) currentQuality = 0.05;
        attempts++;
      }

      if (!finalBlob) throw new Error("Unable to hit 50KB. Please scan the document at lower DPI.");

      const url = URL.createObjectURL(finalBlob);
      setResult({ blob: finalBlob, url, size: finalBlob.size });
      setProgress(100);
      await pdf.destroy();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    if (result?.url) URL.revokeObjectURL(result.url);
    setFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="relative group/box">
        {/* Glow effect with responsive opacity */}
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-600 to-blue-600 rounded-[2.5rem] blur opacity-5 dark:opacity-20 group-hover/box:opacity-10 dark:group-hover/box:opacity-30 transition duration-1000"></div>

        <div className="relative bg-(--card) border border-(--border) rounded-(--surface-radius) p-8 md:p-12 shadow-theme-card overflow-hidden theme-transition">
          <AnimatePresence mode="wait">
            {!file && (
              <motion.div key="upload" className="text-center space-y-6">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-10 md:py-16 border-2 border-dashed border-cyan-200 dark:border-cyan-500/30 rounded-4xl md:rounded-[2.5rem] bg-white dark: cursor-pointer hover:border-cyan-500/50 hover:bg-cyan-50/30 dark:hover:bg-cyan-500/5 transition-all group/uploader shadow-sm hover:shadow-lg dark:bg-cyan-500/5"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-cyan-50 dark:bg-cyan-900 rounded-3xl md:rounded-[2.25rem] border border-cyan-100 dark:border-cyan-100 flex items-center justify-center mx-auto mb-4 md:mb-8 group-hover/uploader:scale-105 group-hover/uploader:bg-white dark:group-hover/uploader:bg-cyan-500/20 transition-all duration-500 shadow-sm">
                    <Upload className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-(--textHeading) px-4 italic tracking-tight">Click to select PDF</h3>
                  <div className="flex items-center justify-center gap-2 mt-2 md:mt-4">
                    <p className="text-[10px] md:text-base text-(--textMuted) font-semibold tracking-wide">SSC/UPSC Specialized • Secure</p>
                  </div>
                  <input ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileSelect} className="hidden" />
                </div>
              </motion.div>
            )}

            {file && !isProcessing && !result && (
              <motion.div key="ready" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 md:space-y-10 text-center">
                <div className="flex items-center justify-between bg-gray-50  p-4 md:p-6 rounded-2xl md:rounded-3xl border border-(--border) shadow-sm">
                  <div className="flex items-center gap-3 md:gap-5 text-left min-w-0">
                    <div className="p-3 md:p-4 bg-cyan-100/50  rounded-xl md:rounded-2xl shadow-sm shrink-0">
                      <FileText className="w-8 h-8 md:w-10 md:h-10 text-cyan-600 dark:text-cyan-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-(--textHeading) font-black text-base md:text-lg truncate max-w-35 sm:max-w-50 md:max-w-xs italic tracking-tight">{file.name}</p>
                      <p className="text-(--textMuted) text-[10px] md:text-sm font-bold mt-0.5 uppercase">{(file.size / 1024).toFixed(1)} KB • Target: 49KB</p>
                    </div>
                  </div>
                  <button onClick={handleReset} className="p-3 md:p-4 rounded-xl md:rounded-2xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-all text-gray-400 hover:text-red-500 hover:rotate-90 group shrink-0" title="Choose different file">
                    <RefreshCcw className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
                <button
                  onClick={compressPDFLocal}
                  className="btnPrimary w-full py-5 md:py-8 rounded-[1.25rem] md:rounded-4xl text-base md:text-xl shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-4 group"
                >
                  {/* <Zap className="w-6 h-6 md:w-7 md:h-7 transition-all group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" /> */}
                  Compress to 50KB
                </button>
              </motion.div>
            )}

            {isProcessing && (
              <div className="py-10 md:py-16 text-center space-y-8 md:space-y-10">
                <div className="relative inline-block">
                  <Loader2 className="w-16 h-16 md:w-20 md:h-20 text-cyan-600 dark:text-cyan-400 animate-spin mx-auto" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
                  </div>
                </div>
                <p className="text-lg md:text-2xl font-bold text-(--textHeading) italic leading-none">
                  Optimizing size... <span className="text-cyan-600 dark:text-cyan-400">{progress}%</span>
                </p>
                <div className="max-w-xs md:max-w-md mx-auto">
                  <div className="w-full h-2.5 md:h-3 bg-gray-100 dark:bg-gray-800/50 rounded-full overflow-hidden shadow-inner p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-linear-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg"
                    />
                  </div>
                  <p className="text-[10px] md:text-sm text-(--textMuted) mt-3 md:mt-4 font-semibold tracking-wide">Processing Document</p>
                </div>
              </div>
            )}

            {result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8 md:space-y-10 text-center">
                <div className="bg-green-50/50 dark:bg-green-500/5 border border-green-500/20 rounded-3xl md:rounded-(--surface-radius) p-8 md:p-14 shadow-theme-sm relative overflow-hidden group/success theme-transition">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-green-500/5 dark:bg-green-500/10 rounded-bl-[100%] transition-all group-hover/success:scale-110"></div>
                  <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-600 dark:text-green-400 mx-auto mb-4 md:mb-6 drop-shadow-sm transition-transform group-hover/success:scale-110" />
                  <h3 className="text-2xl md:text-3xl font-bold text-(--textHeading) mb-2 md:mb-3 italic tracking-tight">Success!</h3>
                  <p className="text-3xl md:text-5xl font-extrabold text-cyan-600 dark:text-cyan-400 tracking-tight italic">
                    {(result.size / 1024).toFixed(1)} <span className="text-lg md:text-2xl font-bold">KB</span>
                  </p>
                  <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-green-700 dark:text-green-400/80 font-semibold text-[10px] md:text-sm tracking-wide bg-green-100 dark:bg-green-500/10 py-1.5 px-4 rounded-full w-fit mx-auto">
                    <Lock className="w-3 md:w-3.5 h-3 md:h-3.5" /> Portal Acceptance Guaranteed
                  </div>
                </div>
                <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
                  <a
                    href={result.url}
                    download={`compressed_50kb_${file!.name}`}
                    className="btnPrimary py-5 md:py-8 rounded-[1.25rem] md:rounded-4xl text-base md:text-xl shadow-xl shadow-cyan-500/10 flex items-center justify-center gap-4 group/dl"
                  >
                    <Download className="w-5 h-5 md:w-7 md:h-7 transition-all group-hover/dl:translate-y-1" /> Download
                  </a>
                  <button onClick={handleReset} className="btnSecondary py-5 md:py-8 rounded-[1.25rem] md:rounded-4xl text-base md:text-xl flex items-center justify-center gap-4 group/rs">
                    <RefreshCcw className="w-5 h-5 md:w-6 md:h-6 transition-all group-hover/rs:rotate-180" /> Restart
                  </button>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 md:p-12 bg-red-50/50 dark:bg-red-500/5 border border-red-500/20 rounded-3xl md:rounded-(--surface-radius) text-red-600 dark:text-red-400 text-center space-y-4 md:space-y-6 theme-transition">
                <AlertCircle className="w-12 h-12 md:w-16 md:h-16 mx-auto drop-shadow-sm" />
                <div className="space-y-1 md:space-y-2">
                  <p className="font-black text-lg md:text-xl italic uppercase tracking-tight">{error}</p>
                  <p className="text-xs md:text-sm opacity-80 max-w-xs mx-auto">Try scanning with lower DPI or uploading a smaller initial file.</p>
                </div>
                <button onClick={handleReset} className="btnSecondary py-3 md:py-4 px-8 md:px-10 rounded-xl md:rounded-2xl mx-auto block hover:bg-red-500 hover:text-white hover:border-red-500 transition-all font-bold text-sm md:text-base">Try again</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function CompressTo50kb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-50kb"
      heading={
        <span className="text-gray-900 dark:text-white">
          Compress PDF to <span className="text-cyan-600 dark:text-cyan-500 italic">50KB</span>
        </span>
      }
      tagline="Guaranteed 48KB-50KB for SSC, UPSC & IBPS Portal Acceptance."
      customTool={<LocalCompressionTool />}
      customContent={<UniqueSEOContent />}
    />
  );
}