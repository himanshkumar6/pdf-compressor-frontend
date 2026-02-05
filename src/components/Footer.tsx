import React from "react";
import { useLocation } from "react-router-dom";
import { FileText, Github, Twitter, Mail } from "lucide-react";
import {
  TOOL_PAGES,
  RU_TOOL_PAGES,
} from "../data/pages";
import { getLanguage, NAV_LABELS, ROUTE_MAP } from "../utils/localization";

/** Internal links use plain <a href> so crawlers (e.g. Ahrefs) see them. Navigation works via full page load. */

const Footer: React.FC = () => {
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const labels = NAV_LABELS[lang];
  const routes = ROUTE_MAP[lang];
  const tools = lang === "ru" ? RU_TOOL_PAGES : TOOL_PAGES;

  const isRu = lang === "ru";

  // Marketing Text
  const t = isRu ? {
    headline: <>Сжимайте PDF <span className="text-cyan-400">безопасно</span>.</>,
    subhead: "Приватное сжатие PDF прямо в браузере. Без загрузки на сервер, без слежки, без водяных знаков — идеально для официальных форм и госуслуг.",
    badges: ["100% в браузере", "Без загрузки", "Для мобильных", "Бесплатно"],
    btn200: "Сжать до 200 КБ",
    btnHome: "Сжать PDF Онлайн",
    desc: "Безопасное и приватное сжатие PDF. Ваши файлы обрабатываются локально в браузере — никогда не загружаются на наши серверы.",
    headers: {
      tools: "Инструменты",
      support: "Поддержка",
      legal: "Юридическая информация"
    },
    bottom: {
      rights: `© ${new Date().getFullYear()} CompressPDF Tool. Все права защищены.`,
      clientSide: "100% на клиенте",
      madeWith: "Сделано с ❤️ для работы с PDF"
    }
  } : {
    headline: <>Compress PDFs the <span className="text-cyan-400">secure</span> way.</>,
    subhead: "Private client-side PDF compression. No uploads, no tracking, no watermark — perfect for official forms, job portals & government websites.",
    badges: ["100% Browser-based", "No Uploads", "Mobile Friendly", "Free Tool"],
    btn200: "Compress to 200KB",
    btnHome: "Compress PDF Online",
    desc: "Secure and private PDF compression. Your files are processed locally in your browser — never uploaded to our servers.",
    headers: {
      tools: "Tools",
      support: "Support",
      legal: "Legal"
    },
    bottom: {
      rights: `© ${new Date().getFullYear()} CompressPDF Tool. All rights reserved.`,
      clientSide: "100% Client-side",
      madeWith: "Made with ❤️ for PDF lovers"
    }
  };

  // Build Footer Links dynamically
  const supportLinks = [
    { label: labels.tools, path: routes.tools }, // "All Tools"
    { label: labels.blog, path: routes.blog },
    { label: labels.about, path: routes.about },
    { label: labels.contact, path: routes.contact },
    // Only add Sitemap for English for now as requested/safe default
    ...(isRu ? [] : [{ label: "Sitemap", path: "/sitemap" }])
  ];

  const legalLinks = [
    { label: labels.privacy, path: routes.privacy },
    { label: labels.terms, path: routes.terms },
    { label: labels.disclaimer, path: routes.disclaimer },
  ];

  // CTA Link Dests
  const link200 = isRu ? "/ru/szhat-pdf-do-200kb" : "/compress-pdf-to-200kb";
  const linkHome = routes.home;

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] theme-transition">
      <div className="max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Premium top strip */}
        <div className="py-10 sm:py-14 border-b border-gray-900">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                {t.headline}
              </h3>
              <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.subhead}
              </p>

              {/* Quick badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {t.badges.map((t) => (
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
                href={link200}
                className="btnPrimary inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold"
              >
                {t.btn200}
              </a>
              <a
                href={linkHome}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-800 text-white hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                {t.btnHome}
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Links section */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href={routes.home} className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              <span className="brand-logo text-xl font-extrabold tracking-tight">
                <span className="text-white">Compress</span>
                <span className="brand-logo__pdf">PDF</span>
              </span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-md">
              {t.desc}
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
              <h4 className="text-white font-bold mb-5">{t.headers.tools}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href={routes.tools} className="footer-link">
                    {labels.tools}
                  </a>
                </li>
                {tools.map((t) => (
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
              <h4 className="text-white font-bold mb-5">{t.headers.support}</h4>
              <ul className="space-y-3 text-sm">
                {supportLinks.map((p) => (
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
              <h4 className="text-white font-bold mb-5">{t.headers.legal}</h4>
              <ul className="space-y-3 text-sm">
                {legalLinks.map((p) => (
                  <li key={p.path}>
                    <a href={p.path} className="footer-link">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* ✅ Trust/Disclaimer Block */}
              {!isRu && (
                <div className="mt-8 text-xs text-gray-500 max-w-xs leading-relaxed border-l-2 border-gray-800 pl-3">
                  <p>
                    <strong>Disclaimer:</strong> We are a private utility tool and not affiliated with SSC, UPSC, or any government body. All branding belongs to respective owners.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ✅ Bottom bar */}
        <div className="py-8 border-t border-gray-900 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-600">
            {t.bottom.rights}
          </p>

          <div className="flex items-center gap-3 text-gray-500">
            <span>Built with <span className="text-red-500 animate-pulse">❤️</span> by</span>
            <a href="/about" className="text-cyan-500 hover:text-cyan-400 font-medium transition-colors">Himanshu</a>
            <span className="w-1 h-1 rounded-full bg-gray-700 mx-1"></span>
            <span>{t.bottom.clientSide}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
