/**
 * ============================================================================
 * EXERCISES DAY 05: TUPLES, LABELED TUPLES & AS CONST
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 05_Day_Tuples/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(p1: [number, number], p2: [number, number]): number {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  return Math.sqrt(dx * dx + dy * dy);
}

export function level2Task(entry: string): [key: string, value: string] {
  const index = entry.indexOf("=");
  if (index === -1) return [entry, ""];
  return [entry.slice(0, index), entry.slice(index + 1)];
}

export function level3Task<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  const len = Math.min(arr1.length, arr2.length);
  const result: [T, U][] = [];
  for (let i = 0; i < len; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay05(): Promise<boolean> {
  console.log("Verifying Day 05 Exercises (Tuples, Labeled Tuples & as const)...");

  const res1 = level1Task([0, 0], [3, 4]);
  if (res1 !== 5) throw new Error("L1 failed: " + res1);

  const res2 = level2Task("theme=dark");
  if (res2[0] !== "theme" || res2[1] !== "dark") throw new Error("L2 failed");

  const res3 = level3Task(["a", "b"], [1, 2]);
  if (res3.length !== 2 || res3[1][0] !== "b" || res3[1][1] !== 2) throw new Error("L3 failed");


  console.log(" Day 05: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("05_Day_Tuples[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay05();
}
