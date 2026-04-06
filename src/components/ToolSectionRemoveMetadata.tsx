import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Upload,
  FileText,
  Loader2,
  AlertCircle,
  Download,
  Shield,
  RefreshCcw,
} from "lucide-react";

import PdfMetadataPanel from "./PdfMetadataPanel";
import { extractPdfMetadata } from "../utils/pdfMetadata";
import type { PdfMetadata } from "../utils/pdfMetadata";
import { getLanguage, TOOL_UI_LABELS } from "../utils/localization";

import toast from "react-hot-toast";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const ToolSectionRemoveMetadata: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const [beforeMeta, setBeforeMeta] = useState<PdfMetadata | null>(null);
  const [afterMeta, setAfterMeta] = useState<PdfMetadata | null>(null);

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [cleanBlobUrl, setCleanBlobUrl] = useState<string | null>(null);
  const [cleanFileName, setCleanFileName] = useState<string>("no-metadata.pdf");

  const inputRef = useRef<HTMLInputElement>(null);

  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const t = TOOL_UI_LABELS[lang];

  const fileSizeLabel = useMemo(() => {
    if (!file) return "";
    return `${Math.round(file.size / 1024)} KB`;
  }, [file]);

  useEffect(() => {
    return () => {
      if (cleanBlobUrl) URL.revokeObjectURL(cleanBlobUrl);
    };
  }, [cleanBlobUrl]);

  const resetAll = () => {
    if (cleanBlobUrl) URL.revokeObjectURL(cleanBlobUrl);

    setFile(null);
    setBeforeMeta(null);
    setAfterMeta(null);
    setCleanBlobUrl(null);
    setError(null);
    setIsProcessing(false);

    if (inputRef.current) inputRef.current.value = "";
  };

  const handlePickFile = async (f: File | null) => {
    if (!f) return;

    // only pdf
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      toast.error(t.toastUploadError);
      return;
    }

    // size check
    if (f.size > MAX_SIZE) {
      toast.error(t.toastTooLarge);
      setError(t.toastTooLarge);
      setFile(null);
      return;
    }

    toast.success(t.toastDone);

    setError(null);
    setFile(f);
    setAfterMeta(null);
    setCleanBlobUrl(null);

    try {
      const meta = await extractPdfMetadata(f);
      setBeforeMeta(meta);
    } catch {
      setBeforeMeta(null);
      setError("Unable to read metadata from this PDF."); // Not in dictionary, maybe generic error?
      toast.error(t.toastUploadError); // Fallback
    }
  };

  const onRemove = async () => {
    if (!file || isProcessing) return;

    setIsProcessing(true);
    setError(null);

    try {
      if (typeof window === "undefined") throw new Error("DOM unavailable");
      const { PDFDocument } = await import("pdf-lib");

      setAfterMeta(null);

      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);

      // remove metadata (lossless)
      pdfDoc.setTitle("");
      pdfDoc.setAuthor("");
      pdfDoc.setSubject("");
      pdfDoc.setKeywords([]);
      pdfDoc.setCreator("");

      // Keep producer ORIGINAL (as you said)
      // pdfDoc.setProducer(""); ❌

      pdfDoc.setCreationDate(new Date(0));
      pdfDoc.setModificationDate(new Date(0));

      const out = await pdfDoc.save({ useObjectStreams: true });

      const cleanedBlob = new Blob([new Uint8Array(out)], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(cleanedBlob);
      if (cleanBlobUrl) URL.revokeObjectURL(cleanBlobUrl);
      setCleanBlobUrl(url);

      const safeBase = file.name.replace(/\.pdf$/i, "");
      const newName = `${safeBase}-no-metadata.pdf`;
      setCleanFileName(newName);

      const cleanedFile = new File([cleanedBlob], newName, {
        type: "application/pdf",
      });

      const metaAfter = await extractPdfMetadata(cleanedFile);
      setAfterMeta(metaAfter);

      toast.success(t.metadataRemoved);
    } catch (e) {
      console.error(e);
      setError(t.toastCompressFailed); // Generic error fallback
      toast.error(t.toastNetworkError);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      {/* Tool Card */}
      <div className="rounded-[2.5rem] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] theme-transition overflow-hidden">
        {/* Header Bar */}
        <div className="p-6 md:p-8 border-b border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-cyan-300" />
            </div>

            <div>
              <h2 className="text-[var(--textHeading)] font-black text-xl">
                {t.removeMetadataTitle}
              </h2>
              <p className="text-[var(--textMuted)] text-sm">
                {t.removeMetadataDesc}
              </p>
            </div>
          </div>

          <button
            onClick={resetAll}
            className="p-3 rounded-2xl bg-[var(--color-bg-hover)] border border-[var(--border)] hover:border-[var(--border-hover)] transition cursor-pointer"
            title={t.reset}
          >
            <RefreshCcw className="w-5 h-5 text-[var(--textBody)]" />
          </button>
        </div>

        {/* Main */}
        <div className="p-6 md:p-8 space-y-8">
          {/* File Upload Row */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf"
                onChange={(e) => handlePickFile(e.target.files?.[0] || null)}
                className="hidden"
              />

              <button
                onClick={() => inputRef.current?.click()}
                className="cursor-pointer px-5 py-3 rounded-2xl font-black bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--pill-text)] hover:bg-[var(--card-hover)] transition"
              >
                <Upload className="inline w-5 h-5 mr-2" />
                {t.chooseFile}
              </button>

              {file ? (
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <FileText className="w-4 h-4 text-cyan-300" />
                  <span className="font-bold">{file.name}</span>
                  <span className="text-gray-500">• {fileSizeLabel}</span>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  {t.uploadHint2.split('. ')[0]}
                </p>
              )}
            </div>

            <button
              onClick={onRemove}
              disabled={!file || isProcessing}
              className="btnPrimary px-6 py-3 rounded-2xl"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="inline w-5 h-5 mr-2 animate-spin" />
                  {t.removingMetadata}
                </>
              ) : (
                <>
                  <Shield className="inline w-5 h-5 mr-2" />
                  {t.removeMetadataTitle}
                </>
              )}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/25 rounded-2xl text-sm text-red-300">
              <AlertCircle className="inline w-4 h-4 mr-2" />
              {error}
            </div>
          )}

          {/* ✅ BEFORE/AFTER PANELS */}
          <PdfMetadataPanel beforeMeta={beforeMeta} afterMeta={afterMeta} />

          {/* Download */}
          {cleanBlobUrl && (
            <a
              href={cleanBlobUrl}
              download={cleanFileName}
              className="btnPrimary inline-flex items-center justify-center gap-2 w-full py-5 rounded-3xl
  bg-linear-to-r from-cyan-500 to-blue-500
  hover:from-cyan-400 hover:to-blue-400 transition
  shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >

              <Download className="w-5 h-5" />
              {t.downloadClean}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolSectionRemoveMetadata;
