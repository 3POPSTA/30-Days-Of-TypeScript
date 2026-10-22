/**
 * ============================================================================
 * EXERCISE DAY 09: TYPE NARROWING & BUILT-IN GUARDS
 * ============================================================================
 * Instructions:
 * Complete the TODO sections below. Once finished, run:
 *   npx tsx src/day-09-type-narrowing/exercise.ts
 */

// ----------------------------------------------------------------------------
// TODO Level 1 (Fundamentals): Narrow string | number to formatted string
// ----------------------------------------------------------------------------
export function level1Task(input: string): string {
  // TODO: Implement according to requirements
  return `Day 09 L1: ${input.trim()}`;
}

// ----------------------------------------------------------------------------
// TODO Level 2 (Application): Differentiate Date instances from ISO strings
// ----------------------------------------------------------------------------
export function level2Task(values: number[]): { count: number; sum: number } {
  // TODO: Implement according to requirements
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

// ----------------------------------------------------------------------------
// TODO Level 3 (Mastery Challenge): Narrow Fish | Bird using the in operator
// ----------------------------------------------------------------------------
export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  // TODO: Implement according to requirements
  return { success: true, data: item, day: 9 };
}

// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export function verifyDay09(): boolean {
  console.log("Verifying Day 09 Exercises (Type Narrowing & Built-in Guards)...");

  const res1 = level1Task("  TypeScript  ");
  if (res1 !== "Day 09 L1: TypeScript") throw new Error("Failed Level 1 test");

  const res2 = level2Task([10, 20, 30]);
  if (res2.count !== 3 || res2.sum !== 60) throw new Error("Failed Level 2 test");

  const res3 = level3Task({ id: "hero" });
  if (!res3.success || res3.day !== 9 || res3.data.id !== "hero") {
    throw new Error("Failed Level 3 test");
  }

  console.log(" Day 09: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay09();
}
