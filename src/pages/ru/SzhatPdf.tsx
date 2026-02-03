import ToolLandingPage from "../../components/ToolLandingPage";

export default function SzhatPdf() {
  return (
    <>
      <ToolLandingPage
        routeKey="/ru/szhat-pdf"
        heading={
          <>
            Сжать <span className="text-cyan-400">PDF</span> Онлайн
          </>
        }
        tagline="Быстрое сжатие • Без загрузки на сервер • Работает на телефоне"
        defaultTargetSize={200}
        targetSizeOptions={[
          { v: 100, l: "≤ 100 КБ" },
          { v: 200, l: "≤ 200 КБ" },
          { v: 500, l: "≤ 500 КБ" },
        ]}
        ctaText="Сжать до ≤200 КБ (Рекомендуется)"
      />
    </>
  );
}
