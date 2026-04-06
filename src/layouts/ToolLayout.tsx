import React from "react";
import { Outlet } from "react-router-dom";
import ToolHeader from "../components/ui/ToolHeader";

const ToolLayout: React.FC = () => {
  return (
    <div className="py-10 min-h-screen flex flex-col">
      <ToolHeader />
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default ToolLayout;
