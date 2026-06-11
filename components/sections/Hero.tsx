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
    <section className="relative overflow-hidden bg-hero text-white lg:min-h-[42rem]">
      <Container className="relative z-10 pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="lg:w-[50%]">
          <span className="animate-fade-in-up block text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            Operational Intelligence for Real Assets
          </span>
          <h1 className="animate-fade-in-up mt-4 text-balance text-display-sm font-semibold tracking-tight [animation-delay:120ms] sm:text-display md:text-display-lg">
            Real Asset Intelligence for a{" "}
            <GradientText variant="lime">More Demanding Economy</GradientText>
          </h1>
          <div className="animate-fade-in-up mt-6 max-w-xl space-y-4 text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            <p>
              Operational intelligence and ESG reporting designed to help
              organisations improve asset performance, strengthen financing
              readiness, reduce reporting complexity, and stay commercially
              competitive.
            </p>
            <p>
              Vision Zero Connect connects sustainability, operations,
              compliance, and portfolio intelligence into one integrated
              platform built for real-world financial and operational outcomes.
            </p>
          </div>
          <div className="animate-fade-in-up mt-8 [animation-delay:360ms]">
            <Button href="#products" variant="primary" size="lg" withArrow>
              Discover our Products
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

      {/* Monitor — large, bleeding off the right edge on desktop */}
      <div className="pointer-events-none absolute right-0 top-[55%] hidden -translate-y-1/2 translate-x-[8%] lg:block">
        <Image
          src="/assets/home/hero-dashboard.png"
          alt=""
          width={1080}
          height={1080}
          preload
          sizes="56vw"
          className="animate-hero-image h-auto w-[56vw] max-w-none drop-shadow-2xl xl:w-[52vw]"
        />
      </div>
    </section>
  );
}
