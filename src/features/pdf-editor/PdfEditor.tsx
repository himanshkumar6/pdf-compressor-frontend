import React, { useState, useCallback } from "react";
import { Loader2, Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Type as TypeIcon, Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { usePdfDocument } from "./hooks/usePdfDocument";
import PdfCanvas from "./components/PdfCanvas";
import type { ActiveEdit, DetectedTextItem } from "./types";
import FileUploader from "../../components/ui/FileUploader";

const BACKEND_URL = "https://pdf-editor-production-1aa6.up.railway.app/edit-position";

interface PdfEditorProps {
  labels?: {
    noEditsToSave?: string;
    processingPdf?: string;
    pdfSaved?: string;
    saveFailed?: string;
    loadingEngine?: string;
    addText?: string;
    pageOf?: string;
    download?: string;
    newText?: string;
  };
}

const DEFAULT_LABELS = {
  noEditsToSave: "No edits to save",
  processingPdf: "Processing PDF...",
  pdfSaved: "PDF saved!",
  saveFailed: "Save failed. Backend might be down.",
  loadingEngine: "Loading PDF engine...",
  addText: "Add Text",
  pageOf: "Page {current} of {total}",
  download: "Download",
  newText: "New Text",
};

const PdfEditor: React.FC<PdfEditorProps> = ({ labels = DEFAULT_LABELS }) => {
  const t = { ...DEFAULT_LABELS, ...labels };

  const { pdfDocument, numPages, isLoading, loadPdf, file, reset } = usePdfDocument();

  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1.5);

  const [activeEdit, setActiveEdit] = useState<ActiveEdit | null>(null);
  const [customEdits, setCustomEdits] = useState<ActiveEdit[]>([]);
  const [isExporting, setIsExporting] = useState(false);

  // Handlers
  const handleFileSelect = (f: File) => {
    loadPdf(f);
    setCurrentPage(1);
    setZoom(1.5);
    setActiveEdit(null);
    setCustomEdits([]);
  };

  const handleTextClick = useCallback((item: DetectedTextItem) => {
    setActiveEdit({
      id: item.id,
      page: currentPage,
      x: item.x,
      y: item.y,
      text: item.text,
      fontSize: item.fontSize,
      width: item.width,
      height: item.height
    });
  }, [currentPage]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (activeEdit) {
      setActiveEdit(null);
      return;
    }
  };

  const handleAddText = () => {
    const newEdit: ActiveEdit = {
      id: `custom-${Date.now()}`,
      page: currentPage,
      x: 100,
      y: 100,
      text: t.newText,
      fontSize: 18,
      width: 120,
      height: 30
    };
    setCustomEdits(prev => [...prev, newEdit]);
  };

  const updateEdit = (updated: ActiveEdit) => {
    if (updated.id.startsWith("custom-")) {
      setCustomEdits(prev => prev.map(e => e.id === updated.id ? updated : e));
    } else {
      setActiveEdit(updated);
    }
  };

  const deleteEdit = (id: string, isCustom: boolean) => {
    if (isCustom) {
      setCustomEdits(prev => prev.filter(e => e.id !== id));
    } else {
      setActiveEdit(null);
    }
  };

  const handleExport = async () => {
    if (!file || !pdfDocument) return;

    const editsToExport = [
      ...(activeEdit ? [activeEdit] : []),
      ...customEdits
    ];

    if (editsToExport.length === 0) {
      toast.error(t.noEditsToSave);
      return;
    }

    setIsExporting(true);
    const toastId = toast.loading(t.processingPdf);

    try {
      const targetPageNum = editsToExport[0].page;
      const targetPage = await pdfDocument.getPage(targetPageNum);

      const viewport = targetPage.getViewport({ scale: zoom });

      const formData = new FormData();
      formData.append("file", file);

      const firstEdit = editsToExport[0];
      const xPercent = (firstEdit.x / viewport.width) * 100;
      const yPercent = (firstEdit.y / viewport.height) * 100;

      formData.append("page", String(firstEdit.page - 1));
      formData.append("x", String(xPercent));
      formData.append("y", String(yPercent));
      formData.append("text", firstEdit.text);
      formData.append("fontSize", String(firstEdit.fontSize));

      const res = await fetch(BACKEND_URL, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Backend Error");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `edited_${file.name}`;
      a.click();
      URL.revokeObjectURL(url);

      toast.success(t.pdfSaved);
    } catch (e) {
      console.error(e);
      toast.error(t.saveFailed);
    } finally {
      setIsExporting(false);
      toast.dismiss(toastId);
    }
  };

  if (!pdfDocument) {
    return (
      <div className="max-w-3xl mx-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-20">
            <Loader2 className="w-12 h-12 animate-spin text-cyan-600 mb-4" />
            <p className="text-slate-500">{t.loadingEngine}</p>
          </div>
        ) : (
          <FileUploader
            onFileSelect={handleFileSelect}
            maxSizeMB={50}
            labels={{
              clickToUpload: t.loadingEngine.includes("PDF") ? undefined : "Нажмите для загрузки или перетащите файл", // Placeholder for actual RU logic
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">

      {/* ============================= */}
      {/* TOOLBAR - MOBILE FIRST */}
      {/* ============================= */}

      <div
        className="
        bg-(--card)
        rounded-2xl md:rounded-(--surface-radius)
        border border-(--border)
        p-4
        flex flex-col
        gap-4
        md:flex-row md:items-center md:justify-between
        theme-transition
      "
      >

        {/* ===== ROW 1 (Mobile) - Add + Zoom ===== */}
        <div className="flex items-center justify-between md:justify-start md:gap-4 w-full">

          <button
            onClick={handleAddText}
            className="btnSecondary flex items-center gap-2 text-sm md:text-base px-3 py-2"
          >
            <TypeIcon className="w-4 h-4" />
            {t.addText}
          </button>

          <div className="flex items-center gap-2">

            <button
              onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
              className="p-2 rounded-lg hover:bg-(--surface-hover) transition"
            >
              <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <span className="font-mono text-xs md:text-sm w-10 text-center text-(--textBody)">
              {Math.round(zoom * 100)}%
            </span>

            <button
              onClick={() => setZoom(z => Math.min(3.0, z + 0.25))}
              className="p-2 rounded-lg hover:bg-(--surface-hover) transition"
            >
              <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
            </button>

          </div>
        </div>

        {/* ===== ROW 2 - Pagination ===== */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <div className="flex items-center gap-2 bg-(--surface) border border-(--border) rounded-lg px-3 py-1">

            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs md:text-sm font-medium text-(--textBody)">
              {currentPage} / {numPages}
            </span>

            <button
              onClick={() => setCurrentPage(p => Math.min(numPages, p + 1))}
              disabled={currentPage >= numPages}
              className="disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

        {/* ===== ROW 3 - Actions ===== */}
        <div className="flex justify-between md:justify-end items-center gap-3 w-full md:w-auto">

          <button
            onClick={() => reset()}
            className="text-(--textMuted) hover:text-red-500 transition p-2"
          >
            <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <button
            onClick={handleExport}
            disabled={isExporting}
            className="btnPrimary flex items-center gap-2 text-sm md:text-base px-4 py-2"
          >
            {isExporting ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {t.download}
          </button>

        </div>

      </div>

      {/* ============================= */}
      {/* CANVAS AREA */}
      {/* ============================= */}

      <div
        className="
        bg-(--card)
        rounded-2xl md:rounded-(--surface-radius)
        border border-(--border)
        p-2 md:p-6
        overflow-auto
        flex justify-center
        min-h-100 md:min-h-137.5 lg:min-h-162.5
        theme-transition
      "
      >
        <PdfCanvas
          pdfDocument={pdfDocument}
          pageNumber={currentPage}
          zoom={zoom}
          activeEdit={activeEdit}
          customEdits={customEdits.filter(e => e.page === currentPage)}
          onTextClick={handleTextClick}
          onCanvasClick={handleCanvasClick}
          onEditChange={updateEdit}
          onEditDelete={deleteEdit}
        />
      </div>

    </div>
  );
};

export default PdfEditor;
