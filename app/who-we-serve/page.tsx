import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  WhoWeServeHero,
  Audiences,
  BetterPerformance,
} from "@/components/sections/who-we-serve";

export const metadata: Metadata = {
  title: "Who We Serve — Vision Zero Connect",
  description:
    "Vision Zero Connect supports the organisations responsible for asset performance — asset owners, investors, and portfolio managers seeking operational visibility and stronger long-term returns.",
};

/**
 * WhoWeServePage — assembles the Who We Serve sections top-to-bottom, framed by
 * the global Header (light theme over the light hero) and Footer. Matches the
 * Canva: light hero followed by the six audience cards on the dark teal band.
 */
export default function WhoWeServePage() {
  return (
    <>
      <Header theme="light" />
      <main id="main">
        <WhoWeServeHero />
        <Audiences />
        <BetterPerformance />
      </main>
      <Footer />
    </>
  );
}
