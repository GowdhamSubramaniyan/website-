import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  QhaHero,
  ComplianceReport,
  EssentialsPlus,
  PortfolioOne,
  AdvisoryTeam,
  WhyQha,
  SimpleSteps,
  QhaContact,
} from "@/components/sections/essentials-qha";

export const metadata: Metadata = {
  title: "Essentials for QHA Members — Vision Zero Connect",
  description:
    "Fast, affordable NGER-aligned carbon reporting for Queensland's pubs and hotels. Turn your existing utility bills into an audit-ready Scope 1, 2 & 3 emissions report.",
  // Direct-link-only landing page: not linked from the site menu and kept out of
  // search indexes so it is only reachable via the link we share with QHA.
  robots: { index: false, follow: false },
};

/**
 * Essentials for QHA Members — a standalone landing page for the Queensland
 * Hotels Association, served at /qha. Reachable only via a direct link (see
 * `robots` above); it is intentionally NOT added to the Header/Footer
 * navigation. Composes the QHA offer top-to-bottom: hero → compliance report →
 * Essentials+ → Portfolio One → advisory → why QHA → 3 steps → contact.
 */
export default function QhaPage() {
  return (
    <>
      <Header brand="essentials" />
      <main id="main">
        <QhaHero />
        <ComplianceReport />
        <EssentialsPlus />
        <PortfolioOne />
        <AdvisoryTeam />
        <WhyQha />
        <SimpleSteps />
        <QhaContact />
      </main>
      <Footer />
    </>
  );
}
