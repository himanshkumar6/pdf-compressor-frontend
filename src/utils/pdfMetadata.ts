import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

// ✅ PDF.js initialization is now inside the async function to prevent SSR crashes.
async function initPdfJs() {
  if (typeof window === "undefined") return null;
  const pdfjsLib = await import("pdfjs-dist");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(pdfjsLib as any).GlobalWorkerOptions.workerSrc) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfjsWorker;
  }
  return pdfjsLib;
}

export type PdfMetadata = {
  title?: string;
  author?: string;
  creator?: string;
  producer?: string;
  subject?: string;
  keywords?: string;
  creationDate?: string;
  modificationDate?: string;

  // Advanced
  hasXmp?: boolean;
  xmpRaw?: string;
};

function safe(v: unknown) {
  if (v === null || v === undefined) return "";
  return String(v).trim();
}

// Handles: D:20251227021018+05'30'
function formatPdfDate(raw?: string) {
  if (!raw) return "";
  if (!raw.startsWith("D:")) return raw;

  const s = raw.replace("D:", "");
  const year = s.slice(0, 4);
  const month = s.slice(4, 6);
  const day = s.slice(6, 8);
  const hour = s.slice(8, 10);
  const min = s.slice(10, 12);
  const sec = s.slice(12, 14);

  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

function extractXmpXmlFromBytes(bytes: Uint8Array): string | null {
  try {
    const text = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
    const start = text.indexOf("<x:xmpmeta");
    const end = text.indexOf("</x:xmpmeta>");
    if (start === -1 || end === -1) return null;
    return text.slice(start, end + "</x:xmpmeta>".length);
  } catch {
    return null;
  }
}

export async function extractPdfMetadata(file: File): Promise<PdfMetadata> {
  const pdfjsLib = await initPdfJs();
  if (!pdfjsLib) {
    throw new Error("PDF.js cannot be initialized on the server.");
  }

  const arrayBuffer = await file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);

  const loadingTask = pdfjsLib.getDocument({
    data: arrayBuffer,
    disableAutoFetch: true,
    disableStream: true,
  });

  const pdf = await loadingTask.promise;

  // ✅ metadata
  const meta = await pdf.getMetadata();
  const info = (meta?.info || {}) as any;

  // ✅ cleanup cache (VERY IMPORTANT)
  await pdf.destroy();

  const xmpXml = extractXmpXmlFromBytes(bytes);

  return {
    title: safe(info.Title),
    author: safe(info.Author),
    creator: safe(info.Creator),
    producer: safe(info.Producer),
    subject: safe(info.Subject),
    keywords: safe(info.Keywords),
    creationDate: formatPdfDate(safe(info.CreationDate)),
    modificationDate: formatPdfDate(safe(info.ModDate)),

    hasXmp: !!xmpXml,
    xmpRaw: xmpXml || "",
  };
}
