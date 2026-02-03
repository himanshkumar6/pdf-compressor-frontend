import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo1mb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-1mb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">1 МБ</span>
          </>
        }
        tagline="Для больших документов и договоров"
        defaultTargetSize={1000}
        targetSizeOptions={[
          { v: 500, l: "≤ 500 КБ" },
          { v: 1000, l: "≤ 1 МБ" },
          { v: 2000, l: "≤ 2 МБ" },
        ]}
        ctaText="Сжать до ≤1 МБ"
      />
    </>
  );
}
