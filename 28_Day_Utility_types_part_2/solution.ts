/**
 * ============================================================================
 * SOLUTION DAY 28: UTILITY TYPES MASTERCLASS (PART 2)
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export type PrimitiveUnion = string | number | boolean;
export type OnlyNumbers = Extract<PrimitiveUnion, number>;

export function level1Task(val: PrimitiveUnion): boolean {
  return typeof val === "number";
}

export function level2Task<T>(items: (T | null | undefined)[]): T[] {
  return items.filter((x): x is T => x !== null && x !== undefined);
}

export function level3Task<F extends (...args: any[]) => any>(
  fn: F
): (...args: Parameters<F>) => { result: ReturnType<F>; durationMs: number } {
  return (...args: Parameters<F>) => {
    const start = Date.now();
    const result = fn(...args);
    const durationMs = Date.now() - start;
    return { result, durationMs };
  };
}


console.log("[Solution Day 28] Verified reference implementation.");
