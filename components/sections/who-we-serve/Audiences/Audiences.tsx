import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Audience = {
  name: string;
  paragraphs: string[];
  image: string;
};

/**
 * Audience spotlights — white rounded cards on a dark teal band. Each card has
 * the copy on the left and a full-height context image bleeding to the card's
 * right edge.
 */
const AUDIENCES: Audience[] = [
  {
    name: "Asset Owners and Investors",
    paragraphs: [
      "Organisations responsible for asset portfolios require greater visibility across operational performance, risk, reporting requirements, and long-term value creation.",
      "Vision Zero Connect supports asset owners and investors through operational intelligence, performance reporting, and data-driven insights that help improve decision-making, optimise asset outcomes, and support stronger long-term returns.",
    ],
    image: "/assets/who-we-serve/asset-owners.png",
  },
  {
    name: "Asset and Portfolio Managers",
    paragraphs: [
      "Managing assets at scale requires timely intelligence across performance, operations, compliance, and investment priorities.",
      "Vision Zero Connect helps asset and portfolio managers consolidate fragmented information into actionable insights that improve operational efficiency, strengthen oversight, and support more informed portfolio decisions.",
    ],
    image: "/assets/who-we-serve/asset-managers.png",
  },
  {
    name: "Infrastructure & Operational Organisations",
    paragraphs: [
      "Complex operational environments require clear visibility across assets, systems, and performance indicators to support efficient operations and long-term resilience.",
      "Vision Zero Connect provides connected intelligence and reporting capabilities that help organisations improve performance, manage risk, and optimise outcomes across diverse asset portfolios.",
    ],
    image: "/assets/who-we-serve/construction.png",
  },
  {
    name: "Financial Institutions and Advisors",
    paragraphs: [
      "Banks, lenders, investors, and advisors require reliable performance and operational data to support investment decisions, risk management, and stakeholder reporting.",
      "Vision Zero Connect delivers trusted intelligence and reporting capabilities that help organisations assess performance, identify opportunities, and support stronger commercial outcomes.",
    ],
    image: "/assets/who-we-serve/advisor.png",
  },
  {
    name: "Enterprise & Mid-Market Organisations",
    paragraphs: [
      "Organisations are increasingly expected to demonstrate operational performance, reporting readiness, and responsible management of assets and resources.",
      "Vision Zero Connect helps enterprise teams simplify reporting, improve visibility, and access the intelligence needed to support strategic decisions and long-term value creation.",
    ],
    image: "/assets/who-we-serve/corporate.png",
  },
  {
    name: "Supply Chain & Procurement Networks",
    paragraphs: [
      "Organisations across supply chains face growing expectations around operational transparency, reporting, and performance management.",
      "Vision Zero Connect helps businesses improve visibility across operations, respond to stakeholder requirements, and strengthen long-term value throughout the supply chain.",
    ],
    image: "/assets/who-we-serve/operations.png",
  },
];

export function Audiences() {
  return (
    <section id="audiences" className="bg-[#2f5d54] py-16 md:py-24">
      <Container>
        <div className="space-y-8">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.name} delay={(i % 2) * 100}>
              <AudienceCard audience={audience} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AudienceCard({ audience }: { audience: Audience }) {
  return (
    <div className="grid overflow-hidden rounded-3xl bg-white lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
        <h3 className="text-2xl font-bold text-[#2f5d54] sm:text-3xl">
          {audience.name}
        </h3>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/80">
          {audience.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div className="relative min-h-[15rem] lg:min-h-0">
        <Image
          src={audience.image}
          alt={audience.name}
          fill
          sizes="(min-width: 1024px) 36rem, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
