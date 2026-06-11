"use client";

import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "dark" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** If provided, renders as a link. Internal paths/anchors use next/link; external URLs use <a>. */
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /** Show a trailing arrow icon. */
  withArrow?: boolean;
  /** Native button type when rendered as <button> (e.g. "submit"). */
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

const variants: Record<ButtonVariant, string> = {
  // Lime gradient, dark ink text — primary CTAs & highlights
  primary: "bg-grad-lime text-ink shadow-sm hover:brightness-105 hover:shadow-md",
  // Teal/ink surface, white text — used on light backgrounds
  dark: "bg-teal text-white hover:bg-ink",
  // Outline — secondary actions; adapts via currentColor
  ghost:
    "border border-current bg-transparent text-current hover:bg-current/10",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  withArrow = false,
  type = "button",
  disabled,
  className,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn("group", base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowIcon />}
    </>
  );

  if (href) {
    const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
