/**
 * ============================================================================
 * EXERCISES DAY 20: GENERICS CONSTRAINTS & KEYOF OPERATOR
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 20_Day_Generics_constraints/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task<T extends { length: number }>(item: T): number {
  return item.length;
}

export function level2Task<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

export function level3Task<T extends object>(target: T, patch: Partial<T>): T {
  return { ...target, ...patch };
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay20(): Promise<boolean> {
  console.log("Verifying Day 20 Exercises (Generics Constraints & keyof Operator)...");

  if (level1Task("world") !== 5 || level1Task([1, 2]) !== 2) throw new Error("L1 failed");

  const users = [{ id: 1, name: "Ada" }, { id: 2, name: "Linus" }];
  const names = level2Task(users, "name");
  if (names.join(",") !== "Ada,Linus") throw new Error("L2 failed");

  const res3 = level3Task({ a: 1, b: 2 }, { b: 20 });
  if (res3.b !== 20 || res3.a !== 1) throw new Error("L3 failed");


  console.log(" Day 20: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("20_Day_Generics_constraints[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay20();
}
