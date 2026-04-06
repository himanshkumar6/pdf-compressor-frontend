import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ToolHeader from "../components/ui/ToolHeader";
import AdBanner from "../components/AdBanner";

const ToolLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="py-10 min-h-screen flex flex-col">
      <ToolHeader />

      {/* ✅ Mount only ONE header banner at a time */}
      <div className="w-full max-w-7xl mx-auto mt-4 px-4">
        {isMobile ? <AdBanner type="320x50" /> : <AdBanner type="728x90" />}
      </div>

      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default ToolLayout;
