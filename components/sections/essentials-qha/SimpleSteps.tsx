import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SIMPLE_STEPS } from "./essentials-qha.data";

/**
 * "3 Simple Steps" — the reporting flow (data input → review → report) as three
 * white cards on a dark teal band, closed by a lighter "ready to see it" demo
 * CTA panel.
 */
export function SimpleSteps() {
  return (
    <section className="relative overflow-hidden bg-grad-teal-band py-16 text-white md:py-24">
      <Container className="relative">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            3 Simple Steps
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SIMPLE_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-7 text-center">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#006361] text-base font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 px-6 py-10 text-center sm:px-10">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Ready to see Essentials in action?
            </h3>
            <p className="text-sm leading-relaxed text-white/75">
              Book a personalised demonstration with our team.
            </p>
            <a
              href="#contact"
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-pill bg-white px-7 py-3.5 text-sm font-semibold text-teal transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal"
            >
              Book a Demo
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
