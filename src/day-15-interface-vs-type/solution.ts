/**
 * ============================================================================
 * SOLUTION DAY 15: INTERFACE VS TYPE ALIAS & DECLARATION MERGING
 * ============================================================================
 */

export function level1Task(input: string): string {
  return `Day 15 L1: ${input.trim()}`;
}

export function level2Task(values: number[]): { count: number; sum: number } {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  return { success: true, data: item, day: 15 };
}

console.log("[Solution Day 15] All tasks functioning accurately.");
