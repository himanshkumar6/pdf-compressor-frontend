import { type ComponentType, lazy } from 'react';

// Retry logic for dynamic imports (handle network blips)
export function lazyRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>,
  name?: string
) {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem('page-has-been-force-refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem('page-has-been-force-refreshed', 'false');
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Trying to reload the page to fix chunk load error
        window.sessionStorage.setItem('page-has-been-force-refreshed', 'true');
        window.location.reload();
      }
      
      console.error(`Failed to load ${name || 'component'}:`, error);
      throw error; // Let ErrorBoundary handle it
    }
  });
}

// Helper to safely load a library dynamically
export async function safeLoadLibrary<T>(
  importFn: () => Promise<T>, 
  fallbackName: string
): Promise<T> {
  try {
    return await importFn();
  } catch (error) {
    console.error(`Failed to load library: ${fallbackName}`, error);
    throw new Error(`Failed to load required library: ${fallbackName}. Please check your connection.`);
  }
}
