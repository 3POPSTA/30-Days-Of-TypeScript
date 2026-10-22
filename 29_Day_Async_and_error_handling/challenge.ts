/**
 * ============================================================================
 * DAY 29: ASYNC AND ERROR HANDLING - CODING CHALLENGES
 * ============================================================================
 * Build resilient asynchronous systems in TypeScript:
 * - Promises & async/await typing
 * - Strongly-typed Result monad pattern (railway-oriented programming)
 * - Safe type narrowing in catch blocks ('err: unknown')
 * - Automatic retry with exponential backoff
 *
 * Test with:
 *   npx tsx 29_Day_Async_and_error_handling/challenge.ts
 *   OR
 *   npm run challenge:29
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 29: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Strongly Typed Result Pattern
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   type Result<T, E = Error> =
 *     | { ok: true; value: T }
 *     | { ok: false; error: E };
 * 
 * Implement helper constructors:
 *   - ok<T>(value: T): Result<T, never>
 *   - fail<E>(error: E): Result<never, E>
 */
// >>> YOUR CODE HERE <<<
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  // TODO: Replace with your implementation
  return { ok: true, value };
}

export function fail<E>(error: E): Result<never, E> {
  // TODO: Replace with your implementation
  return { ok: false, error };
}


// ============================================================================
// STEP 2: Safe Async Wrapper
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a wrapper 'safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>>'
 * that executes the async function inside a try/catch:
 *   - On resolve: returns ok(value)
 *   - On reject: wraps unknown error into Error and returns fail(err)
 */
// >>> YOUR CODE HERE <<<
export async function safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>> {
  // TODO: Replace with your implementation
  try {
    const val = await fn();
    return ok(val);
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    return fail(errorInstance);
  }
}


// ============================================================================
// STEP 3: Narrowing Unknown Errors in Catch Blocks
// ============================================================================
/**
 * CHALLENGE 3:
 * In TypeScript, catch variables are typed as 'unknown' under 'useUnknownInCatchVariables'.
 * 
 * Write a function 'toErrorMessage(err: unknown): string':
 *   - If err instanceof Error: return err.message
 *   - If typeof err === "string": return err
 *   - Otherwise: return JSON.stringify(err) or String(err)
 */
// >>> YOUR CODE HERE <<<
export function toErrorMessage(err: unknown): string {
  // TODO: Replace with your implementation
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === "string") {
    return err;
  }
  return String(err);
}


// ============================================================================
// STEP 4: Asynchronous Retry Mechanism
// ============================================================================
/**
 * CHALLENGE 4:
 * Write an async function 'retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T>'
 * that retries 'fn' up to 'maxAttempts' times if it throws.
 * If all attempts fail, rethrows the last encountered error.
 */
// >>> YOUR CODE HERE <<<
export async function retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T> {
  // TODO: Replace with your implementation
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
// VERIFICATION TEST SUITE
// ============================================================================
async function runTests(): Promise<void> {
  console.log("Verifying Step 1 (Result Pattern)...");
  const s = ok("success-payload");
  const f = fail(new Error("fail-payload"));
  testCheck("Step 1.1 - ok", s.ok && s.value === "success-payload");
  testCheck("Step 1.2 - fail", !f.ok && f.error.message === "fail-payload");

  console.log("\nVerifying Step 2 (safeAsync)...");
  const goodRes = await safeAsync(async () => 42);
  const badRes = await safeAsync(async () => { throw new Error("Boom"); });
  testCheck("Step 2.1 - safeAsync success", goodRes.ok && goodRes.value === 42);
  testCheck("Step 2.2 - safeAsync failure caught", !badRes.ok && badRes.error.message === "Boom");

  console.log("\nVerifying Step 3 (toErrorMessage)...");
  testCheck("Step 3.1 - Error object", toErrorMessage(new Error("API Timeout")) === "API Timeout");
  testCheck("Step 3.2 - string literal", toErrorMessage("Plain string error") === "Plain string error");
  testCheck("Step 3.3 - numeric error", toErrorMessage(404) === "404");

  console.log("\nVerifying Step 4 (retryAsync)...");
  let attempts = 0;
  const resilientFn = async () => {
    attempts++;
    if (attempts < 3) throw new Error("Transient glitch");
    return "Recovered!";
  };
  const recovered = await retryAsync(resilientFn, 5);
  testCheck("Step 4 - retryAsync succeeded after 3 attempts", recovered === "Recovered!" && attempts === 3);

  console.log("\n[Summary] Day 29 challenge checks completed!\n");
}

runTests();
