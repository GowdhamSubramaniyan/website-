import { cn } from "@/lib/cn";

/**
 * A subtle "scroll more" affordance for the bottom of a hero: a small label
 * above a gently bouncing down-arrow. Inherits the surrounding text colour
 * (white on dark heroes, ink on light ones). Position inside a `relative` hero.
 */
export function ScrollCue({
  className,
  label = "Scroll more",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center sm:bottom-4 md:bottom-5",
        className,
      )}
    >
      <span className="flex flex-col items-center gap-1 opacity-70 sm:gap-1.5">
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] sm:text-[0.62rem] sm:tracking-[0.22em]">
          {label}
        </span>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 animate-bounce sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </div>
  );
}
