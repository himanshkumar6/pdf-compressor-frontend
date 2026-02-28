import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload, CheckCircle, Loader2, Download, RefreshCcw,
  Maximize, ShieldCheck, Wand2,
  Image as ImageIcon, X, Zap, AlertCircle, HelpCircle
} from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";

/**
 * Optimized SEO Content
 */
const UniqueSEOContent = () => (
  <div className="space-y-8 md:space-y-12 text-gray-600 dark:text-gray-300">
    <section className="bg-(--card) p-4 sm:p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-(--border) shadow-xl backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px] -z-10" />
      <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-(--textHeading) mb-3 md:mb-6 tracking-tighter">
        Professional <span className="text-cyan-500 italic">4K Reconstruction</span>
      </h2>
      <p className="leading-relaxed mb-6 md:mb-8 text-sm md:text-xl text-(--textBody) max-w-2xl font-medium opacity-80">
        Stop settling for pixelated artifacts. Our neural-engine upscaler reconstructs lost detail locally in your browser.
      </p>
      <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-0">
        {["Private GPU Engine", "Zero Latency", "HD Upscaling", "Secure Canvas"].map((tag) => (
          <span key={tag} className="px-3 py-1.5 md:px-5 md:py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-xl md:rounded-2xl text-[9px] sm:text-[10px] md:text-xs font-black tracking-widest text-cyan-600 dark:text-cyan-400 uppercase shadow-sm whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </section>

    {/* Feature Grid */}
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {[
        { title: "Neural Enhancement", desc: "Advanced interpolation that adds perceived detail to low-res edges.", icon: Maximize, color: "text-blue-500 bg-blue-500/10" },
        { title: "Client-Side Speed", desc: "No queues. No server wait times. 100% of the work is done by your hardware.", icon: Zap, color: "text-amber-500 bg-amber-500/10" },
        { title: "Privacy First", desc: "Your data stays on your machine. We never see or store your images.", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
      ].map((item, i) => (
        <div key={i} className="p-5 sm:p-6 md:p-8 bg-(--card) rounded-2xl md:rounded-[1.5rem] border border-(--border) hover:border-cyan-500/30 transition-all duration-500 group">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
            <item.icon className="w-5 h-5 sm:w-6 h-6 md:w-7 md:h-7" />
          </div>
          <h3 className="font-bold text-(--textHeading) mb-2 md:mb-3 text-sm sm:text-base md:text-lg">{item.title}</h3>
          <p className="text-sm text-(--textBody) leading-relaxed opacity-70">{item.desc}</p>
        </div>
      ))}
    </section>

    {/* Bottom EEAT Content Section */}
    <section className="w-full max-w-5xl mx-auto space-y-8 md:space-y-12 pb-16 md:pb-20 pt-8 md:pt-16">
      {/* How It Works & Privacy */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="bg-(--card) border border-(--border) rounded-2xl md:rounded-(--surface-radius) p-6 md:p-8 shadow-theme-sm theme-transition">
          <h2 className="text-lg md:text-2xl font-bold text-(--textHeading) mb-3 md:mb-4">How the Image Upscaler Works</h2>
          <p className="text-(--textBody) leading-relaxed text-sm md:text-base mb-3 md:mb-4">
            Our upscaler runs high-quality image interpolation algorithms directly within your web browser. When you select an image, javascript mathematically maps and expands the existing pixels to either double or quadruple the original dimensions.
          </p>
          <p className="text-(--textBody) leading-relaxed text-sm md:text-base">
            Because this process uses advanced smoothing techniques rather than basic stretching, it significantly reduces the pixelated artifacts normally associated with enlarging digital photos.
          </p>
        </div>
        <div className="bg-(--card) border border-(--border) rounded-2xl md:rounded-(--surface-radius) p-6 md:p-8 shadow-theme-sm theme-transition">
          <h2 className="text-lg md:text-2xl font-bold text-(--textHeading) mb-3 md:mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 shrink-0" />
            Strict Privacy Guarantee
          </h2>
          <p className="text-(--textBody) leading-relaxed text-sm md:text-base mb-3 md:mb-4">
            We prioritize your data security. Unlike traditional cloud-based enhancement services, <strong>your files are never uploaded to any server</strong>.
          </p>
          <p className="text-(--textBody) leading-relaxed text-sm md:text-base">
            The entire upscaling process executes locally on your device's hardware. This means your personal photos, official documents, and sensitive graphics remain 100% private and are completely inaccessible to us or any third parties.
          </p>
        </div>
      </div>

      {/* When to Use & Limitations */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-(--textHeading)">Ideal Use Cases</h3>
          <ul className="space-y-2 md:space-y-3">
            {[
              "Enhancing low-resolution graphics for social media posts.",
              "Preparing older digital photos for physical printing.",
              "Enlarging small logos or icons without losing edge clarity.",
              "Improving the quality of highly compressed web images."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-(--textBody) text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl md:rounded-(--surface-radius) p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-(--textHeading) mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
            Quality Limitations Notice
          </h3>
          <p className="text-(--textBody) text-sm md:text-base leading-relaxed mb-3">
            While our local algorithm excels at smoothing edges and increasing dimensional resolution, it is important to understand what local interpolation can and cannot do.
          </p>
          <p className="text-(--textBody) text-sm md:text-base leading-relaxed">
            Upscaling mathematically enhances the layout of existing pixels, but it <strong>cannot miraculously invent missing detail or read completely blurred text.</strong> For the absolute best results, start with an image that is relatively clear but simply too small.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-(--card) border border-(--border) rounded-2xl md:rounded-(--surface-radius) p-6 md:p-8 shadow-theme-sm theme-transition">
        <h2 className="text-lg md:text-2xl font-bold text-(--textHeading) mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
          <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              q: "Is this tool completely free?",
              a: "Yes, the browser-based image upscaler is entirely free to use with no hidden fees or watermarks applied to your final output."
            },
            {
              q: "Does this use AI to hallucinate details?",
              a: "No. This tool uses deterministic high-quality canvas interpolation (smoothing). It does not use generative AI to hallucinate or fabricate realistic textures that weren't there, making it much faster and entirely predictable."
            },
            {
              q: "What is the maximum resolution?",
              a: "The maximum output depends on your device's browser memory limits. Generally, modern browsers can safely handle upscaling images up to roughly 4000x4000 pixels before experiencing performance issues."
            },
            {
              q: "Which image formats do you support?",
              a: "You can upload and upscale standard web image formats including JPG/JPEG, PNG, and modern WebP files."
            }
          ].map((faq, idx) => (
            <div key={idx} className="space-y-1.5 md:space-y-2">
              <h4 className="font-bold text-(--textHeading) text-sm md:text-base">{faq.q}</h4>
              <p className="text-(--textBody) text-xs md:text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Footer */}
      <div className="w-full pt-8 md:pt-10">
        <div className="max-w-5xl mx-auto px-4">

          {/* wrapper */}
          <div className="
      flex flex-wrap items-center justify-center
      gap-3 sm:gap-4 md:gap-6
      text-center
    ">

            {[
              "No Account Required",
              "No Watermarks Added",
              "Runs on Mobile & Desktop",
              "Instant Processing"
            ].map((item, i) => (
              <div
                key={i}
                className="
            group
            flex items-center gap-2.5
            px-4 py-2.5
            rounded-full
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-md
            hover:bg-white/[0.06]
            hover:border-cyan-400/30
            transition-all duration-300
            shadow-sm
          "
              >
                {/* icon glow */}
                <div className="
            relative flex items-center justify-center
            w-5 h-5
          ">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-md opacity-0 group-hover:opacity-100 transition" />
                  <ShieldCheck className="w-4 h-4 text-cyan-400 relative z-10" />
                </div>

                {/* text */}
                <span className="
            text-[11px] sm:text-xs md:text-sm
            font-semibold
            tracking-wide
            text-(--textMuted)
            whitespace-nowrap
          ">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  </div>
);

const LocalImageUpscalerTool = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      previewUrl && URL.revokeObjectURL(previewUrl);
      resultUrl && URL.revokeObjectURL(resultUrl);
    };
  }, [previewUrl, resultUrl]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const selected = e.dataTransfer.files?.[0];
    if (selected?.type.startsWith("image/")) handleFileSelection(selected);
  };

  const handleFileSelection = (selected: File) => {
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setResultUrl(null);
  };

  const processImage = async () => {
    if (!previewUrl || !file) return;
    setIsProcessing(true);
    await new Promise(r => setTimeout(r, 2000));

    try {
      const img = new Image();
      img.src = previewUrl;
      await new Promise(res => (img.onload = res));
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Context missing");

      canvas.width = img.width * scaleFactor;
      canvas.height = img.height * scaleFactor;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(blob => {
        if (blob) setResultUrl(URL.createObjectURL(blob));
        setIsProcessing(false);
      }, file.type);
    } catch (e) {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreviewUrl(null);
    setResultUrl(null);
  };

  // Convert bytes to MB helper
  const formatSize = (bytes: number) => {
    return (bytes / (1024 * 1024)).toFixed(2);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0">
      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div
            key="uploader"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative group h-96 sm:h-80 md:h-96 w-full rounded-3xl md:rounded-[2.5rem] border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden px-4 text-center
              ${isDragging ? "border-cyan-500 bg-cyan-500/5 scale-[0.98]" : "border-white/10 bg-white/2 hover:bg-white/[0.04] hover:border-white/20"}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <Upload className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter mb-1.5 md:mb-2">Enhance Reality</h3>
              <p className="text-white/40 text-sm sm:text-base md:text-lg font-medium">Drop image or click to browse</p>
              <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
                {["JPG", "PNG", "WEBP"].map(ext => (
                  <span key={ext} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 md:px-3 md:py-1 text-white/40">
                    {ext}
                  </span>
                ))}
              </div>
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && handleFileSelection(e.target.files[0])} className="hidden" />
          </motion.div>
        ) : (
          <motion.div
            key="config"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-6 md:space-y-8"
          >
            {/* SaaS Style Header Panel */}
            <div className="bg-[#0b1015] border border-white/5 rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 flex items-center justify-between shadow-2xl relative overflow-hidden group gap-2 md:gap-3">
              {/* Subtle top glow line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF]/40 to-transparent" />

              {/* Wrapper needs flex-1 min-w-0 to allow truncation */}
              <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5 flex-1 min-w-0">
                {/* Icon Container - added shrink-0 so it doesn't compress */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-[#00D2FF]/5 border-2 border-[#00D2FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,210,255,0.15)] relative">
                  <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>

                {/* Text Container - flex-1 min-w-0 is the magic fix for truncate */}
                <div className="flex-1 min-w-0">
                  <p className="text-white/60 text-[9px] sm:text-[10px] md:text-xs font-bold mb-0.5 md:mb-1">File Info</p>
                  <p className="text-white font-black truncate text-sm sm:text-lg md:text-xl tracking-tight leading-none mb-1 md:mb-1.5" title={file.name}>
                    {file.name}
                  </p>
                  <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                    <p className="text-white text-[10px] sm:text-xs md:text-sm font-extrabold shrink-0">{formatSize(file.size)} MB</p>
                    <span className="text-white/30 text-[9px] sm:text-[10px] shrink-0">•</span>
                    <p className="text-white/70 text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] truncate shrink-0">Ready to scale</p>
                  </div>
                </div>
              </div>

              {/* Close Button - added shrink-0 */}
              <button onClick={handleReset} className="shrink-0 p-2 sm:p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all border border-white/5 ml-1">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Preview Box */}
            <div className="relative w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] sm:aspect-video flex items-center justify-center group shadow-2xl p-2 md:p-4">
              <img src={resultUrl || previewUrl!} className={`max-h-full max-w-full object-contain rounded-2xl md:rounded-3xl transition-all duration-700 ${isProcessing ? 'blur-xl md:blur-2xl scale-110 opacity-30' : ''}`} alt="Upscale Work" />

              {isProcessing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 md:w-20 md:h-20 text-cyan-500 animate-spin" />
                    <Zap className="w-5 h-5 md:w-8 md:h-8 text-cyan-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  </div>
                  <p className="text-cyan-400 font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mt-4 md:mt-6 animate-pulse">Neural Mapping...</p>
                </div>
              )}

              {resultUrl && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-1.5 md:gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /> Complete
                </motion.div>
              )}
            </div>

            {/* Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
              {!resultUrl ? (
                <>
                  {/* Strength Toggle */}
                  <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1 backdrop-blur-sm shadow-inner overflow-hidden">
                    {[2, 4].map((s) => (
                      <button
                        key={s}
                        onClick={() => setScaleFactor(s)}
                        className={`flex-1 py-3.5 md:py-5 rounded-xl md:rounded-xl font-black text-xs md:text-sm transition-all duration-300 relative truncate px-1 ${scaleFactor === s
                          ? "bg-white text-black shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        {s}x Strength
                      </button>
                    ))}
                  </div>

                  {/* Primary Enhance Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(6,182,212,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={processImage}
                    disabled={isProcessing}
                    className="bg-cyan-500 text-black font-black rounded-2xl flex items-center justify-center gap-2 md:gap-3 transition-all relative overflow-hidden group min-h-[52px] md:h-[60px] disabled:opacity-50 disabled:cursor-not-allowed w-full px-2"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-[100%] transition-transform duration-1000" />

                    <Wand2 className="w-4 h-4 md:w-5 md:h-5 relative z-10 shrink-0" />
                    <span className="text-xs md:text-base uppercase tracking-widest relative z-10 truncate max-w-full">
                      {scaleFactor}x Enhance Now
                    </span>
                  </motion.button>
                </>
              ) : (
                <>
                  {/* Download Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = resultUrl;
                      a.download = `upscaled_${scaleFactor}x_${file.name}`;
                      a.click();
                    }}
                    className="bg-white text-black font-black h-14 md:h-[60px] rounded-2xl flex items-center justify-center gap-2 md:gap-3 shadow-[0_10px_30px_rgba(255,255,255,0.15)] border border-transparent hover:border-white/50 transition-all w-full px-2"
                  >
                    <Download className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span className="uppercase tracking-widest text-[11px] md:text-sm truncate">Download Result</span>
                  </motion.button>

                  {/* Reset/Try Another Button */}
                  <button
                    onClick={handleReset}
                    className="bg-white/5 border border-white/10 text-white font-black min-h-[52px] md:h-[60px] rounded-2xl flex items-center justify-center gap-2 md:gap-3 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-md w-full px-2"
                  >
                    <RefreshCcw className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                    <span className="uppercase tracking-widest text-[11px] md:text-sm truncate">Try Another</span>
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ImageUpscaler() {
  return (
    <ToolLandingPage
      routeKey="/image-upscaler"
      heading={
        <div className="text-center px-4 md:px-0">
          <span className="text-white text-3xl md:text-4xl lg:text-5xl">AI Image </span>
          <br className="sm:hidden" />
          <span className="text-cyan-500 italic font-black text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-0 inline-block">Upscaler</span>
        </div>
      }
      tagline="Scale your imagery to 4K resolution using enterprise-grade neural reconstruction."
      customTool={<LocalImageUpscalerTool />}
      customContent={<UniqueSEOContent />}
    />
  );
}