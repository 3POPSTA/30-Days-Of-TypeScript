/**
 * ============================================================================
 * SOLUTION DAY 06: OBJECT TYPES & PROPERTY MODIFIERS
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task(user: { name: string; email?: string }): string {
  return `${user.name} (${user.email ?? "No email"})`;
}

export function level2Task<T extends { id: string }>(original: T, patch: Partial<T>): T {
  return { ...original, ...patch, id: original.id };
}

export function level3Task(text: string): Record<string, number> {
  const words = text.toLowerCase().match(/\w+/g) ?? [];
  const map: Record<string, number> = {};
  for (const w of words) {
    map[w] = (map[w] ?? 0) + 1;
  }
  return map;
}


console.log("[Solution Day 06] Verified reference implementation.");
