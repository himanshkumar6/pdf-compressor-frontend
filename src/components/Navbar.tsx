/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeMenuDropdown from "./ThemeMenuDropdown";
import { getLanguage, NAV_LABELS, ROUTE_MAP, CRUD_LABELS, getLocalizedRouteGuard } from "../utils/localization";
import { prefetch } from "../utils/prefetch";
import * as Loaders from "../App";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const labels = NAV_LABELS[lang];
  const routes = ROUTE_MAP[lang];

  // CTA Links
  const ctaLink = routes.cta;
  const ctaLabel = CRUD_LABELS[lang].cta;

  const navItems = [
    { key: "home", label: labels.home, path: routes.home, loader: Loaders.HomeLoader, title: "Go to Homepage" },
    { key: "tools", label: labels.tools, path: routes.tools, loader: Loaders.ToolsLoader, title: "View All PDF Tools" },
    { key: "blog", label: labels.blog, path: routes.blog, loader: Loaders.BlogLoader, title: "Read PDF Upload Guides & Tips" },
    { key: "about", label: labels.about, path: routes.about, loader: Loaders.AboutLoader, title: "About the Developer" },
    { key: "contact", label: labels.contact, path: routes.contact, loader: Loaders.ContactLoader, title: "Contact Support" },
  ];

  const handlePrefetch = (loader?: () => Promise<any>) => {
    if (loader) prefetch(loader);
  };

  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-[var(--navbar-bg)]/90 border-b border-[var(--navbar-border)] theme-transition">
      <div className="w-full max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

        {/* LOGO (SEO Optimized) */}
        <Link
          to={getLocalizedRouteGuard(routes.home, lang)}
          className="brand-logo group relative z-10 flex items-center gap-1 focus:outline-none"
          aria-label={labels.brand}
          title={`${labels.brand} - Secure PDF Tools`}
        >
          <div className="absolute -inset-2 rounded-xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />

          <div className="relative flex items-center font-extrabold text-xl tracking-tight text-[var(--text)]">
            <span>{labels.brand.replace(" PDF", "")}</span>
            <span className="text-cyan-500 ml-px">PDF</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-semibold">
          {navItems.map((p) => {
            const isActive =
              location.pathname === p.path ||
              (p.key === "blog" && location.pathname.startsWith(routes.blog));

            return (
              <Link
                key={p.path}
                to={getLocalizedRouteGuard(p.path, lang)}
                onMouseEnter={() => handlePrefetch(p.loader)}
                title={p.title}
                className={`relative px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-cyan-400"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--color-bg-hover)]"
                }`}
              >
                {p.label}
                {isActive && (
                  <span className="absolute left-2 right-2 -bottom-1 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeMenuDropdown />

          {/* Desktop CTA */}
          <Link
            to={getLocalizedRouteGuard(ctaLink, lang)}
            onMouseEnter={() => handlePrefetch(Loaders.CompressPdfTo200kbLoader)}
            title="Use the 200KB PDF Compressor"
            className="btnPrimary hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-cyan-500/20 transition-shadow"
          >
            {ctaLabel}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--color-bg-hover)] transition-colors"
            onClick={() => setOpenMobile((s) => !s)}
            aria-label={openMobile ? "Close menu" : "Open menu"}
            aria-expanded={openMobile}
          >
            {openMobile ? (
              <X className="w-5 h-5 text-[var(--text)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--text)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Fixed Tailwind max-h bug) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-[var(--navbar-border)] bg-[var(--card)]/95 backdrop-blur-xl ${
          openMobile
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-1"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const active =
              location.pathname === item.path ||
              (item.key === "blog" && location.pathname.startsWith(routes.blog));

            return (
              <Link
                key={item.key}
                to={getLocalizedRouteGuard(item.path, lang)}
                title={item.title}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--color-bg-hover)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="my-3 border-t border-[var(--border)]" />

          {/* Mobile CTA */}
          <Link
            to={getLocalizedRouteGuard(ctaLink, lang)}
            className="btnPrimary block text-center px-4 py-3 rounded-xl shadow-sm"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}