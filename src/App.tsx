import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ParticlesBG from "./components/ParticlesBG";
import NavigationPageLoader from "./components/NavigationPageLoader";

// ✅ Layouts
import MainLayout from "./layouts/MainLayout";
import ToolLayout from "./layouts/ToolLayout";

// ✅ Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import CookiesPolicy from "./pages/CookiesPolicy";
import Sitemap from "./pages/Sitemap";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// ✅ Tool Pages
import CompressPdfTo200kb from "./pages/ResizePdfInKb"; // Using ResizePdfInKb as the primary tool
import PdfToJpg from "./pages/PdfToJpg";
import MergePdf from "./pages/MergePdf";
import SplitPdf from "./pages/SplitPdf";
import EditPdf from "./pages/EditPdf";
import RemoveMetadataFromPdf from "./pages/RemoveMetadataFromPdf";
import JpgToPdf from "./pages/JpgToPdf";


// ✅ TS: window.gtag type
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const App: React.FC = () => {



  useEffect(() => {
    document.dispatchEvent(new Event("render-event"));
  }, []);



  const location = useLocation();

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
      {/* ✅ Premium Centered Navigation Loader */}
      <NavigationPageLoader />

      {/* ✅ Background */}
      <ParticlesBG />

      {/* ✅ Focal Layer */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Routes>
          {/* =========================================
              MAIN LAYOUT ROUTES (Navbar + Footer)
          ========================================= */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/tools" element={<Tools />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* =========================================
              TOOL LAYOUT ROUTES (Minimal Header)
          ========================================= */}
          <Route element={<ToolLayout />}>
            <Route path="/compress-pdf-to-200kb" element={<CompressPdfTo200kb initialLimit={200} routeKey="/compress-pdf-to-200kb" />} />
            <Route path="/remove-metadata-from-pdf" element={<RemoveMetadataFromPdf />} />
            <Route path="/pdf-to-jpg" element={<PdfToJpg />} />
            <Route path="/jpg-to-pdf" element={<JpgToPdf />} />
            <Route path="/merge-pdf" element={<MergePdf />} />
            <Route path="/split-pdf" element={<SplitPdf />} />
            <Route path="/edit-pdf" element={<EditPdf />} />
          </Route>

        </Routes>
      </div>

      {/* ✅ Toast */}
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default App;
