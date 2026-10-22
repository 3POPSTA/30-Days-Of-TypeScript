/**
 * ============================================================================
 * SOLUTION DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task(val: string | number): number {
  if (typeof val === "string") return val.length;
  return val;
}

export function level2Task(input: Date | string | number): number {
  if (input instanceof Date) return input.getTime();
  if (typeof input === "string") return new Date(input).getTime();
  return input;
}

export type Fish = { swim: () => string };
export type Bird = { fly: () => string };

export function level3Task(animal: Fish | Bird): string {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}


console.log("[Solution Day 09] Verified reference implementation.");
