import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { keepHyphens } from "@/lib/typography";
import {
  SENTRI_COMMERCIAL,
  SENTRI_HOME,
  SENTRI_INTRO,
  SENTRI_LINKS,
  SENTRI_OUTRO,
} from "./sentri.data";

/**
 * Sentri — the sister protection product, presented after Vision Zero Consult
 * as the next step beyond the Navigate engine. Uses Sentri's own red/navy
 * palette so it reads as a distinct brand within the VZC ecosystem.
 */

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("size-5 transition-transform group-hover:translate-x-1", className)}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.2em] text-sentri">
      <span className="grid size-5 place-items-center rounded-full bg-sentri/15" aria-hidden>
        <span className="size-2 rounded-full bg-sentri" />
      </span>
      {children}
    </p>
  );
}

function TextLink({ href, children, onDark }: { href: string; children: ReactNode; onDark?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 text-lg font-bold",
        onDark ? "text-white" : "text-sentri-ink",
      )}
    >
      {children}
      <Arrow className="text-sentri" />
    </a>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-7 shrink-0">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 26" aria-hidden className="size-7 shrink-0">
      <path fill="#00C3FF" d="M1.5.8C1.2 1.1 1 1.6 1 2.1v21.2c0 .5.2 1 .5 1.3l11.9-11.9L1.5.8Z" />
      <path fill="#00E676" d="M1.5.8l11.9 11.9L17 9.1 3.2 1.1C2.6.7 2 .6 1.5.8Z" />
      <path fill="#FFD400" d="M17 9.1l-3.6 3.6 3.6 3.6 4.2-2.4c1-.6 1-1.8 0-2.4L17 9.1Z" />
      <path fill="#FF3A44" d="M1.5 24.6l11.9-11.9 3.6 3.6-13.8 8c-.6.4-1.2.5-1.7.3Z" />
    </svg>
  );
}

function StoreBadge({ href, icon, caption, name }: { href: string; icon: ReactNode; caption: string; name: string }) {
  return (
    <a
      href={href}
      aria-label={`${caption} ${name}`}
      className="inline-flex h-14 items-center gap-3 rounded-xl bg-black px-4 text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
    >
      {icon}
      <span className="flex flex-col leading-none">
        <span className="text-[0.7rem] font-medium">{caption}</span>
        <span className="mt-1 text-xl font-semibold tracking-tight">{name}</span>
      </span>
    </a>
  );
}

/** Sentri Home card — white panel with store badges and the app screens. */
export function SentriHomeCard({ className }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div id="sentri-home" className="grid scroll-mt-28 items-center gap-10 overflow-hidden rounded-3xl bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-14">
        <div>
          <Eyebrow>{SENTRI_HOME.eyebrow}</Eyebrow>
          <h3 className="mt-5 text-balance text-3xl font-bold tracking-tight text-sentri-ink sm:text-4xl md:text-display-sm">
            {SENTRI_HOME.heading} <span className="text-sentri">with Sentri.</span>
          </h3>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {keepHyphens(SENTRI_HOME.body)}
          </p>
          <p className="mt-8 font-bold text-sentri-ink">{SENTRI_HOME.downloadLabel}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <StoreBadge
              href={SENTRI_LINKS.appStore}
              icon={<AppleIcon />}
              caption="Download on the"
              name="App Store"
            />
            <StoreBadge
              href={SENTRI_LINKS.playStore}
              icon={<GooglePlayIcon />}
              caption="GET IT ON"
              name="Google Play"
            />
          </div>
          <div className="mt-8">
            <TextLink href={SENTRI_LINKS.home}>{SENTRI_HOME.exploreLabel}</TextLink>
          </div>
        </div>

        <Image
          src={SENTRI_HOME.image.src}
          alt={SENTRI_HOME.image.alt}
          width={SENTRI_HOME.image.width}
          height={SENTRI_HOME.image.height}
          sizes="(max-width: 1024px) 90vw, 600px"
          className="mx-auto h-auto w-full max-w-xl mix-blend-multiply"
        />
      </div>
    </Reveal>
  );
}

/** Sentri Commercial card — navy panel with the buildings dashboard. */
export function SentriCommercialCard({ className }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div id="sentri-commercial" className="grid scroll-mt-28 items-center gap-12 overflow-hidden rounded-3xl bg-sentri-navy p-6 text-white shadow-xl sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:p-14">
        <div>
          <Eyebrow>{SENTRI_COMMERCIAL.eyebrow}</Eyebrow>
          <h3 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-display-sm">
            {SENTRI_COMMERCIAL.heading} <span className="text-sentri">with Sentri.</span>
          </h3>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            {keepHyphens(SENTRI_COMMERCIAL.body)}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {SENTRI_COMMERCIAL.chips.map((chip) => (
              <li key={chip} className="rounded-pill bg-white/10 px-4 py-2 text-sm font-semibold">
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={SENTRI_LINKS.requestDemo}
              className="group inline-flex items-center gap-3 rounded-pill bg-sentri px-8 py-4 font-bold text-white shadow-lg shadow-sentri/30 transition-colors hover:bg-[#d81a1e]"
            >
              {SENTRI_COMMERCIAL.demoLabel}
              <Arrow />
            </a>
            <TextLink href={SENTRI_LINKS.commercial} onDark>
              {SENTRI_COMMERCIAL.exploreLabel}
            </TextLink>
          </div>
        </div>

        <Image
          src={SENTRI_COMMERCIAL.image.src}
          alt={SENTRI_COMMERCIAL.image.alt}
          width={SENTRI_COMMERCIAL.image.width}
          height={SENTRI_COMMERCIAL.image.height}
          sizes="(max-width: 1024px) 90vw, 640px"
          className="mx-auto h-auto w-full max-w-2xl"
        />
      </div>
    </Reveal>
  );
}

/** Closing strip — tagline plus Follow Sentri social links. */
export function SentriOutro({ className, ecosystemNote }: { className?: string; ecosystemNote?: boolean }) {
  return (
    <Reveal className={className}>
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-balance text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-sentri-ink">{SENTRI_OUTRO.lead}</span>{" "}
            <span className="text-sentri">{SENTRI_OUTRO.accent}</span>
          </p>
          {ecosystemNote && (
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
              {SENTRI_OUTRO.ecosystemNote}
            </p>
          )}
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Follow Sentri</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={SENTRI_LINKS.linkedin}
              className="inline-flex items-center gap-2 rounded-pill bg-sentri-ink px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={SENTRI_LINKS.instagram}
              className="inline-flex items-center gap-2 rounded-pill border border-slate-200 px-5 py-2.5 font-semibold text-sentri-ink transition-colors hover:border-sentri"
            >
              <svg viewBox="0 0 24 24" className="size-5 text-sentri" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function SentriSection() {
  return (
    <section id="sentri" className="bg-sentri-surface py-section-sm md:py-section">
      <Container>
        {/* Intro */}
        <Reveal className="mx-auto max-w-6xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-display">
            <span className="block text-sentri-ink">{SENTRI_INTRO.heading}</span>
            <span className="block text-sentri">{SENTRI_INTRO.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {keepHyphens(SENTRI_INTRO.body)}
          </p>
        </Reveal>

        <SentriHomeCard className="mt-14 md:mt-20" />
        <SentriCommercialCard className="mt-8" />
        <SentriOutro className="mt-8" />
      </Container>
    </section>
  );
}
