/**
 * ============================================================================
 * SOLUTION DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task(name: string, role: string = "User", prefix?: string): string {
  const p = prefix ? `${prefix} ` : "";
  return `${p}${role}: ${name}`;
}

export function level2Task(...nums: number[]): number {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function level3Task(initial: number, ...fns: ((n: number) => number)[]): number {
  return fns.reduce((acc, fn) => fn(acc), initial);
}


console.log("[Solution Day 12] Verified reference implementation.");
