export interface DetectedTextItem {
  id: string;
  text: string;
  x: number;      // viewport pixel coordinates (Left)
  y: number;      // viewport pixel coordinates (Top, converted from PDF bottom-left)
  width: number;  // viewport pixels
  height: number; // viewport pixels
  fontSize: number;
  transform: number[]; // PDF.js transform matrix
}

export interface ActiveEdit {
  id: string;
  page: number;
  x: number;
  y: number;
  text: string;
  fontSize: number;
  width: number;
  height: number;
}
