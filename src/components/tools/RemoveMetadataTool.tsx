import { useMemo, useState } from "react";
import { saveAs } from "file-saver";
import { FileText, Shield, Trash2, Download, Info } from "lucide-react";

type MetaInfo = {
  title?: string;
  author?: string;
  subject?: string;
  creator?: string;
  producer?: string;
  keywords?: string[];
  creationDate?: string;
  modificationDate?: string;
};

function formatBytes(bytes: number) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}

async function extractMetadata(fileBytes: ArrayBuffer): Promise<MetaInfo> {
  if (typeof window === "undefined") throw new Error("DOM unavailable");
  const { PDFDocument } = await import("pdf-lib");
  const pdfDoc = await PDFDocument.load(fileBytes, { ignoreEncryption: true });

  const title = pdfDoc.getTitle();
  const author = pdfDoc.getAuthor();
  const subject = pdfDoc.getSubject();
  const creator = pdfDoc.getCreator();
  const producer = pdfDoc.getProducer();
  const keywords = pdfDoc.getKeywords();
  const creationDate = pdfDoc.getCreationDate();
  const modificationDate = pdfDoc.getModificationDate();

  return {
    title: title || "",
    author: author || "",
    subject: subject || "",
    creator: creator || "",
    producer: producer || "",
    keywords: typeof keywords === "string" ? [keywords] : keywords || [],
    creationDate: creationDate ? creationDate.toISOString() : "",
    modificationDate: modificationDate ? modificationDate.toISOString() : "",
  };
}

