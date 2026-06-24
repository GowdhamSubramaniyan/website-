import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";

/**
 * Top-of-page hero. Teal gradient (matching the design) with the headline + CTA
 * on the left and a large product-dashboard monitor that bleeds off the right
 * edge on desktop. Copy and visual animate in on load.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden text-white">
      <Container className="relative z-10 pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="lg:w-[50%]">
          <span className="animate-fade-in-up block text-sm font-semibold tracking-wide text-[#35c4a3] sm:text-base">
            Operational Intelligence for Real Assets
          </span>
          <h1 className="animate-fade-in-up mt-4 text-balance text-4xl font-semibold tracking-tight [animation-delay:120ms] sm:text-5xl md:text-display">
            <GradientText variant="lime">
              Real Asset Intelligence for a More Demanding Economy
            </GradientText>
          </h1>
          <div className="animate-fade-in-up mt-5 max-w-xl space-y-4 text-base leading-relaxed text-white/80 [animation-delay:240ms] sm:text-lg">
            <p>
              Operational intelligence and ESG reporting designed to help
              organisations improve asset performance, strengthen financing
              readiness, reduce reporting complexity, and stay commercially
              competitive.
            </p>
            <p>
              Vision Zero Connect unifies sustainability, operations,
              compliance, and portfolio intelligence into one integrated
              platform built for{" "}
              <span className="whitespace-nowrap">real-world</span> financial and
              operational outcomes.
            </p>
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
      <div className="pointer-events-none absolute right-0 top-[57%] hidden -translate-y-1/2 lg:block">
        <Image
          src="/assets/home/hero-dashboard.png"
          alt=""
          width={1080}
          height={1080}
          preload
          sizes="px"
          className="animate-hero-image h-auto w-[600px] max-w-none translate-x-[20%] drop-shadow-2xl xl:w-[700px]"
        />
      </div>
    </section>
  );
}
