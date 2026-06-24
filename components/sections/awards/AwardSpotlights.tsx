import { AwardSpotlight } from "./AwardSpotlight";
import { AWARDS } from "./awards.data";

/**
 * The three award recognitions as rounded teal cards (lime headline + trophy
 * bleeding off the right) on white sections.
 */
export function AwardSpotlights() {
  return (
    <div id="awards" className="scroll-mt-24">
      {AWARDS.map((award) => (
        <AwardSpotlight key={award.name} award={award} />
      ))}
    </div>
  );
}
