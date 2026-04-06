import ToolLandingPage from "../components/ToolLandingPage";

export default function ScannedPdfCompressor() {
  return (
    <ToolLandingPage
      routeKey="/scanned-pdf-compressor"
      heading={
        <>
          Scanned PDF <span className="text-cyan-400">Compressor</span>
        </>
      }
      tagline="Reduce scanned PDF size • Keep readable • Works on mobile"
      defaultTargetSize={200}
      targetSizeOptions={[
        { v: 100, l: "≤ 100KB" },
        { v: 200, l: "≤ 200KB" },
        { v: 500, l: "≤ 500KB" },
      ]}
      ctaText="Compress to ≤200KB (Recommended)"
    />
  );
}
