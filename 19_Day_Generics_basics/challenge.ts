/**
 * 🎯 Day 19: Generics: Functions, Interfaces & Types - Coding Challenges
 *
 * Write reusable, type-safe components using generic type parameters.
 *
 * 🚀 Run with: npm run challenge:19
 */

// ============================================================================
// 🎯 CHALLENGE 1: Generic Envelope / Box Wrapper
// ============================================================================
/**
 * 1. Define 'Box<T>': { content: T; boxedAt: number }
 * 2. Write 'wrapInBox<T>(value: T): Box<T>'
 */
export interface Box<T> {
  content: T;
  boxedAt: number;
}

// 👇 YOUR CODE HERE:
export function wrapInBox<T>(value: T): Box<T> {
  // TODO: Return Box object with content and current timestamp
  return { content: value, boxedAt: Date.now() };
}

// ============================================================================
// 🎯 CHALLENGE 2: Generic Multi-Parameter Pair
// ============================================================================
/**
 * 1. Define 'Pair<K, V>': { first: K; second: V }
 * 2. Write 'swapPair<K, V>(pair: Pair<K, V>): Pair<V, K>'
 */
export interface Pair<K, V> {
  first: K;
  second: V;
}

// 👇 YOUR CODE HERE:
export function swapPair<K, V>(pair: Pair<K, V>): Pair<V, K> {
  // TODO: Swap first and second
  return { first: pair.second, second: pair.first };
}

// ============================================================================
// 🎯 CHALLENGE 3: Generic Array Partitioner
// ============================================================================
/**
 * Write 'partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]]'
 * Returns a tuple: [matches, nonMatches].
 */
// 👇 YOUR CODE HERE:
export function partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]] {
  // TODO: Separate items into matching and non-matching arrays
  const matches: T[] = [];
  const nonMatches: T[] = [];
  for (const item of items) {
    if (predicate(item)) matches.push(item);
    else nonMatches.push(item);
  }
  return [matches, nonMatches];
}

// ============================================================================
// 🎯 CHALLENGE 4: Generic Result Monad
// ============================================================================
/**
 * 1. Define 'Result<T, E>' union:
 *    | { success: true; data: T }
 *    | { success: false; error: E }
 *
 * 2. Write 'mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E>'
 */
export type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };

// 👇 YOUR CODE HERE:
export function mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E> {
  // TODO: If res.success, map data with fn
  if (res.success) {
    return { success: true, data: fn(res.data) };
  }
  return res;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:19
// ============================================================================
console.log("--- 🧪 Day 19 Challenge Results ---");
console.log("Challenge 1:", wrapInBox("Gold Coin"));
console.log("Challenge 2:", swapPair({ first: "Score", second: 100 }));
console.log("Challenge 3:", partition([1, 2, 3, 4, 5], n => n % 2 === 0));

const successRes: Result<number, string> = { success: true, data: 21 };
console.log("Challenge 4:", mapSuccess(successRes, n => n * 2));
console.log("-----------------------------------\n");
