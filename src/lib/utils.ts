/**
 * Splits a feature string into a bold lead phrase and the rest.
 * Bolding the first 2-3 words makes checklists scannable.
 *
 * Example: "Staff trained in SEND awareness" → ["Staff trained in", "SEND awareness"]
 */
export function splitFeatureText(feature: string): [string, string] {
  const match = feature.match(/^(\S+\s\S+\s?\S*)\s(.+)$/);
  if (!match) return [feature, ""];
  return [match[1], match[2]];
}
