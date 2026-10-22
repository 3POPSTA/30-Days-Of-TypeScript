/**
 * ============================================================================
 * EXERCISES DAY 08: UNION TYPES & LITERAL TYPES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 08_Day_Unions_and_literals/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type Status = "success" | "warning" | "error";
export type Operation = "add" | "sub" | "mul" | "div";

export function level1Task(status: Status): string {
  switch (status) {
    case "success": return "green";
    case "warning": return "yellow";
    case "error": return "red";
  }
}

export function level2Task(op: Operation, a: number, b: number): number {
  switch (op) {
    case "add": return a + b;
    case "sub": return a - b;
    case "mul": return a * b;
    case "div":
      if (b === 0) throw new Error("Divide by zero");
      return a / b;
  }
}

export function level3Task(portOrAlias: number | "http" | "https"): number {
  if (typeof portOrAlias === "number") return portOrAlias;
  return portOrAlias === "http" ? 80 : 443;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay08(): Promise<boolean> {
  console.log("Verifying Day 08 Exercises (Union Types & Literal Types)...");

  const res1 = level1Task("warning");
  if (res1 !== "yellow") throw new Error("L1 failed");

  const res2 = level2Task("mul", 6, 7);
  if (res2 !== 42) throw new Error("L2 failed");

  const res3 = level3Task("https");
  if (res3 !== 443 || level3Task(8080) !== 8080) throw new Error("L3 failed");


  console.log(" Day 08: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("08_Day_Unions_and_literals[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay08();
}
