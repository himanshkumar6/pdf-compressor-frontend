import React, { useState, useRef, useEffect, memo } from "react";
import {
  Upload,
  Loader2,
  Trash2,
  FileText,
  ShieldCheck,
  Zap,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import ToolLandingPage from "../components/ToolLandingPage";
import ToolErrorBoundary from "../components/ToolErrorBoundary";

const API_URL = "https://pdf-to-docs-1.onrender.com/convert";

const PROCESSING_MESSAGES = [
  "Uploading securely...",
  "Analyzing document...",
  "Reconstructing layout...",
  "Preparing Word file..."
];

// === Hooks ===
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// === Static / SEO Content ===
const UniqueSEOContent = memo(() => (
  <div className="space-y-12 text-gray-700 dark:text-gray-300 mt-16 max-w-5xl mx-auto">
    <section className="bg-(--card) p-8 md:p-12 rounded-(--surface-radius) border border-(--border) shadow-theme backdrop-blur-sm theme-transition relative overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-black text-(--textHeading) mb-6 leading-tight tracking-tight uppercase italic">
        Free <span className="text-blue-500">PDF to DOCX</span> Converter
      </h2>
      <p className="leading-relaxed mb-8 text-lg text-(--textBody) max-w-3xl font-medium">
        Tired of retyping scanned PDF documents? Our online tool is the easiest way to{" "}
        <strong>convert PDF documents to editable Microsoft Word files</strong>. We preserve your layout,
        fonts, and images so you can start editing immediately. Highly accurate, fast, and completely free.
      </p>
      <div className="flex flex-wrap gap-3">
        {[
          "100% Free",
          "High Accuracy",
          "Retains Layout",
          "Secure Conversion",
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-700 dark:text-blue-400 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>

    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Seamless Editing",
          desc: "Perfect for editing text, tables, and lists. Your DOCX will look incredibly close to the original <strong>PDF design</strong>.",
          icon: Zap,
          color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10",
        },
        {
          title: "Secure Uploads",
          desc: "Your files are securely transmitted to our processing servers and <strong>deleted immediately</strong> after the DOCX conversion is completed.",
          icon: ShieldCheck,
          color: "text-green-600 bg-green-50 dark:bg-green-500/10",
        },
        {
          title: "Format Accuracy",
          desc: "Our engine uses advanced reconstruction techniques to ensure minimal formatting loss compared to generic converters.",
          icon: CheckCircle,
          color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-500/10",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-2 transition-all duration-300"
        >
          <div
            className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}
          >
            <item.icon className="w-7 h-7" />
          </div>
          <h3 className="font-extrabold text-(--textHeading) mb-3 tracking-tight text-xl italic uppercase">
            {item.title}
          </h3>
          <p
            className="text-sm text-(--textBody) leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </div>
      ))}
    </section>
  </div>
));
UniqueSEOContent.displayName = "UniqueSEOContent";

