import React from "react";

interface ToolContainerProps {
  children: React.ReactNode;
  className?: string; // Allow custom classes if absolutely needed
}

const ToolContainer: React.FC<ToolContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
};

export default ToolContainer;
