import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo100kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-100kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">100 КБ</span>
          </>
        }
        tagline="Оптимально для резюме и анкет"
        defaultTargetSize={100}
        targetSizeOptions={[
          { v: 50, l: "≤ 50 КБ" },
          { v: 100, l: "≤ 100 КБ" },
          { v: 200, l: "≤ 200 КБ" },
        ]}
        ctaText="Сжать до ≤100 КБ"
      />
    </>
  );
}
