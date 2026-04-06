import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressTo1mb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-1mb"
      heading={
        <>
          Compress PDF to <span className="text-cyan-400">≤1MB</span>
        </>
      }
      tagline="Target ≤1MB • For large document uploads • No uploads"
      defaultTargetSize={1024}
      targetSizeOptions={[
        { v: 500, l: "≤ 500KB" },
        { v: 700, l: "≤ 700KB" },
        { v: 1024, l: "≤ 1MB" },
      ]}
      ctaText="Compress to ≤1MB (Recommended)"
    />
  );
}
