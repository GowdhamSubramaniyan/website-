import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { Insight } from "./insights.data";

/**
 * Insight card: image on top, lime panel below with title, description, and a
 * "Learn more" link. The whole card links to its landing page.
 */
export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Card
      href={insight.href}
      padded={false}
      className="group overflow-hidden border-transparent"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col bg-lime p-5 text-ink">
        <h3 className="text-lg font-bold text-teal">{insight.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/80">
          {insight.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
          Learn more
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Card>
  );
}
