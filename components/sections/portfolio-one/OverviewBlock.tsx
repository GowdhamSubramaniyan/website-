import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { overview } from "./portfolio-one.data";

/**
 * "Building Performance Management, Reimagined" — dark navy band with a faint
 * world-map backdrop (matching the design). A media panel with a centered play
 * affordance sits on the left; the lime heading and the three intro paragraphs
 * sit on the right. Columns stack on mobile.
 */
export function OverviewBlock() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-navy py-section-sm text-white md:py-section">
      {/* Faint global map backdrop, clipped to a semi-circle dome at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[64rem] -translate-x-1/2 translate-y-1/2 overflow-hidden rounded-full opacity-[0.09] md:h-[46rem] md:w-[104rem]"
      >
        <Image
          src="/assets/home/global-map.png"
          alt=""
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-full w-full object-cover brightness-0 invert"
        />
      </div>
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Media panel */}
        <Reveal>
          <a
            href="#contact"
            aria-label="See Portfolio One in action"
            className="group relative block overflow-hidden rounded-3xl border-2 border-white shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <Image
              src={overview.image.src}
              alt={overview.image.alt}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy/25 transition-colors group-hover:bg-navy/15" />
            <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white text-white transition-transform duration-200 group-hover:scale-110">
              <PlayIcon />
            </span>
          </a>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-lime sm:text-display-sm md:text-display">
            {overview.headline}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/80">
            {overview.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-9 w-9 translate-x-0.5">
      <path d="M6 4.5v11a.75.75 0 0 0 1.14.64l9-5.5a.75.75 0 0 0 0-1.28l-9-5.5A.75.75 0 0 0 6 4.5Z" />
    </svg>
  );
}
