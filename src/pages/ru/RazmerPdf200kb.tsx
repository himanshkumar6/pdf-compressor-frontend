import ToolLandingPage from "../../components/ToolLandingPage";

export default function RazmerPdf200kb() {
  return (
    <ToolLandingPage
      routeKey="/ru/razmer-pdf-200kb"
      heading={
        <>
          Размер PDF <span className="text-cyan-400">200 КБ</span>
        </>
      }
      tagline="Измените размер вашего PDF файла ровно до 200 КБ."
      defaultTargetSize={200}
      targetSizeOptions={[{ v: 200, l: "200 КБ" }]}
      ctaText="Изменить до 200 КБ"
    />
  );
}
