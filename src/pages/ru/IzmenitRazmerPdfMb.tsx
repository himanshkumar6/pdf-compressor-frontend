import ToolLandingPage from "../../components/ToolLandingPage";

export default function IzmenitRazmerPdfMb() {
  return (
    <ToolLandingPage
      routeKey="/ru/izmenit-razmer-pdf-mb"
      heading={
        <>
          Изменить размер PDF в <span className="text-cyan-400">МБ</span>
        </>
      }
      tagline="Уменьшите тяжелые файлы до нужного объема в мегабайтах."
      defaultTargetSize={1}
      targetSizeOptions={[
        { v: 1, l: "до 1 МБ" },
        { v: 2, l: "до 2 МБ" },
        { v: 5, l: "до 5 МБ" },
      ]}
      ctaText="Уменьшить в МБ"
    />
  );
}
