/**
 * ============================================================================
 * EXERCISES DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 12_Day_Functions/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(name: string, role: string = "User", prefix?: string): string {
  const p = prefix ? `${prefix} ` : "";
  return `${p}${role}: ${name}`;
}

export function level2Task(...nums: number[]): number {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function level3Task(initial: number, ...fns: ((n: number) => number)[]): number {
  return fns.reduce((acc, fn) => fn(acc), initial);
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay12(): Promise<boolean> {
  console.log("Verifying Day 12 Exercises (Functions, Parameters, Rest & Optional)...");

  const res1 = level1Task("Grace", "Engineer", "Dr.");
  if (res1 !== "Dr. Engineer: Grace") throw new Error("L1 failed: " + res1);

  const res2 = level2Task(10, 20, 30);
  if (res2 !== 20) throw new Error("L2 failed: " + res2);

  const res3 = level3Task(5, x => x * 2, x => x + 3);
  if (res3 !== 13) throw new Error("L3 failed: " + res3);


  console.log(" Day 12: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("12_Day_Functions[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay12();
}
