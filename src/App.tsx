import React, { Suspense, useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBG from "./components/ParticlesBG";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Sitemap from "./pages/Sitemap";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import RemoveMetadataFromPdf from "./pages/RemoveMetadataFromPdf";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// ✅ Tool Pages
import CompressPdf from "./pages/CompressPDF";
import CompressTo50kb from "./pages/CompressTo50kb";
import CompressTo100kb from "./pages/CompressTo100kb";
import CompressTo150kb from "./pages/CompressTo150kb";
import CompressTo200kb from "./pages/CompressTo200kb";
import CompressTo500kb from "./pages/CompressTo500kb";
import CompressTo1mb from "./pages/CompressTo1mb";
import ReducePdfSizeTo500kb from "./pages/ReducePdfSizeTo500kb";
import ScannedPdfCompressor from "./pages/ScannedPdfCompressor";
import ScannedPdfTo200kb from "./pages/ScannedPdfTo200kb";

// ✅ TS: window.gtag type
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

import { TOOL_ROUTES_SET } from "./data/pages";

const App: React.FC = () => {
  const location = useLocation();

  // ✅ Normalize pathname (remove trailing slash)
  const normalizedPath = useMemo(() => {
    const p = location.pathname.replace(/\/$/, "");
    return p === "" ? "/" : p;
  }, [location.pathname]);

  // ✅ Tool pages par navbar/footer hide
  const isToolPage = useMemo(() => {
    return TOOL_ROUTES_SET.has(normalizedPath);
  }, [normalizedPath]);

  // ✅ GA4 SPA page_view tracking (Realtime fix)
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ✅ Background */}
      <ParticlesBG />

      {/* ✅ Foreground */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {!isToolPage && <Navbar />}

        <main className={`grow ${isToolPage ? "py-10" : ""}`}>
          <Routes>
            {/* ✅ Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/tools" element={<Tools />} />

            {/* ✅ Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* ✅ Tool Pages */}
            <Route path="/compress-pdf" element={<CompressPdf />} />
            <Route path="/compress-pdf-to-50kb" element={<CompressTo50kb />} />
            <Route path="/compress-pdf-to-100kb" element={<CompressTo100kb />} />
            <Route path="/compress-pdf-to-150kb" element={<CompressTo150kb />} />
            <Route path="/compress-pdf-to-200kb" element={<CompressTo200kb />} />
            <Route path="/compress-pdf-to-500kb" element={<CompressTo500kb />} />
            <Route path="/compress-pdf-to-1mb" element={<CompressTo1mb />} />
            <Route path="/reduce-pdf-size-to-500kb" element={<ReducePdfSizeTo500kb />} />
            <Route path="/scanned-pdf-compressor" element={<ScannedPdfCompressor />} />
            <Route path="/scanned-pdf-to-200kb" element={<ScannedPdfTo200kb />} />
            <Route path="/remove-metadata-from-pdf" element={<RemoveMetadataFromPdf />} />

            {/* ✅ fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {!isToolPage && (
          <Suspense fallback={<div className="h-20" />}>
            <Footer />
          </Suspense>
        )}
      </div>

      {/* ✅ Toast */}
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default App;
