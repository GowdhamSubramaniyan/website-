import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  /** Render as a different element (e.g. "section", "header", "footer"). Defaults to "div". */
  as?: ElementType;
  className?: string;
};

/**
 * Centered, max-width content shell with responsive horizontal padding.
 * Every section composes its content inside a <Container />.
 */
export function Container({ children, as: Tag = "div", className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
