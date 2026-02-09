import React from "react";
import ToolLandingPage from "../../components/ToolLandingPage";
import LabelCropper from "../../components/features/LabelCropper";
import type { CropPreset } from "../../components/features/LabelCropper";

const MEESHO_PRESETS: CropPreset[] = [
  {
    name: "meesho-thermal",
    label: "Термоэтикетка (4x6)",
    width: 288,
    height: 432,
    x: 20,
    y: 390,
  },
  {
    name: "meesho-fold",
    label: "Складная этикетка (A4)",
    width: 595,
    height: 420,
    x: 0,
    y: 420,
  }
];

const RU_LABELS = {
  uploadTitle: "Загрузить PDF {toolName}",
  uploadHint: "Выберите файл с этикеткой Meesho",
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

export default function MeeshoLabelCropperRu() {
  return (
    <ToolLandingPage
      routeKey="/ru/meesho-label-cropper"
      heading={
        <>
          Meesho Label <span className="text-pink-500">Cropper</span>
        </>
      }
      tagline="Изменяйте размер и обрезайте этикетки Meesho для термопечати онлайн."
    >
      <LabelCropper
        presets={MEESHO_PRESETS}
        toolName="Meesho"
        defaultPresetName="meesho-thermal"
        labels={RU_LABELS}
      />
    </ToolLandingPage>
  );
}
