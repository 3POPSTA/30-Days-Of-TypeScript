/**
 * ============================================================================
 * EXERCISES DAY 29: ASYNC, PROMISES, AND ROBUST ERROR HANDLING
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 29_Day_Async_and_error_handling/exercise.ts
 * Or run the complete test suite:
 *   npm test
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


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay29(): Promise<boolean> {
  console.log("Verifying Day 29 Exercises (Async, Promises, and Robust Error Handling)...");

  const res2 = level2Task('{"hello": "world"}');
  if (!res2.ok || (res2.value as any).hello !== "world") throw new Error("L2 failed");

  let attempts = 0;
  const flake = async () => {
    attempts++;
    if (attempts < 2) throw new Error("Fail");
    return 42;
  };
  const val = await level3Task(flake, 3);
  if (val !== 42) throw new Error("L3 failed");


  console.log(" Day 29: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("29_Day_Async_and_error_handling[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay29();
}