// === Premium Motion Components ===
const MagneticUpload = memo(({
  onFileDrop,
  isDraggingOver,
  inputRef,
  handleFileChange
}: {
  onFileDrop: () => void;
  isDraggingOver: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const rotateX = useTransform(springY, [-100, 100], [5, -5]);
  const rotateY = useTransform(springX, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hiddenInput = (
    <input
      ref={inputRef}
      type="file"
      accept="application/pdf"
      onChange={handleFileChange}
      className="hidden"
    />
  );

  if (!isDesktop || prefersReducedMotion) {
    return (
      <div
        onClick={onFileDrop}
        className={`
          flex flex-col items-center justify-center text-center
          min-h-55 md:min-h-65 p-6 md:p-8
          border-2 border-dashed 
          ${isDraggingOver ? "border-blue-500 bg-blue-500/10" : "border-(--border) bg-(--card)"}
          rounded-2xl cursor-pointer transition-all
        `}
      >
        {hiddenInput}
        <div className="w-14 h-14 bg-(--bg) rounded-xl flex items-center justify-center border border-(--border) mb-4">
          <Upload className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-lg font-semibold text-(--textHeading)">Select PDF File</h3>
        <p className="text-sm text-(--textMuted) mt-1">Drop a PDF here to convert it to DOCX format</p>
      </div>
    );
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onFileDrop}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative flex flex-col items-center justify-center text-center
        min-h-65 p-8 border-2 border-dashed rounded-2xl cursor-pointer
        overflow-hidden transition-colors duration-300
        ${isDraggingOver ? "border-blue-400" : "border-blue-500/30 hover:border-blue-500/60"}
      `}
    >
      {hiddenInput}

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatePresence>
        {isDraggingOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 bg-blue-500/10 blur-xl pointer-events-none"
            style={{ transform: "translateZ(0px)" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={isDraggingOver ? { y: -10, scale: 1.1 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-16 h-16 bg-(--bg) rounded-xl flex items-center justify-center border border-(--border) mb-4 shadow-lg shadow-blue-500/10 relative z-10"
        style={{ transform: "translateZ(40px)" }}
      >
        <Upload className="w-7 h-7 text-blue-500" />
      </motion.div>

      <h3 className="text-xl font-semibold text-(--textHeading) relative z-10" style={{ transform: "translateZ(30px)" }}>
        Select PDF File
      </h3>
      <p className="text-sm text-(--textMuted) mt-1 relative z-10" style={{ transform: "translateZ(20px)" }}>
        Drop a PDF here or click to browse
      </p>
    </motion.div>
  );
});
MagneticUpload.displayName = "MagneticUpload";

const ProcessingIndicator = memo(({ progress }: { progress: number }) => {
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setMsgIdx(curr => (curr + 1) % PROCESSING_MESSAGES.length);
    }, 2500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="p-8 bg-(--card) rounded-2xl border border-(--border) shadow-theme-sm mt-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"
          />
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center relative overflow-hidden">
            {/* Conic rotating gradient inside icon container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-50%] bg-[conic-gradient(transparent,rgba(59,130,246,0.3),transparent)]"
            />
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin relative z-10" />
          </div>
        </div>

        <div className="space-y-4 w-full max-w-sm">
          <div className="h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={msgIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-lg font-black tracking-tight text-(--textHeading) bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                {PROCESSING_MESSAGES[msgIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-full h-2.5 bg-(--bg) border border-(--border) rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "circOut", duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
          <p className="text-xs font-bold text-(--textMuted) text-right tabular-nums tracking-widest uppercase">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    </motion.div>
  );
});
ProcessingIndicator.displayName = "ProcessingIndicator";

type PdfFile = {
  id: string;
  file: File;
};

const PdfToDocxContent: React.FC = () => {
  const [file, setFile] = useState<PdfFile | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulated Progress Hook
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isProcessing) {
      setProgress(0);
      let current = 0;
      interval = setInterval(() => {
        if (current < 20) current += Math.random() * 8;
        else if (current < 70) current += Math.random() * 4;
        else if (current < 95) current += Math.random() * 1.5;

        if (current > 95) current = 95;
        setProgress(current);
      }, 500);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

  // Drag Handlers
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const onDragLeave = () => setIsDragOver(false);
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedFile(e.target.files[0]);
    }
  };

  const processSelectedFile = (selectedFile: File) => {
    if (selectedFile.type !== "application/pdf") {
      setError("Please select a valid PDF file.");
      return;
    }
    if (selectedFile.size > 20 * 1024 * 1024) {
      setError("File is too large (max 20MB).");
      return;
    }
    setError(null);
    setFile({ id: `${selectedFile.name}-${Date.now()}`, file: selectedFile });
  };

  const removeFile = () => {
    if (isProcessing) return;
    setFile(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const convertPdf = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file.file);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Conversion failed. Server might be overloaded.");
      }

      const blob = await response.blob();
      if (blob.size === 0) throw new Error("Received an empty file from the server.");

      // Finish progression neatly
      setProgress(100);
      await new Promise(resolve => setTimeout(resolve, 600));

      // Trigger automatic download
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      const originalName = file.file.name.replace(/\.[^/.]+$/, "");
      a.download = `${originalName}_converted.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during conversion.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto px-4 relative">
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 shadow-lg shadow-red-500/10 rounded-2xl flex items-start gap-3 text-red-400"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {!file ? (
          <div onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
            <MagneticUpload
              onFileDrop={() => fileInputRef.current?.click()}
              isDraggingOver={isDragOver}
              inputRef={fileInputRef}
              handleFileChange={handleFileChange}
            />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 mb-8"
          >
            {/* File Info Card */}
            <div className="flex items-center gap-3 bg-(--card) border border-(--border) p-4 rounded-2xl shadow-theme-sm group hover:border-blue-500/30 transition-colors">
              <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-inner">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div className="grow min-w-0">
                <p className="text-sm font-bold text-(--textHeading) truncate italic uppercase tracking-tighter">
                  {file.file.name}
                </p>
                <p className="text-xs font-semibold text-(--textMuted) tracking-wider">
                  {(file.file.size / 1024).toFixed(0)} KB
                </p>
              </div>
              <button
                onClick={removeFile}
                disabled={isProcessing}
                className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all disabled:opacity-50"
                title="Remove file"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Processing or Action */}
            <AnimatePresence mode="wait">
              {isProcessing ? (
                <motion.div key="processing" exit={{ opacity: 0, scale: 0.95 }}>
                  <ProcessingIndicator progress={progress} />
                </motion.div>
              ) : (
                <motion.button
                  key="action"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={convertPdf}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden w-full py-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3 uppercase tracking-widest italic group"
                >
                  {/* Subtle Shimmer on Button */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                  <Zap className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Convert to Word</span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
      <UniqueSEOContent />
    </div>
  );
};

const PdfToDocx: React.FC<{ routeKey?: string }> = ({ routeKey = "/pdf-to-docx" }) => (
  <ToolErrorBoundary toolName="PDF to DOCX">
    <ToolLandingPage
      routeKey={routeKey}
      heading={
        <span className="text-(--textHeading) font-black italic uppercase tracking-tighter">
          Convert PDF to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 underline decoration-blue-500/30">
            Word
          </span>
        </span>
      }
      tagline="Extract and edit text, tables, and layouts seamlessly."
    >
      <PdfToDocxContent />
    </ToolLandingPage>
  </ToolErrorBoundary>
);

export default PdfToDocx;
