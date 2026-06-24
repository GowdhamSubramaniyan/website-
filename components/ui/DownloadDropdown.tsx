"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

const MENU_WIDTH = 288; // w-72

export type DownloadItem = {
  label: string;
  /** Path to the file in /public (spaces URL-encoded). */
  href: string;
  /** Suggested filename for the download. */
  download?: string;
};

type DownloadDropdownProps = {
  label: string;
  items: DownloadItem[];
  variant?: "dark" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
} as const;

const variants = {
  dark: "bg-teal text-white hover:bg-ink",
  ghost: "border border-current bg-transparent text-current hover:bg-current/10",
} as const;

/**
 * A pill that downloads a product flyer. With one file it's a direct download
 * link; with several it opens a small menu (closes on outside-click / Escape).
 * Styled to sit alongside the Button primitive.
 */
export function DownloadDropdown({
  label,
  items,
  variant = "dark",
  size = "lg",
  className,
}: DownloadDropdownProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    const place = () => {
      const el = triggerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const left = Math.min(
        r.left,
        Math.max(8, window.innerWidth - MENU_WIDTH - 8),
      );
      setPos({ top: r.bottom + 8, left });
    };
    place();
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Position is fixed to the viewport, so close it if the page scrolls/resizes.
    const onMove = () => setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [open]);

  const triggerClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal",
    sizes[size],
    variants[variant],
  );

  // A single flyer needs no menu — download it directly.
  if (items.length === 1) {
    const only = items[0];
    return (
      <a
        href={only.href}
        download={only.download ?? true}
        className={cn(triggerClasses, className)}
      >
        <DownloadIcon />
        {label}
      </a>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(triggerClasses, className)}
      >
        {label}
        <ChevronIcon open={open} />
      </button>

      {open &&
        pos &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ position: "fixed", top: pos.top, left: pos.left, width: MENU_WIDTH }}
            className="animate-fade-in-up z-[1000] overflow-hidden rounded-2xl border border-grey bg-white shadow-xl [animation-duration:150ms]"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download={item.download ?? true}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-grey focus-visible:bg-grey focus-visible:outline-none"
              >
                <DownloadIcon />
                {item.label}
              </a>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-200",
        open && "rotate-180",
      )}
    >
      <path
        d="M5 7.5 10 12.5l5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M10 3v9m0 0L6.5 8.5M10 12l3.5-3.5M4 15.5h12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
