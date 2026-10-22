/**
 * ============================================================================
 * EXERCISES DAY 27: UTILITY TYPES MASTERCLASS (PART 1)
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 27_Day_Utility_types_part_1/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export interface FullUser {
  id: number;
  name: string;
  email: string;
  secret: string;
}

export function level1Task<T extends object>(original: T, patch: Partial<T>): T {
  return { ...original, ...patch };
}

export function level2Task(user: FullUser): Omit<FullUser, "secret"> {
  const { secret, ...safe } = user;
  return safe;
}

export function level3Task<T>(items: T[], keySelector: (item: T) => string): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  for (const item of items) {
    const k = keySelector(item);
    if (!map[k]) map[k] = [];
    map[k].push(item);
  }
  return map;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay27(): Promise<boolean> {
  console.log("Verifying Day 27 Exercises (Utility Types Masterclass (Part 1))...");

  const u: FullUser = { id: 1, name: "Ada", email: "ada@ts.org", secret: "super_secret" };
  const updated = level1Task(u, { name: "Ada Lovelace" });
  if (updated.name !== "Ada Lovelace") throw new Error("L1 failed");

  const safe = level2Task(u);
  if ("secret" in safe || safe.name !== "Ada") throw new Error("L2 failed");

  const grouped = level3Task(["apple", "banana", "avocado"], s => s[0]);
  if (grouped["a"].length !== 2) throw new Error("L3 failed");


  console.log(" Day 27: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("27_Day_Utility_types_part_1[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay27();
}
