import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * 💿 Premium System-Level Page Loader
 * 
 * Design: Single thin circular blade, linear rotation.
 * Feel: Native, Calm, "Apple-like".
 * Tech: SVG-based for precision stroke caps. 0 CLS.
 */
const NavigationPageLoader: React.FC = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // ❌ STRICT: Skip first load.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // ✅ Start Navigation
    setShow(true);

    // 🏁 Smooth Dismiss
    // Keep it just long enough to be seen (prevent flickering), then fade.
    const t = setTimeout(() => {
      setShow(false);
    }, 800);

    return () => clearTimeout(t);
  }, [location.pathname]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center 
                 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out"
      style={{ animation: "fadeIn 0.2s ease-out forwards" }}
    >
      {/* 
        🌀 Premium Blade Spinner 
        - SVG for perfect round caps
        - Linear rotation (1.4s)
        - Thin stroke (2px)
      */}
      <svg
        className="w-10 h-10 text-gray-900 dark:text-white animate-spin"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: "1.4s", animationTimingFunction: "linear" }}
      >
        {/* Track (Optional: removing for ultra-minimal "Negative Space" feel as requested) 
            User asked for "Inside the ring: negative space". 
            If track is needed, uncomment below:
            <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" opacity="0.1" /> 
        */}

        {/* Blade / Arc */}
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="35 100" /* ~30% of circle circumference */
        />
      </svg>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default NavigationPageLoader;
