/**
 * ============================================================================
 * SOLUTION DAY 23: MAPPED TYPES & KEY REMAPPING
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

export type Optional<T> = {
  [K in keyof T]?: T[K];
};

export function level1Task<T extends object>(obj: T): MyReadonly<T> {
  return Object.freeze({ ...obj });
}

export function level2Task<T extends object>(obj: T): Optional<T> {
  return { ...obj };
}

export function level3Task<T extends Record<string, any>>(obj: T): Record<string, () => any> {
  const result: Record<string, () => any> = {};
  for (const k of Object.keys(obj)) {
    const capitalized = k.charAt(0).toUpperCase() + k.slice(1);
    result[`get${capitalized}`] = () => obj[k];
  }
  return result;
}


console.log("[Solution Day 23] Verified reference implementation.");
