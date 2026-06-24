import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Knowledge Base — Vision Zero Connect",
};

export default function KnowledgeBasePage() {
  return (
    <>
      <Header theme="light" />
      <main id="main" className="bg-white text-ink">
        <Container className="max-w-3xl pb-24 pt-40">
          <h1 className="text-4xl font-bold tracking-tight text-teal md:text-5xl">
            Knowledge Base
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
            <p>
              Guides, FAQs, and resources for getting the most out of Vision Zero
              Connect are on the way.
            </p>
            <p>
              In the meantime, our team is happy to help — reach us at{" "}
              <a
                href="mailto:support@visionzeroconnect.com"
                className="font-semibold text-teal underline underline-offset-4"
              >
                support@visionzeroconnect.com
              </a>
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
