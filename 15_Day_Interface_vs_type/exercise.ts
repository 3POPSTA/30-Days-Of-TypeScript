/**
 * ============================================================================
 * EXERCISES DAY 15: INTERFACE VS TYPE & DECLARATION MERGING
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 15_Day_Interface_vs_type/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export interface Customer {
  id: string;
  name: string;
}
export interface Customer {
  tier: "gold" | "silver";
}

export function level1Task(c: Customer): string {
  return `${c.name} [${c.tier}]`;
}

export type StatusUnion = "ready" | "in-progress" | "complete";

export function level2Task(status: StatusUnion): boolean {
  return status === "complete";
}

export interface RequestPayload {
  body: unknown;
}
export interface RequestPayload {
  userId?: string;
}

export function level3Task(req: RequestPayload): string {
  return req.userId ?? "anonymous";
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay15(): Promise<boolean> {
  console.log("Verifying Day 15 Exercises (Interface vs Type & Declaration Merging)...");

  const c: Customer = { id: "1", name: "Alice", tier: "gold" };
  if (level1Task(c) !== "Alice [gold]") throw new Error("L1 failed");
  if (!level2Task("complete") || level2Task("ready")) throw new Error("L2 failed");
  if (level3Task({ body: {}, userId: "usr_99" }) !== "usr_99") throw new Error("L3 failed");


  console.log(" Day 15: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("15_Day_Interface_vs_type[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay15();
}
