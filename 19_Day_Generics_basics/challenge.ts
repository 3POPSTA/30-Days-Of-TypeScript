/**
 * ============================================================================
 * DAY 19: GENERICS BASICS — CODING CHALLENGES
 * ============================================================================
 * Generics provide parameterized types that make functions, interfaces,
 * and classes reusable across diverse data types while preserving safety.
 *
 * Test with:
 *   npx tsx 19_Day_Generics_basics/challenge.ts
 *   OR
 *   npm run challenge:19
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 19: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Generic Envelope / Box Wrapper
// ============================================================================
/**
 * CHALLENGE 1:
 * Define a generic interface 'Box<T>':
 *   - content: T;
 *   - boxedAt: number;
 * 
 * Write a generic function 'wrapInBox<T>(value: T): Box<T>'
 * that packages 'value' along with boxedAt initialized to Date.now().
 */
// >>> YOUR CODE HERE <<<
export interface Box<T> {
  content: T;
  boxedAt: number;
}

export function wrapInBox<T>(value: T): Box<T> {
  // TODO: Replace with your implementation
  return {
    content: value,
    boxedAt: Date.now()
  };
}


// ============================================================================
// STEP 2: Generic Multi-Parameter Pair
// ============================================================================
/**
 * CHALLENGE 2:
 * Define a generic interface 'Pair<K, V>':
 *   - first: K;
 *   - second: V;
 * 
 * Write a function 'swapPair<K, V>(pair: Pair<K, V>): Pair<V, K>'
 * that returns a new pair with reversed elements.
 */
// >>> YOUR CODE HERE <<<
export interface Pair<K, V> {
  first: K;
  second: V;
}

export function swapPair<K, V>(pair: Pair<K, V>): Pair<V, K> {
  // TODO: Replace with your implementation
  return {
    first: pair.second,
    second: pair.first
  };
}


// ============================================================================
// STEP 3: Generic Array Partitioner
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a generic function 'partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]]':
 *   - Returns a 2-element tuple [matches, nonMatches].
 *   - matches contains items where predicate returns true.
 *   - nonMatches contains items where predicate returns false.
 */
// >>> YOUR CODE HERE <<<
export function partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]] {
  // TODO: Replace with your implementation
  const matches: T[] = [];
  const nonMatches: T[] = [];
  for (const item of items) {
    if (predicate(item)) {
      matches.push(item);
    } else {
      nonMatches.push(item);
    }
  }
  return [matches, nonMatches];
}


// ============================================================================
// STEP 4: Generic Result Monad
// ============================================================================
/**
 * CHALLENGE 4:
 * Define:
 *   type Result<T, E> =
 *     | { success: true; data: T }
 *     | { success: false; error: E };
 * 
 * Write 'mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E>':
 *   - If res.success is true: return { success: true, data: fn(res.data) }
 *   - If res.success is false: return unchanged { success: false, error: res.error }
 */
// >>> YOUR CODE HERE <<<
export type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };

export function mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E> {
  // TODO: Replace with your implementation
  if (res.success) {
    return { success: true, data: fn(res.data) };
  }
  return res;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Box<T>)...");
const stringBox = wrapInBox("Generics are powerful");
testCheck("Step 1 - wrapInBox", stringBox.content === "Generics are powerful" && stringBox.boxedAt > 0);

console.log("\nVerifying Step 2 (Pair<K, V>)...");
const originalPair: Pair<string, number> = { first: "age", second: 30 };
const swapped = swapPair(originalPair);
testCheck("Step 2 - swapPair", swapped.first === 30 && swapped.second === "age");

console.log("\nVerifying Step 3 (partition)...");
const [evens, odds] = partition([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
testCheck("Step 3 - partition", evens.join(",") === "2,4,6" && odds.join(",") === "1,3,5");

console.log("\nVerifying Step 4 (mapSuccess Result)...");
const ok: Result<number, string> = { success: true, data: 10 };
const mappedOk = mapSuccess(ok, n => n * 5);
const err: Result<number, string> = { success: false, error: "Network down" };
const mappedErr = mapSuccess(err, (n: number) => n * 5);
testCheck("Step 4.1 - success mapped", mappedOk.success && mappedOk.data === 50);
testCheck("Step 4.2 - error preserved", !mappedErr.success && mappedErr.error === "Network down");

console.log("\n[Summary] Day 19 challenge checks completed!\n");
