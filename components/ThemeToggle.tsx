"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined" && document.documentElement.dataset.theme === "dark") {
      return "dark";
    }
    return "light";
  });

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="rounded-full border border-[var(--bbi-border)] px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-200 transition hover:border-[var(--bbi-border-strong)] hover:bg-[var(--bbi-hover-bg)]"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
