import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ChallengeItem } from "./ChallengeItem";
import { CHALLENGES } from "./challenges.data";

/**
 * Common Challenges We Solve (Prompt 6) — heading + intro on a dark band, then
 * the shared cross-sector challenges mapped from the CHALLENGES array.
 */
export function CommonChallenges() {
  return (
    <SectionWrapper background="dark" id="common-challenges">
      <Reveal>
        <SectionHeading
          eyebrow="Common Challenges"
          headline="The same pressures, across every sector"
          description="However different these industries look, the organisations that run real assets face a shared set of operational and reporting challenges."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map((challenge, i) => (
          <Reveal key={challenge.title} delay={(i % 3) * 80}>
            <ChallengeItem challenge={challenge} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
