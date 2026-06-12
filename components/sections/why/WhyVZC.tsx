import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { VALUE_PROPS } from "./why.data";

function CheckIcon() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full bg-lime">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5 12.5l4 4 10-10"
          fill="none"
          stroke="#191a19"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Value proposition section: 4 teal value cards from a data array. */
export function WhyVZC() {
  return (
    <SectionWrapper background="white">
      <Reveal>
        <SectionHeading
          align="center"
          headline={
            <span className="text-teal">
              Why Organisations Work With Vision Zero Connect
            </span>
          }
          className="mx-auto"
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPS.map((value, i) => (
          <Reveal key={value.title} delay={i * 120} className="flex">
            <Card variant="teal" className="h-full w-full gap-4">
              <CheckIcon />
              <h3 className="text-lg font-bold text-lime">{value.title}</h3>
              <p className="text-sm leading-relaxed text-white/85">
                {value.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
