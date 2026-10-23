/**
 * 🎯 Day 29: Async, Promises, and Robust Error Handling - Coding Challenges
 *
 * Implement the Result pattern, safeAsync wrapper, unknown error narrowing, and retry mechanisms.
 *
 * 🚀 Run with: npm run challenge:29
 */

// ============================================================================
// 🎯 CHALLENGE 1: Strongly Typed Result Pattern
// ============================================================================
/**
 * 1. Define 'Result<T, E = Error>':
 *    | { ok: true; value: T }
 *    | { ok: false; error: E }
 *
 * 2. Implement 'ok<T>(value: T): Result<T, never>'
 * 3. Implement 'fail<E>(error: E): Result<never, E>'
 */
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

// 👇 YOUR CODE HERE:
export function ok<T>(value: T): Result<T, never> {
  // TODO: Return ok result
  return { ok: true, value };
}

export function fail<E>(error: E): Result<never, E> {
  // TODO: Return fail result
  return { ok: false, error };
}

// ============================================================================
// 🎯 CHALLENGE 2: Safe Async Wrapper
// ============================================================================
/**
 * Write 'safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>>'
 * Executes fn in try/catch and returns ok(val) or fail(error).
 */
// 👇 YOUR CODE HERE:
export async function safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>> {
  // TODO: Execute fn safely and return Result
  try {
    const val = await fn();
    return ok(val);
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    return fail(errorInstance);
  }
}

// ============================================================================
// 🎯 CHALLENGE 3: Narrowing Unknown Errors in Catch Blocks
// ============================================================================
/**
 * Write 'toErrorMessage(err: unknown): string'
 * - If err is Error: return err.message
 * - If err is string: return err
 * - Otherwise: return String(err)
 */
// 👇 YOUR CODE HERE:
export function toErrorMessage(err: unknown): string {
  // TODO: Safely convert unknown error to string message
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  return String(err);
}

// ============================================================================
// 🎯 CHALLENGE 4: Asynchronous Retry Mechanism
// ============================================================================
/**
 * Write 'retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T>'
 * Tries fn up to maxAttempts times before re-throwing the last caught error.
 */
// 👇 YOUR CODE HERE:
export async function retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T> {
  // TODO: Retry fn up to maxAttempts times
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastErr = err;
    }
  }
  throw lastErr;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:29
// ============================================================================
console.log("--- 🧪 Day 29 Challenge Results ---");
const goodResult = ok(42);
const badResult = fail("Database offline");
console.log("Challenge 1:", goodResult, badResult);

safeAsync(async () => "Data loaded").then(res => console.log("Challenge 2:", res));
console.log("Challenge 3:", toErrorMessage(new Error("Network timeout")), "|", toErrorMessage("string error"));

let attempts = 0;
retryAsync(async () => {
  attempts++;
  if (attempts < 2) throw new Error("Temporary blip");
  return "Success on attempt 2";
}, 3).then(msg => console.log("Challenge 4:", msg));
console.log("-----------------------------------\n");
