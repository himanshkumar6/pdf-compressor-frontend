import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { TOOLS_REGISTRY } from "../../data/toolsRegistry";

interface ToolHeaderProps {
  title?: string;
  description?: string;
}

const ToolHeader: React.FC<ToolHeaderProps> = ({ title, description }) => {
  const location = useLocation();

  const currentTool = useMemo(() => {
    // 1. Try exact match
    const exact = TOOLS_REGISTRY.find((t) => t.slug === location.pathname);
    if (exact) return exact;

    // 2. Try matching Russian slug
    const ruExact = TOOLS_REGISTRY.find((t) => t.ru?.slug === location.pathname);
    if (ruExact) {
      return {
        ...ruExact,
        title: ruExact.ru!.title,
        shortDescription: ruExact.ru!.shortDescription,
      };
    }

    // 3. Fallback for generated routes (like /compress-pdf-to-50kb) if not in registry?
    // Actually most are in registry.
    return null;
  }, [location.pathname]);

  const displayTitle = title || currentTool?.title || "Tool";
  const displayDesc = description || currentTool?.shortDescription || "";

  // Breadcrumbs logic
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Tools", path: "/tools" },
    { label: displayTitle, path: location.pathname },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-2 flex flex-col items-center">
      {/* Breadcrumbs */}
      <nav className="flex items-center justify-center text-sm text-slate-500 mb-4 overflow-hidden">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />}
            {index === 0 ? (
              <Link to={item.path} className="hover:text-cyan-600 transition-colors">
                <Home className="w-4 h-4" />
              </Link>
            ) : index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-slate-800 dark:text-slate-200 truncate">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-cyan-600 transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Header Content */}
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          {displayTitle}
        </h1>
        {displayDesc && (
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {displayDesc}
          </p>
        )}
      </div>
    </div>
  );
};

export default ToolHeader;
