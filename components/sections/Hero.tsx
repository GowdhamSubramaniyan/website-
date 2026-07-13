import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ScrollCue } from "@/components/ui/ScrollCue";

/**
 * Top-of-page hero. Teal gradient (matching the design) with the headline, value
 * points, and CTA on the left and the branded corporate video on the right.
 * Copy and visual animate in on load.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden text-white">
      {/* Slowly panning grid backdrop */}
      <div
        aria-hidden
        className="animate-grid-pan pointer-events-none absolute inset-0 z-0 opacity-[0.07] [background-image:linear-gradient(rgba(196,239,226,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(196,239,226,0.6)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(125%_125%_at_50%_40%,#000_28%,transparent_78%)]"
      />
      {/* Deepen the top-right corner for a richer gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(85%_85%_at_100%_0%,rgba(3,18,16,0.6)_0%,transparent_58%)]"
      />
      <Container className="relative z-10 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="animate-fade-in-up mb-7 block h-px w-14 bg-grad-lime [animation-delay:80ms]" />
            <h1 className="animate-fade-in-up text-2xl font-semibold leading-snug tracking-tight text-white [animation-delay:120ms] sm:text-3xl md:text-[2rem] md:leading-[1.25]">
Vision Zero Connect deliver outstanding, AI-driven software platforms to streamline{" "}
              <GradientText variant="lime" className="mt-1 block font-semibold">
                ESG Reporting and Optimise Building Performance.
              </GradientText>
            </h1>
            <p className="animate-fade-in-up mt-6 max-w-md text-sm font-normal leading-relaxed text-white/65 [animation-delay:200ms] sm:text-[0.95rem]">
Influenced by our engineering experience, Vision Zero Connect platforms capture critical building performance data, which form the foundation of focussed reports, featuring actionable insights and strategies, alongside simple, but effective ESG reporting            </p>

            <ul className="animate-fade-in-up mt-8 grid max-w-lg gap-x-8 gap-y-3 border-t border-white/10 pt-7 [animation-delay:240ms] sm:grid-cols-2">
              {[
                "Live data integrations and AI-assisted analytics",
                "Audit-ready ESG & compliance reporting",
                "Real-time portfolio performance analysis",
                "Financing-ready data & strategy planning",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[0.8rem] font-medium leading-snug tracking-wide text-white/80 sm:text-[0.85rem]"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div className="animate-fade-in-up w-full [animation-delay:200ms] lg:ml-auto lg:max-w-[34rem]">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
              <VideoEmbed
                branded
                youtubeId="c-bXx1f9-wM"
                posterAlt="Watch the Vision Zero Connect overview"
                sizes="(min-width: 1024px) 34rem, 90vw"
              />
            </div>
          </div>
        </div>
      </Container>
      <ScrollCue />
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-lime"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}
