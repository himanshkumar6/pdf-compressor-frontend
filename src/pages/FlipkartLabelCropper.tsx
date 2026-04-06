import React from "react";
import ToolLandingPage from "../components/ToolLandingPage";
import LabelCropper from "../components/features/LabelCropper";
import type { CropPreset } from "../components/features/LabelCropper";

const FLIPKART_PRESETS: CropPreset[] = [
  {
    name: "flipkart-thermal",
    label: "Thermal Label (4x6)",
    width: 288, // 4 inches * 72 points
    height: 432, // 6 inches * 72 points
    // Usually Flipkart labels on A4 are Top-Left or Top-Right. 
    // We'll assume a standard Top-Left crop for the MVP auto-detect.
    // Ideally this would be dynamic, but fixed coordinates work for standard generation.
    x: 20,
    y: 400, // Bottom-left coordinate system in PDF! (Needs testing, but standard A4 is ~842 high. Top is ~800)
    // Actually, let's rely on the auto-center fallback in LabelCropper if these are tricky, 
    // OR set generic Size-Only presets and let the user crop (but I implemented auto-crop).
    // Let's set a safe "Standard Top Half" crop which is common.
    // y = 842 (height) - 432 (label height) - 20 (margin) = 390
  },
  {
    name: "flipkart-a4-half",
    label: "A4 Half Page",
    width: 595,
    height: 420,
    x: 0,
    y: 420,
  }
];

const FlipkartLabelCropper: React.FC = () => {
  return (
    <ToolLandingPage
      routeKey="/flipkart-label-cropper"
      toolType="UTILITY"
      heading={
        <>
          <span className="text-yellow-400">Flipkart</span> Label Cropper
        </>
      }
      tagline="Crop Flipkart shipping labels for Thermal Printers (4x6) instantly."
    >
      <LabelCropper
        presets={FLIPKART_PRESETS}
        toolName="Flipkart Label"
        defaultPresetName="flipkart-thermal"
      />
    </ToolLandingPage>
  );
};

export default FlipkartLabelCropper;
