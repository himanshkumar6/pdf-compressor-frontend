import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import {
  MAIN_NAV_PAGES,
  TOOL_PAGES,
  FOOTER_SUPPORT_PAGES,
  FOOTER_LEGAL_PAGES,
} from "../data/pages";

const Sitemap: React.FC = () => {
  const seo = PAGES_SEO["/sitemap"];
  const mainItems = MAIN_NAV_PAGES.map((p) => ({ name: p.label, path: p.path }));
  const toolItems = TOOL_PAGES.map((t) => ({ name: t.label, path: t.path }));
  const supportItems = FOOTER_SUPPORT_PAGES.map((p) => ({ name: p.label, path: p.path }));
  const legalItems = FOOTER_LEGAL_PAGES.map((p) => ({ name: p.label, path: p.path }));

  const sections = [
    { title: "Main", items: mainItems },
    { title: "PDF Tools", items: toolItems },
    { title: "Support", items: supportItems },
    { title: "Legal", items: legalItems },
  ];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />
      <h1 className="text-4xl font-bold text-white mb-12">HTML Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {sections.map((group, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold text-cyan-400 mb-6 border-b border-gray-800 pb-2">{group.title}</h2>
            <ul className="space-y-4">
              {group.items.map((link, j) => (
                <li key={j}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
