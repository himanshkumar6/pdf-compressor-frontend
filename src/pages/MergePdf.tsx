import React, { useState } from "react";
import { Upload, Download, Loader2, Trash2, GripVertical, FileText } from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";
import { safeLoadLibrary } from "../utils/lazyImport";
import ToolErrorBoundary from "../components/ToolErrorBoundary";
import { DragDropContext, Droppable, Draggable, type DropResult, type DraggableProvided } from "@hello-pangea/dnd";

type PdfFile = {
  id: string;
  file: File;
  pageCount: number;
};

const MergePdfContent: React.FC = () => {
  const [files, setFiles] = useState<PdfFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: PdfFile[] = [];

      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        if (file.type !== "application/pdf") continue;

        const id = `${file.name}-${Date.now()}-${Math.random()}`;
        newFiles.push({ id, file, pageCount: 0 });
      }

      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(files);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFiles(items);
  };

  const removeFile = (id: string) => {
    setFiles(files.filter(f => f.id !== id));
  };

  const mergePdfs = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files to merge.");
      return;
    }

    setIsProcessing(true);

    try {
      const { PDFDocument } = await safeLoadLibrary(() => import("pdf-lib"), "pdf-lib");

      const mergedPdf = await PDFDocument.create();

      for (const pdfFile of files) {
        const arrayBuffer = await pdfFile.file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes as BlobPart], { type: "application/pdf" });

      const fileSaverModule = await safeLoadLibrary<any>(() => import("file-saver"), "file-saver");
      const saveAs = fileSaverModule.saveAs || fileSaverModule.default || fileSaverModule;

      saveAs(blob, "merged-document.pdf");

    } catch (error) {
      console.error("Merge failed:", error);
      alert("Failed to merge PDFs. One of the files might be corrupted.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center border-2 border-dashed border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer relative group rounded-3xl p-10 bg-(--bg2)">
          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="mx-auto w-16 h-16 bg-(--bg) rounded-full flex items-center justify-center mb-4 shadow-lg border border-white/5">
            <Upload className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Add PDF Files</h3>
          <p className="text-sm text-gray-500">Combine multiple marksheets or certificates</p>
        </div>

        {files.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="pdf-list">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-3 mb-8"
                >
                  {files.map((file, index) => (
                    <Draggable key={file.id} draggableId={file.id} index={index}>
                      {(provided: DraggableProvided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center gap-3 bg-(--card) border border-(--border) p-4 rounded-2xl shadow-sm group hover:border-blue-500/30 transition-all"
                        >
                          <div {...provided.dragHandleProps} className="text-gray-600 cursor-grab hover:text-blue-400 p-1">
                            <GripVertical className="w-5 h-5" />
                          </div>

                          <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
                            <FileText className="w-5 h-5 text-blue-400" />
                          </div>

                          <div className="grow min-w-0">
                            <p className="text-sm font-bold text-(--text) truncate">{file.file.name}</p>
                            <p className="text-xs text-gray-500">{(file.file.size / 1024).toFixed(0)} KB • Order: {index + 1}</p>
                          </div>

                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}

        {files.length >= 2 && (
          <button
            onClick={mergePdfs}
            disabled={isProcessing}
            className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Processing PDFs...
              </>
            ) : (
              <>
                <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                Merge PDFs & Download
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const MergePdf: React.FC<{ routeKey?: string }> = ({ routeKey = "/merge-pdf" }) => (
  <ToolErrorBoundary toolName="Merge PDF">
    <ToolLandingPage
      routeKey={routeKey}
      heading={<>Merge <span className="text-blue-400">PDF</span> Documents</>}
      tagline="Combine certificates and forms effortlessly • Private • Fast"
    >
      <MergePdfContent />
    </ToolLandingPage>
  </ToolErrorBoundary>
);

export default MergePdf;
