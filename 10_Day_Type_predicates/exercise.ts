/**
 * ============================================================================
 * EXERCISES DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 10_Day_Type_predicates/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function isNonEmptyString(x: unknown): x is string {
  return typeof x === "string" && x.trim().length > 0;
}

export function level1Task(x: unknown): boolean {
  return isNonEmptyString(x);
}

export function level2Task(mixed: (string | number | null | undefined)[]): string[] {
  return mixed.filter(isNonEmptyString);
}

export function level3Task(n: number): number {
  if (n <= 0) throw new Error("Number must be positive");
  return Math.sqrt(n);
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay10(): Promise<boolean> {
  console.log("Verifying Day 10 Exercises (Type Predicates & Custom Type Guards)...");

  if (!level1Task("hello") || level1Task("  ") || level1Task(123)) throw new Error("L1 failed");

  const res2 = level2Task(["apple", null, "banana", 123, undefined, "   "]);
  if (res2.length !== 2 || res2[0] !== "apple") throw new Error("L2 failed");

  if (level3Task(25) !== 5) throw new Error("L3 failed");


  console.log(" Day 10: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("10_Day_Type_predicates[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay10();
}
