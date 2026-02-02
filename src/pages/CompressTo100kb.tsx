import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressTo100kb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-100kb"
      heading={
        <>
          Compress PDF to <span className="text-cyan-400">≤100KB</span>
        </>
      }
      tagline="Target ≤100KB • Private processing • No uploads"
      defaultTargetSize={100}
      targetSizeOptions={[
        { v: 50, l: "≤ 50KB" },
        { v: 100, l: "≤ 100KB" },
        { v: 150, l: "≤ 150KB" },
      ]}
      ctaText="Compress to ≤100KB (Recommended)"
    />
  );
}
