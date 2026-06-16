import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Sector = {
  title: string;
  description: string;
  image: string;
};

const SECTORS: Sector[] = [
  {
    title: "Healthcare Facilities",
    description: "Clinics, care homes, hospitals",
    image: "/assets/essentials/sectors/healthcare.png",
  },
  {
    title: "Property Managers",
    description: "Residential and commercial portfolios",
    image: "/assets/essentials/sectors/property.png",
  },
  {
    title: "Schools and Universities",
    description: "Educational campuses and academies",
    image: "/assets/essentials/sectors/schools.png",
  },
  {
    title: "Hotels and Hospitality",
    description: "Hotels, resorts, and venues",
    image: "/assets/essentials/sectors/hotels.png",
  },
  {
    title: "Retail and Restaurants",
    description: "Multi-site retail and F&B operators",
    image: "/assets/essentials/sectors/retail.png",
  },
  {
    title: "Constructions and Contractors",
    description: "Builders, fit-out, and civil works",
    image: "/assets/essentials/sectors/construction.png",
  },
  {
    title: "Manufacturing and Warehouses",
    description: "Factories, logistics hubs, and plants",
    image: "/assets/essentials/sectors/manufacturing.png",
  },
  {
    title: "Logistics and Transport",
    description: "Fleet operators and distribution",
    image: "/assets/essentials/sectors/logistics.png",
  },
];

/**
 * The SMEs Who Use Essentials Every Day (Prompt 9) — light band, heading +
 * subhead, then a 2-column grid of sector cards (image left half, teal panel
 * with lime title + description right half).
 */
export function Sectors() {
  return (
    <section className="bg-[#eef1ef] py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
            The SMEs Who Use Essentials Every Day
          </h2>
          <p className="mt-4 text-base text-ink/70">
            Real assets. Real businesses. Real results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.title} delay={(i % 2) * 80}>
              <div className="grid h-full grid-cols-2 overflow-hidden rounded-xl">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  width={480}
                  height={360}
                  sizes="(min-width: 1024px) 18rem, 45vw"
                  className="h-full w-full object-cover"
                />
                <div className="flex flex-col justify-center bg-teal p-6">
                  <h3 className="text-xl font-bold leading-tight text-lime">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {sector.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
