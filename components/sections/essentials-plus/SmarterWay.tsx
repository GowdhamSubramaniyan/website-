import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

// Reuses the shared product step screenshots (number badges baked in).
const STEPS: Step[] = [
  {
    title: "Upload Utility Bills & Business Data",
    description:
      "Upload utility bills and operational business data. The Essentials+ AI Engine automatically extracts and processes the information for you.",
    image: "/assets/essentials/step1.png",
    alt: "Upload utility bills screen",
  },
  {
    title: "Track ESG & Operational Performance",
    description:
      "Monitor ESG metrics, emissions, and operational insights through a live dashboard designed for visibility and faster reporting.",
    image: "/assets/essentials/step2.png",
    alt: "ESG health score dashboard",
  },
  {
    title: "Generate Professional ESG Reports",
    description:
      "Export professional lender-ready, procurement-ready, and investor-ready ESG reports in PDF or PowerPoint format within minutes.",
    image: "/assets/essentials/step3.png",
    alt: "Report configuration screen",
  },
];

/**
 * A Smarter Way to Handle ESG Reporting (section 4) — light band, centered dark
 * heading, and three numbered steps (screenshot + baked-in badge + copy).
 */
export function SmarterWay() {
  return (
    <section className="bg-[linear-gradient(180deg,#dce2e4_0%,#b4c0d0_55%,#8a9cb7_100%)] py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            A Smarter Way to Handle ESG Reporting
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:gap-8 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 22rem, 90vw"
                  className="h-auto w-full"
                />
                <h3 className="mt-6 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/75">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
