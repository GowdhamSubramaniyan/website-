import { Spotlight } from "./Spotlight";
import {
  ESSENTIALS,
  ESSENTIALS_PLUS,
  PORTFOLIO_ONE,
  VZ_CONSULT,
} from "./spotlights.data";

/** Four product spotlights — each is the shared Spotlight fed by content props. */

export function EssentialsSection() {
  return <Spotlight {...ESSENTIALS} />;
}

export function EssentialsPlusSection() {
  return <Spotlight {...ESSENTIALS_PLUS} />;
}

export function PortfolioOneSection() {
  return <Spotlight {...PORTFOLIO_ONE} />;
}

export function VZConsultSection() {
  return <Spotlight {...VZ_CONSULT} />;
}
