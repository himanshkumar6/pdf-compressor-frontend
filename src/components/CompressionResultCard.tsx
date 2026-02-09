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
import type { CompressionResult, TargetSizeOption } from "../types";
import {
  getLanguage,
  TOOL_UI_LABELS,
  getLocalizedRouteGuard,
} from "../utils/localization";

type CompressionResultCardProps = {
  result: CompressionResult;
  onTryDifferentLimit?: (newLimit: number) => void;
  onReset?: () => void;
  availableOptions?: TargetSizeOption[];
};

/* ---------------- HELPERS ---------------- */

const formatSizeKB = (kb: number): string => {
  if (kb >= 1024) return `${(kb / 1024).toFixed(1)}MB`;
  return `${Math.round(kb)}KB`;
};

const getSuggestedLimits = (
  currentLimit: number,
  options?: TargetSizeOption[]
): number[] => {
  if (!options) return [];
  return options
    .filter((opt) => opt.v > currentLimit)
    .map((opt) => opt.v)
    .sort((a, b) => a - b)
    .slice(0, 2);
};

/* ---------------- COMPONENT ---------------- */

const CompressionResultCard: React.FC<CompressionResultCardProps> = ({
  result,
  onTryDifferentLimit,
  onReset,
  availableOptions,
}) => {
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const t = TOOL_UI_LABELS[lang];

  const isSuccess = result.status === "success";
  const isNotPossible = result.status === "not_possible";
  const suggestedLimits = getSuggestedLimits(
    result.targetLimitKB,
    availableOptions
  );

  const smallerLimitLink = getLocalizedRouteGuard(
    lang === "ru"
      ? "/ru/szhat-pdf-do-100kb"
      : "/compress-pdf-to-100kb",
    lang
  );

  return (
    <div className="space-y-6">
      {/* Status */}
      <div className="flex justify-center">
        {isSuccess ? (
          <CheckCircle className="w-16 h-16 text-cyan-400" />
        ) : (
          <AlertTriangle className="w-16 h-16 text-yellow-400" />
        )}
      </div>

      {/* Summary */}
      <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 space-y-4">
        <div className="flex justify-between">
          <span>{t.originalSize}</span>
          <span>{formatSizeKB(result.originalSizeKB)}</span>
        </div>

        <div className="flex justify-between">
          <span>{lang === "ru" ? "Цель" : "Target"}</span>
          <span>{formatSizeKB(result.targetLimitKB)}</span>
        </div>

        <div className="flex justify-between border-t pt-4">
          <span>{t.finalSize}</span>
          <span>{formatSizeKB(result.finalSizeKB)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>{t.attempts}</span>
          <span>{result.attempts}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>{t.saved}</span>
          <span>{result.savedPercentage}%</span>
        </div>
      </div>

      {/* Download */}
      <a
        href={result.downloadUrl}
        download={result.fileName}
        className="btnPrimary w-full flex justify-center gap-2"
      >
        <Download className="w-5 h-5" />
        {t.download}
      </a>

      {/* Internal Hint */}
      {isSuccess && result.finalSizeKB < 200 && (
        <div className="text-center">
          <Link to={smallerLimitLink} className="underline">
            {lang === "ru"
              ? "Сжать PDF до 100 КБ"
              : "Compress PDF to 100KB"}
          </Link>
        </div>
      )}

      {/* Reset */}
      {onReset && (
        <button onClick={onReset} className="w-full border p-3 rounded">
          <RefreshCcw className="w-4 h-4 inline mr-2" />
          {t.reset}
        </button>
      )}
    </div>
  );
};

export default CompressionResultCard;
