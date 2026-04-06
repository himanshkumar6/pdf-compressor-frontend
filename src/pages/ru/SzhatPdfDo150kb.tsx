import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo150kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-150kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">150 КБ</span>
          </>
        }
        tagline="Для порталов госуслуг и университетов"
        defaultTargetSize={150}
        targetSizeOptions={[
          { v: 100, l: "≤ 100 КБ" },
          { v: 150, l: "≤ 150 КБ" },
          { v: 200, l: "≤ 200 КБ" },
        ]}
        ctaText="Сжать до ≤150 КБ"
      />
    </>
  );
}
