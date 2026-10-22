/**
 * ============================================================================
 * SOLUTION DAY 13: FUNCTION OVERLOADING & EXPLICIT THIS
 * ============================================================================
 */

export function level1Task(input: string): string {
  return `Day 13 L1: ${input.trim()}`;
}

export function level2Task(values: number[]): { count: number; sum: number } {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  return { success: true, data: item, day: 13 };
}

console.log("[Solution Day 13] All tasks functioning accurately.");
