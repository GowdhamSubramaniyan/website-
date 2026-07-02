import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

/**
 * Top-of-page hero. Teal gradient (matching the design) with the headline + CTA
 * on the left and a large product-dashboard monitor that bleeds off the right
 * edge on desktop. Copy and visual animate in on load.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden text-white">
      <Container className="relative z-10 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="lg:w-[50%]">
          <h1 className="animate-fade-in-up text-balance text-4xl font-semibold tracking-tight [animation-delay:120ms] sm:text-5xl md:text-display">
            <GradientText variant="lime">
              Real Asset Intelligence for a More Demanding Economy
            </GradientText>
          </h1>
          <p className="animate-fade-in-up mt-5 max-w-xl text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            Operational intelligence and ESG reporting designed to help
            organisations improve asset performance, strengthen financing
            readiness, and stay commercially competitive.
          </p>
          <ul className="animate-fade-in-up mt-6 grid max-w-xl gap-x-6 gap-y-2.5 [animation-delay:270ms] sm:grid-cols-2">
            {[
              "Reduce avoidable energy & utility cost",
              "Audit-ready ESG & compliance reporting",
              "Real-time portfolio performance",
              "Financing-ready data & insights",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-white/90 sm:text-base"
              >
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="animate-fade-in-up mt-8 [animation-delay:300ms]">
            <Button href="#contact" variant="primary" withArrow>
              Get in Touch
            </Button>
          </div>
          {/* Monitor — stacked below copy on mobile/tablet */}
          <div className="animate-fade-in-up mt-12 [animation-delay:200ms] lg:hidden">
            <Image
              src="/assets/home/hero-dashboard.png"
              alt="Vision Zero Connect operational intelligence dashboard"
              width={1080}
              height={1080}
              preload
              sizes="100vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>

      {/* Monitor — FIXED pixel size, anchored to the RIGHT EDGE of the viewport
          and pushed partly off-screen so it reads as "cut off" by the frame.
          Fixed px keeps it from scaling/shifting when the window is resized. */}
      <div className="pointer-events-none absolute right-0 top-[63%] hidden -translate-y-1/2 lg:block">
        <Image
          src="/assets/home/hero-dashboard.png"
          alt=""
          width={1080}
          height={1080}
          preload
          sizes="px"
          className="animate-hero-image h-auto w-[480px] max-w-none translate-x-[20%] drop-shadow-2xl xl:w-[560px]"
        />
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-lime"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm3.9 6.2-4.6 4.6a1 1 0 0 1-1.4 0L5.9 10.3a1 1 0 1 1 1.4-1.4l1.3 1.3 3.9-3.9a1 1 0 0 1 1.4 1.4z" />
    </svg>
  );
}
