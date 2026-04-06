import ToolLandingPage from "../components/ToolLandingPage";
import ResizePdfMbTool from "../components/ResizePdfMbTool";

export default function ResizePdfInMb() {
  return (
    <ToolLandingPage
      routeKey="/resize-pdf-mb"
      heading={
        <>
          Resize PDF in <span className="text-cyan-400">MB</span>
        </>
      }
      tagline="Target specific MB limits • Best for job portals & email"
    >
      <ResizePdfMbTool />
    </ToolLandingPage>
  );
}
