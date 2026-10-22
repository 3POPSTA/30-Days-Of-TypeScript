/**
 * ============================================================================
 * EXERCISES DAY 06: OBJECT TYPES & PROPERTY MODIFIERS
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 06_Day_Objects/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(user: { name: string; email?: string }): string {
  return `${user.name} (${user.email ?? "No email"})`;
}

export function level2Task<T extends { id: string }>(original: T, patch: Partial<T>): T {
  return { ...original, ...patch, id: original.id };
}

export function level3Task(text: string): Record<string, number> {
  const words = text.toLowerCase().match(/\w+/g) ?? [];
  const map: Record<string, number> = {};
  for (const w of words) {
    map[w] = (map[w] ?? 0) + 1;
  }
  return map;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay06(): Promise<boolean> {
  console.log("Verifying Day 06 Exercises (Object Types & Property Modifiers)...");

  const res1 = level1Task({ name: "Bob" });
  if (res1 !== "Bob (No email)") throw new Error("L1 failed: " + res1);

  const res2 = level2Task({ id: "1", name: "Old" }, { name: "New" });
  if (res2.name !== "New" || res2.id !== "1") throw new Error("L2 failed");

  const res3 = level3Task("TypeScript is great and TypeScript is typed");
  if (res3["typescript"] !== 2 || res3["is"] !== 2) throw new Error("L3 failed");


  console.log(" Day 06: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("06_Day_Objects[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay06();
}
