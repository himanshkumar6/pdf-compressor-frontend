/**
 * 🚀 High-Performance Prefetch Utility
 * 
 * Programmatically triggers the loading of a React.lazy component.
 * Use this on hover of critical navigation links.
 * 
 * @param factory - The dynamic import function (e.g., () => import('./Page'))
 */
export const prefetch = (factory: () => Promise<any>) => {
  factory().catch((err) => {
    console.warn("Prefetch failed:", err);
  });
};
