"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

/** Remembers that this visitor has already seen (or acted on) the popup. */
const STORAGE_KEY = "vzc:newsletter-popup";

/**
 * Short beat after landing before the dialog opens: lets the hero paint first,
 * so the popup doesn't compete with the page's largest contentful paint.
 */
const OPEN_DELAY_MS = 1_200;

/** How long the "thanks" state stays up before the dialog closes itself. */
const SUCCESS_CLOSE_MS = 2_000;

/**
 * `?newsletter=1` opens the dialog immediately, skipping the delay and the
 * once-per-visitor flag — and closing it doesn't set that flag either. For
 * previewing and demoing without clearing localStorage.
 */
function isPreview(): boolean {
  return new URLSearchParams(window.location.search).get("newsletter") === "1";
}

function alreadyHandled(): boolean {
  try {
    return Boolean(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    // Private mode / storage disabled — fall back to showing once per page load.
    return false;
  }
}

function remember(outcome: "dismissed" | "subscribed"): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, outcome);
  } catch {
    // Nothing to do — worst case the popup can appear again on a later visit.
  }
}

/**
 * Newsletter popup for the home page.
 *
 * Opens shortly after the visitor lands, on every device. Shown at most once
 * per visitor — dismissing or subscribing is remembered in localStorage, so it
 * never reappears for someone who has already answered it.
 */
export function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Where focus was before we opened, so we can hand it back on close.
  const restoreRef = useRef<HTMLElement | null>(null);
  const previewRef = useRef(false);

  const close = useCallback((outcome: "dismissed" | "subscribed") => {
    // Previewing shouldn't burn the visitor's one showing.
    if (!previewRef.current) remember(outcome);
    setOpen(false);
  }, []);

  // --- Trigger: shortly after landing ---
  useEffect(() => {
    const preview = isPreview();
    if (preview) previewRef.current = true;
    if (!preview && alreadyHandled()) return;

    // Deferred rather than set inline: the server renders nothing, so opening
    // during the effect body would fight hydration.
    const show = window.setTimeout(() => setOpen(true), preview ? 0 : OPEN_DELAY_MS);
    return () => window.clearTimeout(show);
  }, []);

  // --- Dialog behaviour: scroll lock, Escape, focus trap, focus restore ---
  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close("dismissed");
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"])',
      );
      if (!focusable?.length) return;

      // Keep Tab inside the dialog while it's modal.
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      restoreRef.current?.focus?.();
    };
  }, [open, close]);

  // Let the confirmation land before the dialog disappears.
  useEffect(() => {
    if (!subscribed) return;
    const t = window.setTimeout(() => close("subscribed"), SUCCESS_CLOSE_MS);
    return () => window.clearTimeout(t);
  }, [subscribed, close]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1100] flex items-center justify-center p-4"
      role="presentation"
    >
      {/* Backdrop — click to dismiss */}
      <div
        aria-hidden="true"
        onClick={() => close("dismissed")}
        className="animate-fade-in-down absolute inset-0 bg-ink/60 backdrop-blur-sm [animation-duration:200ms]"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-popup-title"
        aria-describedby="newsletter-popup-copy"
        className="animate-fade-in-up relative w-full max-w-lg rounded-card bg-deep p-8 text-white shadow-2xl [animation-duration:300ms] sm:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={() => close("dismissed")}
          aria-label="Close newsletter signup"
          className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <h2
          id="newsletter-popup-title"
          className="max-w-sm text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Stay in the loop
        </h2>
        <p id="newsletter-popup-copy" className="mt-3 text-sm leading-relaxed text-white/75">
          Get the latest insights, product updates, and industry news from Vision
          Zero Connect. No spam, and you can unsubscribe at any time.
        </p>

        <NewsletterForm
          showName
          widthClassName="max-w-none"
          onSuccess={() => setSubscribed(true)}
        />

        <p className="mt-4 text-xs leading-relaxed text-white/50">
          By subscribing you agree to our{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 transition-colors hover:text-white/80"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>,
    document.body,
  );
}
