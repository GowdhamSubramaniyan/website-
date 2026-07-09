"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type VideoEmbedProps = {
  /** Poster image shown until the user presses play (image mode). */
  poster?: string;
  posterAlt?: string;
  /**
   * Branded placeholder: a teal card with the VZC logo centered, shown in place
   * of a poster image until the user presses play. Takes priority over `poster`.
   */
  branded?: boolean;
  /**
   * Optional product wordmark shown next to the VZC logo (VZC │ product).
   * Implies `branded`.
   */
  logo?: { src: string; alt: string };
  /** YouTube video id (e.g. "abc123") — takes priority over `src`. */
  youtubeId?: string;
  /** Direct video file URL (e.g. an mp4), if not using YouTube. */
  src?: string;
  /** `sizes` hint for the poster image. */
  sizes?: string;
  className?: string;
};

/** Teal circular play affordance. */
function PlayButton() {
  return (
    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-lime">
      <svg viewBox="0 0 32 32" className="h-8 w-8 translate-x-0.5" aria-hidden="true">
        <path d="M12 9v14l11-7z" fill="#045858" />
      </svg>
    </span>
  );
}

/**
 * Poster + play button that swaps to the video on click. Plays a YouTube embed
 * when `youtubeId` is set, otherwise an inline <video> from `src`. The idle
 * state is a branded teal card with the product logo (`logo`) or a poster image
 * (`poster`). If no video source is provided, it shows just the placeholder
 * (no play button) — used while a video is still being hosted.
 */
export function VideoEmbed({
  poster,
  posterAlt,
  branded,
  logo,
  youtubeId,
  src,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(youtubeId || src);
  const showBranded = branded || Boolean(logo);
  const title = posterAlt || logo?.alt || "Video";

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-black", className)}>
      {playing && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : playing && src ? (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-contain"
        />
      ) : showBranded ? (
        // Branded placeholder: teal card with the VZC logo (│ product wordmark)
        // centered and a black vignette for depth. Play button overlaps centre.
        <button
          type="button"
          onClick={() => hasVideo && setPlaying(true)}
          aria-label={hasVideo ? `Play video: ${logo?.alt ?? "Vision Zero Connect"}` : undefined}
          disabled={!hasVideo}
          className="group absolute inset-0 grid place-items-center overflow-hidden bg-teal focus-visible:outline-none"
        >
          {/* Black gradient vignette — darker at the edges for depth. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_45%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_100%)]"
          />
          {/* Co-brand lockup: VZC logo (│ product wordmark), centred + large. */}
          <div className="relative z-10 flex items-center gap-6 px-6 sm:gap-8">
            <Image
              src="/vzc-logo.png"
              alt="Vision Zero Connect"
              width={670}
              height={367}
              className={cn(
                "w-auto brightness-0 invert",
                logo ? "h-16 sm:h-24" : "h-20 sm:h-28",
              )}
            />
            {logo && (
              <>
                <span aria-hidden className="h-14 w-px bg-white/40 sm:h-20" />
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={1200}
                  height={400}
                  sizes={sizes}
                  className="h-11 w-auto object-contain sm:h-16"
                />
              </>
            )}
          </div>
          {hasVideo && (
            <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg">
              <PlayButton />
            </span>
          )}
        </button>
      ) : (
        // Image placeholder.
        <>
          {poster && (
            <Image src={poster} alt={title} fill sizes={sizes} className="object-cover" />
          )}
          {hasVideo && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="group absolute inset-0 grid place-items-center bg-black/15 transition-colors hover:bg-black/25 focus-visible:outline-none"
            >
              <PlayButton />
            </button>
          )}
        </>
      )}
    </div>
  );
}
