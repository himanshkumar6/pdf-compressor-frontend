import React, { useEffect, useRef, useState } from "react";

export type AdType = "popunder" | "native" | "728x90" | "320x50" | "social";

interface AdBannerProps {
  type: AdType;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ type, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Listen for global processing state to hide ads
  useEffect(() => {
    const handleProcessing = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsProcessing(!!customEvent.detail?.isProcessing);
    };

    window.addEventListener("pdf-processing-state", handleProcessing);
    return () => {
      window.removeEventListener("pdf-processing-state", handleProcessing);
    };
  }, []);

  // Inject Ad scripts
  useEffect(() => {
    if (isProcessing || !containerRef.current) return;

    // Clear previous elements to avoid duplication on re-renders (Strict Mode)
    containerRef.current.innerHTML = "";

    const createScript = (src: string, async = true, extraProps: Record<string, string> = {}) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = async;
      script.type = "text/javascript";
      Object.entries(extraProps).forEach(([k, v]) => script.setAttribute(k, v));
      return script;
    };

    const createInlineScript = (content: string) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = content;
      return script;
    };

    try {
      if (type === "native") {
        containerRef.current.appendChild(
          createScript("https://pl29075309.profitablecpmratenetwork.com/415ceec14ead5dae0400ba814f5e4e83/invoke.js", true, {
            "data-cfasync": "false",
          })
        );
        const div = document.createElement("div");
        div.id = "container-415ceec14ead5dae0400ba814f5e4e83";
        containerRef.current.appendChild(div);
      } else if (type === "728x90") {
        containerRef.current.appendChild(
          createInlineScript(`
            window.atOptions = {
              'key' : '2f1d4508fed22157637d7d122404b0b5',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `)
        );
        containerRef.current.appendChild(
          createScript("https://www.highperformanceformat.com/2f1d4508fed22157637d7d122404b0b5/invoke.js")
        );
      } else if (type === "320x50") {
        containerRef.current.appendChild(
          createInlineScript(`
            window.atOptions = {
              'key' : 'c88cd9660fcbe4cd896faa245b764ad8',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `)
        );
        containerRef.current.appendChild(
          createScript("https://www.highperformanceformat.com/c88cd9660fcbe4cd896faa245b764ad8/invoke.js")
        );
      } else if (type === "social") {
        containerRef.current.appendChild(
          createScript("https://pl29075313.profitablecpmratenetwork.com/df/53/82/df5382ddec8df8db4eddade57d8ddd0a.js")
        );
      } else if (type === "popunder") {
        containerRef.current.appendChild(
          createScript("https://pl29075308.profitablecpmratenetwork.com/24/06/6e/24066e89c0f5bd0534ed309fef91240d.js")
        );
      }
    } catch (err) {
      console.warn("Failed to inject AdBanner:", err);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [type, isProcessing]);

  if (isProcessing) return null;

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center items-center overflow-hidden my-4 min-h-[50px] ${className}`}
    />
  );
};

export default AdBanner;
