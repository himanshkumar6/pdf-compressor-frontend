import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";

const MainLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <>
      <Navbar />

      {/* ✅ Mount only ONE header banner at a time to prevent atOptions clash */}
      <div className="w-full max-w-7xl mx-auto mt-4 px-4">
        {isMobile ? <AdBanner type="320x50" /> : <AdBanner type="728x90" />}
      </div>

      <main className="grow">
        <Outlet />
      </main>

      {/* ✅ Social Bar Above Footer */}
      <AdBanner type="social" className="hidden" />

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;
