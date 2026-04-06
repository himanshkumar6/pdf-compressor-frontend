import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./themeContext";
import type { ResolvedTheme, ThemeContextValue, ThemeMode } from "./themeTypes";

const STORAGE_KEY = "theme-mode";


function getStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    // ignore
  }
  return "system";
}

function applyTheme(theme: ResolvedTheme): void {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

function safeSetStorage(mode: ThemeMode) {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // ignore
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // ✅ SSR-Safe: Initialize with stable defaults to avoid hydration mismatch.
  // We defer localStorage/matchMedia reads to useEffect.
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("dark");

  const resolvedTheme: ResolvedTheme = useMemo(() => {
    return mode === "system" ? systemTheme : mode;
  }, [mode, systemTheme]);

  // Initial client-side read
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Sync mode from storage
    const stored = getStoredMode();
    setModeState(stored);

    // Sync system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");
  }, []);

  // Apply resolved theme to the DOM
  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  // Persist user's explicit choice (default: system)
  useEffect(() => {
    safeSetStorage(mode);
    document.documentElement.dataset.themeMode = mode;
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  const value: ThemeContextValue = useMemo(
    () => ({
      mode,
      resolvedTheme,
      setMode,
    }),
    [mode, resolvedTheme, setMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
