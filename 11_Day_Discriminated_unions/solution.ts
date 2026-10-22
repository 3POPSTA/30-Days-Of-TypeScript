/**
 * ============================================================================
 * SOLUTION DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 11] Verified reference implementation.");
