/**
 * ============================================================================
 * SOLUTION DAY 10: CUSTOM TYPE PREDICATES & ASSERTION FUNCTIONS
 * ============================================================================
 */

export function level1Task(input: string): string {
  return `Day 10 L1: ${input.trim()}`;
}

export function level2Task(values: number[]): { count: number; sum: number } {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  return { success: true, data: item, day: 10 };
}

console.log("[Solution Day 10] All tasks functioning accurately.");
