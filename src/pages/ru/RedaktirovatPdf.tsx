import React from "react";
import ToolLandingPage from "../../components/ToolLandingPage";
import ToolErrorBoundary from "../../components/ToolErrorBoundary";
import PdfEditor from "../../features/pdf-editor/PdfEditor";

const RU_LABELS = {
  noEditsToSave: "Нет изменений для сохранения",
  processingPdf: "Обработка PDF...",
  pdfSaved: "PDF сохранен!",
  saveFailed: "Ошибка сохранения. Сервер может быть недоступен.",
  loadingEngine: "Загрузка PDF...",
  addText: "Добавить текст",
  pageOf: "Стр. {current} из {total}",
  download: "Скачать",
  newText: "Новый текст",
};

export default function RedaktirovatPdf() {
  return (
    <ToolErrorBoundary toolName="Редактировать PDF">
      <ToolLandingPage
        routeKey="/ru/redaktirovat-pdf"
        heading={
          <>
            <span className="text-cyan-400">Редактировать</span> PDF
          </>
        }
        tagline="Добавляйте текст, изображения и фигуры в ваш PDF файл онлайн."
      >
        <PdfEditor labels={RU_LABELS} />
      </ToolLandingPage>
    </ToolErrorBoundary>
  );
}
