/**
 * ============================================================================
 * EXERCISES DAY 02: PRIMITIVE DATA TYPES & TYPE ANNOTATIONS
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 02_Day_Primitive_types/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(cents: number): string {
  const dollars = (cents / 100).toFixed(2);
  return `$${dollars}`;
}

export function level2Task(binaryString: string): number {
  return parseInt(binaryString, 2);
}

export function level3Task(label: string): { key: symbol; label: string } {
  const key = Symbol(label);
  return { key, label };
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay02(): Promise<boolean> {
  console.log("Verifying Day 02 Exercises (Primitive Data Types & Type Annotations)...");

  const res1 = level1Task(2499);
  if (res1 !== "$24.99") throw new Error("L1 failed: " + res1);

  const res2 = level2Task("1101");
  if (res2 !== 13) throw new Error("L2 failed: " + res2);

  const res3 = level3Task("apiKey");
  if (typeof res3.key !== "symbol" || res3.label !== "apiKey") throw new Error("L3 failed");


  console.log(" Day 02: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("02_Day_Primitive_types[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay02();
}
