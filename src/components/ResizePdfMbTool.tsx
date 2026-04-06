import React, { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { showError, showSuccess } from "../utils/hotToast";
import CompressionLimitSelector from "./CompressionLimitSelector";
import CompressionResultCard from "./CompressionResultCard";
import type { CompressionResult, TargetSizeOption } from "../types";
import { getLanguage, TOOL_UI_LABELS } from "../utils/localization";

import {
  Upload,
  FileText,
  Zap,
  Loader2,
  RefreshCcw,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
const API_URL =
  "https://api-pdf-compressor.onrender.com/compress";

const MB_SIZE_OPTIONS: TargetSizeOption[] = [
  { v: 1024, l: "1MB" },
  { v: 2048, l: "2MB" },
  { v: 5120, l: "5MB" },
];

const inflatePdf = async (file: File, targetBytes: number): Promise<Blob> => {
  if (typeof window === "undefined") throw new Error("DOM unavailable");
  const { PDFDocument } = await import("pdf-lib");

  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pdfBytes = await pdfDoc.save();

  const currentBytes = pdfBytes.byteLength;
  const paddingNeeded = targetBytes - currentBytes;

  if (paddingNeeded <= 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Blob([pdfBytes as any], { type: "application/pdf" });
  }

  const paddedBytes = new Uint8Array(currentBytes + paddingNeeded);
  paddedBytes.set(pdfBytes);
  for (let i = 0; i < paddingNeeded; i++) {
    paddedBytes[currentBytes + i] = 0x20; // Padding with spaces
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Blob([paddedBytes as any], { type: "application/pdf" });
};

const ResizePdfMbTool: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetSize, setTargetSize] = useState<number>(1024); // KB internally
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<CompressionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const maxAttempts = 3; // For MB, we allow up to 3 iterative attempts

  const fileInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const t = TOOL_UI_LABELS[lang];

  const formatSize = (bytes: number) => {
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
  };

  const formatSizeLabel = (kb: number): string => {
    if (kb >= 1024) return `${(kb / 1024).toFixed(0)}MB`;
    return `${kb}KB`;
  };

  useEffect(() => {
    return () => {
      if (result?.downloadUrl) URL.revokeObjectURL(result.downloadUrl);
    };
  }, [result]);

  const resetAll = useCallback(() => {
    if (result?.downloadUrl) URL.revokeObjectURL(result.downloadUrl);
    setFile(null);
    setResult(null);
    setError(null);
    setIsProcessing(false);
    setTargetSize(1024);
    setCurrentAttempt(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [result]);

  const handleFileSelect = (f: File | null) => {
    if (!f) return;
    const MAX_SIZE = 15 * 1024 * 1024; // MB tool allows up to 15MB input

    if (f.size > MAX_SIZE) {
      showError(lang === 'ru' ? "Файл слишком большой. Максимум — 15 МБ." : "File is too large. Maximum allowed size is 15 MB.");
      return;
    }
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      showError(t.toastUploadError);
      return;
    }
    setError(null);
    setResult(null);
    setFile(f);
  };

  const runCompressionAttempt = async (fileToUse: File, targetKB: number): Promise<Blob> => {
    const formData = new FormData();
    formData.append("pdf", fileToUse);
    formData.append("size", String(targetKB));

    const res = await fetch(API_URL, { method: "POST", body: formData });
    if (!res.ok) throw new Error("API failure");
    return await res.blob();
  };

  const onCompress = async (overrideTarget?: number) => {
    if (!file || isProcessing) return;

    const selectedKB = overrideTarget ?? targetSize;
    const targetBytes = selectedKB * 1024;

    setIsProcessing(true);
    setError(null);
    setResult(null);
    setCurrentAttempt(1);

    try {
      // 1. "Increase Size" Logic (Padding)
      if (file.size < targetBytes) {
        const inflatedBlob = await inflatePdf(file, targetBytes);

        setResult({
          blob: inflatedBlob,
          originalSizeBytes: file.size,
          originalSizeKB: Math.round(file.size / 1024),
          finalSizeBytes: inflatedBlob.size,
          finalSizeKB: Math.round(inflatedBlob.size / 1024),
          targetLimitKB: selectedKB,
          attempts: 1,
          status: "success",
          savedPercentage: 0,
          fileName: `resized_${formatSizeLabel(selectedKB)}_${file.name}`,
          downloadUrl: URL.createObjectURL(inflatedBlob),
          message: lang === 'ru' ? "Размер файла увеличен до целевого лимита." : "File size increased to reach target limit."
        });
        showSuccess(t.toastDone);
        return;
      }

      // 2. Iterative Resizing
      let currentBlob: Blob | null = null;
      let requestedKB = selectedKB;
      let finalAttemptsUsed = 0;

      for (let i = 1; i <= maxAttempts; i++) {
        setCurrentAttempt(i);
        finalAttemptsUsed = i;

        try {
          const resultBlob = await runCompressionAttempt(file, requestedKB);
          currentBlob = resultBlob;

          // Check if it meets the hard limit
          if (resultBlob.size <= targetBytes) {
            break; // Success!
          }

          // If not met, reduce requested size by 15% for next attempt
          requestedKB = Math.round(requestedKB * 0.85);
        } catch (e) {
          if (i === maxAttempts) throw e; // Last attempt failed
          // Else continue to next attempt
        }
      }

      if (!currentBlob) throw new Error("Processing failed");

      const finalSizeBytes = currentBlob.size;
      const finalSizeKB = Math.round(finalSizeBytes / 1024);
      const originalSizeKB = Math.round(file.size / 1024);
      const status = finalSizeBytes <= targetBytes ? "success" : "not_possible";

      setResult({
        blob: currentBlob,
        originalSizeBytes: file.size,
        originalSizeKB,
        finalSizeBytes,
        finalSizeKB,
        targetLimitKB: selectedKB,
        attempts: finalAttemptsUsed,
        status,
        savedPercentage: Math.max(0, Math.round(((file.size - finalSizeBytes) / file.size) * 100)),
        fileName: `resized_${formatSizeLabel(selectedKB)}_${file.name}`,
        downloadUrl: URL.createObjectURL(currentBlob),
      });

      if (status === "success") showSuccess(t.toastDone);
      else showError(lang === 'ru' ? "Не удалось достичь точного лимита. Показан лучший результат." : "Could not reach exact limit. Best achievable shown.");

    } catch (e) {
      console.error(e);
      setError(t.toastCompressFailed);
      showError(t.toastNetworkError);
    } finally {
      setIsProcessing(false);
      setCurrentAttempt(0);
    }
  };

  const buttonText = lang === "ru"
    ? `Выполнить: до ${formatSizeLabel(targetSize)}`
    : `Resize to ${formatSizeLabel(targetSize)}`;

  return (
    <div className="max-w-225 mx-auto w-full px-4 sm:px-0">
      <div className="bg-(--card) border border-(--border) rounded-[2.5rem] p-6 md:p-10 shadow-(--shadow-card) theme-transition">
        {!file ? (
          <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer border-2 border-dashed border-(--border) hover:border-(--border-hover) rounded-4xl py-24 flex flex-col items-center justify-center bg-(--bg2)">
            <Upload className="w-12 h-12 text-cyan-400 mb-6" />
            <h2 className="text-2xl font-bold text-white">{t.uploadTitle}</h2>
            <p className="text-gray-500 text-sm mt-2">{t.uploadHint} (Max 15MB)</p>
            <input ref={fileInputRef} type="file" accept=".pdf" className="hidden" onChange={(e) => handleFileSelect(e.target.files?.[0] || null)} />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between bg-gray-900/40 p-5 rounded-3xl border border-gray-800">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-bold text-sm truncate max-w-50">{file.name}</p>
                  <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
                </div>
              </div>
              <button onClick={resetAll} disabled={isProcessing} className="p-2 rounded-xl hover:bg-white/5 transition disabled:opacity-50">
                <RefreshCcw className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-xs text-red-400">
                <AlertCircle className="inline w-4 h-4 mr-2" />
                {error}
              </div>
            )}

            {!isProcessing && !result && (
              <>
                <CompressionLimitSelector targetSize={targetSize} onTargetSizeChange={setTargetSize} options={MB_SIZE_OPTIONS} disabled={isProcessing} showSlider={false} />
                <button onClick={() => onCompress()} className="btnPrimary w-full py-6 rounded-3xl">
                  <Zap className="inline w-6 h-6 mr-2" />
                  {buttonText}
                </button>
                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>{lang === "ru" ? "Гарантированный лимит в МБ." : "Strict MB limit enforced."}</span>
                  </div>
                </div>
              </>
            )}

            {isProcessing && (
              <div className="py-12 text-center space-y-4">
                <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto" />
                <p className="text-white font-bold text-lg">{lang === 'ru' ? "Масштабирование PDF..." : "Resizing PDF..."}</p>
                <div className="max-w-xs mx-auto">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${(currentAttempt / maxAttempts) * 100}%` }} />
                  </div>
                  <p className="text-cyan-400 text-sm mt-2 font-semibold">{t.attempt} {currentAttempt}/{maxAttempts}</p>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-bold shadow-lg">
                  <span>🔒 {lang === 'ru' ? 'Цель: до' : 'Target:'} {formatSizeLabel(targetSize)}</span>
                </div>
              </div>
            )}

            {result && (
              <CompressionResultCard result={result} onReset={resetAll} availableOptions={MB_SIZE_OPTIONS} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResizePdfMbTool;
