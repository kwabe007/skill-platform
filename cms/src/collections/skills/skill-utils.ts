/**
 * Normalize a list of skill names:
 * - Trim leading/trailing whitespace
 * - Collapse multiple spaces into one
 * - Convert to Title Case
 * - Remove empty strings and duplicates
 */
export function normalizeAndAddSlugs(skills: string[]): { name: string; slug: string }[] {
  const toTitleCase = (str: string) =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  const normalized = skills
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0)
    .map((skill) => skill.replace(/\s+/g, " ")) // collapse extra spaces
    .map(toTitleCase);

  const unique = [...new Set(normalized)];
  return unique.map((skill) => ({ name: skill, slug: slugify(skill) }));
}

/**
 * Create a slug from a string.
 * @param str
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/[^a-z0-9-]/g, "") // remove invalid chars
    .replace(/--+/g, "-");
}
