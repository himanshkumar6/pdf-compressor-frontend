import React from "react";
import ToolLandingPage from "../components/ToolLandingPage";
import ToolErrorBoundary from "../components/ToolErrorBoundary";
import PdfEditor from "../features/pdf-editor/PdfEditor";

const EditPdf: React.FC = () => {
  return (
    <ToolErrorBoundary toolName="Edit PDF">
      <ToolLandingPage
        routeKey="/edit-pdf"
        heading="Edit PDF"
        tagline="Edit PDF Online"
      >
        <PdfEditor />
      </ToolLandingPage>
    </ToolErrorBoundary>
  );
};

export default EditPdf;
