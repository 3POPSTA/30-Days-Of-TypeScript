/**
 * ============================================================================
 * SOLUTION DAY 13: FUNCTION OVERLOADING & SIGNATURES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function duplicate(val: string): string;
export function duplicate(val: number): number;
export function duplicate(val: string | number): string | number {
  if (typeof val === "string") return val + val;
  return val * 2;
}

export function makeDate(timestamp: number): Date;
export function makeDate(y: number, m: number, d: number): Date;
export function makeDate(a: number, b?: number, c?: number): Date {
  if (b !== undefined && c !== undefined) {
    return new Date(a, b - 1, c);
  }
  return new Date(a);
}

export function level1Task(val: string): string {
  return duplicate(val);
}

export function level2Task(y: number, m: number, d: number): number {
  return makeDate(y, m, d).getFullYear();
}

export function level3Task(all: boolean): string | string[] {
  if (all) return ["#item1", "#item2"];
  return "#item1";
}


console.log("[Solution Day 13] Verified reference implementation.");
