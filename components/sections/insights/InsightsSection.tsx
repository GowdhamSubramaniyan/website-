import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InsightCard } from "./InsightCard";
import { INSIGHTS } from "./insights.data";

/** "Recognitions, Insights, and Developments" — intro + three insight cards. */
export function InsightsSection() {
  return (
    <SectionWrapper id="insights" background="white">
      <SectionHeading
        headline="Recognitions, Insights, and Developments"
        description={
          <>
            Vision Zero Connect continues to contribute to the future of
            operational intelligence, building performance, and real asset
            optimisation through industry collaboration, strategic partnerships,
            and recognised thought leadership across global markets. From
            platform innovation and operational reporting through to financing
            readiness, portfolio visibility, and measurable commercial outcomes,
            our work supports organisations navigating an increasingly complex
            operational and regulatory environment.
          </>
        }
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {INSIGHTS.map((insight) => (
          <InsightCard key={insight.title} insight={insight} />
        ))}
      </div>
    </SectionWrapper>
  );
}
