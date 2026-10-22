/**
 * ============================================================================
 * SOLUTION DAY 02: PRIMITIVE DATA TYPES & TYPE ANNOTATIONS
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task(cents: number): string {
  const dollars = (cents / 100).toFixed(2);
  return `$${dollars}`;
}

export function level2Task(binaryString: string): number {
  return parseInt(binaryString, 2);
}

export function level3Task(label: string): { key: symbol; label: string } {
  const key = Symbol(label);
  return { key, label };
}


console.log("[Solution Day 02] Verified reference implementation.");
