import { useState, useRef, useCallback, useEffect } from "react";
import type * as PdfjsNamespace from "pdfjs-dist";
import type { DetectedTextItem } from "../types";

interface UsePdfPageProps {
  pdfDocument: PdfjsNamespace.PDFDocumentProxy | null;
  pageNumber: number; // 1-based
  scale: number;
}

export const usePdfPage = ({ pdfDocument, pageNumber, scale }: UsePdfPageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [viewport, setViewport] = useState<PdfjsNamespace.PageViewport | null>(null);
  const [textItems, setTextItems] = useState<DetectedTextItem[]>([]);
  const [isRendering, setIsRendering] = useState(false);
  
  const renderTaskRef = useRef<PdfjsNamespace.RenderTask | null>(null);

  const renderPage = useCallback(async () => {
    if (!pdfDocument || !canvasRef.current || pageNumber <= 0) return;
    
    // Cancel previous render
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    setIsRendering(true);

    try {
      const page = await pdfDocument.getPage(pageNumber);
      const newViewport = page.getViewport({ scale });
      setViewport(newViewport);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d", { alpha: false });
      
      if (ctx) {
        canvas.height = newViewport.height;
        canvas.width = newViewport.width;

        const renderContext = {
          canvasContext: ctx,
          viewport: newViewport,
        };

        const task = page.render(renderContext as any);
        renderTaskRef.current = task;
        await task.promise;
      }

      // Extract text content
      const textContent = await page.getTextContent();
      const detected: DetectedTextItem[] = [];

      textContent.items.forEach((item: any, idx) => {
        if (!item.str || !item.str.trim()) return;

        const tx = item.transform; // [scaleX, skewY, skewX, scaleY, tx, ty]
        // tx[4] is x, tx[5] is y (pdf coords)
        
        // Approximate font height in PDF units
        // Math.sqrt(scaleX^2 + skewY^2) roughly
        const fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
        
        // Calculate bbox in PDF coords
        // PDF coords: (x, y) is bottom-left of the text baseline usually
        
        // Convert to Viewport pixels
        // [tx, ty] -> viewport x, y
        const [x1, y1] = newViewport.convertToViewportPoint(tx[4], tx[5]);
        // Top-right corner (approx)
        const [x2, y2] = newViewport.convertToViewportPoint(tx[4] + item.width, tx[5] + fontHeight);

        // PDF.js viewport conversion:
        // (0,0) PDF is bottom-left. 
        // convertToViewportPoint returns (x, y) from top-left.
        // So y1 is the baseline's Y in viewport. 
        // y2 is the top's Y in viewport (since y decreases as we go up in PDF, so it decreases in viewport too? Wait. 
        // PDF Y: 0 (bottom) -> 800 (top).
        // Viewport Y: 0 (top) -> 800 (bottom).
        // convert(0,0) -> (0, 800).
        // convert(0, 800) -> (0, 0).
        
        // So y1 (baseline) > y2 (top). 
        // Height is y1 - y2.
        
        // In EditPdf.tsx logic:
        // y: viewport.height - y2 
        // This looks suspicious. If convertToViewportPoint ALREADY converts to top-left based coords, 
        // checking `newViewport.height - y2` effectively flips it AGAIN?
        
        // Let's use standard logic first: 
        // x = min(x1, x2)
        // y = min(y1, y2)
        // w = abs(x2 - x1)
        // h = abs(y2 - y1)
        
        // However, I will preserve the logic from EditPdf.tsx for now but annotated.
        // Actually, let's fix it.
        // x1, y1 is transform origin (start of text).
        // y1 is strictly the converted Y.
        
        const rectX = Math.min(x1, x2);
        const rectY = Math.min(y1, y2);
        const rectW = Math.abs(x2 - x1);
        const rectH = Math.abs(y2 - y1);
        
        // Refined detection
        detected.push({
          id: `text-${pageNumber}-${idx}`,
          text: item.str,
          x: rectX,
          y: rectY, 
          width: rectW,
          height: rectH,
          fontSize: fontHeight * scale, // Scale font size too
          transform: tx
        });
      });

      setTextItems(detected);

    } catch (error: any) {
      if (error?.name !== "RenderingCancelledException") {
        console.error("Render Page Error", error);
      }
    } finally {
      setIsRendering(false);
    }
  }, [pdfDocument, pageNumber, scale]);

  useEffect(() => {
    renderPage();
    return () => {
      if (renderTaskRef.current) {
         renderTaskRef.current.cancel();
      }
    };
  }, [renderPage]);

  return {
    canvasRef,
    viewport,
    textItems,
    isRendering
  };
};
