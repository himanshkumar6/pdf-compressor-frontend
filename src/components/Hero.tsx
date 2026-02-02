import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Lock, Sparkles, ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";

const Hero: React.FC = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden bg-transparent">
      <HeroBackground />
      {/* ✅ Smooth fade overlay (removes visible hero section box) */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* ✅ Premium glow background (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute -top-32 left-1/2 -translate-x-1/2 w-195 h-195 rounded-full bg-cyan-500/5 blur-[140px] motion-reduce:hidden" />
        <div className="hidden md:block absolute top-24 -right-55 w-130 h-130 rounded-full bg-purple-500/4 blur-[160px] motion-reduce:hidden" />
        <div className="hidden md:block absolute -bottom-65 -left-65 w-140 h-140 rounded-full bg-blue-500/4 blur-[170px] motion-reduce:hidden" />
      </div>

      <div className="max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* ✅ Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-sm font-semibold mb-7 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
          <Sparkles className="w-4 h-4" />
          100% Free • Fast Compression • Secure Processing
        </div>

        {/* ✅ Chips (High trust) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {["SSC", "UPSC", "Passport", "Visa", "Job Portal"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-gray-900/40 border border-gray-800 text-gray-200 text-sm font-semibold
                         hover:border-cyan-500/20 hover:bg-gray-900/55 transition-all"
            >
              <span className="text-emerald-400">✅</span>
              {item}
            </span>
          ))}
        </div>

        {/* ✅ Mini trust line (NEW) */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-sm text-gray-400">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Used by students & professionals
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            No signup required
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Works on mobile & desktop
          </span>
        </div>

        {/* ✅ Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Compress PDF to{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-2xl bg-cyan-400/20 rounded-full" />
            <span className="relative bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.20)]">
              200KB
            </span>
          </span>
        </h1>

        {/* ✅ Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Perfect for{" "}
          <span className="text-white font-semibold">government forms</span>,{" "}
          <span className="text-white font-semibold">job portals</span> and official uploads.
          <br />
          <span className="text-cyan-300 font-bold">
            Upload → Compress → Download
          </span>{" "}
          <span className="text-gray-400">
            in seconds. Files are processed securely and not stored.
          </span>
        </p>

        {/* ✅ CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            to="/compress-pdf-to-200kb"
            className="btnPrimary group w-full sm:w-auto px-9 py-4 rounded-2xl font-extrabold text-lg
                       bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500
                       shadow-[0_0_40px_rgba(34,211,238,0.18)]
                       hover:shadow-[0_0_60px_rgba(34,211,238,0.26)]
                       transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Compress PDF Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <button
            onClick={scrollToHowItWorks}
            className="w-full sm:w-auto px-9 py-4 rounded-2xl text-white text-lg font-semibold
                       bg-gray-900/50 border border-gray-800 hover:border-gray-700
                       hover:bg-gray-900 transition-all cursor-pointer"
          >
            Learn More
          </button>
        </div>

        {/* ✅ Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
              title: "High Quality Output",
              desc: "Readable text + optimized compression for uploads.",
            },
            {
              icon: <Lock className="w-5 h-5 text-cyan-400" />,
              title: "Secure Processing",
              desc: "Files processed securely and not stored.",
            },
            {
              icon: <Zap className="w-5 h-5 text-cyan-400" />,
              title: "Fast Results",
              desc: "Get a smaller PDF in seconds—perfect for forms.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group premium-card rounded-3xl p-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                {item.icon}
                <span className="text-cyan-300 text-xs font-bold">Trusted</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
