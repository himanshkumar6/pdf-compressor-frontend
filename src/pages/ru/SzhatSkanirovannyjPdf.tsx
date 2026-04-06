import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatSkanirovannyjPdf() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-skanirovannyj-pdf"
        heading={
          <>
            Сжать <span className="text-cyan-400">Сканированный PDF</span>
          </>
        }
        tagline="Специально для сканов • Четкий текст • Малый размер"
        defaultTargetSize={500}
        targetSizeOptions={[
          { v: 200, l: "≤ 200 КБ" },
          { v: 500, l: "≤ 500 КБ" },
          { v: 1000, l: "≤ 1 МБ" },
        ]}
        ctaText="Сжать скан"
      />
    </>
  );
}
