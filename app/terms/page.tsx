import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Business — Vision Zero Connect",
};

export default function TermsPage() {
  return (
    <>
      <Header theme="light" />
      <main id="main" className="bg-white text-ink">
        <Container className="max-w-3xl pb-24 pt-40">
          <h1 className="text-4xl font-bold tracking-tight text-teal md:text-5xl">
            Terms of Business
          </h1>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
            <p>
              These terms govern the use of Vision Zero Connect&rsquo;s platform
              and services. By accessing our products you agree to the terms set
              out here.
            </p>
            <p>
              The full terms of business are being finalised. For any questions
              in the meantime, please contact{" "}
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
