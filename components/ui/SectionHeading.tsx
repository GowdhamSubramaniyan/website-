import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  /** Small uppercase label above the headline. */
  eyebrow?: ReactNode;
  headline: ReactNode;
  /** Supporting paragraph below the headline. */
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading level for semantics/accessibility. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

/**
 * Eyebrow + headline + supporting copy. Colors inherit from the parent
 * section (via currentColor) so it reads on both light and dark backgrounds.
 */
export function SectionHeading({
  eyebrow,
  headline,
  description,
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-current/70">
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "text-balance font-semibold tracking-tight",
          Heading === "h1"
            ? "text-display-sm sm:text-display md:text-display-lg"
            : "text-3xl sm:text-4xl md:text-display-sm",
        )}
      >
        {headline}
      </Heading>
      {description && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed text-current/80 sm:text-lg",
            centered ? "max-w-3xl" : "max-w-4xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
