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
import CompressPdf from "./pages/CompressPDF";
import ScannedPdfCompressor from "./pages/ScannedPdfCompressor";
import ScannedPdfTo200kb from "./pages/ScannedPdfTo200kb";
import PdfToJpg from "./pages/PdfToJpg";
import MergePdf from "./pages/MergePdf";
import SplitPdf from "./pages/SplitPdf";
import EditPdf from "./pages/EditPdf";
import ResizePdfInKb from "./pages/ResizePdfInKb";
import ResizePdfInMb from "./pages/ResizePdfInMb";
import ResizePdf200kb from "./pages/ResizePdf200kb";
import RemoveMetadataFromPdf from "./pages/RemoveMetadataFromPdf";
import JpgToPdf from "./pages/JpgToPdf";
import FlipkartLabelCropper from "./pages/FlipkartLabelCropper";
import MeeshoLabelCropper from "./pages/MeeshoLabelCropper";

// ✅ Russian Pages
import HomeRu from "./pages/ru/Home";
import AboutRu from "./pages/ru/ONas";
import ContactRu from "./pages/ru/Kontakty";
import PrivacyPolicyRu from "./pages/ru/PolitikaKonfidencialnosti";
import TermsConditionsRu from "./pages/ru/UsloviyaIspolzovaniya";
import DisclaimerRu from "./pages/ru/OtkazOtOtvetsvennosti";
import ToolsRu from "./pages/ru/Instrumenty";

import SzhatPdf from "./pages/ru/SzhatPdf";
import SzhatPdfDo20kb from "./pages/ru/SzhatPdfDo20kb";
import SzhatPdfDo50kb from "./pages/ru/SzhatPdfDo50kb";
import SzhatPdfDo100kb from "./pages/ru/SzhatPdfDo100kb";
import SzhatPdfDo150kb from "./pages/ru/SzhatPdfDo150kb";
import SzhatPdfDo200kb from "./pages/ru/SzhatPdfDo200kb";
import SzhatPdfDo300kb from "./pages/ru/SzhatPdfDo300kb";
import SzhatPdfDo500kb from "./pages/ru/SzhatPdfDo500kb";
import SzhatPdfDo1mb from "./pages/ru/SzhatPdfDo1mb";
import UmenshitRazmerPdfDo500kb from "./pages/ru/UmenshitRazmerPdfDo500kb";
import SzhatSkanirovannyjPdf from "./pages/ru/SzhatSkanirovannyjPdf";
import SzhatSkanirovannyjPdfDo200kb from "./pages/ru/SzhatSkanirovannyjPdfDo200kb";
import UdalitMetadannyePdf from "./pages/ru/UdalitMetadannyePdf";
import IzmenitRazmerPdfKb from "./pages/ru/IzmenitRazmerPdfKb";
import IzmenitRazmerPdfMb from "./pages/ru/IzmenitRazmerPdfMb";
import PdfToJpgRu from "./pages/ru/PdfToJpgRu";
import JpgToPdfRu from "./pages/ru/JpgToPdfRu";
import ObedinitPdf from "./pages/ru/ObedinitPdf";
import RazdelitPdf from "./pages/ru/RazdelitPdf";
import RedaktirovatPdf from "./pages/ru/RedaktirovatPdf";
import FlipkartLabelCropperRu from "./pages/ru/FlipkartLabelCropperRu";
import MeeshoLabelCropperRu from "./pages/ru/MeeshoLabelCropperRu";
import RazmerPdf200kb from "./pages/ru/RazmerPdf200kb";
import CookiePolicyRu from "./pages/ru/CookiePolicyRu";


