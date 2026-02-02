import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressTo50kb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-50kb"
      heading={
        <>
          Compress PDF to <span className="text-cyan-400">≤50KB</span>
        </>
      }
      tagline="Target ≤50KB • For strict upload limits • No uploads"
      defaultTargetSize={50}
      targetSizeOptions={[
        { v: 50, l: "≤ 50KB" },
        { v: 75, l: "≤ 75KB" },
        { v: 100, l: "≤ 100KB" },
      ]}
      ctaText="Compress to ≤50KB (Recommended)"
    />
  );
}
