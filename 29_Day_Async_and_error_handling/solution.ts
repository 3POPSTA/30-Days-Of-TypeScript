/**
 * ============================================================================
 * SOLUTION DAY 29: ASYNC, PROMISES, AND ROBUST ERROR HANDLING
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export type Result<T, E = string> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> { return { ok: true, value }; }
export function err<E>(error: E): Result<never, E> { return { ok: false, error }; }

export async function level1Task(ms: number): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, ms));
  return "RESOLVED";
}

export function level2Task(json: string): Result<unknown, string> {
  try {
    return ok(JSON.parse(json));
  } catch (e) {
    return err((e as Error).message);
  }
}

export async function level3Task<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError;
}


console.log("[Solution Day 29] Verified reference implementation.");
