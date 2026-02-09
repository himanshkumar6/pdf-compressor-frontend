import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo300kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-300kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">300 КБ</span>
          </>
        }
        tagline="Оптимальное сжатие для документов среднего размера."
        defaultTargetSize={300}
        targetSizeOptions={[
          { v: 100, l: "≤ 100 КБ" },
          { v: 200, l: "≤ 200 КБ" },
          { v: 300, l: "≤ 300 КБ" },
          { v: 500, l: "≤ 500 КБ" },
        ]}
        ctaText="Сжать до ≤300 КБ"
      />
    </>
  );
}
