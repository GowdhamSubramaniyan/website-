"use client";

import { cn } from "@/lib/cn";
import type { ContactIcon } from "./contact.data";

type OptionCardProps = {
  title: string;
  description: string;
  icon: ContactIcon;
  selected: boolean;
  onSelect: () => void;
};

/** Selectable inquiry-type card. Single-select within the contact section. */
export function OptionCard({
  title,
  description,
  icon,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group flex items-start gap-4 rounded-card border bg-white p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
        selected
          ? "border-teal bg-teal/5 ring-2 ring-teal/40"
          : "border-grey hover:border-teal/40",
      )}
    >
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors",
          selected
            ? "bg-teal text-white"
            : "bg-teal/10 text-teal group-hover:bg-teal/15",
        )}
      >
        <OptionIcon name={icon} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-semibold text-ink">{title}</span>
          {selected && (
            <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-teal" fill="currentColor" aria-hidden="true">
              <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
            </svg>
          )}
        </span>
        <span className="mt-1 block text-sm text-ink/60">{description}</span>
      </span>
    </button>
  );
}

function OptionIcon({ name }: { name: ContactIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
    "aria-hidden": true,
  };
  switch (name) {
    case "consult":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
      );
    case "demo":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M10 9.5v3l3-1.5-3-1.5ZM8 21h8M12 17v4" />
        </svg>
      );
    case "assessment":
      return (
        <svg {...common}>
          <path d="M4 19V5a1 1 0 0 1 1-1h11l4 4v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
          <path d="M8 12l2.5 2.5L16 9" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
          <path d="M19.4 13a7.4 7.4 0 0 0 .1-2l2-1.5-2-3.4-2.3 1a7.5 7.5 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6a7.5 7.5 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7.4 7.4 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7.5 7.5 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7.5 7.5 0 0 0 1.7-1l2.3 1 2-3.4-2-1.5Z" />
        </svg>
      );
  }
}
