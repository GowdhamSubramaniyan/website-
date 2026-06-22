import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const CHALLENGES = [
  "Repetitive questionnaires from multiple stakeholders",
  "Increasing lender and procurement requirements",
  "Evolving ESG and reporting expectations",
  "Time-consuming manual reporting processes",
  "Limited resources and internal expertise",
];

/**
 * SMEs Are Being Asked to Do More — light block framing the rising reporting
 * pressure on SMEs: copy + a challenges list on the left, context photo right.
 */
export function WhyEssentialsPlus() {
  return (
    <section className="bg-[#f4f6f7] py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              <span className="block">SMEs Are Being</span>
              <span className="block">Asked to Do More</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
              Growing expectations from lenders, customers, and supply chain
              partners are creating new reporting challenges for SMEs.
            </p>
            <ul className="mt-6 max-w-xl list-disc space-y-2 pl-5 text-base text-ink/75 marker:text-ink/40">
              {CHALLENGES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-7 text-base font-bold text-ink">
              More reporting. More complexity. More pressure.
            </p>
          </Reveal>

          {/* Photo */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-lg lg:ml-auto">
              <Image
                src="/assets/essentials-plus/why.png"
                alt="An SME professional overwhelmed by reporting demands"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 30rem, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
