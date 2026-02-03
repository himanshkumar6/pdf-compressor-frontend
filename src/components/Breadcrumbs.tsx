import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { getLanguage, PAGE_TITLES } from "../utils/localization";

type Crumb = {
  label: string;
  to?: string; // last one no link
};

const EN_LABELS: Record<string, string> = {
  "/": "Home",

  "/compress-pdf": "Compress PDF",
  "/compress-pdf-to-100kb": "Compress PDF to 100KB",
  "/compress-pdf-to-200kb": "Compress PDF to 200KB",
  "/compress-pdf-free": "Compress PDF Free",
  "/scanned-pdf-compressor": "Scanned PDF Compressor",
  "/scanned-pdf-to-200kb": "Scanned PDF to 200KB",
  "/remove-metadata-from-pdf": "Remove Metadata from PDF",

  "/blog": "Blog",
  "/contact": "Contact",
  "/about": "About",
  "/privacy-policy": "Privacy Policy",
  "/terms-conditions": "Terms & Conditions",
  "/disclaimer": "Disclaimer",
};

function buildCrumbs(pathname: string): Crumb[] {
  const lang = getLanguage(pathname);
  const isRu = lang === "ru";

  const homeLabel = isRu ? "Главная" : "Home";
  const homePath = isRu ? "/ru" : "/";

  // Check localized titles first
  const ruTitle = PAGE_TITLES[pathname];
  if (isRu && ruTitle) {
    return [
      { label: homeLabel, to: homePath },
      { label: ruTitle },
    ];
  }

  // Check English titles
  const enTitle = EN_LABELS[pathname];
  if (enTitle) {
    return [
      { label: "Home", to: "/" },
      { label: enTitle },
    ];
  }

  // Blog post like /blog/some-slug or /ru/blog/slug (future)
  if (pathname.startsWith("/blog/")) {
    return [
      { label: "Home", to: "/" },
      { label: "Blog", to: "/blog" },
      { label: "Article" },
    ];
  }

  // Russian fallback
  if (isRu) {
    return [{ label: homeLabel, to: homePath }, { label: "Страница" }];
  }

  // fallback
  return [{ label: "Home", to: "/" }, { label: "Page" }];
}

export default function Breadcrumbs() {
  const location = useLocation();

  const crumbs = useMemo(() => {
    if (location.pathname === "/" || location.pathname === "/ru") return [];
    return buildCrumbs(location.pathname);
  }, [location.pathname]);

  if (!crumbs.length) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-5">
        <Home className="w-4 h-4 text-gray-500" />

        {crumbs.map((c, idx) => {
          const last = idx === crumbs.length - 1;

          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-4 h-4 text-gray-600" />

              {!last && c.to ? (
                <Link
                  to={c.to}
                  className="hover:text-cyan-300 transition font-semibold"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-gray-300 font-bold">{c.label}</span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
