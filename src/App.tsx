import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import ParticlesBG from "./components/ParticlesBG";
import NavigationPageLoader from "./components/NavigationPageLoader";

// ✅ Layouts
import MainLayout from "./layouts/MainLayout";
import ToolLayout from "./layouts/ToolLayout";
import CompressTo100kb from "./pages/CompressTo100kb";

// ✅ Main Pages (Lazy)
export const HomeLoader = () => import("./pages/Home");
export const AboutLoader = () => import("./pages/About");
export const ContactLoader = () => import("./pages/Contact");
export const PrivacyPolicyLoader = () => import("./pages/PrivacyPolicy");
export const TermsConditionsLoader = () => import("./pages/TermsConditions");
export const DisclaimerLoader = () => import("./pages/Disclaimer");
export const CookiesPolicyLoader = () => import("./pages/CookiesPolicy");
export const SitemapLoader = () => import("./pages/Sitemap");
export const ToolsLoader = () => import("./pages/Tools");
export const NotFoundLoader = () => import("./pages/NotFound");

export const BlogLoader = () => import("./pages/Blog");
export const BlogPostLoader = () => import("./pages/BlogPost");

const Home = lazy(HomeLoader);
const About = lazy(AboutLoader);
const Contact = lazy(ContactLoader);
const PrivacyPolicy = lazy(PrivacyPolicyLoader);
const TermsConditions = lazy(TermsConditionsLoader);
const Disclaimer = lazy(DisclaimerLoader);
const CookiesPolicy = lazy(CookiesPolicyLoader);
const Sitemap = lazy(SitemapLoader);
const Tools = lazy(ToolsLoader);
const NotFound = lazy(NotFoundLoader);

const Blog = lazy(BlogLoader);
const BlogPost = lazy(BlogPostLoader);

// ✅ Tool Pages (Lazy)
export const CompressPdfTo200kbLoader = () => import("./pages/ResizePdfInKb");
export const PdfToJpgLoader = () => import("./pages/PdfToJpg");
export const MergePdfLoader = () => import("./pages/MergePdf");
export const SplitPdfLoader = () => import("./pages/SplitPdf");
export const EditPdfLoader = () => import("./pages/EditPdf");
export const RemoveMetadataFromPdfLoader = () => import("./pages/RemoveMetadataFromPdf");
export const JpgToPdfLoader = () => import("./pages/JpgToPdf");
export const CompressTo50kbLoader = () => import("./pages/CompressTo50kb");
export const ImageUpscalerLoader = () => import("./pages/ImageUpscaler");
export const PdfToDocxLoader = () => import("./pages/PdfToDocx");

const CompressPdfTo200kb = lazy(CompressPdfTo200kbLoader);
const PdfToJpg = lazy(PdfToJpgLoader);
const MergePdf = lazy(MergePdfLoader);
const SplitPdf = lazy(SplitPdfLoader);
const EditPdf = lazy(EditPdfLoader);
const RemoveMetadataFromPdf = lazy(RemoveMetadataFromPdfLoader);
const JpgToPdf = lazy(JpgToPdfLoader);
const CompressTo50kb = lazy(CompressTo50kbLoader);
const ImageUpscaler = lazy(ImageUpscalerLoader);
const PdfToDocx = lazy(PdfToDocxLoader);

// ✅ Loading Fallback
const PageFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#0b0e14]/50 backdrop-blur-sm z-50">
    <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
  </div>
);

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
        <Suspense fallback={<PageFallback />}>
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
              <Route path="/compress-pdf-to-200kb" element={<CompressPdfTo200kb initialLimit={200} routeKey="/compress-pdf-to-200kb" /> as never} />
              <Route path="/compress-pdf-to-50kb" element={<CompressTo50kb />} />
              <Route path="/compress-pdf-to-100kb" element={<CompressTo100kb />} />
              <Route path="/remove-metadata-from-pdf" element={<RemoveMetadataFromPdf />} />
              <Route path="/pdf-to-jpg" element={<PdfToJpg />} />

              <Route path="/jpg-to-pdf" element={<JpgToPdf />} />
              <Route path="/merge-pdf" element={<MergePdf />} />
              <Route path="/split-pdf" element={<SplitPdf />} />
              <Route path="/edit-pdf" element={<EditPdf />} />
              <Route path="/image-upscaler" element={<ImageUpscaler />} />
              <Route path="/pdf-to-docx" element={<PdfToDocx />} />
            </Route>
          </Routes>
        </Suspense>
      </div>

      {/* ✅ Toast */}
      <Toaster position="top-center" toastOptions={{
        duration: 2500,
      }} />
    </div>
  );
};

export default App;
