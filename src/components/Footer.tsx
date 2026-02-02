import React from "react";
import { FileText, Github, Twitter, Mail } from "lucide-react";
import {
  TOOL_PAGES,
  FOOTER_SUPPORT_PAGES,
  FOOTER_LEGAL_PAGES,
} from "../data/pages";

/** Internal links use plain <a href> so crawlers (e.g. Ahrefs) see them. Navigation works via full page load. */

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] theme-transition">
      <div className="max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Premium top strip */}
        <div className="py-10 sm:py-14 border-b border-gray-900">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                Compress PDFs the <span className="text-cyan-400">secure</span> way.
              </h3>
              <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Private client-side PDF compression. No uploads, no tracking, no watermark —
                perfect for official forms, job portals & government websites.
              </p>

              {/* Quick badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["100% Browser-based", "No Uploads", "Mobile Friendly", "Free Tool"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-gray-800 text-gray-300 bg-gray-900/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ✅ CTA buttons (premium) — plain <a> for crawlers */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/compress-pdf-to-200kb"
                className="btnPrimary inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold"
              >
                Compress to 200KB
              </a>
              <a
                href="/compress-pdf"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-800 text-white hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                Compress PDF Online
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Links section */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              <span className="brand-logo text-xl font-extrabold tracking-tight">
                <span className="text-white">Compress</span>
                <span className="brand-logo__pdf">PDF</span>
              </span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-md">
              Secure and private PDF compression. Your files are processed locally in your browser —
              never uploaded to our servers.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://x.com/himanshu_react"
                aria-label="Twitter"
                className="icon-btn"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/himanshkumar6"
                aria-label="GitHub"
                className="icon-btn"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:himanshucareer01@gmail.com"
                aria-label="Email"
                className="icon-btn"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links columns (from central pages config) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {/* Tools — plain <a href> for crawlers (All Tools, Sitemap, etc.) */}
            <div>
              <h4 className="text-white font-bold mb-5">Tools</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/tools" className="footer-link">
                    All Tools
                  </a>
                </li>
                {TOOL_PAGES.map((t) => (
                  <li key={t.path}>
                    <a href={t.path} className="footer-link">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-5">Support</h4>
              <ul className="space-y-3 text-sm">
                {FOOTER_SUPPORT_PAGES.map((p) => (
                  <li key={p.path}>
                    <a href={p.path} className="footer-link">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-5">Legal</h4>
              <ul className="space-y-3 text-sm">
                {FOOTER_LEGAL_PAGES.map((p) => (
                  <li key={p.path}>
                    <a href={p.path} className="footer-link">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Bottom bar */}
        <div className="py-7 border-t border-gray-900 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} CompressPDF Tool. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
            <span className="px-3 py-1 rounded-full border border-gray-800 bg-gray-900/30">
              100% Client-side
            </span>
            <span className="px-3 py-1 rounded-full border border-gray-800 bg-gray-900/30">
              Made with ❤️ for PDF lovers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
