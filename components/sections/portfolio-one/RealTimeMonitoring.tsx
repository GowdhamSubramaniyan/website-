import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { monitoring } from "./portfolio-one.data";

/**
 * "Real-Time Monitoring Across Critical Building Systems" — soft mint band.
 * Image on the left; teal heading, intro, the six monitored-metric chips, a
 * supporting note, and a CTA on the right. Columns stack on mobile.
 */
export function RealTimeMonitoring() {
  return (
    <SectionWrapper background="mint">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="lg:self-end">
          <div className="lg:-mb-24 lg:-ml-12 lg:origin-bottom lg:scale-[1.22]">
            <Image
              src={monitoring.image.src}
              alt={monitoring.image.alt}
              width={900}
              height={1000}
              sizes="(min-width: 1024px) 44rem, 100vw"
              className="mx-auto h-auto w-full max-w-md object-contain lg:max-w-none"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-display-sm">
            {monitoring.headline}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
            {monitoring.intro}
          </p>
          <p className="mt-6 font-semibold text-ink">{monitoring.chipsLead}</p>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {monitoring.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-pill bg-teal px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                {chip}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-ink/60">
            {monitoring.note}
          </p>

          <div className="mt-8">
            <Button href={monitoring.cta.href} variant="dark" size="lg" withArrow>
              {monitoring.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
