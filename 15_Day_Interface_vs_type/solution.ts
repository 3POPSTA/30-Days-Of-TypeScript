/**
 * ============================================================================
 * SOLUTION DAY 15: INTERFACE VS TYPE & DECLARATION MERGING
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 15] Verified reference implementation.");
