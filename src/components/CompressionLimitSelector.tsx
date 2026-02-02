import React, { useMemo, useCallback } from "react";
import { Lock } from "lucide-react";
import { type TargetSizeOption, SLIDER_SIZE_VALUES } from "../types";

type CompressionLimitSelectorProps = {
  targetSize: number;
  onTargetSizeChange: (size: number) => void;
  options: TargetSizeOption[];
  disabled?: boolean;
  showSlider?: boolean;
};

const formatSizeLabel = (kb: number): string => {
  if (kb >= 1024) return `≤ ${(kb / 1024).toFixed(0)}MB`;
  return `≤ ${kb}KB`;
};

const CompressionLimitSelector: React.FC<CompressionLimitSelectorProps> = ({
  targetSize,
  onTargetSizeChange,
  options,
  disabled = false,
  showSlider = true,
}) => {
  // Find the closest slider index for the current target size
  const sliderIndex = useMemo(() => {
    const idx = SLIDER_SIZE_VALUES.findIndex((v) => v >= targetSize);
    return idx === -1 ? SLIDER_SIZE_VALUES.length - 1 : idx;
  }, [targetSize]);

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const idx = parseInt(e.target.value, 10);
      onTargetSizeChange(SLIDER_SIZE_VALUES[idx]);
    },
    [onTargetSizeChange]
  );

  const handleButtonClick = useCallback(
    (size: number) => {
      if (!disabled) {
        onTargetSizeChange(size);
      }
    },
    [disabled, onTargetSizeChange]
  );

  return (
    <div className="space-y-4">
      {/* Size Buttons */}
      <div
        className={`grid gap-2 ${
          options.length <= 3
            ? "grid-cols-3"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        }`}
      >
        {options.map(({ v, l }) => (
          <button
            key={v}
            onClick={() => handleButtonClick(v)}
            disabled={disabled}
            aria-pressed={targetSize === v}
            aria-label={`Select ${l} limit`}
            className={`py-4 rounded-2xl font-black border-2 transition
              ${
                targetSize === v
                  ? "border-(--accent) text-(--text) bg-(--accent-muted)"
                  : "border-gray-800 text-gray-500 hover:border-gray-600"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Slider */}
      {showSlider && (
        <div className="px-2">
          <input
            type="range"
            min="0"
            max={SLIDER_SIZE_VALUES.length - 1}
            value={sliderIndex}
            onChange={handleSliderChange}
            disabled={disabled}
            aria-label="Compression size limit slider"
            className={`w-full h-2 bg-(--border) rounded-lg appearance-none cursor-pointer
              accent-cyan-500
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>50KB</span>
            <span>1MB</span>
          </div>
        </div>
      )}

      {/* Selected Limit Badge */}
      <div className="flex justify-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-sm font-semibold
            ${
              disabled
                ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                : "bg-gray-900/50 border-gray-700 text-gray-300"
            }
          `}
        >
          {disabled && <Lock className="w-4 h-4" />}
          <span>Selected limit: {formatSizeLabel(targetSize)}</span>
        </div>
      </div>
    </div>
  );
};

export default CompressionLimitSelector;
