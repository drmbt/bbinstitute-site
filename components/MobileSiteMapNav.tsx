"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { mainNavigation } from "@/content/site";

export function MobileSiteMapNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative md:hidden" ref={rootRef}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className="flex cursor-pointer items-center justify-center rounded-full border border-[var(--bbi-border)] px-3 py-2 text-xs uppercase tracking-[0.25em] text-stone-200 transition hover:border-[var(--bbi-border-strong)] hover:bg-[var(--bbi-hover-bg)]"
        onClick={() => setOpen((o) => !o)}
      >
        Site Map
      </button>
      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-56 rounded-3xl border border-[var(--bbi-border)] bg-[var(--bbi-surface-popover-bg)] p-3 shadow-[var(--bbi-shadow-soft)]">
          <nav className="grid gap-2 text-sm text-stone-200">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[var(--bbi-border)] px-4 py-3 transition hover:border-[var(--bbi-border-strong)] hover:bg-[var(--bbi-hover-bg)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
