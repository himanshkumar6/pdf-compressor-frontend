/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import { FileText, Github, Twitter, Mail } from "lucide-react";
import { getLanguage, NAV_LABELS, ROUTE_MAP, getLocalizedRouteGuard } from "../utils/localization";

/** Internal links use plain <a href> so crawlers (e.g. Ahrefs) see them. Navigation works via full page load. */

const Footer: React.FC = () => {
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const labels = NAV_LABELS[lang];
  const routes = ROUTE_MAP[lang];

  const isRu = lang === "ru";
  const isEs = lang === "es";

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
      topTools: "Популярные",
      support: "Поддержка",
      legal: "Юридическая информация"
    },
    bottom: {
      rights: `© ${new Date().getFullYear()} CompressPDF Tool. Все права защищены.`,
      clientSide: "100% на клиенте",
      madeWith: "Сделано с",
      by: "кем",
    }
  } : isEs ? {
    headline: <>Comprime tus PDF de forma <span className="text-cyan-400">segura</span>.</>,
    subhead: "Compresión de PDF privada en tu navegador. Sin subidas, sin rastreo, sin marcas de agua — ideal para trámites oficiales y portales de empleo.",
    badges: ["100% en Navegador", "Sin Subidas", "Móvil Friendly", "Gratis"],
    btn200: "Comprimir a 200KB",
    btnHome: "Comprimir PDF Online",
    desc: "Compresión de PDF segura y privada. Tus archivos se procesan localmente en tu navegador — nunca se suben a nuestros servidores.",
    headers: {
      tools: "Herramientas",
      topTools: "Más Usados",
      support: "Soporte",
      legal: "Legal"
    },
    bottom: {
      rights: `© ${new Date().getFullYear()} CompressPDF Tool. Todos los derechos reservados.`,
      clientSide: "100% en tu PC/Móvil",
      madeWith: "Hecho con",
      by: "por",
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
      topTools: "Top Tools",
      support: "Support",
      legal: "Legal"
    },
    bottom: {
      rights: `© ${new Date().getFullYear()} CompressPDF Tool. All rights reserved.`,
      clientSide: "100% Client-side",
      madeWith: "Made with",
      by: "by",
    }
  };

  // Build Footer Links dynamically
  const topToolsLinks = [
    { label: "Compress PDF to 200KB", path: "/compress-pdf-to-200kb" },
    { label: "Compress PDF to 100KB", path: "/compress-pdf-to-100kb" },
    { label: "Merge PDF", path: "/merge-pdf" },
    { label: "JPG to PDF", path: "/jpg-to-pdf" },
  ];

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
    { label: labels.cookies, path: routes.cookies },
  ];

  // CTA Link Dests
  const link200 = isRu ? "/ru/szhat-pdf-do-200kb" : "/compress-pdf-to-200kb";
  const linkHome = routes.home;

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] theme-transition">
      <div className="max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔝 Top strip */}
        <div className="py-6 sm:py-12 border-b border-gray-900">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                {t.headline}
              </h3>

              <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.subhead}
              </p>

              {/* Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {t.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1 rounded-full border border-gray-800 text-gray-300 bg-gray-900/40"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={getLocalizedRouteGuard(link200, lang)}
                className="btnPrimary w-full sm:w-auto text-center rounded-2xl px-5 py-3 text-sm font-semibold"
              >
                {t.btn200}
              </a>
              <a
                href={getLocalizedRouteGuard(linkHome, lang)}
                className="w-full sm:w-auto text-center rounded-2xl px-5 py-3 text-sm font-semibold border border-gray-800 text-white hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                {t.btnHome}
              </a>
            </div>

          </div>
        </div>

        {/* 🔗 Links section */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4">
            <a href={getLocalizedRouteGuard(routes.home, lang)} className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">Compress</span>
                <span className="text-cyan-400">PDF</span>
              </span>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-md">
              {t.desc}
            </p>
            
            {/* Direct Trust Signal for AdSense */}
            <a href="mailto:support@compresspdfto200kb.online" className="inline-block mt-3 text-sm text-cyan-500 hover:text-cyan-400 transition-colors">
              support@compresspdfto200kb.online
            </a>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              {[
                { Icon: Twitter, url: "https://x.com/himanshu_react", label: "Twitter" },
                { Icon: Github, url: "https://github.com/himanshkumar6", label: "GitHub" },
                { Icon: Mail, url: "mailto:support@compresspdfto200kb.online", label: "Email Support" }
              ].map(({ Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Now using a 3-column grid on larger screens */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Top Tools (NEW - SEO BOOST) */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t.headers.topTools}
              </h4>
              <ul className="space-y-3 text-sm">
                {topToolsLinks.map((p) => (
                  <li key={p.path}>
                    <a href={p.path} className="text-gray-500 hover:text-cyan-400 transition-colors">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t.headers.support}
              </h4>
              <ul className="space-y-3 text-sm">
                {supportLinks.map((p) => (
                  <li key={p.path}>
                    <a href={getLocalizedRouteGuard(p.path, lang)} className="text-gray-500 hover:text-cyan-400 transition-colors">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t.headers.legal}
              </h4>
              <ul className="space-y-3 text-sm">
                {legalLinks.map((p) => (
                  <li key={p.path}>
                    <a href={getLocalizedRouteGuard(p.path, lang)} className="text-gray-500 hover:text-cyan-400 transition-colors">
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        {/* 🔻 Bottom bar */}
        <div className="py-6 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>{t.bottom.rights}</p>

          <div className="flex items-center gap-2">
            <span>{t.bottom.madeWith}</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>{t.bottom.by}</span>
            <a href={getLocalizedRouteGuard(routes.about, lang)} className="text-cyan-500 hover:text-cyan-400 font-medium">
              Himanshu
            </a>
            <span className="hidden sm:inline">• {t.bottom.clientSide}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;