/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MAIN_NAV_PAGES } from "../data/pages";
import ThemeMenuDropdown from "./ThemeMenuDropdown";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();

  // ✅ close on route change
  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] theme-transition">
      <div className="w-full max-w-[var(--page-max-width)] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link
          to="/"
          className="brand-logo text-[var(--text)] font-black text-xl shrink-0"
        >
          <span>Compress</span>
          <span className="brand-logo__pdf">PDF</span>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
          {MAIN_NAV_PAGES.filter((p) => p.path !== "/tools").map((p) => {
            const isActive =
              location.pathname === p.path ||
              (p.path === "/blog" && location.pathname.startsWith("/blog"));

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
            to="/compress-pdf-to-200kb"
            className="btnPrimary hidden sm:inline-flex px-4 py-2.5 rounded-xl text-sm shadow-sm"
          >
            Try Free
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
          <Link
            to="/"
            className={`nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === "/" ? "nav-link--active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/tools"
            className="nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            All Tools
          </Link>

          <Link
            to="/blog"
            className={`nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname.startsWith("/blog") ? "nav-link--active" : ""
            }`}
          >
            Blog
          </Link>

          <Link
            to="/about"
            className={`nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === "/about" ? "nav-link--active" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`nav-link-mobile block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === "/contact" ? "nav-link--active" : ""
            }`}
          >
            Contact
          </Link>

          {/* Divider */}
          <div className="my-3 border-t border-[var(--border)]" />

          {/* Mobile CTA */}
          <Link
            to="/compress-pdf-to-200kb"
            className="btnPrimary block text-center px-4 py-3 rounded-xl"
          >
            Try Free
          </Link>
        </div>
      </div>
    </header>
  );
}
