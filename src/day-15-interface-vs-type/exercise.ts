/**
 * ============================================================================
 * EXERCISE DAY 15: INTERFACE VS TYPE ALIAS & DECLARATION MERGING
 * ============================================================================
 * Instructions:
 * Complete the TODO sections below. Once finished, run:
 *   npx tsx src/day-15-interface-vs-type/exercise.ts
 */

// ----------------------------------------------------------------------------
// TODO Level 1 (Fundamentals): Model data shapes using both interface and type
// ----------------------------------------------------------------------------
export function level1Task(input: string): string {
  // TODO: Implement according to requirements
  return `Day 15 L1: ${input.trim()}`;
}

// ----------------------------------------------------------------------------
// TODO Level 2 (Application): Declaration merging to add properties to UserSession
// ----------------------------------------------------------------------------
export function level2Task(values: number[]): { count: number; sum: number } {
  // TODO: Implement according to requirements
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

// ----------------------------------------------------------------------------
// TODO Level 3 (Mastery Challenge): Analyze and document architectural tradeoffs
// ----------------------------------------------------------------------------
export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  // TODO: Implement according to requirements
  return { success: true, data: item, day: 15 };
}

// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export function verifyDay15(): boolean {
  console.log("Verifying Day 15 Exercises (Interface vs Type Alias & Declaration Merging)...");

  const res1 = level1Task("  TypeScript  ");
  if (res1 !== "Day 15 L1: TypeScript") throw new Error("Failed Level 1 test");

  const res2 = level2Task([10, 20, 30]);
  if (res2.count !== 3 || res2.sum !== 60) throw new Error("Failed Level 2 test");

  const res3 = level3Task({ id: "hero" });
  if (!res3.success || res3.day !== 15 || res3.data.id !== "hero") {
    throw new Error("Failed Level 3 test");
  }

  console.log(" Day 15: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay15();
}
