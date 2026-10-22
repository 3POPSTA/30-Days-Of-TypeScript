/**
 * ============================================================================
 * SOLUTION DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function isNonEmptyString(x: unknown): x is string {
  return typeof x === "string" && x.trim().length > 0;
}

export function level1Task(x: unknown): boolean {
  return isNonEmptyString(x);
}

export function level2Task(mixed: (string | number | null | undefined)[]): string[] {
  return mixed.filter(isNonEmptyString);
}

export function level3Task(n: number): number {
  if (n <= 0) throw new Error("Number must be positive");
  return Math.sqrt(n);
}


console.log("[Solution Day 10] Verified reference implementation.");
