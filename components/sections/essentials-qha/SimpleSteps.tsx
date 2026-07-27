import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SIMPLE_STEPS } from "./essentials-qha.data";

/**
 * "3 Simple Steps" — the reporting flow (data input → review → report) as three
 * numbered cards on a dark teal band, closed by a "ready to see it" demo CTA.
 */
export function SimpleSteps() {
  return (
    <section className="relative overflow-hidden bg-grad-teal-band py-16 text-white md:py-24">
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            3 simple steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            From your existing bills to a lender-ready report — in minutes, not
            months.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SIMPLE_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                <span className="text-3xl font-bold text-lime">{step.step}</span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-lime/25 bg-white/5 px-6 py-8 text-center sm:px-10">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Ready to see Essentials in action?
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/75">
              Book a personalised demo tailored to your venue and see your own
              data turned into a compliant report.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-pill bg-lime px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal"
            >
              Book a Demo
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
