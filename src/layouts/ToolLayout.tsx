import React from "react";
import { Outlet } from "react-router-dom";
import ToolHeader from "../components/ui/ToolHeader";
import AdBanner from "../components/AdBanner";

const ToolLayout: React.FC = () => {
  return (
    <div className="py-10 min-h-screen flex flex-col">
      <ToolHeader />

      {/* ✅ Responsive Header Banners */}
      <div className="w-full max-w-7xl mx-auto mt-4 px-4 hidden md:block">
        <AdBanner type="728x90" />
      </div>
      <div className="w-full max-w-7xl mx-auto mt-4 px-4 block md:hidden">
        <AdBanner type="320x50" />
      </div>

      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default ToolLayout;
