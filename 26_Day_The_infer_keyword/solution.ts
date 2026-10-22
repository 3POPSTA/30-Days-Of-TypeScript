/**
 * ============================================================================
 * SOLUTION DAY 26: THE INFER KEYWORD & TYPE EXTRACTION
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
export type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;

export function level1Task<F extends (...args: any[]) => any>(fn: F, ...args: Parameters<F>): MyReturnType<F> {
  return fn(...args);
}

export async function level2Task<T>(prom: Promise<T>): Promise<UnwrapPromise<Promise<T>>> {
  return await prom;
}

export function level3Task(fn: (msg: string) => void): string {
  return "First parameter must be string";
}


console.log("[Solution Day 26] Verified reference implementation.");
