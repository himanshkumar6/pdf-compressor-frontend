import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo20kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-20kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">20 КБ</span>
          </>
        }
        tagline="Ультра-сжатие для самых строгих лимитов (например, подписи)."
        defaultTargetSize={20}
        targetSizeOptions={[
          { v: 20, l: "≤ 20 КБ" },
          { v: 50, l: "≤ 50 КБ" },
          { v: 100, l: "≤ 100 КБ" },
        ]}
        ctaText="Сжать до ≤20 КБ"
      />
    </>
  );
}
