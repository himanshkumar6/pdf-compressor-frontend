import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressTo200kb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-200kb"
      heading={
        <>
          Compress PDF to <span className="text-cyan-400">≤200KB</span>
        </>
      }
      tagline="Target ≤200KB • Private processing • No uploads"
      defaultTargetSize={200}
      targetSizeOptions={[
        { v: 100, l: "≤ 100KB" },
        { v: 150, l: "≤ 150KB" },
        { v: 200, l: "≤ 200KB" },
      ]}
      ctaText="Compress to ≤200KB (Recommended)"
    />
  );
}
