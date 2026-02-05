import ToolLandingPage from "../components/ToolLandingPage";

export default function ResizePdfInKb() {
  return (
    <ToolLandingPage
      routeKey="/resize-pdf-kb"
      heading={
        <>
          Resize PDF in <span className="text-cyan-400">KB</span>
        </>
      }
      tagline="Target specific KB limits • Browser processing • Safe & Secure"
      defaultTargetSize={100}
      targetSizeOptions={[
        { v: 50, l: "≤ 50KB" },
        { v: 100, l: "≤ 100KB" },
        { v: 150, l: "≤ 150KB" },
        { v: 200, l: "≤ 200KB" },
      ]}
      ctaText="Resize to Target KB"
    />
  );
}
