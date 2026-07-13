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
    <section id="video" className="relative scroll-mt-28 overflow-hidden bg-navy py-section-sm text-white md:py-section">
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
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Media panel */}
        <Reveal className="lg:h-full">
          <div className="overflow-hidden rounded-3xl border-2 border-white shadow-xl lg:h-full">
            <Image
              src={overview.image.src}
              alt={overview.image.alt}
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="aspect-video w-full object-cover lg:aspect-auto lg:h-full"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-lime sm:text-4xl md:text-display-sm">
            {overview.headline}
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/80">
            {overview.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-semibold text-white">{overview.listLead}</p>
          <ul className="mt-4 grid gap-2.5">
            {overview.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-white/85">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-lime"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}
