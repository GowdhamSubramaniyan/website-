import { cn } from "@/lib/cn";
import type { Feature, FeatureIconName } from "./features.data";

/**
 * A single feature card on the teal Features band — a lime icon and number with
 * the title on the left, description on the right. Driven by the FEATURES array.
 */
export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="grid h-full gap-3 rounded-xl bg-[#2e5a54] p-6 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:p-8">
      <div>
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-lime/15 text-lime">
          <FeatureIcon name={feature.icon} />
        </span>
        <span className="mt-3 block text-2xl font-bold text-lime">{feature.number}</span>
        <h3 className="mt-2 text-lg font-bold leading-snug text-white">
          {feature.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-white/75">
        {feature.description}
      </p>
    </div>
  );
}

function FeatureIcon({ name }: { name: FeatureIconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("h-6 w-6"),
    "aria-hidden": true,
  };
  switch (name) {
    case "scan": // AI utility bill extraction
      return (
        <svg {...common}>
          <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2" />
          <path d="M4 12h16" />
        </svg>
      );
    case "calc": // automated calculations
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M12 11h.01M16 11h.01M8 15h2M12 15h.01M16 15h.01" />
        </svg>
      );
    case "dashboard": // real-time dashboards
      return (
        <svg {...common}>
          <path d="M3 12a9 9 0 0 1 18 0" />
          <path d="M12 12l4-2.5" />
          <path d="M3 12h2M19 12h2M12 12v0" />
        </svg>
      );
    case "report": // professional reports
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14a0 0 0 0 1 0 0H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v4h4M9 13h6M9 17h6M9 9h2" />
        </svg>
      );
    case "globe": // global & local frameworks
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "refresh": // regulatory & reporting updates
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 4v4h-4" />
        </svg>
      );
  }
}
