import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { ConsultHero } from "@/components/sections/vz-consult";

export const metadata: Metadata = {
  title: "VZC Consult — Vision Zero Connect",
  description:
    "VZC Consult works with organisations navigating growing operational, reporting, and sustainability pressures across real assets and property portfolios.",
};

/**
 * VZCConsultPage — assembles the VZC Consult advisory sections top-to-bottom,
 * framed by the global Header and Footer, per the build prompts in
 * docs/Prompts/visionzeroconsult_prompts.md (Prompts 3–7 still to come).
 */
export default function VZCConsultPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ConsultHero />
      </main>
      <Footer />
    </>
  );
}
