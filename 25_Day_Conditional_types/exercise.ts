/**
 * ============================================================================
 * EXERCISES DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 25_Day_Conditional_types/exercise.ts
 * Or run the complete test suite:
 *   npm test
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


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay25(): Promise<boolean> {
  console.log("Verifying Day 25 Exercises (Conditional Types & Distributive Conditionals)...");

  if (!level1Task(42) || level1Task("42")) throw new Error("L1 failed");

  const diff = level2Task(["a", "b", "c"], ["b"]);
  if (diff.join(",") !== "a,c") throw new Error("L2 failed");

  if (level3Task([10, 20]) !== 10 || level3Task("hello") !== "hello") throw new Error("L3 failed");


  console.log(" Day 25: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("25_Day_Conditional_types[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay25();
}
