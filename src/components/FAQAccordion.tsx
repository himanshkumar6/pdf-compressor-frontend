import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-card)] overflow-hidden theme-transition">
      <div className="px-6 py-5 border-b border-[var(--border)]">
        <h2 className="text-[var(--textHeading)] font-black text-2xl">FAQs</h2>
        <p className="text-[var(--textMuted)] text-sm mt-1">
          Quick answers for common doubts.
        </p>
      </div>

      <div className="divide-y divide-[var(--border)]">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <button
              type="button"
              key={idx}
              onClick={() => setOpen(isOpen ? null : idx)}
              className={`w-full text-left px-6 py-5 transition bg-transparent hover:bg-[var(--color-bg-hover)] ${
                isOpen ? "faq-item-open" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-6">
                <div className="text-[var(--textHeading)] font-bold">{item.q}</div>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </div>

              {isOpen && (
                <div className="mt-3 text-[var(--textBody)] leading-relaxed">
                  {item.a}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
