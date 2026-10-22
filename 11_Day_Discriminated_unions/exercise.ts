/**
 * ============================================================================
 * EXERCISES DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 11_Day_Discriminated_unions/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; w: number; h: number };

export function level1Task(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return 2 * Math.PI * shape.radius;
    case "rect": return 2 * (shape.w + shape.h);
  }
}

export type Action =
  | { type: "INCREMENT"; amount: number }
  | { type: "DECREMENT"; amount: number }
  | { type: "RESET" };

export function level2Task(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT": return state + action.amount;
    case "DECREMENT": return state - action.amount;
    case "RESET": return 0;
  }
}

export type AsyncState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function level3Task<T>(state: AsyncState<T>): string {
  switch (state.status) {
    case "loading": return "Loading...";
    case "success": return `Success: ${String(state.data)}`;
    case "error": return `Error: ${state.error}`;
  }
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay11(): Promise<boolean> {
  console.log("Verifying Day 11 Exercises (Discriminated Unions & Pattern Matching)...");

  const res1 = Math.round(level1Task({ kind: "rect", w: 5, h: 10 }));
  if (res1 !== 30) throw new Error("L1 failed: " + res1);

  const res2 = level2Task(10, { type: "INCREMENT", amount: 5 });
  if (res2 !== 15 || level2Task(10, { type: "RESET" }) !== 0) throw new Error("L2 failed");

  const res3 = level3Task({ status: "success", data: 42 });
  if (res3 !== "Success: 42") throw new Error("L3 failed");


  console.log(" Day 11: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("11_Day_Discriminated_unions[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay11();
}
