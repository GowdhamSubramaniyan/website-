import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Vision Zero Connect",
};

export default function PrivacyPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main" className="bg-white text-ink">
        <Container className="max-w-3xl pb-24 pt-40">
          <h1 className="text-4xl font-bold tracking-tight text-teal md:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
            <p>
              Vision Zero Connect is committed to protecting your privacy. This
              page describes how we collect, use, and safeguard the information
              you share with us.
            </p>
            <p>
              The full privacy policy is being finalised. For any questions about
              how your data is handled, please contact{" "}
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
