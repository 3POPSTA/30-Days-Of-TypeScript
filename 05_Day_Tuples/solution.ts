/**
 * ============================================================================
 * SOLUTION DAY 05: TUPLES, LABELED TUPLES & AS CONST
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task(p1: [number, number], p2: [number, number]): number {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

export function level2Task(entry: string): [key: string, value: string] {
  const index = entry.indexOf("=");
  if (index === -1) return [entry, ""];
  return [entry.slice(0, index), entry.slice(index + 1)];
}

export function level3Task<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const len = Math.min(arr1.length, arr2.length);
  const result: [T, U][] = [];
  for (let i = 0; i < len; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}


console.log("[Solution Day 05] Verified reference implementation.");
