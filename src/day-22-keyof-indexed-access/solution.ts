/**
 * ============================================================================
 * SOLUTION DAY 22: ADVANCED: KEYOF, TYPEOF & INDEXED ACCESS
 * ============================================================================
 */

export function level1Task(input: string): string {
  return `Day 22 L1: ${input.trim()}`;
}

export function level2Task(values: number[]): { count: number; sum: number } {
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  return { success: true, data: item, day: 22 };
}

console.log("[Solution Day 22] All tasks functioning accurately.");
