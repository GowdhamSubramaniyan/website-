import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  title: string;
  description: string;
  video: string;
};

// Each step shows the matching product feature video (autoplay, muted, looping).
const STEPS: Step[] = [
  {
    title: "Upload Utility Bills & Business Data",
    description:
      "Upload utility bills and operational business data. The Essentials AI Engine automatically extracts and processes the information for you.",
    video: "/assets/essentials/videos/ai-utility-bill-extraction.mp4",
  },
  {
    title: "Track ESG & Operational Performance",
    description:
      "Monitor ESG metrics, emissions, and operational insights through a live dashboard designed for visibility and faster reporting.",
    video: "/assets/essentials/videos/real-time-esg-dashboards.mp4",
  },
  {
    title: "Generate Professional ESG Reports",
    description:
      "Export professional lender-ready, procurement-ready, and investor-ready ESG reports in PDF or PowerPoint format within minutes.",
    video: "/assets/essentials/videos/professional-esg-reports.mp4",
  },
];

/**
 * A Simple, Cost-Effective Way to Handle ESG Reporting (Prompt 3) — light grey
 * band, centered teal heading, and three numbered steps. Each step plays its
 * matching product feature video on loop, in the order of the workflow.
 */
export function SmarterWay() {
  return (
    <section className="bg-[#eef1ef] py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-5xl">
            A Simple, Cost-Effective Way to Handle ESG Reporting
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:gap-8 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                  <span className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <video
                    src={step.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="block w-full"
                  />
                </div>
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
