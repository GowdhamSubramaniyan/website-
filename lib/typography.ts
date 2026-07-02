/**
 * Typography helpers for body copy.
 */

/**
 * Replace the ASCII hyphen inside a compound word (e.g. "real-world",
 * "outcome-focused", "long-term") with a non-breaking hyphen (U+2011) so the
 * word never wraps across two lines. Hyphens between non-letters (ranges,
 * dashes with spaces) are left untouched.
 */
export function keepHyphens(text: string): string {
  return text.replace(/([A-Za-z])-([A-Za-z])/g, "$1‑$2");
}
