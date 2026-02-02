import ToolLandingPage from "../components/ToolLandingPage";

export default function RemoveMetadataFromPdf() {
  return (
    <ToolLandingPage
      routeKey="/remove-metadata-from-pdf"
      heading={
        <>
          Remove <span className="text-cyan-400">Metadata</span> from PDF
        </>
      }
      tagline="Remove author, title, creator & hidden metadata • Secure • Works on mobile"
      toolType="REMOVE_METADATA"
    />
  );
}
