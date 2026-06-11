import type { ElementType, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type CardVariant = "light" | "dark" | "teal";

type CardProps = {
  children: ReactNode;
  /** When set, the whole card becomes a link. */
  href?: string;
  /** Apply hover lift + shadow. Defaults to true. */
  interactive?: boolean;
  /**
   * "light" = white surface (default); "dark" = translucent surface for dark
   * sections; "teal" = solid brand-teal surface (e.g. value cards on light bg).
   */
  variant?: CardVariant;
  /** Inner padding. Set false for media cards that fill to the edges. */
  padded?: boolean;
  as?: ElementType;
  className?: string;
};

const base = "flex flex-col rounded-card border transition-all duration-200";

const surfaces: Record<CardVariant, string> = {
  light: "border-grey bg-white text-ink",
  dark: "border-white/15 bg-white/5 text-white backdrop-blur-sm",
  teal: "border-teal bg-teal text-white",
};

const lifts: Record<CardVariant, string> = {
  light: "hover:-translate-y-1 hover:border-sage hover:shadow-lg",
  dark: "hover:-translate-y-1 hover:border-lime/60 hover:bg-white/10",
  teal: "hover:-translate-y-1 hover:shadow-lg hover:shadow-teal/30",
};

/**
 * Base content surface shared by product / value / sector / insight cards.
 */
export function Card({
  children,
  href,
  interactive = true,
  variant = "light",
  padded = true,
  as: Tag = "div",
  className,
}: CardProps) {
  const classes = cn(
    base,
    surfaces[variant],
    padded && "p-6 sm:p-8",
    interactive && lifts[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          classes,
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
        )}
      >
        {children}
      </Link>
    );
  }

  return <Tag className={classes}>{children}</Tag>;
}
