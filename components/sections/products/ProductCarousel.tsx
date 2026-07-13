"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";
import type { Product } from "./products.data";

function isConsult(product: Product) {
  return product.name === "Vision Zero Consult";
}

/**
 * Vertical deck (desktop). The active product sits square and centred; the
 * others tuck above and below, scaled down and faded. It auto-advances every 3s
 * (the current card tucks up, the next opens into the centre), pausing on hover,
 * with dots for manual control. A product's "See in action" CTA fluidly expands
 * the square into a 16:9 rectangle to play the video inline. Stacks to full
 * cards on mobile (rendered by ProductsSection).
 */
export function ProductCarousel({ products }: { products: Product[] }) {
  const n = products.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    if (paused || playing !== null) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 3000);
    return () => clearInterval(id);
  }, [paused, playing, n]);

  /** Wrapped distance from active → {-1 above, 0 centre, 1 below, 2 hidden}. */
  const rel = (i: number) => {
    let d = ((i - active) % n + n) % n;
    if (d > n / 2) d -= n;
    return d;
  };

  const anyPlaying = playing !== null;

  return (
    <div
      className="hidden lg:block lg:-translate-x-6 xl:-translate-x-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto h-[34rem] w-full max-w-[40rem] overflow-hidden">
        {products.map((product, i) => {
          const d = rel(i);
          const isCenter = d === 0;
          const isPlaying = playing === i;
          const consult = isConsult(product);

          let style: CSSProperties;
          if (isPlaying) {
            style = {
              width: "36rem",
              height: "20rem",
              transform: "translate(-50%, -50%)",
              opacity: 1,
              zIndex: 50,
            };
          } else if (anyPlaying) {
            style = {
              width: "26rem",
              height: "26rem",
              transform: `translate(-50%, -50%) translateY(${d * 42}%) scale(0.72)`,
              opacity: 0,
              zIndex: 1,
            };
          } else if (isCenter) {
            style = {
              width: "26rem",
              height: "26rem",
              transform: "translate(-50%, -50%)",
              opacity: 1,
              zIndex: 30,
            };
          } else if (d === -1 || d === 1) {
            style = {
              width: "26rem",
              height: "26rem",
              transform: `translate(-50%, -50%) translateY(${d * 42}%) scale(0.72)`,
              opacity: 0.4,
              zIndex: 20,
            };
          } else {
            style = {
              width: "26rem",
              height: "26rem",
              transform: `translate(-50%, -50%) translateY(${d * 42}%) scale(0.6)`,
              opacity: 0,
              zIndex: 10,
            };
          }

          const tuckClickable = !isCenter && (d === -1 || d === 1) && !anyPlaying;

          return (
            <div
              key={product.name}
              onClick={() => tuckClickable && setActive(i)}
              style={style}
              className={cn(
                "absolute left-1/2 top-1/2 transition-all duration-700 ease-out",
                tuckClickable ? "cursor-pointer" : !isCenter && "pointer-events-none",
              )}
            >
              <div
                className={cn(
                  "relative flex h-full w-full flex-col justify-center gap-5 overflow-hidden rounded-[1.75rem] border border-white/10 p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-inset ring-white/[0.06] [background-image:linear-gradient(155deg,#08201e_0%,#0d413c_100%)]",
                  !isCenter && "pointer-events-none",
                )}
              >
                {isPlaying ? (
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
                ) : isCenter ? (
                  <>
                    <div>
                      <span className="mb-6 block h-0.5 w-10 rounded-full bg-grad-lime" />
                      <Image
                        src={product.logo.src}
                        alt={product.name}
                        width={product.logo.width}
                        height={product.logo.height}
                        className={cn("w-auto", consult ? "h-16" : "h-[4.5rem]")}
                      />
                    </div>
                    <p className="line-clamp-4 max-w-md text-sm leading-relaxed text-white/65">
                      {keepHyphens(product.description)}
                    </p>
                    <div className="flex flex-col items-start gap-3">
                      {product.videoId ? (
                        <Button
                          onClick={() => setPlaying(i)}
                          variant="primary"
                          withArrow
                        >
                          {product.cta.label}
                        </Button>
                      ) : (
                        <Button
                          href={product.cta.href}
                          variant="primary"
                          withArrow
                        >
                          {product.cta.label}
                        </Button>
                      )}
                      <Link
                        href={product.page.href}
                        className="group/ex relative inline-flex w-fit items-center overflow-hidden rounded-pill border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out will-change-transform group-hover/ex:translate-x-0"
                        />
                        <span className="relative z-10 inline-flex items-center gap-1.5">
                          {product.page.label}
                          <span aria-hidden>&rarr;</span>
                        </span>
                      </Link>
                    </div>
                  </>
                ) : (
                  // Tucked — logo only
                  <div className="grid h-full w-full place-items-center">
                    <Image
                      src={product.logo.src}
                      alt={product.name}
                      width={product.logo.width}
                      height={product.logo.height}
                      className={cn("w-auto", consult ? "h-14" : "h-16")}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2.5">
        {products.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => {
              setPlaying(null);
              setActive(i);
            }}
            aria-label={`Show ${p.name}`}
            aria-current={i === active}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === active ? "w-7 bg-lime" : "w-2 bg-white/30 hover:bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}
