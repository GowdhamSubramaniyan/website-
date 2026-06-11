"use client";

import { cn } from "@/lib/cn";

type OptionCardProps = {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
};

/** Selectable inquiry-type card. Single-select within the contact section. */
export function OptionCard({
  title,
  description,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "rounded-card border bg-teal p-5 text-left text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2",
        selected
          ? "border-lime ring-2 ring-lime"
          : "border-teal hover:bg-ink",
      )}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{description}</p>
    </button>
  );
}
