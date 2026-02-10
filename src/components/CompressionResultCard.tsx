import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle,
  AlertTriangle,
  Download,
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

/* helpers */
const formatSizeKB = (kb: number): string =>
  kb >= 1024 ? `${(kb / 1024).toFixed(1)}MB` : `${Math.round(kb)}KB`;

const CompressionResultCard: React.FC<CompressionResultCardProps> = ({
  result,
  onReset,
}) => {
  const location = useLocation();
  const lang = getLanguage(location.pathname);
  const t = TOOL_UI_LABELS[lang];

  const isSuccess = result.status === "success";

  const smallerLimitLink = getLocalizedRouteGuard(
    lang === "ru"
      ? "/ru/szhat-pdf-do-100kb"
      : "/compress-pdf-to-100kb",
    lang
  );

  return (
    <div className="space-y-6">
      {/* Status icon */}
      <div className="flex justify-center">
        {isSuccess ? (
          <CheckCircle className="w-16 h-16 text-cyan-400" />
        ) : (
          <AlertTriangle className="w-16 h-16 text-yellow-400" />
        )}
      </div>

      {/* Summary */}
      <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-5 sm:p-6 space-y-4 text-sm">
        <div className="flex justify-between items-center gap-4">
          <span className="text-gray-400 shrink-0">{t.originalSize}</span>
          <span className="text-white font-mono">
            {formatSizeKB(result.originalSizeKB)}
          </span>
        </div>

        <div className="flex justify-between items-center gap-4">
          <span className="text-gray-400 shrink-0">
            {lang === "ru" ? "Цель" : "Target"}
          </span>
          <span className="text-white font-mono">
            {formatSizeKB(result.targetLimitKB)}
          </span>
        </div>

        <div className="flex justify-between items-center gap-4 border-t border-gray-800 pt-4">
          <span className="text-gray-300 font-semibold shrink-0">
            {t.finalSize}
          </span>
          <span className="text-cyan-400 font-bold font-mono">
            {formatSizeKB(result.finalSizeKB)}
          </span>
        </div>

        <div className="flex justify-between items-center gap-4">
          <span className="text-gray-400 shrink-0">{t.attempts}</span>
          <span className="text-gray-300">{result.attempts}</span>
        </div>

        <div className="flex justify-between items-center gap-4">
          <span className="text-gray-400 shrink-0">{t.saved}</span>
          <span className="text-green-400 font-semibold">
            {result.savedPercentage}%
          </span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="space-y-4">
        {/* Primary download */}
        <a
          href={result.downloadUrl}
          download={result.fileName}
          className="btnPrimary w-full flex items-center justify-center gap-2 py-4 text-lg rounded-2xl"
        >
          <Download className="w-5 h-5" />
          {t.download}
        </a>

        {/* Secondary suggestion */}
        {isSuccess && result.finalSizeKB < 200 && (
          <div className="text-center">
            <Link
              to={smallerLimitLink}
              className="text-sm text-cyan-400 hover:text-cyan-300 transition underline underline-offset-4"
            >
              {lang === "ru"
                ? "Сжать PDF до 100 КБ"
                : "Compress PDF to 100KB"}
            </Link>
          </div>
        )}

        {/* Divider */}
        {onReset && <div className="border-t border-gray-800" />}

        {/* Tertiary reset */}
        {onReset && (
          <button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition"
          >
            <RefreshCcw className="w-4 h-4" />
            {t.reset}
          </button>
        )}
      </div>
    </div>
  );
};

export default CompressionResultCard;
