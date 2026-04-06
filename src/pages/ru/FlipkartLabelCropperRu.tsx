import React from "react";
import ToolLandingPage from "../../components/ToolLandingPage";
import LabelCropper from "../../components/features/LabelCropper";
import type { CropPreset } from "../../components/features/LabelCropper";

const FLIPKART_PRESETS: CropPreset[] = [
  {
    name: "flipkart-thermal",
    label: "Термоэтикетка (4x6)",
    width: 288,
    height: 432,
    x: 20,
    y: 400,
  },
  {
    name: "flipkart-a4-half",
    label: "Половина A4",
    width: 595,
    height: 420,
    x: 0,
    y: 420,
  }
];

const RU_LABELS = {
  uploadTitle: "Загрузить PDF {toolName}",
  uploadHint: "Выберите файл с этикеткой Flipkart",
  startOver: "Начать заново",
  cropPreset: "Размер обрезки",
  tip: "💡 Совет: Перетаскивайте синюю рамку для выбора области. Тяните за угол для масштабирования.",
  cropButton: "Обрезать и Скачать PDF",
  errorValidPdf: "Пожалуйста, выберите корректный PDF файл",
  errorLoadPdf: "Не удалось загрузить PDF",
  errorCropFailed: "Ошибка обрезки",
  thermalInfo: "Для термопринтеров 4x6",
  a4Info: "Для обычной бумаги A4",
};

export default function FlipkartLabelCropperRu() {
  return (
    <ToolLandingPage
      routeKey="/ru/flipkart-label-cropper"
      heading={
        <>
          Flipkart Label <span className="text-yellow-400">Cropper</span>
        </>
      }
      tagline="Обрезайте этикетки Flipkart для термопринтера 4x6 онлайн."
    >
      <LabelCropper
        presets={FLIPKART_PRESETS}
        toolName="Flipkart"
        defaultPresetName="flipkart-thermal"
        labels={RU_LABELS}
      />
    </ToolLandingPage>
  );
}
