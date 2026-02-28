import ToolLandingPage from "../components/ToolLandingPage";

export default function RemoveMetadataFromPdf() {
  return (
    <ToolLandingPage
      routeKey="/remove-metadata-from-pdf"
      heading={
        <div className="px-4 text-center">
          <span className="text-2xl sm:text-3xl md:text-5xl font-black">
            Remove <span className="text-cyan-400">Metadata</span> from PDF
          </span>
        </div>
      }
      tagline="Remove author, title, creator & hidden metadata • Secure • Works on mobile"
      toolType="REMOVE_METADATA"
    />
  );
}
