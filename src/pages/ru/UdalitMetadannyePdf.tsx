import ToolLandingPage from "../../components/ToolLandingPage";

export default function UdalitMetadannyePdf() {
  return (
    <ToolLandingPage
      routeKey="/ru/udalit-metadannye-pdf"
      heading={
        <>
          Удалить <span className="text-cyan-400">Метаданные</span> из PDF
        </>
      }
      tagline="Удалить автора, заголовок и скрытые данные • Безопасно"
      toolType="REMOVE_METADATA"
    />
  );
}
