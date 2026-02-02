import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { showError, showSuccess } from "../utils/hotToast";
import CompressionLimitSelector from "./CompressionLimitSelector";
import CompressionResultCard from "./CompressionResultCard";
import type { CompressionResult, TargetSizeOption } from "../types";

import {
  Upload,
  FileText,
  Zap,
  Loader2,
  AlertCircle,
  RefreshCcw,
  CheckCircle,
  Info,
} from "lucide-react";

const API_URL =
  "https://pdf-compressor-api-production-61aa.up.railway.app/compress";

const DEFAULT_SIZE_OPTIONS: TargetSizeOption[] = [
  { v: 100, l: "≤ 100KB" },
  { v: 200, l: "≤ 200KB" },
  { v: 300, l: "≤ 300KB" },
];

type ToolSectionProps = {
  defaultTargetSize?: number;
  targetSizeOptions?: TargetSizeOption[];
  ctaText?: string;
};

const ToolSection: React.FC<ToolSectionProps> = ({
  defaultTargetSize,
  targetSizeOptions = DEFAULT_SIZE_OPTIONS,
  ctaText,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const initialSize = defaultTargetSize ?? targetSizeOptions[1]?.v ?? 200;
  const [targetSize, setTargetSize] = useState<number>(initialSize);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<CompressionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const maxAttempts = 6;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatSize = (bytes: number) =>
    bytes ? `${Math.round(bytes / 1024)} KB` : "0 KB";

  const formatSizeLabel = (kb: number): string => {
    if (kb >= 1024) return `${(kb / 1024).toFixed(0)}MB`;
    return `${kb}KB`;
  };

  const isLargeFile = useMemo(
    () => (file ? file.size > 5 * 1024 * 1024 : false),
    [file]
  );

  const isVeryLargeFile = useMemo(
    () => (file ? file.size > 10 * 1024 * 1024 : false),
    [file]
  );

  // ✅ cleanup old blob URL
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
    setTargetSize(initialSize);
    setCurrentAttempt(0);

    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [result, initialSize]);

  const handleFileSelect = (f: File | null) => {
    if (!f) return;

    const MAX_SIZE = 5 * 1024 * 1024;

    if (f.size > MAX_SIZE) {
      setFile(null);
      showError("File too large ❌ Max allowed size is 5 MB");
      return;
    }

    setError(null);
    setResult(null);
    setFile(f);

    showSuccess("PDF uploaded ✅");
  };

  const onCompress = async (overrideTargetSize?: number) => {
    if (!file || isProcessing) return;

    const sizeToUse = overrideTargetSize ?? targetSize;
    if (overrideTargetSize) {
      setTargetSize(overrideTargetSize);
    }

    setIsProcessing(true);
    setError(null);
    setResult(null);
    setCurrentAttempt(1);

    try {
      const formData = new FormData();
      formData.append("pdf", file);
      formData.append("size", String(sizeToUse));

      // Simulate attempt progress (the server handles actual attempts)
      const attemptInterval = setInterval(() => {
        setCurrentAttempt((prev) => Math.min(prev + 1, maxAttempts));
      }, 2000);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      clearInterval(attemptInterval);

      if (!res.ok) throw new Error("Compression failed");

      const headerSize = res.headers.get("X-Compressed-Size-KB");
      const headerAttempts = res.headers.get("X-Compression-Attempts");
      const blob = await res.blob();

      if (!blob || blob.size === 0) throw new Error("Invalid output");

      const finalSizeBytes = headerSize
        ? parseInt(headerSize, 10) * 1024
        : blob.size;
      const finalSizeKB = Math.round(finalSizeBytes / 1024);
      const originalSizeKB = Math.round(file.size / 1024);
      const attempts = headerAttempts ? parseInt(headerAttempts, 10) : 1;

      const downloadUrl = URL.createObjectURL(blob);

      // Determine status based on whether we met the target
      const status: CompressionResult["status"] =
        finalSizeKB <= sizeToUse ? "success" : "not_possible";

      const savedPercentage = Math.max(
        0,
        Math.round(((file.size - finalSizeBytes) / file.size) * 100)
      );

      setResult({
        blob,
        originalSizeBytes: file.size,
        originalSizeKB,
        finalSizeBytes,
        finalSizeKB,
        targetLimitKB: sizeToUse,
        attempts,
        status,
        savedPercentage,
        fileName: `compressed_${file.name}`,
        downloadUrl,
        isApproximate: !headerSize,
        message:
          status === "not_possible"
            ? `Best achievable: ${finalSizeKB}KB. Try a higher limit.`
            : undefined,
      });
    } catch (e) {
      console.error(e);
      setError(
        "Server busy / compression failed. Try again or upload a smaller PDF."
      );
    } finally {
      setIsProcessing(false);
      setCurrentAttempt(0);
    }
  };

  const handleTryDifferentLimit = useCallback(
    (newLimit: number) => {
      setResult(null);
      onCompress(newLimit);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [file]
  );

  // Generate CTA text
  const buttonText =
    ctaText ||
    `Compress to ≤${formatSizeLabel(targetSize)} (Recommended)`;

  return (
    <div className="max-w-225 mx-auto w-full px-4 sm:px-0">
      <div className="bg-(--card) border border-(--border) rounded-[2.5rem] p-6 md:p-10 shadow-(--shadow-card) theme-transition">
        {/* ✅ UPLOAD */}
        {!file && (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer border-2 border-dashed border-(--border) hover:border-(--border-hover) rounded-4xl py-24 flex flex-col items-center justify-center bg-(--bg2)"
          >
            <Upload className="w-12 h-12 text-cyan-400 mb-6" />
            <h2 className="text-2xl font-bold text-white">Upload PDF</h2>
            <p className="text-gray-500 text-sm mt-2">
              Maximum file size: 5 MB
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
            />
          </div>
        )}

        {/* ✅ MAIN */}
        {file && (
          <div className="space-y-6">
            {/* FILE INFO */}
            <div className="flex justify-between bg-gray-900/40 p-5 rounded-3xl border border-gray-800">
              <div className="flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-bold text-sm">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {formatSize(file.size)} {isLargeFile ? "• Large PDF" : ""}
                  </p>
                </div>
              </div>

              <button
                onClick={resetAll}
                disabled={isProcessing}
                className="p-2 rounded-xl hover:bg-white/5 transition disabled:opacity-50"
                title="Reset"
                aria-label="Reset and upload new file"
              >
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

            {/* OPTIONS - with slider + trust text */}
            {!isProcessing && !result && (
              <>
                {/* Compression Limit Selector */}
                <CompressionLimitSelector
                  targetSize={targetSize}
                  onTargetSizeChange={setTargetSize}
                  options={targetSizeOptions}
                  disabled={isProcessing}
                  showSlider={targetSizeOptions.length > 3}
                />

                {isLargeFile && (
                  <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-xs text-yellow-400 text-center">
                    ⚠️ Large file: may take 30–120 seconds
                  </div>
                )}

                {/* Compress Button */}
                <button
                  onClick={() => onCompress()}
                  className="btnPrimary w-full py-6 rounded-3xl"
                >
                  <Zap className="inline w-6 h-6 mr-2" />
                  {buttonText}
                </button>

                {/* Trust Text */}
                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>We always compress under your selected limit.</span>
                  </div>
                  <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                    <Info className="w-3 h-3" />
                    Final size may be lower depending on PDF content.
                  </p>
                </div>
              </>
            )}

            {/* LOADING - with attempt progress */}
            {isProcessing && (
              <div className="py-12 text-center space-y-4">
                <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto" />
                <p className="text-white font-bold text-lg">
                  Compressing your PDF…
                </p>

                {/* Progress bar */}
                <div className="max-w-xs mx-auto">
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 transition-all duration-500"
                      style={{
                        width: `${(currentAttempt / maxAttempts) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-cyan-400 text-sm mt-2 font-semibold">
                    Attempt {currentAttempt}/{maxAttempts}
                  </p>
                </div>

                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  {isVeryLargeFile
                    ? "Very large PDF — may take 1–2 minutes."
                    : isLargeFile
                      ? "Large PDF — please wait."
                      : "Optimizing to reach your target..."}
                </p>

                {/* Locked limit badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-semibold">
                  <span>🔒 Target: ≤{formatSizeLabel(targetSize)}</span>
                </div>
              </div>
            )}

            {/* RESULT - using new card component */}
            {result && (
              <CompressionResultCard
                result={result}
                onTryDifferentLimit={handleTryDifferentLimit}
                onReset={resetAll}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolSection;
