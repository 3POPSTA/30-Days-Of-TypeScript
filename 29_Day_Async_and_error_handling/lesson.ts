/**
 * ============================================================================
 * DAY 29: ASYNC, PROMISES, AND ROBUST ERROR HANDLING
 * ============================================================================
 * Build reliable async pipelines with Promise<T>, async/await, and the functional Result<T, E> pattern to banish unhandled runtime exceptions.
 * Run with: npm run day:29  OR  npx tsx 29_Day_Async_and_error_handling/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 29: ASYNC, PROMISES, AND ROBUST ERROR HANDLING");
console.log("=======================================================\n");

// Day 29: Async, Promises, and Robust Error Handling
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

async function safeDivision(a: number, b: number): Promise<Result<number, string>> {
  if (b === 0) return err("Division by zero");
  return ok(a / b);
}

const outcome = await safeDivision(10, 2);
if (outcome.ok) {
  console.log("Division success:", outcome.value);
}


console.log("\n[Summary] Day 29 lesson finished successfully!\n");
