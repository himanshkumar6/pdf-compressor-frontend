import ToolLandingPage from "../components/ToolLandingPage";

export default function CompressTo150kb() {
  return (
    <ToolLandingPage
      routeKey="/compress-pdf-to-150kb"
      heading={
        <>
          Compress PDF to <span className="text-cyan-400">≤150KB</span>
        </>
      }
      tagline="Target ≤150KB • Perfect for form uploads • No uploads"
      defaultTargetSize={150}
      targetSizeOptions={[
        { v: 100, l: "≤ 100KB" },
        { v: 150, l: "≤ 150KB" },
        { v: 200, l: "≤ 200KB" },
      ]}
      ctaText="Compress to ≤150KB (Recommended)"
    />
  );
}
