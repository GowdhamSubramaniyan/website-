import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type GradientTextProps = {
  children: ReactNode;
  /** "teal" reads on light backgrounds; "lime" reads on dark backgrounds. */
  variant?: "teal" | "lime";
  as?: ElementType;
  className?: string;
};

/**
 * Applies a brand gradient clipped to inline text, for emphasis within headings.
 */
export function GradientText({
  children,
  variant = "teal",
  as: Tag = "span",
  className,
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        variant === "lime" ? "text-grad-lime" : "text-grad-teal",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
