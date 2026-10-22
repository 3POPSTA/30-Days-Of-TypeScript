/**
 * ============================================================================
 * EXERCISES DAY 28: UTILITY TYPES MASTERCLASS (PART 2)
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 28_Day_Utility_types_part_2/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type PrimitiveUnion = string | number | boolean;
export type OnlyNumbers = Extract<PrimitiveUnion, number>;

export function level1Task(val: PrimitiveUnion): boolean {
  return typeof val === "number";
}

export function level2Task<T>(items: (T | null | undefined)[]): T[] {
  return items.filter((x): x is T => x !== null && x !== undefined);
}

export function level3Task<F extends (...args: any[]) => any>(
  fn: F
): (...args: Parameters<F>) => { result: ReturnType<F>; durationMs: number } {
  return (...args: Parameters<F>) => {
    const start = Date.now();
    const result = fn(...args);
    const durationMs = Date.now() - start;
    return { result, durationMs };
  };
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay28(): Promise<boolean> {
  console.log("Verifying Day 28 Exercises (Utility Types Masterclass (Part 2))...");

  if (!level1Task(100) || level1Task("100")) throw new Error("L1 failed");

  const clean = level2Task(["a", null, "b", undefined]);
  if (clean.length !== 2 || clean[1] !== "b") throw new Error("L2 failed");

  const timedAdd = level3Task((a: number, b: number) => a + b);
  const out = timedAdd(10, 20);
  if (out.result !== 30 || out.durationMs < 0) throw new Error("L3 failed");


  console.log(" Day 28: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("28_Day_Utility_types_part_2[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay28();
}
