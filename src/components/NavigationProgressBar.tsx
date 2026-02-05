import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

const NavigationProgressBar: React.FC = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // ❌ Skip on initial load (strict user requirement)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // ✅ Start Navigation Animation
    setIsVisible(true);
    setProgress(10); // Start slightly visible

    // ⚡ Fast entrance (Premium feel: snappy but smooth)
    const t1 = setTimeout(() => setProgress(40), 50);
    const t2 = setTimeout(() => setProgress(90), 200);

    // 🏁 Finish & Fade out
    const t3 = setTimeout(() => {
      setProgress(100);
      // Fade out after completion
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setProgress(0), 200); // Reset for next time
      }, 300);
    }, 500); // Total duration approx 500ms for that "app-like" feel

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location.pathname]); // Trigger on route change

  if (!isVisible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease-out" }}
    >
      {/* 
        💎 Premium Gen-Z Gradient
        - Cyan (Tech) -> Blue (Trust) -> Violet (Depth)
        - Glow effect added via box-shadow
      */}
      <div
        className="h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 shadow-[0_1px_8px_rgba(34,211,238,0.5)]"
        style={{
          width: `${progress}%`,
          transition: "width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)", // Custom ease for "physics" feel
        }}
      />

      {/* Aurora Shimmer (Subtle moving highlight) */}
      <div
        className="absolute top-0 right-0 h-[3px] w-[100px] bg-white/30 blur-[4px]"
        style={{
          transform: `translateX(${progress}%)`,
          opacity: progress > 90 ? 0 : 1,
        }}
      />
    </div>
  );
};

export default NavigationProgressBar;
