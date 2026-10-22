/**
 * ============================================================================
 * SOLUTION DAY 20: GENERICS CONSTRAINTS & KEYOF OPERATOR
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task<T extends { length: number }>(item: T): number {
  return item.length;
}

export function level2Task<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

export function level3Task<T extends object>(target: T, patch: Partial<T>): T {
  return { ...target, ...patch };
}


console.log("[Solution Day 20] Verified reference implementation.");
