import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressPdf() {
  return (
    <>
      <ToolLandingPage
        routeKey="/compress-pdf"
        heading={
          <>
            Compress <span className="text-cyan-400">PDF</span> Online
          </>
        }
        tagline="Fast PDF compression • No uploads • Works on mobile"
        defaultTargetSize={200}
        targetSizeOptions={[
          { v: 100, l: "≤ 100KB" },
          { v: 200, l: "≤ 200KB" },
          { v: 500, l: "≤ 500KB" },
        ]}
        ctaText="Compress to ≤200KB (Recommended)"
      />
    </>
  );
}
