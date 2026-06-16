import { Card } from "@/components/ui/Card";
import type { Feature } from "./portfolio-one.data";

/**
 * One capability card in the Intelligent Tools grid: a navy numbered badge
 * beside the title, with the description below. Numerals render in CSS so the
 * step-N PNGs aren't required.
 */
export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="h-full">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-white"
        >
          {feature.number}
        </span>
        <h3 className="self-center text-xl font-bold leading-tight text-ink">
          {feature.title}
        </h3>
      </div>
      <p className="mt-4 text-base leading-relaxed text-ink/70">
        {feature.description}
      </p>
    </Card>
  );
}
