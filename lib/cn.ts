/**
 * Tiny classNames joiner — concatenates truthy class strings.
 * Keeps primitives dependency-free (no clsx/cva needed).
 */
export type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
