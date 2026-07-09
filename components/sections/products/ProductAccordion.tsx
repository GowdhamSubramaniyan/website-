"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";
import type { Product } from "./products.data";

/** Consult's wordmark is squarer than the others, so it needs smaller sizing. */
function isConsult(product: Product) {
  return product.name === "Vision Zero Consult";
}

/**
 * Vertical accordion of the four products (desktop): stacked horizontal cards.
 * A tucked card shows just its logo; the active card expands to reveal the full
 * logo, description, and CTA. It auto-advances every 3s (starting on Essentials);
 * hovering a card opens it and pauses the rotation. Clicking a product's "See in
 * action" CTA plays its video inline, expanding that card while the others
 * collapse away. Stacks to full cards on mobile (rendered by ProductsSection).
 */
export function ProductAccordion({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    if (paused || playing !== null) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % products.length),
      3000,
    );
    return () => clearInterval(id);
  }, [paused, playing, products.length]);

  const anyPlaying = playing !== null;

  return (
    <div
      className="hidden h-[34rem] flex-col gap-3 lg:flex"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {products.map((product, i) => {
        const open = i === active;
        const isPlaying = playing === i;
        const consult = isConsult(product);
        return (
          <div
            key={product.name}
            onMouseEnter={() => playing === null && setActive(i)}
            style={{ flexGrow: anyPlaying ? (isPlaying ? 1 : 0) : open ? 4 : 1 }}
            className={cn(
              "group relative basis-0 overflow-hidden rounded-2xl border border-white/15 transition-all duration-500 ease-out [background-image:linear-gradient(110deg,#050f0e_0%,#0e413d_100%)]",
              anyPlaying && !isPlaying
                ? "pointer-events-none opacity-0"
                : "cursor-pointer",
            )}
          >
            {isPlaying ? (
              /* Inline video — fills the expanded card */
              <div className="absolute inset-0 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${product.videoId}?autoplay=1&rel=0`}
                  title={`${product.name} in action`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
                <button
                  type="button"
                  onClick={() => setPlaying(null)}
                  aria-label="Close video"
                  className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-black/80"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                {/* Tucked — horizontal logo */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center px-6 transition-opacity duration-300 sm:px-8",
                    open ? "opacity-0" : "opacity-100",
                  )}
                >
                  <Image
                    src={product.logo.src}
                    alt={product.name}
                    width={product.logo.width}
                    height={product.logo.height}
                    className={cn("w-auto", consult ? "h-8 sm:h-10" : "h-9 sm:h-11")}
                  />
                </div>

                {/* Open — full content */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-center gap-4 px-6 py-6 transition-opacity duration-300 sm:px-8",
                    open ? "opacity-100 delay-150" : "opacity-0",
                  )}
                >
                  <Image
                    src={product.logo.src}
                    alt={product.name}
                    width={product.logo.width}
                    height={product.logo.height}
                    className={cn(
                      "w-auto",
                      consult ? "h-10 sm:h-12" : "h-12 sm:h-14",
                    )}
                  />
                  <p className="line-clamp-3 max-w-2xl text-sm leading-relaxed text-white/75">
                    {keepHyphens(product.description)}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {product.videoId ? (
                      <Button
                        onClick={() => setPlaying(i)}
                        variant="primary"
                        withArrow
                      >
                        {product.cta.label}
                      </Button>
                    ) : (
                      <Button href={product.cta.href} variant="primary" withArrow>
                        {product.cta.label}
                      </Button>
                    )}
                    <FlyerButton flyer={product.flyer} />
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** Small download pill — icon only, expands to show the label on hover. */
function FlyerButton({ flyer }: { flyer: Product["flyer"] }) {
  const item = flyer.items[0];
  if (!item) return null;
  return (
    <a
      href={item.href}
      download={item.download}
      aria-label="Download flyer"
      className="group/dl inline-flex items-center gap-0 rounded-full border border-white/25 p-2.5 text-xs font-medium text-white/80 transition-all duration-300 hover:gap-2 hover:border-lime hover:pr-4 hover:text-lime"
    >
      <DownloadIcon />
      <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover/dl:max-w-[9rem]">
        Download Flyer
      </span>
    </a>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M10 3v9m0 0L6.5 8.5M10 12l3.5-3.5M4 15.5h12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
