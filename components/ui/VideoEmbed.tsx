"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type VideoEmbedProps = {
  /** Poster image shown until the user presses play. */
  poster: string;
  posterAlt: string;
  /** YouTube video id (e.g. "abc123") — takes priority over `src`. */
  youtubeId?: string;
  /** Direct video file URL (e.g. an mp4), if not using YouTube. */
  src?: string;
  /** `sizes` hint for the poster image. */
  sizes?: string;
  className?: string;
};

/**
 * Poster + play button that swaps to the video on click. Plays a YouTube embed
 * when `youtubeId` is set, otherwise an inline <video> from `src`. If neither is
 * provided, it shows just the poster (no play button) — used while a video is
 * still being hosted.
 */
export function VideoEmbed({
  poster,
  posterAlt,
  youtubeId,
  src,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(youtubeId || src);

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-black", className)}>
      {playing && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={posterAlt}
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
      ) : (
        <>
          <Image src={poster} alt={posterAlt} fill sizes={sizes} className="object-cover" />
          {hasVideo && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="group absolute inset-0 grid place-items-center bg-black/15 transition-colors hover:bg-black/25 focus-visible:outline-none"
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-lime">
                <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
                  <path d="M12 9v14l11-7z" fill="#045858" />
                </svg>
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
