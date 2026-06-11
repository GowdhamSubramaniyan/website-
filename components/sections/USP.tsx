import Image from "next/image";
import type { ReactNode } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type UspImage = { src: string; alt: string; width: number; height: number };

type UspBlockProps = {
  headline: ReactNode;
  paragraphs: string[];
  cta: { label: string; href: string };
  image: UspImage;
  /** Place the image on the left (text on the right). */
  reverse?: boolean;
};

function UspBlock({ headline, paragraphs, cta, image, reverse }: UspBlockProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={cn(reverse && "lg:order-2")}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-display-sm">
          {headline}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-7">
          <Button href={cta.href} variant="primary" withArrow>
            {cta.label}
          </Button>
        </div>
      </Reveal>

      <Reveal delay={150} className={cn(reverse && "lg:order-1")}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-full w-full rounded-2xl object-cover shadow-2xl"
        />
      </Reveal>
    </div>
  );
}

/** Two stacked value-proposition blocks on a near-black surface. */
export function USP() {
  return (
    <SectionWrapper background="ink">
      <div className="space-y-20 md:space-y-28">
        <UspBlock
          headline={
            <span className="text-lime">
              Trusted by Organisations Preparing for What&apos;s Next
            </span>
          }
          paragraphs={[
            "As lenders, investors, governments, and supply chains demand greater transparency, businesses are under increasing pressure to demonstrate operational performance, emissions visibility, and reporting readiness.",
            "Most organisations already hold the data they need. The challenge is turning fragmented information into clear operational intelligence and measurable commercial outcomes.",
            "Vision Zero Connect helps organisations move beyond disconnected spreadsheets, manual reporting, and isolated ESG exercises by transforming building and operational data into actionable intelligence.",
          ]}
          cta={{ label: "Explore the Ecosystem", href: "#products" }}
          image={{
            src: "/assets/home/usp-collaboration.png",
            alt: "Colleagues reviewing operational data together",
            width: 800,
            height: 1000,
          }}
        />

        <UspBlock
          reverse
          headline={
            <>
              Most Platforms Stop at Reporting.{" "}
              <span className="text-lime">
                Vision Zero Connect Goes All the Way to Return.
              </span>
            </>
          }
          paragraphs={[
            "Most ESG platforms focus on disclosure. Vision Zero Connect connects reporting with operational performance, asset optimisation, and financial outcomes.",
            "From emissions visibility and compliance readiness through to energy optimisation, portfolio performance, financing alignment, and long-term asset strategy, VZC helps organisations turn data into measurable business value.",
          ]}
          cta={{ label: "Select a Product", href: "#products" }}
          image={{
            src: "/assets/home/usp-team.png",
            alt: "Business team meeting outside a modern office",
            width: 1920,
            height: 1080,
          }}
        />
      </div>
    </SectionWrapper>
  );
}
