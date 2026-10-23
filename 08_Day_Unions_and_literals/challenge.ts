/**
 * 🎯 Day 08: Union Types & Literal Types - Coding Challenges
 *
 * Model precise state machines, numeric literals, and discriminated results.
 *
 * 🚀 Run with: npm run challenge:08
 */

// ============================================================================
// 🎯 CHALLENGE 1: Finite State Union
// ============================================================================
/**
 * 1. Define 'FetchState' union: "idle" | "loading" | "success" | "error"
 * 2. Write 'canInitiateRequest(state: FetchState): boolean':
 *    Returns true only when state is "idle" or "error".
 */
// 👇 YOUR CODE HERE:
export type FetchState = "idle" | "loading" | "success" | "error";

export function canInitiateRequest(state: FetchState): boolean {
  // TODO: Return true if state is "idle" or "error"
  return false;
}

// ============================================================================
// 🎯 CHALLENGE 2: Handling Union Parameters
// ============================================================================
/**
 * Write a function 'normalizePortNumber' that accepts:
 *   - port: string | number
 *
 * Parse into a valid number (1 to 65535).
 * Return the valid port number, or null if invalid.
 */
// 👇 YOUR CODE HERE:
export function normalizePortNumber(port: string | number): number | null {
  // TODO: Parse and validate port number
  return null;
}

// ============================================================================
// 🎯 CHALLENGE 3: Numeric Literal Types
// ============================================================================
/**
 * 1. Define 'AllowedRate' union: 0.05 | 0.10 | 0.15 | 0.20
 * 2. Write 'computeTax(amount: number, rate: AllowedRate): number':
 *    Returns amount * rate.
 */
// 👇 YOUR CODE HERE:
export type AllowedRate = 0.05 | 0.10 | 0.15 | 0.20;

export function computeTax(amount: number, rate: AllowedRate): number {
  // TODO: Return amount * rate
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 4: Discriminated Result Union
// ============================================================================
/**
 * 1. Define 'AsyncResult<T>' union:
 *    | { success: true; data: T }
 *    | { success: false; errorMessage: string }
 *
 * 2. Write 'formatAsyncResult(res: AsyncResult<string>): string':
 *    - If success: "DATA: <data>"
 *    - If false: "ERROR: <errorMessage>"
 */
// 👇 YOUR CODE HERE:
export type AsyncResult<T> =
  | { success: true; data: T }
  | { success: false; errorMessage: string };

export function formatAsyncResult(res: AsyncResult<string>): string {
  // TODO: Check res.success and return formatted string
  return "";
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:08
// ============================================================================
console.log("--- 🧪 Day 08 Challenge Results ---");
console.log("Challenge 1:", canInitiateRequest("idle"), "|", canInitiateRequest("loading"));
console.log("Challenge 2:", normalizePortNumber("8080"), "|", normalizePortNumber("invalid"));
console.log("Challenge 3:", computeTax(200, 0.15));
console.log("Challenge 4:", formatAsyncResult({ success: true, data: "Payload" }), "|", formatAsyncResult({ success: false, errorMessage: "Timeout" }));
console.log("-----------------------------------\n");
