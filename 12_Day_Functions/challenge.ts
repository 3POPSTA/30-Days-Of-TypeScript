/**
 * ============================================================================
 * DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL — CODING CHALLENGES
 * ============================================================================
 * Functions are first-class citizens in TypeScript:
 * - Default & optional parameters
 * - Rest parameters '...args: T[]'
 * - Higher-order functions with typed callbacks
 * - Function composition (piping)
 *
 * Test with:
 *   npx tsx 12_Day_Functions/challenge.ts
 *   OR
 *   npm run challenge:12
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 12: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Default and Optional Parameters
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'buildApiEndpoint' that accepts:
 *   - path (string): API path (e.g. "/users")
 *   - version (string, default: "v1")
 *   - secure (boolean, default: true)
 * 
 * Return a URL formatted as:
 *   `${protocol}://api.example.com/${version}${path}`
 *   where protocol is "https" if secure is true, and "http" otherwise.
 * 
 * Example:
 *   buildApiEndpoint("/stats") => "https://api.example.com/v1/stats"
 */
// >>> YOUR CODE HERE <<<
export function buildApiEndpoint(path: string, version: string = "v1", secure: boolean = true): string {
  // TODO: Replace with your implementation
  const protocol = secure ? "https" : "http";
  return `${protocol}://api.example.com/${version}${path}`;
}


// ============================================================================
// STEP 2: Rest Parameters Accumulator
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'executeMath' that accepts:
 *   - op ("sum" | "product")
 *   - ...values (number[] rest parameter)
 * 
 * If values is empty: return 0 for "sum", 1 for "product".
 * Otherwise calculate the sum or product of all numbers.
 */
// >>> YOUR CODE HERE <<<
export function executeMath(op: "sum" | "product", ...values: number[]): number {
  // TODO: Replace with your implementation
  if (values.length === 0) {
    return op === "sum" ? 0 : 1;
  }
  if (op === "sum") {
    return values.reduce((acc, curr) => acc + curr, 0);
  }
  return values.reduce((acc, curr) => acc * curr, 1);
}


// ============================================================================
// STEP 3: Typed Callback & Higher-Order Function
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a generic function 'transformList' that takes:
 *   - items (T[])
 *   - mapper ((item: T, index: number) => R)
 *   - filterPredicate? ((item: R) => boolean, optional)
 * 
 * Maps each item to R using mapper.
 * If filterPredicate is supplied, filters the mapped list.
 * Returns the final array of R.
 */
// >>> YOUR CODE HERE <<<
export function transformList<T, R>(
  items: T[],
  mapper: (item: T, index: number) => R,
  filterPredicate?: (item: R) => boolean
): R[] {
  // TODO: Replace with your implementation
  const mapped = items.map(mapper);
  return filterPredicate ? mapped.filter(filterPredicate) : mapped;
}


// ============================================================================
// STEP 4: Function Pipeline Composer (Pipe)
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'composeTwo<A, B, C>' that composes two unary functions:
 *   - f: (b: B) => C
 *   - g: (a: A) => B
 * 
 * Return a new function (a: A) => C that executes f(g(a)).
 */
// >>> YOUR CODE HERE <<<
export function composeTwo<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  // TODO: Replace with your implementation
  return (a: A) => f(g(a));
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (buildApiEndpoint)...");
testCheck("Step 1.1 - defaults", buildApiEndpoint("/users") === "https://api.example.com/v1/users");
testCheck("Step 1.2 - custom version & insecure", buildApiEndpoint("/metrics", "v2", false) === "http://api.example.com/v2/metrics");

console.log("\nVerifying Step 2 (executeMath)...");
testCheck("Step 2.1 - sum", executeMath("sum", 1, 2, 3, 4) === 10);
testCheck("Step 2.2 - product", executeMath("product", 2, 3, 4) === 24);
testCheck("Step 2.3 - empty product fallback", executeMath("product") === 1);

console.log("\nVerifying Step 3 (transformList)...");
const names = ["alice", "bob", "alexander"];
const uppercaseLongNames = transformList(
  names,
  name => name.toUpperCase(),
  name => name.length > 4
);
testCheck("Step 3 - transformList", uppercaseLongNames.length === 2 && uppercaseLongNames[0] === "ALICE" && uppercaseLongNames[1] === "ALEXANDER");

console.log("\nVerifying Step 4 (composeTwo)...");
const double = (n: number) => n * 2;
const toStringWithPrefix = (n: number) => `Val:${n}`;
const pipeline = composeTwo(toStringWithPrefix, double);
testCheck("Step 4 - composeTwo", pipeline(5) === "Val:10");

console.log("\n[Summary] Day 12 challenge checks completed!\n");
