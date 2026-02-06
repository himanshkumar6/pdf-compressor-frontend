import { useState, useRef, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";
import { toast } from "react-hot-toast";

// Initialize worker once
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export const usePdfDocument = () => {
  const [pdfDocument, setPdfDocument] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<File | null>(null);

  const loadPdf = useCallback(async (file: File) => {
    setIsLoading(true);
    fileRef.current = file;
    
    try {
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
