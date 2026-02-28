import React from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { Github, Twitter, Mail, MapPin } from "lucide-react";

const About: React.FC = () => {
  const seo = PAGES_SEO["/about"];

  return (
    <div className="pt-16 md:pt-32 pb-20 max-w-5xl mx-auto px-4 text-gray-400">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />

      {/* ✅ Updated H1 (Brand Authority Boost) */}
      <h1 className="text-3xl md:text-5xl font-black text-white mb-12 text-center tracking-tight">
        About the Creator
      </h1>

      {/* Intro Block with Profile Image */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[2rem] p-8 md:p-12 mb-10 shadow-xl shadow-cyan-900/10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">

          {/* Profile Image Section */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-b from-cyan-500 to-gray-800">
              {/* Replace the src with your actual image path */}
              <img
                src="/images/1000157585.png"
                alt="Himanshu Kumar - Developer"
                className="w-full h-full object-cover rounded-full border-4 border-[var(--bg)]"
              />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/himanshkumar6" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-gray-400" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/himanshu_react" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-gray-400" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:support@compresspdfto200kb.online" className="p-2.5 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-white transition-colors text-gray-400" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Intro Text */}
          <div className="leading-relaxed text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Hi, I’m Himanshu.
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-cyan-400 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Web Developer from India</span>
            </div>

            <p className="mb-5 text-gray-300">
              I built <strong className="text-cyan-400">CompressPDFto200KB</strong> because I was tired of seeing my own applications get rejected.
              While applying for various exams myself, I constantly hit the "File Too Large" error.
              Existing tools were frustrating—either they asked for a login, added a watermark, or made my clear documents blurry.
            </p>

            <p className="text-gray-400">
              So, I used my background in web development to build the tool I wish I had back then.
              A simple, secure, and private way to get your PDF under 200KB without any headaches.
              This isn't a corporate product; it's a utility built by a developer who understands the pain of submitting a government form at the last minute.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Authority */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Expertise</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span>
                <strong className="text-white block text-lg mb-1">WebAssembly Core</strong>
                <span className="text-sm">I coded this to run locally on your device. No server uploads means your data never leaves your control.</span>
              </span>
            </li>

            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span>
                <strong className="text-white block text-lg mb-1">Student-Focused Algorithms</strong>
                <span className="text-sm">I tuned the compression engine specifically for the 200KB limit used by NIC, SSC, and NTA portals.</span>
              </span>
            </li>

            <li className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span>
                <strong className="text-white block text-lg mb-1">Zero-Knowledge Architecture</strong>
                <span className="text-sm">Since I don't run a backend database for files, I can't see your documents even if I wanted to.</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Vision/Mission */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Why This Tool?</h2>
            <div className="space-y-4 text-sm">
              <p>
                During my own application processes, I noticed that most free online tools add watermarks,
                require email signups, or simply fail to compress scanned documents properly.
              </p>
              <p>I wanted to create a solution that is:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 text-cyan-100/80 font-medium">
                <li>100% Free forever (no paywalls)</li>
                <li>No Signup required (speed matters)</li>
                <li>Watermark-Free (professional)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)]">
            <p className="italic text-cyan-300/90 text-center font-medium">
              "Technology should be an enabler, not a hurdle for students chasing their dreams."
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Freshness Signal (SEO Boost) */}
      <div className="mt-14 text-center text-xs text-gray-600 font-medium">
        Last updated: February 2026
      </div>
    </div>
  );
};

export default About;