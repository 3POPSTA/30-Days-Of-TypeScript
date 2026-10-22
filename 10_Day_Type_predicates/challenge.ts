/**
 * ============================================================================
 * DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS — CODING CHALLENGES
 * ============================================================================
 * Type predicates bridge runtime verification with compile-time type narrowing:
 * - 'param is Type' user-defined type guards
 * - 'asserts param is Type' assertion functions
 * - Filtering arrays with type guards
 *
 * Test with:
 *   npx tsx 10_Day_Type_predicates/challenge.ts
 *   OR
 *   npm run challenge:10
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 10: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Custom Object Type Guard ('val is Type')
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an interface 'AdminAccount':
 *   - username: string
 *   - role: "ADMIN"
 *   - accessLevel: number
 * 
 * Write a custom type guard 'isAdminAccount(val: unknown): val is AdminAccount'
 * that verifies:
 *   - val is a non-null object
 *   - 'username' is a string
 *   - 'role' is exactly "ADMIN"
 *   - 'accessLevel' is a number
 */
// >>> YOUR CODE HERE <<<
export interface AdminAccount {
  username: string;
  role: "ADMIN";
  accessLevel: number;
}

export function isAdminAccount(val: unknown): val is AdminAccount {
  // TODO: Replace with your implementation
  if (typeof val !== "object" || val === null) {
    return false;
  }
  const cand = val as Record<string, unknown>;
  return (
    typeof cand.username === "string" &&
    cand.role === "ADMIN" &&
    typeof cand.accessLevel === "number"
  );
}


// ============================================================================
// STEP 2: Generic Non-Nullable Guard for Array Filtering
// ============================================================================
/**
 * CHALLENGE 2:
 * In standard TypeScript, .filter(Boolean) does not automatically narrow (T | null)[] to T[].
 * A custom predicate solves this!
 * 
 * Write a generic type guard 'isNotNullOrUndefined<T>(item: T | null | undefined): item is T'.
 * Then write 'compactList<T>(items: (T | null | undefined)[]): T[]' that uses this guard.
 */
// >>> YOUR CODE HERE <<<
export function isNotNullOrUndefined<T>(item: T | null | undefined): item is T {
  // TODO: Replace with your implementation
  return item !== null && item !== undefined;
}

export function compactList<T>(items: (T | null | undefined)[]): T[] {
  // TODO: Replace with your implementation
  return items.filter(isNotNullOrUndefined);
}


// ============================================================================
// STEP 3: Custom Error Type Guard
// ============================================================================
/**
 * CHALLENGE 3:
 * Define a custom error shape:
 *   type NetworkFailure = { kind: "NETWORK_FAILURE"; statusCode: number };
 * 
 * Write a type guard 'isNetworkFailure(val: unknown): val is NetworkFailure'
 * that checks if val is an object with kind === "NETWORK_FAILURE" and a numeric statusCode.
 */
// >>> YOUR CODE HERE <<<
export type NetworkFailure = { kind: "NETWORK_FAILURE"; statusCode: number };

export function isNetworkFailure(val: unknown): val is NetworkFailure {
  // TODO: Replace with your implementation
  if (typeof val !== "object" || val === null) return false;
  const cand = val as Record<string, unknown>;
  return cand.kind === "NETWORK_FAILURE" && typeof cand.statusCode === "number";
}


// ============================================================================
// STEP 4: Assertion Functions ('asserts val is Type')
// ============================================================================
/**
 * CHALLENGE 4:
 * Assertion functions throw an error if a condition is not met, narrowing
 * the variable in subsequent lines.
 * 
 * Write an assertion function 'assertValidScore(val: number, name: string): asserts val is number'
 * that throws an Error with `Invalid score for ${name}: ${val}` if val < 0 or val > 100.
 */
// >>> YOUR CODE HERE <<<
export function assertValidScore(val: number, name: string): asserts val is number {
  // TODO: Replace with your implementation
  if (val < 0 || val > 100) {
    throw new Error(`Invalid score for ${name}: ${val}`);
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (isAdminAccount)...");
const validAdmin = { username: "root", role: "ADMIN", accessLevel: 10 };
const invalidAdmin = { username: "guest", role: "USER", accessLevel: 1 };
testCheck("Step 1.1 - valid admin", isAdminAccount(validAdmin) === true);
testCheck("Step 1.2 - invalid admin", isAdminAccount(invalidAdmin) === false);
testCheck("Step 1.3 - non-object", isAdminAccount("admin") === false);

console.log("\nVerifying Step 2 (compactList)...");
const withNulls = ["apple", null, "banana", undefined, "cherry"];
const compacted = compactList(withNulls);
testCheck("Step 2 - compactList narrows array", compacted.length === 3 && compacted.join(",") === "apple,banana,cherry");

console.log("\nVerifying Step 3 (isNetworkFailure)...");
const netErr = { kind: "NETWORK_FAILURE", statusCode: 503 };
const regularErr = new Error("DB crash");
testCheck("Step 3.1 - valid network failure", isNetworkFailure(netErr) === true);
testCheck("Step 3.2 - standard error", isNetworkFailure(regularErr) === false);

console.log("\nVerifying Step 4 (assertValidScore)...");
let threwCorrectly = false;
try {
  assertValidScore(150, "FinalExam");
} catch {
  threwCorrectly = true;
}
testCheck("Step 4 - assertValidScore throws on >100", threwCorrectly);

console.log("\n[Summary] Day 10 challenge checks completed!\n");
