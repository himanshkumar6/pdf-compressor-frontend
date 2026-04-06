import React, { useEffect, useMemo, useRef, useState } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/useTheme";
import type { ThemeMode } from "../context/themeTypes";

type ThemeOption = {
  value: ThemeMode;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const OPTIONS: ThemeOption[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

type ThemeMenuDropdownProps = {
  className?: string;
};

export default function ThemeMenuDropdown({
  className = "",
}: ThemeMenuDropdownProps) {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const CurrentIcon = useMemo(() => {
    return OPTIONS.find((o) => o.value === mode)?.Icon ?? Monitor;
  }, [mode]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const select = (value: ThemeMode) => {
    setMode(value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)]
          hover:bg-[var(--card-hover)] hover:border-[var(--border-hover)]
          focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/35
          transition-all duration-200 shadow-sm"
      >
        <CurrentIcon className="w-5 h-5 text-[var(--text)]" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Theme"
          className="absolute right-0 mt-2 w-44 rounded-2xl overflow-hidden
            bg-[var(--card)] border border-[var(--border)] shadow-[var(--shadow)]
            backdrop-blur-xl z-50"
        >
          <div className="py-1">
            {OPTIONS.map(({ value, label, Icon }) => {
              const active = mode === value;
              return (
                <button
                  key={value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => select(value)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold transition-colors
                    ${
                      active
                        ? "text-[var(--accent)] bg-[var(--accent-muted)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--color-bg-hover)]"
                    }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left">{label}</span>
                  {active && <Check className="w-4 h-4 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
