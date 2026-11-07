export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://oneshotmarketing.ca"
).replace(/\/$/, "");

export const SITE_NAME = "One Shot Marketing";

/** Shortens a piece of existing copy into a meta description (~155 chars). */
export function toMetaDescription(text: string, max = 155) {
  const plain = text
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-–—]$/, "") + "…";
}
