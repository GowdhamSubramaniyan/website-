import type { Feature } from "./features.data";

/**
 * A single numbered feature card on the teal Features band — lime number and
 * title on the left, description on the right. Drive from the FEATURES array.
 */
export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="grid h-full gap-3 rounded-xl bg-[#2e5a54] p-6 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:p-8">
      <div>
        <span className="text-2xl font-bold text-lime">{feature.number}</span>
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
