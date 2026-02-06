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

  // ✅ FIXED: Try Free should always go to /tools
  const ctaLink = "/tools";
  const ctaLabel = lang === "ru" ? "Попробовать" : "Try Free";

  const navItems = [
    { key: "home", label: labels.home, path: routes.home },
    { key: "tools", label: labels.tools, path: routes.tools },
    { key: "blog", label: labels.blog, path: routes.blog },
    { key: "about", label: labels.about, path: routes.about },
    { key: "contact", label: labels.contact, path: routes.contact },
  ];

  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-(--navbar-bg) border-b border-(--navbar-border) theme-transition">
      <div className="w-full max-w-(--page-max-width) mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

        {/* LOGO */}
        <Link
          to={routes.home}
          className="brand-logo group relative z-10 flex items-center gap-1 focus:outline-none"
          aria-label={labels.brand}
        >
          <div className="absolute -inset-2 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

          <div className="relative flex items-center font-bold text-xl tracking-wide text-(--text)">
            <span>{labels.brand.replace(" PDF", "")}</span>
            <span className="text-cyan-500 ml-px">PDF</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeMenuDropdown />

          {/* Desktop CTA */}
          <Link
            to={ctaLink}
            className="btnPrimary hidden sm:inline-flex px-4 py-2.5 rounded-xl text-sm shadow-sm"
          >
            {ctaLabel}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl border border-(--border) bg-(--card) hover:bg-(--color-bg-hover) transition-colors"
            onClick={() => setOpenMobile((s) => !s)}
            aria-label={openMobile ? "Close menu" : "Open menu"}
            aria-expanded={openMobile}
          >
            {openMobile ? (
              <X className="w-5 h-5 text-(--text)" />
            ) : (
              <Menu className="w-5 h-5 text-(--text)" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out 
        border-t border-(--navbar-border) bg-(--card) backdrop-blur-xl
        ${openMobile ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${location.pathname === item.path ||
                (item.key === "blog" &&
                  location.pathname.startsWith(routes.blog))
                ? "nav-link--active"
                : ""
                }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="my-3 border-t border-(--border)" />

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
