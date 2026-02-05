import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle,
  AlertTriangle,
  Download,
  FileText,
  Target,
  TrendingDown,
  RefreshCcw,
} from "lucide-react";
import type { CompressionResult } from "../types";
import { getLanguage, TOOL_UI_LABELS } from "../utils/localization";

type CompressionResultCardProps = {
  result: CompressionResult;
  onTryDifferentLimit?: (newLimit: number) => void;
  onReset?: () => void;
};

const formatSizeKB = (kb: number): string => {
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)}MB`;
  return `${Math.round(kb)}KB`;
};

const getSuggestedLimits = (currentLimit: number): number[] => {
  const allLimits = [200, 300, 500, 700, 1024];
  return allLimits.filter((l) => l > currentLimit).slice(0, 2);
};

const CompressionResultCard: React.FC<CompressionResultCardProps> = ({
  result,
  onTryDifferentLimit,
  onReset,
}) => {
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const t = TOOL_UI_LABELS[lang];

  const isSuccess = result.status === "success";
  const isNotPossible = result.status === "not_possible";
  const suggestedLimits = getSuggestedLimits(result.targetLimitKB);

  const tryHigherLimitMsg =
    lang === "ru"
      ? "Попробуйте лимит выше:"
      : "Try a higher limit for better results:";

  return (
    <div className="space-y-6">
      {/* Status Icon */}
      <div className="flex justify-center">
        {isSuccess ? (
          <CheckCircle className="w-16 h-16 text-cyan-400" />
        ) : (
          <AlertTriangle className="w-16 h-16 text-yellow-400" />
        )}
      </div>

      {/* Warning Banner for not_possible */}
      {isNotPossible && (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl text-center">
          <p className="text-yellow-400 font-semibold text-sm">
            {lang === "ru"
              ? `⚠️ Этот PDF не может быть сжат до ≤${result.targetLimitKB}KB без потери качества.`
              : `⚠️ This PDF cannot reach ≤${result.targetLimitKB}KB without severe quality loss.`}
          </p>
          {result.message && (
            <p className="text-yellow-500/80 text-xs mt-1">{result.message}</p>
          )}
        </div>
      )}

      {/* Summary Card */}
      <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 space-y-4">
        {/* Original Size */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-400">
            <FileText className="w-5 h-5" />
            <span className="text-sm">{t.originalSize}</span>
          </div>
          <span className="text-white font-bold">
            {formatSizeKB(result.originalSizeKB)}
          </span>
        </div>

        {/* Selected Limit */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-400">
            <Target className="w-5 h-5" />
            <span className="text-sm">{t.selectedLimit}</span>
          </div>
          <span className="text-cyan-400 font-bold">
            ≤{formatSizeKB(result.targetLimitKB)}
          </span>
        </div>

        {/* Final Size */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-4">
          <div className="flex items-center gap-3 text-white">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold">{t.finalSize}</span>
          </div>
          <span
            className={`text-xl font-black ${isSuccess ? "text-cyan-400" : "text-yellow-400"
              }`}
          >
            {formatSizeKB(result.finalSizeKB)}
          </span>
        </div>

        {/* Attempts */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-400">
            <RefreshCcw className="w-4 h-4" />
            <span>{t.attempts}</span>
          </div>
          <span className="text-gray-300">{result.attempts}</span>
        </div>

        {/* Saved Percentage */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-400">
            <TrendingDown className="w-4 h-4" />
            <span>{t.saved}</span>
          </div>
          <span className="text-green-400 font-semibold">
            {result.savedPercentage}%
          </span>
        </div>
      </div>

      {/* Download Button */}
      <a
        href={result.downloadUrl}
        download={result.fileName}
        className="btnPrimary w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl"
      >
        <Download className="w-5 h-5" />
        {t.download} ({formatSizeKB(result.finalSizeKB)})
      </a>

      {/* ✅ Phase 5: Internal Link for <200KB Results */}
      {isSuccess && result.finalSizeKB < 200 && (
        <div className="text-center">
          <Link
            to="/compress-pdf-to-100kb"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-300 transition-colors"
          >
            <span>Need it even smaller?</span>
            <span className="underline decoration-gray-700 underline-offset-4 hover:decoration-cyan-500/50">Compress PDF to 100KB</span>
          </Link>
        </div>
      )}

      {/* Try Different Limits (for not_possible) */}
      {isNotPossible && suggestedLimits.length > 0 && onTryDifferentLimit && (
        <div className="space-y-3">
          <p className="text-center text-gray-500 text-sm">
            {tryHigherLimitMsg}
          </p>
          <div className="flex gap-3 justify-center">
            {suggestedLimits.map((limit) => (
              <button
                key={limit}
                onClick={() => onTryDifferentLimit(limit)}
                className="px-5 py-3 rounded-2xl border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition"
              >
                {lang === "ru" ? "До " : "Try ≤"}{formatSizeKB(limit)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Compress Another */}
      {onReset && (
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 text-gray-400 font-semibold rounded-2xl hover:border-gray-600 hover:text-gray-300 transition"
        >
          <RefreshCcw className="w-4 h-4" />
          {t.reset}
        </button>
      )}
    </div>
  );
};

export default CompressionResultCard;
