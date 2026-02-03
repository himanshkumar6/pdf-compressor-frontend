import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo500kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-500kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">500 КБ</span>
          </>
        }
        tagline="Идеально для презентаций и портфолио"
        defaultTargetSize={500}
        targetSizeOptions={[
          { v: 200, l: "≤ 200 КБ" },
          { v: 500, l: "≤ 500 КБ" },
          { v: 1000, l: "≤ 1 МБ" },
        ]}
        ctaText="Сжать до ≤500 КБ"
      />
    </>
  );
}
