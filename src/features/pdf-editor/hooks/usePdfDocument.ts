import { useState, useRef, useCallback } from "react";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";
import { toast } from "react-hot-toast";

// Lazy-loaded type
import type * as PdfjsNamespace from "pdfjs-dist";

export const usePdfDocument = () => {
  const [pdfDocument, setPdfDocument] = useState<PdfjsNamespace.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<File | null>(null);

  const loadPdf = useCallback(async (file: File) => {
    if (typeof window === "undefined") return false;
    
    setIsLoading(true);
    fileRef.current = file;
    
    try {
      // ✅ SSR-Safe: Dynamically import and initialize PDF.js
      const pdfjsLib = await import("pdfjs-dist");
      if (!(pdfjsLib as any).GlobalWorkerOptions.workerSrc) {
        (pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfjsWorker;
      }

      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({
        data: buffer,
        cMapUrl: "https://unpkg.com/pdfjs-dist@3.11.174/cmaps/",
        cMapPacked: true
      }).promise;

      setPdfDocument(pdf);
      setNumPages(pdf.numPages);
      return true;
    } catch (error) {
      console.error("Error loading PDF:", error);
      toast.error("Failed to load PDF document.");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setPdfDocument(null);
    setNumPages(0);
    fileRef.current = null;
  }, []);

  return {
    pdfDocument,
    numPages,
    isLoading,
    loadPdf,
    reset,
    file: fileRef.current
  };
};
