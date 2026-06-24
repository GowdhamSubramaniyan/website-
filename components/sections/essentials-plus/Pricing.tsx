import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Essentials+ for SMEs." (section 9) — a dark navy CTA band with a perspective
 * grid floor: eyebrow + lime headline + intro, the GET STARTED NOW CTA, and a
 * "prefer a demo first?" link.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#1b2630] py-20 text-white md:py-28"
    >
      {/* perspective grid floor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-[0.14] [background-image:linear-gradient(#7fd0c0_1px,transparent_1px),linear-gradient(90deg,#7fd0c0_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(to_top,#000,transparent)] [transform:perspective(420px)_rotateX(58deg)]"
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-snug text-white">
            Advanced ESG &amp; Operational Reporting
            <br className="hidden sm:block" /> Without Consultancy Complexity
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-lime sm:text-5xl">
            Essentials+ for SMEs.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/75">
            Essentials+ delivers enhanced ESG reporting, operational visibility,
            and transition planning capabilities through one streamlined platform
            designed for growing organisations.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-pill bg-grad-lime px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-ink shadow-sm transition-[filter] duration-200 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b2630]"
            >
              Get Started Now
            </Link>
            <p className="text-sm font-semibold text-lime">
              Prefer a demo first?{" "}
              <Link
                href="#video"
                className="italic underline underline-offset-4 hover:text-white"
              >
                See Essentials in Action.
              </Link>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