export default function RemoveMetadataTool() {
  const [file, setFile] = useState<File | null>(null);
  const [beforeMeta, setBeforeMeta] = useState<MetaInfo | null>(null);
  const [afterMeta, setAfterMeta] = useState<MetaInfo | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  const beforeSize = useMemo(() => (file ? formatBytes(file.size) : ""), [file]);

  async function handleSelectFile(f: File | null) {
    setError("");
    setStatus("");
    setAfterMeta(null);

    if (!f) {
      setFile(null);
      setBeforeMeta(null);
      return;
    }

    if (f.type !== "application/pdf") {
      setError("Please select a PDF file only.");
      setFile(null);
      return;
    }

    setFile(f);

    try {
      setIsLoading(true);
      setStatus("Reading metadata…");

      const bytes = await f.arrayBuffer();
      const meta = await extractMetadata(bytes);

      setBeforeMeta(meta);
      setStatus("Metadata loaded ✅");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: unknown) {
      setError("Failed to read metadata. The PDF may be corrupted or protected.");
      setBeforeMeta(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function removeMetadataAndDownload() {
    if (!file) return;

    setError("");
    setStatus("");
    setIsLoading(true);

    try {
      if (typeof window === "undefined") throw new Error("DOM unavailable");
      const { PDFDocument } = await import("pdf-lib");

      setStatus("Loading PDF…");
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes, { ignoreEncryption: true });

      setStatus("Removing metadata…");

      // ✅ Clear standard metadata (lossless)
      pdfDoc.setTitle("");
      pdfDoc.setAuthor("");
      pdfDoc.setSubject("");
      pdfDoc.setCreator("");
      pdfDoc.setProducer("");
      pdfDoc.setKeywords([]);

      // some portals read timestamps
      pdfDoc.setCreationDate(new Date(0));
      pdfDoc.setModificationDate(new Date(0));

      // ✅ Save
      setStatus("Generating cleaned PDF…");
      const cleanedBytes = await pdfDoc.save();

      // ✅ Optional: re-open & verify metadata (for UI)
      try {
        const metaAfter = await extractMetadata(
          cleanedBytes instanceof ArrayBuffer
            ? cleanedBytes
            : new ArrayBuffer(cleanedBytes.byteLength) // fallback, but will be overwritten below
        );

        // If cleanedBytes is not an ArrayBuffer, convert it to ArrayBuffer
        if (!(cleanedBytes instanceof ArrayBuffer)) {
          const arrayBuffer = cleanedBytes.buffer.slice(
            cleanedBytes.byteOffset,
            cleanedBytes.byteOffset + cleanedBytes.byteLength
          );
          Object.assign(metaAfter, await extractMetadata(arrayBuffer as ArrayBuffer));
        }
        setAfterMeta(metaAfter);
      } catch {
        console.log("Error")
      }

      // Ensure cleanedBytes is a Uint8Array backed by an ArrayBuffer, not SharedArrayBuffer
      const safeBytes =
        cleanedBytes instanceof Uint8Array
          ? new Uint8Array(
            cleanedBytes.buffer instanceof ArrayBuffer
              ? cleanedBytes.buffer.slice(cleanedBytes.byteOffset, cleanedBytes.byteOffset + cleanedBytes.byteLength)
              : new Uint8Array(cleanedBytes).buffer // fallback: copy to ArrayBuffer
          )
          : cleanedBytes;
      const blob = new Blob(
        [safeBytes instanceof Uint8Array ? safeBytes.buffer : safeBytes],
        { type: "application/pdf" }
      );

      const safeName = file.name.replace(/\.pdf$/i, "");
      saveAs(blob, `${safeName}-no-metadata.pdf`);

      setStatus("Done ✅ Metadata removed successfully");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: unknown) {
      setError(
        "Failed to remove metadata. This PDF may be password-protected or unsupported."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      {/* Upload Card */}
      <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <Shield className="w-6 h-6 text-cyan-300" />
          </div>

          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Remove Metadata from PDF
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              100% client-side. No uploads. Removes author, creator, title,
              keywords & timestamps.
            </p>
          </div>
        </div>

        {/* File picker */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Upload PDF
          </label>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => handleSelectFile(e.target.files?.[0] || null)}
              className="w-full md:flex-1 text-sm text-gray-300 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:bg-cyan-500/10 file:text-cyan-300 hover:file:bg-cyan-500/20 cursor-pointer"
            />

            <button
              onClick={removeMetadataAndDownload}
              disabled={!file || isLoading}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${!file || isLoading
                ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                : "bg-cyan-500/15 border border-cyan-500/25 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-500/40"
                }`}
            >
              <Trash2 className="w-4 h-4" />
              Remove Metadata
            </button>
          </div>

          {file && (
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {file.name} • {beforeSize}
            </p>
          )}
        </div>

        {/* Status */}
        <div className="mt-5">
          {status && (
            <p className="text-sm text-cyan-300 flex items-center gap-2">
              <Info className="w-4 h-4" /> {status}
            </p>
          )}

          {error && (
            <p className="text-sm text-red-400 font-semibold">{error}</p>
          )}
        </div>
      </div>

      {/* Metadata display */}
      {beforeMeta && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">
              Before Removal
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong className="text-gray-200">Author:</strong>{" "}
                {beforeMeta.author || "—"}
              </p>
              <p>
                <strong className="text-gray-200">Title:</strong>{" "}
                {beforeMeta.title || "—"}
              </p>
              <p>
                <strong className="text-gray-200">Creator:</strong>{" "}
                {beforeMeta.creator || "—"}
              </p>
              <p>
                <strong className="text-gray-200">Producer:</strong>{" "}
                {beforeMeta.producer || "—"}
              </p>
              <p>
                <strong className="text-gray-200">Created:</strong>{" "}
                {beforeMeta.creationDate
                  ? new Date(beforeMeta.creationDate).toLocaleString()
                  : "—"}
              </p>
              <p>
                <strong className="text-gray-200">Modified:</strong>{" "}
                {beforeMeta.modificationDate
                  ? new Date(beforeMeta.modificationDate).toLocaleString()
                  : "—"}
              </p>
            </div>
          </div>

          <div className="bg-black/30 border border-gray-800 rounded-3xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">After Removal</h3>

            {afterMeta ? (
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <strong className="text-gray-200">Author:</strong>{" "}
                  {afterMeta.author || "—"}
                </p>
                <p>
                  <strong className="text-gray-200">Title:</strong>{" "}
                  {afterMeta.title || "—"}
                </p>
                <p>
                  <strong className="text-gray-200">Creator:</strong>{" "}
                  {afterMeta.creator || "—"}
                </p>
                <p>
                  <strong className="text-gray-200">Producer:</strong>{" "}
                  {afterMeta.producer || "—"}
                </p>
                <p>
                  <strong className="text-gray-200">Created:</strong>{" "}
                  {afterMeta.creationDate
                    ? new Date(afterMeta.creationDate).toLocaleString()
                    : "—"}
                </p>
                <p>
                  <strong className="text-gray-200">Modified:</strong>{" "}
                  {afterMeta.modificationDate
                    ? new Date(afterMeta.modificationDate).toLocaleString()
                    : "—"}
                </p>

                <div className="pt-4">
                  <button
                    onClick={removeMetadataAndDownload}
                    disabled={!file || isLoading}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-200 hover:bg-cyan-500/15 transition-all text-sm font-bold"
                  >
                    <Download className="w-4 h-4" />
                    Download Again
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Remove metadata to preview cleaned values.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Footer note */}
      <div className="mt-10 text-center">
        <p className="text-xs text-gray-600">
          Secure browser-only processing. Your files never leave your device.
        </p>
      </div>
    </div>
  );
}
