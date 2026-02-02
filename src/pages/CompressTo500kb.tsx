import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressTo500kb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-500kb"
      heading={
        <>
          Compress PDF to <span className="text-cyan-400">≤500KB</span>
        </>
      }
      tagline="Target ≤500KB • For email & job portals • No uploads"
      defaultTargetSize={500}
      targetSizeOptions={[
        { v: 300, l: "≤ 300KB" },
        { v: 500, l: "≤ 500KB" },
        { v: 700, l: "≤ 700KB" },
      ]}
      ctaText="Compress to ≤500KB (Recommended)"
    />
  );
}