// ✅ TS: window.gtag type
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const App: React.FC = () => {
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

            {/* Russian Main Pages */}
            <Route path="/ru" element={<HomeRu />} />
            <Route path="/ru/o-nas" element={<AboutRu />} />
            <Route path="/ru/kontakty" element={<ContactRu />} />
            <Route path="/ru/politika-konfidencialnosti" element={<PrivacyPolicyRu />} />
            <Route path="/ru/usloviya" element={<TermsConditionsRu />} />
            <Route path="/ru/otkaz-ot-otvetstvennosti" element={<DisclaimerRu />} />
            <Route path="/ru/cookie-policy" element={<CookiePolicyRu />} />
            <Route path="/ru/instrumenty" element={<ToolsRu />} />
            <Route path="/ru/blog" element={<div className="min-h-screen pt-32 text-center text-white text-3xl font-bold">Блог скоро будет...</div>} />

            {/* 404 - Show inside layout? Or outside? Usually inside. */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* =========================================
              TOOL LAYOUT ROUTES (Minimal Header)
          ========================================= */}
          <Route element={<ToolLayout />}>
            {/* Compress Group */}
            <Route path="/compress-pdf" element={<CompressPdf />} />
            <Route path="/compress-pdf-to-50kb" element={<ResizePdfInKb initialLimit={50} routeKey="/compress-pdf-to-50kb" />} />
            <Route path="/compress-pdf-to-100kb" element={<ResizePdfInKb initialLimit={100} routeKey="/compress-pdf-to-100kb" />} />
            <Route path="/compress-pdf-to-150kb" element={<ResizePdfInKb initialLimit={150} routeKey="/compress-pdf-to-150kb" />} />
            <Route path="/compress-pdf-to-200kb" element={<ResizePdfInKb initialLimit={200} routeKey="/compress-pdf-to-200kb" />} />
            <Route path="/compress-pdf-to-500kb" element={<ResizePdfInKb initialLimit={500} routeKey="/compress-pdf-to-500kb" />} />
            <Route path="/compress-pdf-to-1mb" element={<ResizePdfInKb initialLimit={1000} routeKey="/compress-pdf-to-1mb" />} />
            <Route path="/reduce-pdf-size-to-500kb" element={<ResizePdfInKb initialLimit={500} routeKey="/reduce-pdf-size-to-500kb" />} />
            <Route path="/compress-pdf-to-20kb" element={<ResizePdfInKb initialLimit={20} routeKey="/compress-pdf-to-20kb" />} />

            <Route path="/resize-pdf-kb" element={<ResizePdfInKb />} />
            <Route path="/resize-pdf-200kb" element={<ResizePdf200kb />} />
            <Route path="/resize-pdf-mb" element={<ResizePdfInMb />} />

            <Route path="/scanned-pdf-compressor" element={<ScannedPdfCompressor />} />
            <Route path="/scanned-pdf-to-200kb" element={<ScannedPdfTo200kb />} />
            <Route path="/scanned-pdf-to-200kb" element={<ScannedPdfTo200kb />} />
            <Route path="/remove-metadata-from-pdf" element={<RemoveMetadataFromPdf />} />
            <Route path="/flipkart-label-cropper" element={<FlipkartLabelCropper />} />
            <Route path="/meesho-label-cropper" element={<MeeshoLabelCropper />} />

            <Route path="/pdf-to-jpg" element={<PdfToJpg />} />
            <Route path="/jpg-to-pdf" element={<JpgToPdf />} />
            <Route path="/merge-pdf" element={<MergePdf />} />
            <Route path="/merge-pdf-mac" element={<MergePdf routeKey="/merge-pdf-mac" />} />
            <Route path="/merge-pdf-windows" element={<MergePdf routeKey="/merge-pdf-windows" />} />
            <Route path="/merge-pdf-linux" element={<MergePdf routeKey="/merge-pdf-linux" />} />

            <Route path="/split-pdf" element={<SplitPdf />} />
            <Route path="/split-pdf-mac" element={<SplitPdf routeKey="/split-pdf-mac" />} />
            <Route path="/split-pdf-windows" element={<SplitPdf routeKey="/split-pdf-windows" />} />
            <Route path="/split-pdf-adobe" element={<SplitPdf routeKey="/split-pdf-adobe" />} />
            <Route path="/split-pdf-by-pages" element={<SplitPdf routeKey="/split-pdf-by-pages" />} />
            <Route path="/split-pdf-online" element={<SplitPdf routeKey="/split-pdf-online" />} />

            <Route path="/edit-pdf" element={<EditPdf />} />

            {/* Russian Tool Pages */}
            <Route path="/ru/szhat-pdf" element={<SzhatPdf />} />
            <Route path="/ru/szhat-pdf-do-20kb" element={<SzhatPdfDo20kb />} />
            <Route path="/ru/szhat-pdf-do-50kb" element={<SzhatPdfDo50kb />} />
            <Route path="/ru/szhat-pdf-do-100kb" element={<SzhatPdfDo100kb />} />
            <Route path="/ru/szhat-pdf-do-150kb" element={<SzhatPdfDo150kb />} />
            <Route path="/ru/szhat-pdf-do-200kb" element={<SzhatPdfDo200kb />} />
            <Route path="/ru/szhat-pdf-do-300kb" element={<SzhatPdfDo300kb />} />
            <Route path="/ru/szhat-pdf-do-500kb" element={<SzhatPdfDo500kb />} />
            <Route path="/ru/szhat-pdf-do-1mb" element={<SzhatPdfDo1mb />} />
            <Route path="/ru/umenshit-razmer-pdf-do-500kb" element={<UmenshitRazmerPdfDo500kb />} />
            <Route path="/ru/szhat-skanirovannyj-pdf" element={<SzhatSkanirovannyjPdf />} />
            <Route path="/ru/szhat-skanirovannyj-pdf-do-200kb" element={<SzhatSkanirovannyjPdfDo200kb />} />
            <Route path="/ru/udalit-metadannye-pdf" element={<UdalitMetadannyePdf />} />
            <Route path="/ru/izmenit-razmer-pdf-kb" element={<IzmenitRazmerPdfKb />} />
            <Route path="/ru/izmenit-razmer-pdf-mb" element={<IzmenitRazmerPdfMb />} />
            <Route path="/ru/pdf-v-jpg" element={<PdfToJpgRu />} />
            <Route path="/ru/jpg-v-pdf" element={<JpgToPdfRu />} />
            <Route path="/ru/obedinit-pdf" element={<ObedinitPdf />} />
            <Route path="/ru/razdelit-pdf" element={<RazdelitPdf />} />
            <Route path="/ru/redaktirovat-pdf" element={<RedaktirovatPdf />} />
            <Route path="/ru/flipkart-label-cropper" element={<FlipkartLabelCropperRu />} />
            <Route path="/ru/meesho-label-cropper" element={<MeeshoLabelCropperRu />} />
            <Route path="/ru/razmer-pdf-200kb" element={<RazmerPdf200kb />} />

          </Route>

        </Routes>
      </div>

      {/* ✅ Toast */}
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default App;
