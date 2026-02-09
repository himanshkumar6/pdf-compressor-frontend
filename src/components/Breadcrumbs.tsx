import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import {
  getLanguage,
  ROUTE_MAP,
  CRUD_LABELS,
  NAV_LABELS,
  PAGE_TITLES,
} from "../utils/localization";
import { TOOL_PAGES } from "../data/pages";

type Crumb = {
  label: string;
  to?: string;
};

function buildCrumbs(pathname: string): Crumb[] {
  const lang = getLanguage(pathname);

  // ❌ RU breadcrumbs completely disabled
  if (lang === "ru") return [];

  const routes = ROUTE_MAP.en;
  const crud = CRUD_LABELS.en;
  const nav = NAV_LABELS.en;

  const title =
    PAGE_TITLES.en[
    pathname as keyof typeof PAGE_TITLES.en
    ];

  const isTool = TOOL_PAGES.some((t) => t.path === pathname);

  const homeCrumb: Crumb = {
    label: crud.home,
    to: routes.home,
  };

  if (title && isTool) {
    return [
      homeCrumb,
      { label: nav.tools, to: routes.tools },
      { label: title },
    ];
  }

  if (title) {
    return [homeCrumb, { label: title }];
  }

  return [homeCrumb, { label: crud.page }];
}

export default function Breadcrumbs() {
  const location = useLocation();
  const lang = getLanguage(location.pathname);

  const crumbs = useMemo(() => {
    // 🔥 HARD BLOCK — no breadcrumbs on RU (checking inside memo to avoid hook violation)
    if (lang === "ru") return [];
    if (location.pathname === "/") return [];
    return buildCrumbs(location.pathname);
  }, [location.pathname, lang]);

  // 🔥 HARD BLOCK — Double safety, early return after hooks
  if (lang === "ru") return null;

  if (!crumbs.length) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-5">
        <Link to={ROUTE_MAP.en.home}>
          <Home className="w-4 h-4 text-gray-500 hover:text-cyan-400 transition-colors" />
        </Link>

        {crumbs.map((c, idx) => {
          const last = idx === crumbs.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-4 h-4 text-gray-600" />
              {!last && c.to ? (
                <Link
                  to={c.to}
                  className="hover:text-cyan-300 transition font-semibold"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-gray-300 font-bold">
                  {c.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
