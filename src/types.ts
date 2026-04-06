export interface CompressionResult {
  blob: Blob;
  originalSizeBytes: number;
  originalSizeKB: number;
  finalSizeBytes: number;
  finalSizeKB: number;
  targetLimitKB: number;
  attempts: number;
  status: "success" | "not_possible" | "skipped";
  message?: string;
  savedPercentage: number;
  fileName: string;
  downloadUrl: string;
  isApproximate?: boolean;
  pdfType?: "TEXT" | "SCANNED" | "MIXED";
  engineUsed?: "OPTIMIZE" | "REBUILD";
}

export type CompressionStatus = "success" | "not_possible" | "skipped";

export type CompressionMode = "low" | "balanced" | "high";

export interface CompressionProgress {
  step: "analyzing" | "rendering" | "rebuilding" | "finalizing";
  currentPage: number;
  totalPages: number;
  currentAttempt?: number;
  maxAttempts?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type TargetSizeOption = { 
  v: number; 
  l: string; 
};

export const DEFAULT_SIZE_OPTIONS: TargetSizeOption[] = [
  { v: 50, l: "≤ 50KB" },
  { v: 100, l: "≤ 100KB" },
  { v: 150, l: "≤ 150KB" },
  { v: 200, l: "≤ 200KB" },
  { v: 300, l: "≤ 300KB" },
  { v: 500, l: "≤ 500KB" },
  { v: 700, l: "≤ 700KB" },
  { v: 1024, l: "≤ 1MB" },
];

export const SLIDER_SIZE_VALUES = [50, 100, 150, 200, 300, 500, 700, 1024];
