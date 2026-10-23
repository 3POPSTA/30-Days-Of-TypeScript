/**
 * 🎯 Day 12: Functions, Parameters, Rest & Optional - Coding Challenges
 *
 * Master typed callbacks, default/optional parameters, rest arguments, and composition.
 *
 * 🚀 Run with: npm run challenge:12
 */

// ============================================================================
// 🎯 CHALLENGE 1: Default and Optional Parameters
// ============================================================================
/**
 * Write a function 'buildApiEndpoint' that accepts:
 *   - path: string
 *   - version: string (default = "v1")
 *   - secure: boolean (default = true)
 *
 * Returns: "${protocol}://api.example.com/${version}${path}"
 * where protocol is "https" if secure, or "http" if false.
 */
// 👇 YOUR CODE HERE:
export function buildApiEndpoint(path: string, version: string = "v1", secure: boolean = true): string {
  // TODO: Build and return the URL
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 2: Rest Parameters Accumulator
// ============================================================================
/**
 * Write a function 'executeMath' that accepts:
 *   - op: "sum" | "product"
 *   - ...values: number[]
 *
 * If values is empty: return 0 for "sum", 1 for "product"
 * Otherwise compute the sum or product of all numbers.
 */
// 👇 YOUR CODE HERE:
export function executeMath(op: "sum" | "product", ...values: number[]): number {
  // TODO: Accumulate sum or product of values
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 3: Typed Callback & Higher-Order Function
// ============================================================================
/**
 * Write a generic function 'transformList' that accepts:
 *   - items: T[]
 *   - mapper: (item: T, index: number) => R
 *   - filterPredicate?: (item: R) => boolean (optional)
 *
 * First maps all items with mapper. If filterPredicate is provided, filters the mapped results.
 */
// 👇 YOUR CODE HERE:
export function transformList<T, R>(
  items: T[],
  mapper: (item: T, index: number) => R,
  filterPredicate?: (item: R) => boolean
): R[] {
  // TODO: Map items and optionally filter
  return [];
}

// ============================================================================
// 🎯 CHALLENGE 4: Function Pipeline Composer (Pipe)
// ============================================================================
/**
 * Write 'composeTwo<A, B, C>' that composes two unary functions:
 *   - f: (b: B) => C
 *   - g: (a: A) => B
 *
 * Returns a new function: (a: A) => C representing f(g(a)).
 */
// 👇 YOUR CODE HERE:
export function composeTwo<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  // TODO: Return composite function (a: A) => f(g(a))
  return (a: A) => f(g(a));
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:12
// ============================================================================
console.log("--- 🧪 Day 12 Challenge Results ---");
console.log("Challenge 1:", buildApiEndpoint("/users"));
console.log("Challenge 2:", executeMath("sum", 1, 2, 3, 4), "|", executeMath("product", 2, 3, 4));
console.log("Challenge 3:", transformList([1, 2, 3], n => n * 10, n => n > 15));

const double = (x: number) => x * 2;
const addOne = (x: number) => x + 1;
const doubleThenAddOne = composeTwo(addOne, double);
console.log("Challenge 4:", doubleThenAddOne(5)); // (5 * 2) + 1 = 11
console.log("-----------------------------------\n");
