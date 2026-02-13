import React, { useState } from "react";
import {
  Upload, Download, Loader2, Trash2, GripVertical, FileText,
  ShieldCheck, Zap, HelpCircle, Laptop, Monitor, Smartphone
} from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";
import { safeLoadLibrary } from "../utils/lazyImport";
import ToolErrorBoundary from "../components/ToolErrorBoundary";
import { DragDropContext, Droppable, Draggable, type DropResult, type DraggableProvided } from "@hello-pangea/dnd";

const UniqueSEOContent = () => (
  <div className="space-y-12 text-gray-700 dark:text-gray-300 mt-16 max-w-5xl mx-auto">
    {/* Hero Section Content */}
    <section className="bg-(--card) p-8 md:p-12 rounded-(--surface-radius) border border-(--border) shadow-theme backdrop-blur-sm theme-transition relative overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-black text-(--textHeading) mb-6 leading-tight tracking-tight uppercase italic">
        Professional <span className="text-blue-500">PDF Merger</span>: Combine Files Instantly
      </h2>
      <p className="leading-relaxed mb-8 text-lg text-(--textBody) max-w-3xl font-medium">
        Tired of searching for <strong>"how to merge pdf documents in preview"</strong> or struggling with complex software? Our online tool is the easiest way to <strong>merge pdf documents on acrobat</strong> alternative platforms. Whether you need to <strong>merge pdf on mac</strong> or looking for a <strong>linux merge pdf</strong> solution, our browser-based engine handles everything locally with enterprise-grade security.
      </p>
      <div className="flex flex-wrap gap-3">
        {['Secure SSL', 'No File Limit', 'Batch Processing', 'Privacy Focused'].map((tag) => (
          <span key={tag} className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-700 dark:text-blue-400 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </section>

    {/* Platform Features Grid */}
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Mac & Apple Optimized",
          desc: "Perfect for users asking <strong>how to merge pdf files mac</strong>. No need to open Preview; just drag, reorder, and combine your files in seconds.",
          icon: Laptop,
          color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10"
        },
        {
          title: "Privacy Protected",
          desc: "Your documents never touch our servers. Unlike other online mergers, we process your <strong>mail merge pdf</strong> tasks 100% locally.",
          icon: ShieldCheck,
          color: "text-green-600 bg-green-50 dark:bg-green-500/10"
        },
        {
          title: "Cross-Platform",
          desc: "Works seamlessly across <strong>Windows, macOS, and Linux</strong>. Use it as a lightweight <strong>foxit merge pdf</strong> alternative without installation.",
          icon: Monitor,
          color: "text-cyan-600 bg-cyan-50 dark:bg-cyan-500/10"
        }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-(--card) rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-2 transition-all duration-300">
          <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
            <item.icon className="w-7 h-7" />
          </div>
          <h3 className="font-extrabold text-(--textHeading) mb-3 tracking-tight text-xl italic uppercase">{item.title}</h3>
          <p className="text-sm text-(--textBody) leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
        </div>
      ))}
    </section>

    {/* Search Intent FAQ Section */}
    <section className="space-y-10">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-black text-(--textHeading) tracking-tighter italic uppercase">Help & FAQ</h3>
        <p className="text-(--textMuted) font-bold italic uppercase text-xs tracking-widest">Mastering your PDF workflow</p>
      </div>
      <div className="grid gap-6">
        {[
          {
            q: "How to merge two pdf files into one on mac?",
            a: "Simply upload both files to our tool, drag them into your desired order, and click 'Merge'. It's faster than using <strong>Preview</strong> and keeps your formatting intact."
          },
          {
            q: "Can I perform a mail merge pdf document task?",
            a: "Yes! Our tool is robust enough to handle combined <strong>mail merge pdf documents</strong>, allowing you to organize large batches of certificates or invoices into one single file."
          },
          {
            q: "Is it safe to merge sensitive medical or legal PDFs?",
            a: "Absolutely. Since the tool works <strong>client-side</strong>, your files are never uploaded to the internet. Your privacy is our top priority."
          }
        ].map((faq, i) => (
          <div key={i} className="p-8 bg-white dark:bg-gray-900/40 rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition group">
            <h4 className="font-bold text-(--textHeading) mb-3 flex items-start gap-4 text-xl group-hover:text-blue-500 transition-colors italic">
              <span className="text-blue-500 font-black shrink-0 uppercase">Q.</span> {faq.q}
            </h4>
            <p className="text-base text-(--textBody) leading-relaxed pl-9 border-l-4 border-blue-500/10" dangerouslySetInnerHTML={{ __html: faq.a }} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

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
      alert("Failed to merge PDFs.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto px-4">

        {/* Upload Area */}
        <div
          className="
        relative
        flex flex-col items-center justify-center text-center
        min-h-[220px] md:min-h-[260px]
        p-6 md:p-8
        border-2 border-dashed border-(--border)
        bg-(--card)
        hover:border-blue-500/40
        hover:bg-blue-500/5
        transition-all
        rounded-2xl
        cursor-pointer
        group
        theme-transition
      "
        >
          <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />

          {/* Icon */}
          <div
            className="
          w-14 h-14 md:w-16 md:h-16
          bg-(--bg)
          rounded-xl
          flex items-center justify-center
          border border-(--border)
          mb-4
          transition-transform
          group-hover:scale-105
        "
          >
            <Upload className="w-6 h-6 md:w-7 md:h-7 text-blue-500" />
          </div>

          {/* Heading */}
          <h3
            className="
          text-lg md:text-xl
          font-semibold
          text-(--textHeading)
          leading-snug
        "
          >
            Add PDF Files
          </h3>

          {/* Subtitle */}
          <p
            className="
          text-sm
          text-(--textMuted)
          mt-1
          leading-relaxed
        "
          >
            Combine multiple documents instantly
          </p>
        </div>


        {files.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="pdf-list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3 mb-8">
                  {files.map((file, index) => (
                    <Draggable key={file.id} draggableId={file.id} index={index}>
                      {(provided: DraggableProvided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} className="flex items-center gap-3 bg-(--card) border border-(--border) p-4 rounded-2xl shadow-sm group hover:border-blue-500/30 transition-all">
                          <div {...provided.dragHandleProps} className="text-gray-600 cursor-grab hover:text-blue-400 p-1 italic"><GripVertical className="w-5 h-5" /></div>
                          <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20"><FileText className="w-5 h-5 text-blue-400" /></div>
                          <div className="grow min-w-0">
                            <p className="text-sm font-bold text-(--textHeading) truncate italic uppercase tracking-tighter">{file.file.name}</p>
                            <p className="text-xs text-(--textMuted)">{(file.file.size / 1024).toFixed(0)} KB • Order: {index + 1}</p>
                          </div>
                          <button onClick={() => removeFile(file.id)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"><Trash2 className="w-4 h-4" /></button>
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
          <button onClick={mergePdfs} disabled={isProcessing} className="w-full py-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-lg shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 uppercase tracking-widest italic">
            {isProcessing ? <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</> : <><Download className="w-6 h-6" /> Merge & Download</>}
          </button>
        )}
      </div>
      <UniqueSEOContent />
    </div>
  );
};

const MergePdf: React.FC<{ routeKey?: string }> = ({ routeKey = "/merge-pdf" }) => (
  <ToolErrorBoundary toolName="Merge PDF">
    <ToolLandingPage
      routeKey={routeKey}
      heading={<span className="text-(--textHeading) font-black italic uppercase tracking-tighter">Merge <span className="text-blue-500 underline decoration-blue-500/30">PDF</span> Documents</span>}
      tagline="How to merge PDF files on Mac, Windows, and Linux easily and securely."
    >
      <MergePdfContent />
    </ToolLandingPage>
  </ToolErrorBoundary>
);

export default MergePdf;