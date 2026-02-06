import ToolLandingPage from "../components/ToolLandingPage";

interface ResizePdfInKbProps {
  initialLimit?: number;
  routeKey?: string;
}

export default function ResizePdfInKb({
  initialLimit = 100,
  routeKey = "/resize-pdf-kb",
}: ResizePdfInKbProps) {
  return (
    <ToolLandingPage
      routeKey={routeKey}
      heading={
        <>
          Resize PDF to <span className="text-cyan-400">{initialLimit}KB</span>
        </>
      }
      tagline={`Target ≤ ${initialLimit}KB limit • Browser processing • Safe & Secure`}
      defaultTargetSize={initialLimit}
      targetSizeOptions={[
        { v: 50, l: "≤ 50KB" },
        { v: 100, l: "≤ 100KB" },
        { v: 150, l: "≤ 150KB" },
        { v: 200, l: "≤ 200KB" },
      ]}
      ctaText={`Resize to ${initialLimit}KB`}
    />
  );
}
