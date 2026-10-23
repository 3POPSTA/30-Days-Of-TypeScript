/**
 * 🎯 Day 10: Type Predicates & Custom Type Guards - Coding Challenges
 *
 * Teach the compiler custom type narrowing with 'val is Type' and assertion functions.
 *
 * 🚀 Run with: npm run challenge:10
 */

// ============================================================================
// 🎯 CHALLENGE 1: Custom Object Type Guard ('val is Type')
// ============================================================================
/**
 * 1. Define 'AdminAccount':
 *    - username: string
 *    - role: "ADMIN"
 *    - accessLevel: number
 *
 * 2. Write 'isAdminAccount(val: unknown): val is AdminAccount'
 *    Verifies val is an object with username: string, role === "ADMIN", accessLevel: number.
 */
export interface AdminAccount {
  username: string;
  role: "ADMIN";
  accessLevel: number;
}

// 👇 YOUR CODE HERE:
export function isAdminAccount(val: unknown): val is AdminAccount {
  // TODO: Check object structure and return true if AdminAccount
  return false;
}

// ============================================================================
// 🎯 CHALLENGE 2: Generic Non-Nullable Guard for Array Filtering
// ============================================================================
/**
 * Write a generic type guard 'isNotNullOrUndefined<T>(item: T | null | undefined): item is T'.
 * Then write 'compactList<T>(items: (T | null | undefined)[]): T[]' using it.
 */
// 👇 YOUR CODE HERE:
export function isNotNullOrUndefined<T>(item: T | null | undefined): item is T {
  // TODO: Check item is not null and not undefined
  return false;
}

export function compactList<T>(items: (T | null | undefined)[]): T[] {
  // TODO: Filter items with isNotNullOrUndefined
  return [];
}

// ============================================================================
// 🎯 CHALLENGE 3: Custom Error Type Guard
// ============================================================================
/**
 * 1. Define 'NetworkFailure': { kind: "NETWORK_FAILURE"; statusCode: number }
 * 2. Write 'isNetworkFailure(val: unknown): val is NetworkFailure'
 */
export type NetworkFailure = { kind: "NETWORK_FAILURE"; statusCode: number };

// 👇 YOUR CODE HERE:
export function isNetworkFailure(val: unknown): val is NetworkFailure {
  // TODO: Validate val has kind === "NETWORK_FAILURE" and numeric statusCode
  return false;
}

// ============================================================================
// 🎯 CHALLENGE 4: Assertion Functions ('asserts val is Type')
// ============================================================================
/**
 * Write an assertion function 'assertValidScore(val: number, name: string): asserts val is number'
 * Throws an error `Invalid score for ${name}: ${val}` if val < 0 or val > 100.
 */
// 👇 YOUR CODE HERE:
export function assertValidScore(val: number, name: string): asserts val is number {
  // TODO: Throw error if val < 0 or val > 100
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:10
// ============================================================================
console.log("--- 🧪 Day 10 Challenge Results ---");
console.log("Challenge 1:", isAdminAccount({ username: "root", role: "ADMIN", accessLevel: 10 }));
console.log("Challenge 2:", compactList([1, null, 2, undefined, 3]));
console.log("Challenge 3:", isNetworkFailure({ kind: "NETWORK_FAILURE", statusCode: 500 }));

try {
  assertValidScore(85, "Math");
  console.log("Challenge 4: Score 85 is valid!");
} catch (e: any) {
  console.log("Challenge 4 error:", e.message);
}
console.log("-----------------------------------\n");
