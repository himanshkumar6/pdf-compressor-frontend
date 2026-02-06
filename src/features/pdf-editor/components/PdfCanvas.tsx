import React from "react";
import { usePdfPage } from "../hooks/usePdfPage";
import type { ActiveEdit, DetectedTextItem } from "../types";
import { Loader2, X } from "lucide-react";

interface PdfCanvasProps {
  pdfDocument: any;
  pageNumber: number;
  zoom: number;
  activeEdit: ActiveEdit | null;
  customEdits: ActiveEdit[];
  onTextClick: (item: DetectedTextItem) => void;
  onCanvasClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onEditChange: (edit: ActiveEdit) => void;
  onEditDelete: (id: string, isCustom: boolean) => void;
}

const PdfCanvas: React.FC<PdfCanvasProps> = ({
  pdfDocument,
  pageNumber,
  zoom,
  activeEdit,
  customEdits,
  onTextClick,
  onCanvasClick,
  onEditChange,
  onEditDelete
}) => {
  const { canvasRef, isRendering, textItems, viewport } = usePdfPage({
    pdfDocument,
    pageNumber,
    scale: zoom
  });

  // Drag interaction logic
  const handleDrag = (e: React.PointerEvent, edit: ActiveEdit) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const initX = edit.x;
    const initY = edit.y;

    const onMove = (ev: PointerEvent) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      onEditChange({ ...edit, x: initX + dx, y: initY + dy });
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <div
      className="relative bg-white shadow-xl rounded-lg mx-auto transition-all duration-200"
      style={{ width: viewport?.width, height: viewport?.height }}
      onMouseDown={onCanvasClick}
    >
      {isRendering && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm rounded-lg">
          <Loader2 className="w-10 h-10 text-cyan-600 animate-spin" />
        </div>
      )}

      <canvas ref={canvasRef} className="block rounded-lg" />

      {/* DETECTED TEXT OVERLAY */}
      <div className="absolute inset-0 z-10">
        {textItems.map((item) => {
          if (activeEdit?.id === item.id) return null; // Hide if being edited
          return (
            <div
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onTextClick(item);
              }}
              className="absolute cursor-text hover:bg-cyan-500/20 border border-transparent hover:border-cyan-500/50 rounded-sm transition-all"
              style={{
                left: item.x,
                top: item.y,
                width: item.width,
                height: item.height,
              }}
              title={item.text}
            />
          );
        })}
      </div>

      {/* EDIT OVERLAY */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Current Active Edit (from detection) */}
        {activeEdit && !activeEdit.id.startsWith("custom-") && (
          <div
            onPointerDown={(e) => handleDrag(e, activeEdit)}
            className="absolute pointer-events-auto bg-white border-2 border-cyan-500 rounded shadow-lg flex items-center p-1 cursor-move"
            style={{
              left: activeEdit.x,
              top: activeEdit.y,
              minWidth: activeEdit.width,
            }}
          >
            <input
              autoFocus
              className="bg-transparent border-none outline-none text-slate-900 font-medium px-1 w-full"
              style={{ fontSize: Math.max(12, activeEdit.fontSize * 1.2) }} // Slight boost for readability
              value={activeEdit.text}
              onChange={(e) => onEditChange({ ...activeEdit, text: e.target.value })}
              onPointerDown={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); onEditDelete(activeEdit.id, false); }}
              className="ml-1 p-1 text-slate-400 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Custom Edits & Active Custom Edit */}
        {customEdits.map((edit) => (
          <div
            key={edit.id}
            onPointerDown={(e) => handleDrag(e, edit)}
            className="absolute pointer-events-auto bg-white border-2 border-green-500 rounded shadow-lg flex items-center p-1 cursor-move"
            style={{
              left: edit.x,
              top: edit.y,
              minWidth: 100,
            }}
          >
            <input
              autoFocus={activeEdit?.id === edit.id} // Auto focus if it's the one we just added?
              className="bg-transparent border-none outline-none text-slate-900 font-medium px-1 w-full"
              style={{ fontSize: 16 }}
              value={edit.text}
              onChange={(e) => onEditChange({ ...edit, text: e.target.value })}
              onPointerDown={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); onEditDelete(edit.id, true); }}
              className="ml-1 p-1 text-slate-400 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfCanvas;
