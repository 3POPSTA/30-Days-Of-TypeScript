/**
 * ============================================================================
 * EXERCISES DAY 13: FUNCTION OVERLOADING & SIGNATURES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 13_Day_Function_overloading/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function duplicate(val: string): string;
export function duplicate(val: number): number;
export function duplicate(val: string | number): string | number {
  if (typeof val === "string") return val + val;
  return val * 2;
}

export function makeDate(timestamp: number): Date;
export function makeDate(y: number, m: number, d: number): Date;
export function makeDate(a: number, b?: number, c?: number): Date {
  if (b !== undefined && c !== undefined) {
    return new Date(a, b - 1, c);
  }
  return new Date(a);
}

export function level1Task(val: string): string {
  return duplicate(val);
}

export function level2Task(y: number, m: number, d: number): number {
  return makeDate(y, m, d).getFullYear();
}

export function level3Task(all: boolean): string | string[] {
  if (all) return ["#item1", "#item2"];
  return "#item1";
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay13(): Promise<boolean> {
  console.log("Verifying Day 13 Exercises (Function Overloading & Signatures)...");

  if (duplicate("ts") !== "tsts" || duplicate(5) !== 10) throw new Error("L1 failed");
  if (level2Task(2025, 5, 1) !== 2025) throw new Error("L2 failed");
  if (!Array.isArray(level3Task(true))) throw new Error("L3 failed");


  console.log(" Day 13: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("13_Day_Function_overloading[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay13();
}
