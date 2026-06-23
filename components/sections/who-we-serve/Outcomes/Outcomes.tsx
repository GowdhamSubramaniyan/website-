import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard, type Stat } from "./StatCard";

/**
 * Outcomes / proof (Prompt 8) — real figures from the brand (no invented stats)
 * shown as StatCards, plus a partner logo strip.
 */
const STATS: Stat[] = [
  { value: "25+", label: "In-house industry experts" },
  { value: "4", label: "Countries with offices" },
  { value: "35+", label: "Organisations served" },
  { value: "8", label: "Sectors covered" },
];

const PARTNERS = [
  "/assets/home/partner-alaya.png",
  "/assets/home/partner-lsh.png",
  "/assets/home/partner-mml.png",
  "/assets/home/partner-riskory.png",
  "/assets/home/partner-roma.png",
  "/assets/home/partner-see.png",
  "/assets/home/partner-think-esg.png",
];

export function Outcomes() {
  return (
    <SectionWrapper background="mint" id="outcomes">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Proof"
          headline="Trusted across real-asset operations"
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={(i % 4) * 80}>
            <StatCard stat={stat} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-16 text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
          Working alongside
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PARTNERS.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={320}
              height={120}
              sizes="160px"
              className="h-10 w-auto opacity-70 transition-opacity hover:opacity-100 sm:h-12"
            />
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
