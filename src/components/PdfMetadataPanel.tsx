import { useMemo, useState } from "react";
import type { PdfMetadata } from "../utils/pdfMetadata";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";

type Props = {
  beforeMeta: PdfMetadata | null;
  afterMeta: PdfMetadata | null;
};

const Row = ({ k, v }: { k: string; v: unknown }) => (
  <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] py-2">
    <p className="text-[var(--textMuted)] text-sm">{k}</p>
    <p className="text-[var(--textBody)] text-sm font-semibold text-right break-all max-w-[60%]">
      {v === null || v === undefined || v === "" ? "—" : String(v)}
    </p>
  </div>
);

function calcScore(meta: PdfMetadata | null) {
  if (!meta) return 0;
  let s = 0;

  if (meta.author) s++;
  if (meta.creator) s++;
  if (meta.title) s++;
  if (meta.subject) s++;
  if (meta.keywords) s++;
  if (meta.creationDate) s++;
  if (meta.modificationDate) s++;

  // XMP heavy weight
  if (meta.hasXmp) s += 3;

  return s;
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function PdfMetadataPanel({ beforeMeta, afterMeta }: Props) {
  const [openAdvanced, setOpenAdvanced] = useState(false);
  const [copied, setCopied] = useState(false);

  const beforeScore = useMemo(() => calcScore(beforeMeta), [beforeMeta]);
  const afterScore = useMemo(() => calcScore(afterMeta), [afterMeta]);

  const beforeStatus =
    beforeMeta && beforeScore > 0
      ? "Sensitive metadata found"
      : beforeMeta
        ? "No sensitive metadata found"
        : "Upload a PDF to detect metadata";

  const afterStatus = !afterMeta
    ? "Remove metadata to preview cleaned values"
    : afterScore === 0
      ? "✅ Cleaned successfully"
      : "⚠️ Some metadata still present";

  const beforeBadgeClass =
    beforeMeta && beforeScore > 0
      ? "text-yellow-300 border-yellow-500/20 bg-yellow-500/10"
      : beforeMeta
        ? "text-green-300 border-green-500/20 bg-green-500/10"
        : "text-gray-300 border-gray-700 bg-white/5";

  const afterBadgeClass =
    afterMeta && afterScore === 0
      ? "text-green-300 border-green-500/20 bg-green-500/10"
      : afterMeta
        ? "text-yellow-300 border-yellow-500/20 bg-yellow-500/10"
        : "text-gray-300 border-gray-700 bg-white/5";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* BEFORE */}
      <div className="rounded-4xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] p-6 theme-transition">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[var(--textHeading)] text-xl font-black">Before Removal</h3>

          <span
            className={`text-xs px-3 py-1 rounded-full border ${beforeBadgeClass}`}
          >
            {beforeStatus}
          </span>
        </div>

        {!beforeMeta ? (
          <p className="text-[var(--textMuted)]">Upload a PDF to see metadata.</p>
        ) : (
          <div className="space-y-1">
            <Row k="Author" v={beforeMeta.author} />
            <Row k="Title" v={beforeMeta.title} />
            <Row k="Creator" v={beforeMeta.creator} />
            <Row k="Producer" v={beforeMeta.producer} />
            <Row k="Subject" v={beforeMeta.subject} />
            <Row k="Keywords" v={beforeMeta.keywords} />
            <Row k="Created" v={beforeMeta.creationDate} />
            <Row k="Modified" v={beforeMeta.modificationDate} />
            <Row k="XMP Metadata" v={beforeMeta.hasXmp ? "YES" : "NO"} />
          </div>
        )}
      </div>

      {/* AFTER */}
      <div className="rounded-4xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)] p-6 theme-transition">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[var(--textHeading)] text-xl font-black">After Removal</h3>

          <span
            className={`text-xs px-3 py-1 rounded-full border ${afterBadgeClass}`}
          >
            {afterStatus}
          </span>
        </div>

        {!afterMeta ? (
          <p className="text-[var(--textMuted)]">Remove metadata to see cleaned result.</p>
        ) : (
          <>
            <div className="space-y-1">
              <Row k="Author" v={afterMeta.author} />
              <Row k="Title" v={afterMeta.title} />
              <Row k="Creator" v={afterMeta.creator} />
              <Row k="Producer" v={afterMeta.producer} />
              <Row k="Subject" v={afterMeta.subject} />
              <Row k="Keywords" v={afterMeta.keywords} />
              <Row k="Created" v={afterMeta.creationDate} />
              <Row k="Modified" v={afterMeta.modificationDate} />
              <Row k="XMP Metadata" v={afterMeta.hasXmp ? "YES" : "NO"} />
            </div>

            {/* Advanced */}
            <button
              type="button"
              className="mt-5 w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[var(--color-bg-hover)] border border-[var(--border)] hover:border-[var(--border-hover)] transition"
              onClick={() => setOpenAdvanced((s) => !s)}
            >
              <span className="text-sm text-[var(--textHeading)] font-bold">
                Advanced Metadata (XMP/XML)
              </span>

              {openAdvanced ? (
                <ChevronUp className="w-5 h-5 text-[var(--textMuted)]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[var(--textMuted)]" />
              )}
            </button>

            {openAdvanced && (
              <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[var(--textBody)] text-sm font-bold">XMP Raw</p>

                  <button
                    type="button"
                    className="text-xs px-3 py-1 rounded-xl border border-[var(--border)] text-[var(--textBody)] hover:border-[var(--border-hover)] transition"
                    onClick={async () => {
                      const ok = await copyToClipboard(afterMeta.xmpRaw || "");
                      setCopied(ok);
                      setTimeout(() => setCopied(false), 1200);
                    }}
                  >
                    <Copy className="inline w-4 h-4 mr-1" />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <pre className="text-xs text-[var(--textMuted)] whitespace-pre-wrap break-all max-h-52 overflow-auto">
                  {afterMeta.xmpRaw?.trim()
                    ? afterMeta.xmpRaw
                    : "— No XMP metadata found"}
                </pre>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
