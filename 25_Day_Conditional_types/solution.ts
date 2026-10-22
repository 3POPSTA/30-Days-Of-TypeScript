/**
 * ============================================================================
 * SOLUTION DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export type IsNumber<T> = T extends number ? true : false;
export type Diff<T, U> = T extends U ? never : T;
export type Flatten<T> = T extends (infer E)[] ? E : T;

export function level1Task(val: unknown): boolean {
  return typeof val === "number";
}

export function level2Task<T, U>(arr: T[], toExclude: U[]): Diff<T, U>[] {
  const excludeSet = new Set<unknown>(toExclude);
  return arr.filter(item => !excludeSet.has(item)) as Diff<T, U>[];
}

export function level3Task<T>(input: T): Flatten<T> {
  if (Array.isArray(input)) {
    return input[0] as Flatten<T>;
  }
  return input as Flatten<T>;
}


console.log("[Solution Day 25] Verified reference implementation.");
