import ToolLandingPage from "../components/ToolLandingPage";

export default function ScannedPdfTo200kb() {
  return (
    <ToolLandingPage
      routeKey="/scanned-pdf-to-200kb"
      heading={
        <>
          Scanned PDF to <span className="text-cyan-400">≤200KB</span>
        </>
      }
      tagline="Target ≤200KB for scanned docs • Fast & free • No uploads"
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
