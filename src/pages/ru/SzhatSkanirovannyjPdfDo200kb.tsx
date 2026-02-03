import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatSkanirovannyjPdfDo200kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-skanirovannyj-pdf-do-200kb"
        heading={
          <>
            Сжать скан до <span className="text-cyan-400">200 КБ</span>
          </>
        }
        tagline="Сжать сканированный документ до 200 КБ для порталов"
        defaultTargetSize={200}
        targetSizeOptions={[
          { v: 100, l: "≤ 100 КБ" },
          { v: 200, l: "≤ 200 КБ" },
          { v: 500, l: "≤ 500 КБ" },
        ]}
        ctaText="Сжать скан до 200 КБ"
      />
    </>
  );
}
