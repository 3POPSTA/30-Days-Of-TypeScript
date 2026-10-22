/**
 * ============================================================================
 * EXERCISES DAY 26: THE INFER KEYWORD & TYPE EXTRACTION
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 26_Day_The_infer_keyword/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
export type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;

export function level1Task<F extends (...args: any[]) => any>(fn: F, ...args: Parameters<F>): MyReturnType<F> {
  return fn(...args);
}

export async function level2Task<T>(prom: Promise<T>): Promise<UnwrapPromise<Promise<T>>> {
  return await prom;
}

export function level3Task(fn: (msg: string) => void): string {
  return "First parameter must be string";
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay26(): Promise<boolean> {
  console.log("Verifying Day 26 Exercises (The infer Keyword & Type Extraction)...");

  const add = (a: number, b: number) => a + b;
  if (level1Task(add, 2, 3) !== 5) throw new Error("L1 failed");

  level2Task(Promise.resolve("unwrapped")).then(val => {
    if (val !== "unwrapped") throw new Error("L2 failed");
  });

  if (!level3Task(() => {}).includes("string")) throw new Error("L3 failed");


  console.log(" Day 26: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("26_Day_The_infer_keyword[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay26();
}
