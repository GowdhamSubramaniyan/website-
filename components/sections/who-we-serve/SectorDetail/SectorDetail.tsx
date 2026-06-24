import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { SectorDetailContent } from "./sectorDetails.data";

/**
 * One reusable sector spotlight (Prompt 5) — image + text that alternates sides
 * and white/mint backgrounds by index. Carries id="sector-<slug>" so the grid
 * cards anchor here.
 */
export function SectorDetail({
  sector,
  index,
}: {
  sector: SectorDetailContent;
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <section
      id={`sector-${sector.slug}`}
      className={cn("scroll-mt-20 py-16 md:py-24", reverse ? "bg-grad-mint" : "bg-white")}
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className={cn(reverse && "lg:order-2")}>
            <div className="overflow-hidden rounded-3xl shadow-md">
              <Image
                src={sector.image}
                alt={sector.name}
                width={960}
                height={640}
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120} className={cn(reverse && "lg:order-1")}>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Who We Serve
            </span>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {sector.name}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink/80 sm:text-lg">
              {sector.lead}
            </p>
            <ul className="mt-6 space-y-3">
              {sector.pressures.map((pressure) => (
                <li key={pressure} className="flex items-start gap-3">
                  <DotIcon />
                  <span className="text-base leading-relaxed text-ink/75">
                    {pressure}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-lime pl-4 text-base font-medium leading-relaxed text-ink">
              {sector.solution}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
    </svg>
  );
}
