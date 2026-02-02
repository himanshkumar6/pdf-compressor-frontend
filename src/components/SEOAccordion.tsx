import React, { useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

const SEOAccordion: React.FC<Props> = ({ title, subtitle, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-10 pb-12">
      <div className="rounded-3xl border border-gray-800 bg-black/40 backdrop-blur-md overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
        >
          <div>
            <h2 className="text-white text-lg sm:text-xl font-bold">{title}</h2>
            {subtitle ? <p className="text-gray-500 text-sm mt-1">{subtitle}</p> : null}
          </div>

          <span className="text-cyan-400 text-sm font-semibold">
            {open ? "Hide" : "Read"}
          </span>
        </button>

        {open && <div className="px-6 pb-6">{children}</div>}
      </div>
    </section>
  );
};

export default SEOAccordion;
