import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionBackground =
  | "white"
  | "mint"
  | "dark"
  | "navy"
  | "ink"
  | "grey"
  | "transparent";

type SectionWrapperProps = {
  children: ReactNode;
  /** Background treatment. Drives surface + default text color. */
  background?: SectionBackground;
  /** Anchor id, e.g. "products" — used by in-page CTAs. */
  id?: string;
  /** Constrain content to a Container (default true). Set false for full-bleed sections. */
  contained?: boolean;
  className?: string;
};

const backgrounds: Record<SectionBackground, string> = {
  white: "bg-white text-ink",
  mint: "bg-grad-mint text-ink",
  dark: "bg-grad-dark text-white",
  navy: "bg-navy text-white",
  ink: "bg-ink text-white",
  grey: "bg-grey text-ink",
  // No background — inherits from a parent (e.g. the shared hero gradient).
  transparent: "text-white",
};

/**
 * Standard section shell: consistent vertical rhythm + a background variant.
 * Composes a Container by default so section content stays aligned to the grid.
 */
export function SectionWrapper({
  children,
  background = "white",
  id,
  contained = true,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-section-sm md:py-section",
        backgrounds[background],
        className,
      )}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
