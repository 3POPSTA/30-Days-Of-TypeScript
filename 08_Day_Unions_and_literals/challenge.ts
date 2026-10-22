/**
 * ============================================================================
 * DAY 08: UNION TYPES & LITERAL TYPES — CODING CHALLENGES
 * ============================================================================
 * Unions '|' let variables hold one of several possible types.
 * Literal types restrict values to exact strings, numbers, or booleans.
 *
 * Test with:
 *   npx tsx 08_Day_Unions_and_literals/challenge.ts
 *   OR
 *   npm run challenge:08
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 08: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Finite State Union
// ============================================================================
/**
 * CHALLENGE 1:
 * Define a union type 'FetchState':
 *   - "idle" | "loading" | "success" | "error"
 * 
 * Write a function 'canInitiateRequest' that accepts (state: FetchState):
 *   - Returns true if state is "idle" or "error"
 *   - Returns false if state is "loading" or "success"
 */
// >>> YOUR CODE HERE <<<
export type FetchState = "idle" | "loading" | "success" | "error";

export function canInitiateRequest(state: FetchState): boolean {
  // TODO: Replace with your implementation
  return state === "idle" || state === "error";
}


// ============================================================================
// STEP 2: Handling Union Parameters
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'normalizePortNumber' that accepts:
 *   - port (string | number)
 * 
 * Requirements:
 *   - If port is a number, validate it is between 1 and 65535.
 *     If valid return the number, otherwise return null.
 *   - If port is a string, parse it with parseInt(port, 10).
 *     If valid (between 1 and 65535 and not NaN), return the number, otherwise return null.
 */
// >>> YOUR CODE HERE <<<
export function normalizePortNumber(port: string | number): number | null {
  // TODO: Replace with your implementation
  const num = typeof port === "number" ? port : parseInt(port, 10);
  if (isNaN(num) || num < 1 || num > 65535) {
    return null;
  }
  return num;
}


// ============================================================================
// STEP 3: Numeric Literal Types
// ============================================================================
/**
 * CHALLENGE 3:
 * Define a numeric literal union 'AllowedRate':
 *   - 0.05 | 0.10 | 0.15 | 0.20
 * 
 * Write a function 'computeTax' that accepts:
 *   - amount (number)
 *   - rate (AllowedRate)
 * 
 * Return amount * rate.
 */
// >>> YOUR CODE HERE <<<
export type AllowedRate = 0.05 | 0.10 | 0.15 | 0.20;

export function computeTax(amount: number, rate: AllowedRate): number {
  // TODO: Replace with your implementation
  return amount * rate;
}


// ============================================================================
// STEP 4: Discriminated Result Union
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a union type 'AsyncResult<T>':
 *   - { success: true; data: T }
 *   - { success: false; errorMessage: string }
 * 
 * Write a function 'formatAsyncResult' that takes 'res: AsyncResult<string>':
 *   - If success is true: `DATA: ${res.data}`
 *   - If success is false: `ERROR: ${res.errorMessage}`
 */
// >>> YOUR CODE HERE <<<
export type AsyncResult<T> =
  | { success: true; data: T }
  | { success: false; errorMessage: string };

export function formatAsyncResult(res: AsyncResult<string>): string {
  // TODO: Replace with your implementation
  if (res.success) {
    return `DATA: ${res.data}`;
  }
  return `ERROR: ${res.errorMessage}`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (FetchState)...");
testCheck("Step 1.1 - idle", canInitiateRequest("idle") === true);
testCheck("Step 1.2 - loading", canInitiateRequest("loading") === false);
testCheck("Step 1.3 - error", canInitiateRequest("error") === true);

console.log("\nVerifying Step 2 (normalizePortNumber)...");
testCheck("Step 2.1 - number port", normalizePortNumber(8080) === 8080);
testCheck("Step 2.2 - string port", normalizePortNumber("3000") === 3000);
testCheck("Step 2.3 - invalid port", normalizePortNumber("invalid") === null);
testCheck("Step 2.4 - out of range", normalizePortNumber(70000) === null);

console.log("\nVerifying Step 3 (computeTax)...");
const tax = computeTax(100, 0.15);
testCheck("Step 3 - computeTax", tax === 15, `Tax: ${tax}`);

console.log("\nVerifying Step 4 (AsyncResult)...");
const okRes: AsyncResult<string> = { success: true, data: "Payload" };
const errRes: AsyncResult<string> = { success: false, errorMessage: "Not found" };
testCheck("Step 4.1 - success branch", formatAsyncResult(okRes) === "DATA: Payload");
testCheck("Step 4.2 - error branch", formatAsyncResult(errRes) === "ERROR: Not found");

console.log("\n[Summary] Day 08 challenge checks completed!\n");
