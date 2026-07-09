"use client";

import { useEffect, useRef, useState } from "react";
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
 * Simple product slider (desktop): one card in view at a time, sliding
 * horizontally. Auto-advances every 3s (pausing on hover), with dots to jump.
 * A product's "See in action" CTA plays its video inline. Stacks to full cards
 * on mobile (rendered by ProductsSection).
 */
export function ProductCarousel({ products }: { products: Product[] }) {
  const n = products.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);
  const dirRef = useRef(1);

  // Ping-pong so it always slides to an adjacent card (no jump back to start).
  useEffect(() => {
    if (paused || playing !== null) return;
    const id = setInterval(() => {
      setActive((a) => {
        let na = a + dirRef.current;
        if (na > n - 1) {
          dirRef.current = -1;
          na = a - 1;
        } else if (na < 0) {
          dirRef.current = 1;
          na = a + 1;
        }
        return na;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [paused, playing, n]);

  const goTo = (i: number) => {
    dirRef.current = i > active ? 1 : -1;
    setActive(i);
  };

  return (
    <div
      className="hidden lg:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-square w-full max-w-[24rem] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{
            width: `${n * 100}%`,
            transform: `translateX(-${active * (100 / n)}%)`,
          }}
        >
          {products.map((product, i) => {
            const isPlaying = playing === i;
            const consult = isConsult(product);
            return (
              <div
                key={product.name}
                className="h-full shrink-0 px-2"
                style={{ width: `${100 / n}%` }}
              >
                <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden rounded-3xl border border-white/15 p-7 shadow-2xl [background-image:linear-gradient(150deg,#050f0e_0%,#0e413d_100%)] sm:p-8">
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
                  ) : (
                    <>
                      <div className="flex min-h-14 items-center">
                        <Image
                          src={product.logo.src}
                          alt={product.name}
                          width={product.logo.width}
                          height={product.logo.height}
                          className={cn("w-auto", consult ? "h-12" : "h-14")}
                        />
                      </div>
                      <p className="line-clamp-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
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
                          <Button
                            href={product.cta.href}
                            variant="primary"
                            withArrow
                          >
                            {product.cta.label}
                          </Button>
                        )}
                        <FlyerButton flyer={product.flyer} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-7 flex justify-center gap-2.5">
        {products.map((product, i) => (
          <button
            key={product.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${product.name}`}
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
