import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo50kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-50kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">50 КБ</span>
          </>
        }
        tagline="Максимальное сжатие для строгих лимитов"
        defaultTargetSize={50}
        targetSizeOptions={[
          { v: 50, l: "≤ 50 КБ" },
          { v: 100, l: "≤ 100 КБ" },
          { v: 200, l: "≤ 200 КБ" },
        ]}
        ctaText="Сжать до ≤50 КБ"
      />
    </>
  );
}
