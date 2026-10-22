/**
 * ============================================================================
 * EXERCISES DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 09_Day_Type_narrowing/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(val: string | number): number {
  if (typeof val === "string") return val.length;
  return val;
}

export function level2Task(input: Date | string | number): number {
  if (input instanceof Date) return input.getTime();
  if (typeof input === "string") return new Date(input).getTime();
  return input;
}

export type Fish = { swim: () => string };
export type Bird = { fly: () => string };

export function level3Task(animal: Fish | Bird): string {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay09(): Promise<boolean> {
  console.log("Verifying Day 09 Exercises (Type Narrowing & Control Flow Analysis)...");

  const res1 = level1Task("hello");
  if (res1 !== 5 || level1Task(42) !== 42) throw new Error("L1 failed");

  const d = new Date(1700000000000);
  if (level2Task(d) !== 1700000000000) throw new Error("L2 failed");

  const bird: Bird = { fly: () => "flying high" };
  if (level3Task(bird) !== "flying high") throw new Error("L3 failed");


  console.log(" Day 09: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("09_Day_Type_narrowing[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay09();
}
