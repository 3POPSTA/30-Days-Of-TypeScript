/**
 * ============================================================================
 * SOLUTION DAY 08: UNION TYPES & LITERAL TYPES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 08] Verified reference implementation.");
