import React, { useState } from "react";
import ToolLandingPage from "../../components/ToolLandingPage";
import { Upload } from "lucide-react";

const JpgToPdfRuContent: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prev) => [...prev, ...newFiles]);

      const newUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newUrls]);
    }
    if (event.target) {
      event.target.value = "";
    }
  };

  const triggerFileInput = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    fileInputRef.current?.click();
  };

  const generatePdf = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (files.length === 0) return;

    try {
      setIsConverting(true);
      const { PDFDocument } = await import("pdf-lib");
      const pdfDoc = await PDFDocument.create();

      for (const file of files) {
        const imageBytes = await file.arrayBuffer();
        let image;

        if (file.type === "image/jpeg" || file.type === "image/jpg") {
          image = await pdfDoc.embedJpg(imageBytes);
        } else if (file.type === "image/png") {
          image = await pdfDoc.embedPng(imageBytes);
        } else {
          continue;
        }

        const { width: imgWidth, height: imgHeight } = image.scale(1);
        const A4_WIDTH = 595.28;
        const A4_HEIGHT = 841.89;

        const isLandscape = imgWidth > imgHeight;
        const pageWidth = isLandscape ? A4_HEIGHT : A4_WIDTH;
        const pageHeight = isLandscape ? A4_WIDTH : A4_HEIGHT;

        const page = pdfDoc.addPage([pageWidth, pageHeight]);

        const scale = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        const scaledWidth = imgWidth * scale;
        const scaledHeight = imgHeight * scale;

        const x = (pageWidth - scaledWidth) / 2;
        const y = (pageHeight - scaledHeight) / 2;

        page.drawImage(image, {
          x,
          y,
          width: scaledWidth,
          height: scaledHeight,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `converted-${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setIsConverting(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setIsConverting(false);
      alert("Не удалось создать PDF. Пожалуйста, убедитесь, что файлы корректны.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 rounded-[2.5rem] border border-gray-800 bg-black/50 backdrop-blur-xl text-center">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept="image/jpeg, image/jpg, image/png"
      />

      <div
        onClick={files.length === 0 ? triggerFileInput : undefined}
        className={`flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-700/50 rounded-3xl transition-all group ${files.length === 0 ? "cursor-pointer hover:border-cyan-500/50 hover:bg-cyan-500/5" : ""}`}
      >
        {files.length === 0 ? (
          <>
            <div className="w-16 h-16 mb-4 rounded-2xl bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-cyan-400" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Выберите изображения JPG
            </h3>

            <p className="text-gray-400">
              или перетащите фотографии сюда
            </p>

            <button
              onClick={triggerFileInput}
              className="mt-6 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all transform hover:-translate-y-1"
            >
              Выбрать фото
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-wrap gap-4 justify-center mb-6 w-full">
              {previewUrls.map((url, idx) => (
                <div key={idx} className="relative w-24 h-32 rounded-lg overflow-hidden border border-gray-700 shadow-lg group-hover:scale-105 transition-transform">
                  <img src={url} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Выбрано изображений: {files.length}
            </h3>

            <p className="text-gray-400">
              Готово к конвертации
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={triggerFileInput}
                className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-bold transition-all"
              >
                Добавить ещё
              </button>
              <button
                onClick={generatePdf}
                disabled={isConverting}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConverting ? "Конвертация..." : "Создать PDF"}
              </button>
            </div>
          </>
        )}

        <p className="mt-4 text-xs text-slate-500">Поддерживаются JPG, PNG, JPEG</p>
      </div>
    </div>
  );
};

export default function JpgToPdfRu() {
  return (
    <ToolLandingPage
      routeKey="/ru/jpg-v-pdf"
      heading={
        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          JPG в PDF
        </span>
      }
      tagline="Мгновенно превращайте изображения в профессиональные PDF документы."
    >
      <JpgToPdfRuContent />
    </ToolLandingPage>
  );
}
