/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeMenuDropdown from "./ThemeMenuDropdown";
import { getLanguage, NAV_LABELS, ROUTE_MAP } from "../utils/localization";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const labels = NAV_LABELS[lang];
  const routes = ROUTE_MAP[lang];

  // CTA Link Config
  const ctaLink = lang === "ru" ? "/ru/szhat-pdf-do-200kb" : "/compress-pdf-to-200kb";
  const ctaLabel = lang === "ru" ? "Попробовать" : "Try Free";

  // Build nav items dynamically from the dictionary keys to ensure order
  // English order: Home, Tools, Blog, About, Contact
  // We can stick to this order.
  const navItems = [
    { key: "home", label: labels.home, path: routes.home },
    { key: "tools", label: labels.tools, path: routes.tools },
    { key: "blog", label: labels.blog, path: routes.blog },
    { key: "about", label: labels.about, path: routes.about },
    { key: "contact", label: labels.contact, path: routes.contact },
  ];

  // ✅ close on route change
  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] theme-transition">
      <div className="w-full max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link
          to={routes.home}
          className="brand-logo group relative z-10 flex items-center gap-1 focus:outline-none"
          aria-label={labels.brand}
        >
          {/* Accent Glow (Subtle) */}
          <div className="absolute -inset-2 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          {/* Text Mark */}
          <div className="relative flex items-center font-bold text-xl tracking-wide text-[var(--text)]">
            <span>{labels.brand.replace(" PDF", "")}</span>
            <span className="text-cyan-500 ml-[1px]">PDF</span>
          </div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
          {navItems.filter((p) => p.key !== "tools").map((p) => {
            const isActive =
              location.pathname === p.path ||
              (p.key === "blog" && location.pathname.startsWith(routes.blog));

            return (
              <Link
                key={p.path}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                to={p.path}
              >
                {p.label}
              </Link>
            );
          })}
        </nav>

        {/* ✅ Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme */}
          <ThemeMenuDropdown />

          {/* Desktop CTA */}
          <Link
            to={ctaLink}
            className="btnPrimary hidden sm:inline-flex px-4 py-2.5 rounded-xl text-sm shadow-sm"
          >
            {ctaLabel}
          </Link>

          {/* ✅ Mobile Hamburger */}
          <button
            className="md:hidden p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] 
              hover:bg-[var(--color-bg-hover)] transition-colors"
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

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out 
          border-t border-[var(--navbar-border)] bg-[var(--card)] backdrop-blur-xl
          ${openMobile ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${location.pathname === item.path || (item.key === "blog" && location.pathname.startsWith(routes.blog)) ? "nav-link--active" : ""
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Divider */}
          <div className="my-3 border-t border-[var(--border)]" />

          {/* Mobile CTA */}
          <Link
            to={ctaLink}
            className="btnPrimary block text-center px-4 py-3 rounded-xl"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
