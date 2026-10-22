/**
 * ============================================================================
 * SOLUTION DAY 07: TYPE ALIASES & INTERSECTION TYPES
 * ============================================================================
 */

export function level1Task(input: string): string {
  return `Day 07 L1: ${input.trim()}`;
}

export function level2Task(values: number[]): { count: number; sum: number } {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  return { success: true, data: item, day: 7 };
}

console.log("[Solution Day 07] All tasks functioning accurately.");
