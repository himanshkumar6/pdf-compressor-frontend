import ToolLandingPage from "../../components/ToolLandingPage";

export default function IzmenitRazmerPdfKb() {
  return (
    <ToolLandingPage
      routeKey="/ru/izmenit-razmer-pdf-kb"
      heading={
        <>
          Изменить размер PDF в <span className="text-cyan-400">КБ</span>
        </>
      }
      tagline="Точная настройка веса вашего файла для любых порталов."
      defaultTargetSize={100}
      targetSizeOptions={[
        { v: 50, l: "50 КБ" },
        { v: 100, l: "100 КБ" },
        { v: 200, l: "200 КБ" },
        { v: 500, l: "500 КБ" },
      ]}
      ctaText="Изменить размер"
    />
  );
}
