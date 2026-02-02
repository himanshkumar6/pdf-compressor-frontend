import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressPdfFree() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-free"
      heading={
        <>
          Compress PDF <span className="text-cyan-400">Free</span>
        </>
      }
      tagline="No signup • No watermark • Free PDF compression"
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
