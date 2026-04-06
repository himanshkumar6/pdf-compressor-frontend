import ToolLandingPage from "../components/ToolLandingPage";

export default function ReducePdfSizeTo500kb() {
  return (
    <ToolLandingPage
      routeKey="/reduce-pdf-size-to-500kb"
      heading={
        <>
          Reduce PDF Size to <span className="text-cyan-400">≤500KB</span>
        </>
      }
      tagline="Reduce PDF size to ≤500KB • For email & portals • No uploads"
      defaultTargetSize={500}
      targetSizeOptions={[
        { v: 300, l: "≤ 300KB" },
        { v: 500, l: "≤ 500KB" },
        { v: 700, l: "≤ 700KB" },
      ]}
      ctaText="Reduce to ≤500KB (Recommended)"
    />
  );
}
