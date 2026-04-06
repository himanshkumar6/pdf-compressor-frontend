import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* ✅ Responsive Header Banners */}
      <div className="w-full max-w-7xl mx-auto mt-4 px-4 hidden md:block">
        <AdBanner type="728x90" />
      </div>
      <div className="w-full max-w-7xl mx-auto mt-4 px-4 block md:hidden">
        <AdBanner type="320x50" />
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
