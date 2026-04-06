import React, { useState, useRef, useEffect } from "react";
import {
  Upload,
  Image as 
  ShieldCheck,
  Zap,
  HelpCircle,
  Laptop,
  CheckCircle,
  Loader2,
} from "lucide-react";
import ToolLandingPage from "../components/ToolLandingPage";

const UniqueSEOContent = () => (
  <div className="space-y-12 text-gray-700 dark:text-gray-300">
    <section className="bg-transparent  p-6 md:p-8 rounded-(--surface-radius) border border-(--border) shadow-theme-sm backdrop-blur-sm theme-transition">
      <h2 className="text-xl md:text-3xl font-bold text-(--textHeading) mb-4 leading-tight">
        High-Quality <span className="text-orange-500 italic">JPG to PDF</span>{" "}
        Converter
      </h2>
      <p className="leading-relaxed mb-6 text-base md:text-lg text-(--textBody)">
        Need a reliable <strong>JPG to PDF 100 KB converter</strong>? Our tool
        is designed to combine your images into a single, optimized PDF while
        keeping the file size web-friendly. Whether you are using a desktop or
        need to <strong>convert jpg to pdf on macbook air</strong>, our
        browser-based engine handles everything locally for maximum speed.
      </p>
      <div className="flex flex-wrap gap-2">
        {["No Watermark", "Secure", "A4 Standard", "Mac & Windows"].map(
          (tag) => (
            <span
              key={tag}
              className="px-3 md:px-4 py-1.5 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-full text-[9px] md:text-[10px] font-semibold tracking-wide text-orange-700 dark:text-orange-400 shadow-sm"
            >
              {tag}
            </span>
          ),
        )}
      </div>
    </section>

    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Mac & PC Friendly",
          desc: "Perfect for users who want to <strong>convert jpg to pdf on macbook air</strong> or Pro without using heavy software like Adobe.",
          icon: Laptop,
          color: "text-orange-600 bg-orange-50 dark:bg-orange-500/10",
        },
        {
          title: "Size Optimized",
          desc: "Functions as a dedicated <strong>jpg to pdf 100 kb converter</strong> by scaling images to fit standard A4 pages efficiently.",
          icon: Zap,
          color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10",
        },
        {
          title: "Privacy First",
          desc: "100% Client-side processing. Your private photos never leave your device or touch our servers.",
          icon: ShieldCheck,
          color: "text-green-600 bg-green-50 dark:bg-green-500/10",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 md:p-8 bg-transparent rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition hover:-translate-y-1 transition-transform duration-300"
        >
          <div
            className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}
          >
            <item.icon className="w-6 h-6 md:w-7 md:h-7" />
          </div>
          <h3 className="font-bold text-(--textHeading) mb-2 md:mb-3 tracking-tight text-sm md:text-base">
            {item.title}
          </h3>
          <p
            className="text-sm text-(--textBody) leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </div>
      ))}
    </section>

    <section className="space-y-6 md:space-y-8">
      <h3 className="text-lg md:text-2xl font-bold text-(--textHeading) flex items-center gap-3">
        <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
        Help & FAQ
      </h3>
      <div className="grid gap-4 md:gap-5">
        {[
          {
            q: "How to convert JPG to PDF on Macbook Air?",
            a: "Simply drag your images into the box above and click convert. Since it's browser-based, it works perfectly on macOS without needing Preview or Third-party apps.",
          },
          {
            q: "Will my images be combined into one PDF?",
            a: "Yes! All images you select will be merged into a single multi-page PDF document in the order they were uploaded.",
          },
          {
            q: "Is there a limit on the number of images?",
            a: "No strict limit, but we recommend processing up to 20 images at a time for the best performance on mobile devices.",
          },
        ].map((faq, i) => (
          <div
            key={i}
            className="p-6 md:p-8 bg-transparent rounded-(--surface-radius) border border-(--border) shadow-theme-sm theme-transition"
          >
            <h4 className="font-bold text-(--textHeading) mb-2 md:mb-3 flex items-start gap-3 md:gap-4 text-base md:text-lg">
              <span className="text-orange-500 shrink-0">Q.</span>
              <span dangerouslySetInnerHTML={{ __html: faq.q }} />
            </h4>
            <p
              className="text-sm md:text-base text-(--textBody) leading-relaxed pl-6 md:pl-10 border-l-2 border-orange-500/20"
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const JpgToPdf: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
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
    if (event.target) event.target.value = "";
  };

  const generatePdf = async () => {
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
        } else continue;

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

        page.drawImage(image, {
          x: (pageWidth - scaledWidth) / 2,
          y: (pageHeight - scaledHeight) / 2,
          width: scaledWidth,
          height: scaledHeight,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `images-to-pdf-${Date.now()}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
      setIsConverting(false);
    } catch (error) {
      console.error(error);
      setIsConverting(false);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setPreviewUrls([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <ToolLandingPage
      routeKey="/jpg-to-pdf"
      heading={
        <span className="text-(--textHeading)">
          JPG to{" "}
          <span className="text-orange-500 italic font-semibold">PDF</span>
        </span>
      }
      tagline="Transform your images into high-quality PDFs locally in seconds."
      customContent={<UniqueSEOContent />}
    >
      <div
        className="
    w-full max-w-4xl mx-auto
    p-5 sm:p-6 md:p-8
    rounded-(--surface-radius)
    border border-(--border)
    bg-transparent
    shadow-theme-sm
    theme-transition
    text-center
  "
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept="image/jpeg, image/jpg, image/png"
        />

        <div
          className={`
        relative
        p-6 sm:p-8 md:p-12
        border-2 border-dashed border-(--border)
        rounded-2xl md:rounded-3xl
        bg-gray-50/40 dark:bg-gray-900/20
        transition-all
        min-h-65 sm:min-h-80
        flex flex-col justify-center
        ${files.length === 0 ? "cursor-pointer hover:border-orange-500/40" : ""}
      `}
          onClick={
            files.length === 0 ? () => fileInputRef.current?.click() : undefined
          }
        >
          {files.length === 0 ? (
            <div className="space-y-3 sm:space-y-4">
              <div
                className="
            w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
            bg-orange-100 dark:bg-orange-500/10
            rounded-xl md:rounded-2xl
            flex items-center justify-center
            mx-auto
            border border-orange-200 dark:border-orange-500/20
            shadow-sm
          "
              >
                <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-orange-600 dark:text-orange-400" />
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-(--textHeading) leading-snug">
                Select Images
              </h3>

              <p className="text-xs sm:text-sm text-(--textMuted)">
                Click or drag JPG/PNG photos here
              </p>
            </div>
          ) : (
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                {previewUrls.map((url, idx) => (
                  <div
                    key={idx}
                    className="
                  relative
                  w-20 h-28 sm:w-24 sm:h-32
                  rounded-lg overflow-hidden
                  border border-(--border)
                  shadow-sm
                  transition hover:scale-[1.03]
                "
                  >
                    <img
                      src={url}
                      className="w-full h-full object-cover"
                      alt="Preview"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="
                px-4 sm:px-6
                py-2 sm:py-2.5
                rounded-lg
                bg-transparent
                border border-(--border)
                text-(--textHeading)
                font-medium
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition
                text-xs sm:text-sm
              "
                >
                  Add More
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    generatePdf();
                  }}
                  disabled={isConverting}
                  className="
                px-4 sm:px-6
                py-2 sm:py-2.5
                rounded-lg
                bg-orange-500 hover:bg-orange-600
                text-white
                font-semibold
                shadow-sm
                transition
                text-xs sm:text-sm
                flex items-center justify-center gap-2
              "
                >
                  {isConverting ? (
                    <Loader2 className="animate-spin w-4 h-4" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {isConverting ? "Converting..." : "Download PDF"}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReset();
                  }}
                  className="
                px-4 sm:px-6
                py-2 sm:py-2.5
                rounded-lg
                bg-gray-100 dark:bg-gray-800
                text-gray-600 dark:text-gray-400
                font-medium
                text-xs sm:text-sm
                transition
              "
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ToolLandingPage>
  );
};

export default JpgToPdf;
