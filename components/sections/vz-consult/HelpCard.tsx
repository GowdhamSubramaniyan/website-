import type { HelpItem } from "./vz-consult.data";

/** One capability in the "What We Help With" list — soft teal-tinted card. */
export function HelpCard({ item }: { item: HelpItem }) {
  return (
    <div className="rounded-xl bg-[#d9e7e2] p-5">
      <h3 className="text-base font-bold text-ink">{item.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{item.description}</p>
    </div>
  );
}
