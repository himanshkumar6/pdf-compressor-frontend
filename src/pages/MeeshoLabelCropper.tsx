import React from "react";
import ToolLandingPage from "../components/ToolLandingPage";
import LabelCropper from "../components/features/LabelCropper";
import type { CropPreset } from "../components/features/LabelCropper";

const MEESHO_PRESETS: CropPreset[] = [
  {
    name: "meesho-thermal",
    label: "Thermal Label (4x6)",
    width: 288, // 4 inches * 72
    height: 432, // 6 inches * 72
    x: 20,
    y: 390, // Approximate top-left position for A4 sheet invoice
  },
  {
    name: "meesho-fold",
    label: "Foldable Label (A4)",
    width: 595,
    height: 420, // Half A4
    x: 0,
    y: 420,
  }
];

const MeeshoLabelCropper: React.FC = () => {
  return (
    <ToolLandingPage
      routeKey="/meesho-label-cropper"
      toolType="UTILITY"
      heading={
        <>
          <span className="text-pink-500">Meesho</span> Label Cropper
        </>
      }
      tagline="Resize and crop Meesho shipping labels for Thermal Printers."
    >
      <LabelCropper
        presets={MEESHO_PRESETS}
        toolName="Meesho Label"
        defaultPresetName="meesho-thermal"
      />
    </ToolLandingPage>
  );
};

export default MeeshoLabelCropper;
