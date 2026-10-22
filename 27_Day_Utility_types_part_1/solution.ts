/**
 * ============================================================================
 * SOLUTION DAY 27: UTILITY TYPES MASTERCLASS (PART 1)
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export interface FullUser {
  id: number;
  name: string;
  email: string;
  secret: string;
}

export function level1Task<T extends object>(original: T, patch: Partial<T>): T {
  return { ...original, ...patch };
}

export function level2Task(user: FullUser): Omit<FullUser, "secret"> {
  const { secret, ...safe } = user;
  return safe;
}

export function level3Task<T>(items: T[], keySelector: (item: T) => string): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  for (const item of items) {
    const k = keySelector(item);
    if (!map[k]) map[k] = [];
    map[k].push(item);
  }
  return map;
}


console.log("[Solution Day 27] Verified reference implementation.");
