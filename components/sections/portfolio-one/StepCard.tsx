import type { Step } from "./portfolio-one.data";

/**
 * One step in the implementation process: a teal card with a large step number,
 * a bold title, and a short description.
 */
export function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-teal p-6 text-white shadow-lg shadow-teal/20">
      <span aria-hidden className="text-3xl font-bold text-lime sm:text-4xl">
        {step.number}
      </span>
      <h3 className="mt-4 text-lg font-bold leading-tight">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        {step.description}
      </p>
    </div>
  );
}
