import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Frameworks and Reporting Standards (Prompt 7) — white band with heading +
 * intro and a responsive grid of the official standard logos.
 */
const FRAMEWORKS = [
  { name: "European Sustainability Reporting Standards", logo: "/assets/essentials/frameworks/esrs.png" },
  { name: "Corporate Sustainability Reporting Directive", logo: "/assets/essentials/frameworks/csrd.png" },
  { name: "Streamlined Energy & Carbon Reporting", logo: "/assets/essentials/frameworks/secr.png" },
  { name: "UK Sustainability Reporting Standards", logo: "/assets/essentials/frameworks/uk-srs.png" },
  { name: "Securities and Exchange Commission (Philippines)", logo: "/assets/essentials/frameworks/sec-ph.png" },
  { name: "Environmental Protection Agency", logo: "/assets/essentials/frameworks/epa.png" },
  { name: "Task Force on Climate-related Financial Disclosures", logo: "/assets/essentials/frameworks/tcfd.png" },
  { name: "National Greenhouse and Energy Reporting", logo: "/assets/essentials/frameworks/nger.png" },
  { name: "Australian Sustainability Reporting Standards", logo: "/assets/essentials/frameworks/asrs.png" },
];

export function Frameworks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Frameworks and Reporting Standards
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              Aligned with the frameworks lenders, customers, procurement teams,
              and regulators increasingly expect.
            </p>
            <p>
              Essentials supports internationally recognised ESG standards while
              remaining flexible to regional frameworks and local reporting
              requirements.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {FRAMEWORKS.map((framework, i) => (
            <Reveal key={framework.name} delay={i * 50}>
              <li className="flex items-center justify-center">
                <div className="relative h-16 w-full sm:h-20">
                  <Image
                    src={framework.logo}
                    alt={framework.name}
                    fill
                    sizes="220px"
                    className="object-contain"
                  />
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
