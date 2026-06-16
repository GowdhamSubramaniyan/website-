import { cn } from "@/lib/cn";

type CheckListProps = {
  items: string[];
  /** "dark" reads on dark backgrounds (default); "light" on light backgrounds. */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * A list of confirmed points, each prefixed with a lime tick. Used by the
 * Operational Visibility and Performance Register sections.
 */
export function CheckList({ items, tone = "dark", className }: CheckListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 rounded-xl px-4 py-3 text-base",
            tone === "dark" ? "bg-white/5 text-white/90" : "text-ink/80",
          )}
        >
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-lime"
    >
      <path
        d="M5 12.5l4 4 10-10.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
