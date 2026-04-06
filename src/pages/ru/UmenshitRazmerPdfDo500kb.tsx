import ToolLandingPage from "../../components/ToolLandingPage";

export default function UmenshitRazmerPdfDo500kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/umenshit-razmer-pdf-do-500kb"
        heading={
          <>
            Уменьшить размер <span className="text-cyan-400">PDF</span>
          </>
        }
        tagline="Легкое уменьшение размера для веба и почты"
        defaultTargetSize={500}
        targetSizeOptions={[
          { v: 200, l: "≤ 200 КБ" },
          { v: 500, l: "≤ 500 КБ" },
          { v: 1000, l: "≤ 1 МБ" },
        ]}
        ctaText="Уменьшить до ≤500 КБ"
      />
    </>
  );
}
