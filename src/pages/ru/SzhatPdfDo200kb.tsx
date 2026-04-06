import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdfDo200kb() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf-do-200kb"
        heading={
          <>
            Сжать PDF до <span className="text-cyan-400">200 КБ</span>
          </>
        }
        tagline="Самый популярный формат для Госуслуг"
        defaultTargetSize={200}
        targetSizeOptions={[
          { v: 100, l: "≤ 100 КБ" },
          { v: 200, l: "≤ 200 КБ" },
          { v: 500, l: "≤ 500 КБ" },
        ]}
        ctaText="Сжать до ≤200 КБ"
      />
    </>
  );
}
