/**
 * ============================================================================
 * DAY 28: UTILITY TYPES MASTERCLASS (PART 2) - CODING CHALLENGES
 * ============================================================================
 * Explore conditional and function introspection utility types:
 * - Exclude<T, U> & Extract<T, U>
 * - NonNullable<T>
 * - ReturnType<T> & Parameters<T>
 * - Awaited<T>
 *
 * Test with:
 *   npx tsx 28_Day_Utility_types_part_2/challenge.ts
 *   OR
 *   npm run challenge:28
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 28: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Re-implementing Exclude & Extract
// ============================================================================
/**
 * CHALLENGE 1:
 * Using distributive conditional types:
 *   - 'MyExclude<T, U>': T extends U ? never : T
 *   - 'MyExtract<T, U>': T extends U ? T : never
 */
// >>> YOUR CODE HERE <<<
export type MyExclude<T, U> = T extends U ? never : T;
export type MyExtract<T, U> = T extends U ? T : never;


// ============================================================================
// STEP 2: Re-implementing NonNullable
// ============================================================================
/**
 * CHALLENGE 2:
 * Define 'MyNonNullable<T>':
 *   - Strips null and undefined from union T: T extends null | undefined ? never : T
 */
// >>> YOUR CODE HERE <<<
export type MyNonNullable<T> = T extends null | undefined ? never : T;


// ============================================================================
// STEP 3: Re-implementing Parameters<T>
// ============================================================================
/**
 * CHALLENGE 3:
 * Define 'MyParameters<T extends (...args: any[]) => any>':
 *   - Extracts parameter types as a tuple: T extends (...args: infer P) => any ? P : never
 */
// >>> YOUR CODE HERE <<<
export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;


// ============================================================================
// STEP 4: Inspecting Service Method Payloads
// ============================================================================
/**
 * CHALLENGE 4:
 * Given the service function:
 *   export async function registerCustomer(email: string, age: number, isVip: boolean) {
 *     return { customerId: "cust_123", registered: true };
 *   }
 * 
 * 1. Extract its parameter tuple using 'Parameters<typeof registerCustomer>' into 'CustomerRegistrationArgs'.
 * 2. Extract its resolved async return type using 'Awaited<ReturnType<typeof registerCustomer>>' into 'RegistrationResult'.
 */
export async function registerCustomer(email: string, age: number, isVip: boolean) {
  return { customerId: "cust_123", registered: true };
}

// >>> YOUR CODE HERE <<<
export type CustomerRegistrationArgs = Parameters<typeof registerCustomer>;
export type RegistrationResult = Awaited<ReturnType<typeof registerCustomer>>;


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (MyExclude & MyExtract)...");
type Actions = "fetch" | "fetch_success" | "fetch_fail" | "reset";
type NonReset = MyExclude<Actions, "reset">;
type OnlySuccess = MyExtract<Actions, "fetch_success">;
const testNonReset: NonReset = "fetch";
const testOnlySuccess: OnlySuccess = "fetch_success";
testCheck("Step 1 - MyExclude & MyExtract", testNonReset === "fetch" && testOnlySuccess === "fetch_success");

console.log("\nVerifying Step 2 (MyNonNullable)...");
type RawInput = string | number | null | undefined;
type CleanInput = MyNonNullable<RawInput>;
const cleanStr: CleanInput = "Valid string";
testCheck("Step 2 - MyNonNullable", typeof cleanStr === "string");

console.log("\nVerifying Step 3 (MyParameters)...");
function add(a: number, b: number): number { return a + b; }
type AddParams = MyParameters<typeof add>;
const sampleParams: AddParams = [10, 20];
testCheck("Step 3 - MyParameters", sampleParams[0] === 10 && sampleParams[1] === 20);

console.log("\nVerifying Step 4 (Service Method Introspection)...");
const sampleArgs: CustomerRegistrationArgs = ["user@example.com", 28, true];
const sampleRes: RegistrationResult = { customerId: "cust_123", registered: true };
testCheck("Step 4 - Parameters & Awaited ReturnType", sampleArgs[0] === "user@example.com" && sampleRes.registered === true);

console.log("\n[Summary] Day 28 challenge checks completed!\n");
