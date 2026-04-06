import React, { useEffect, useMemo, useState } from "react";


function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const TableOfContents: React.FC<{ html: string }> = ({ html }) => {
  const [activeId, setActiveId] = useState<string>("");

  const items = useMemo(() => {
    // parse h2/h3 from html string
    const headings = html.match(/<h[23][^>]*>.*?<\/h[23]>/g) || [];
    return headings
      .map((h) => {
        const level = h.startsWith("<h2") ? 2 : 3;
        const text = h.replace(/<[^>]*>/g, "").trim();
        const id = slugify(text);
        return { id, text, level };
      })
      .filter((x) => x.text.length > 0);
  }, [html]);

  useEffect(() => {
    const handler = () => {
      const visible = items
        .map((it) => document.getElementById(it.id))
        .filter(Boolean) as HTMLElement[];

      let current = "";
      for (const el of visible) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = el.id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="hidden lg:block sticky top-28 self-start w-full">
      <div className="rounded-3xl border border-gray-800 bg-gray-900/30 p-5">
        <div className="text-white font-black text-lg">On this page</div>
        <div className="mt-3 space-y-2">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`block text-sm leading-snug transition ${activeId === it.id ? "text-cyan-300 font-bold" : "text-gray-400"
                } ${it.level === 3 ? "pl-4" : ""}`}
            >
              {it.text}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TableOfContents;
