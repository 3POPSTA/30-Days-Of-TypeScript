/**
 * ============================================================================
 * DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS - CODING CHALLENGES
 * ============================================================================
 * Conditional types take the form:
 *   'T extends U ? TrueType : FalseType'
 * When given a bare type parameter in a union, they automatically distribute
 * across each member of the union.
 *
 * Test with:
 *   npx tsx 25_Day_Conditional_types/challenge.ts
 *   OR
 *   npm run challenge:25
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 25: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Basic Type Inspection Conditional
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a conditional type 'IsString<T>':
 *   - If T extends string: return true
 *   - Otherwise: return false
 */
// >>> YOUR CODE HERE <<<
export type IsString<T> = T extends string ? true : false;


// ============================================================================
// STEP 2: Distributive Union Filtering
// ============================================================================
/**
 * CHALLENGE 2:
 * When T is an unresolved union, 'T extends U ? never : T' filters out
 * any member of the union assignable to U.
 * 
 * Implement 'Diff<T, U> = T extends U ? never : T'.
 * 
 * Test: Diff<"a" | "b" | "c", "a"> should evaluate to "b" | "c".
 */
// >>> YOUR CODE HERE <<<
export type Diff<T, U> = T extends U ? never : T;


// ============================================================================
// STEP 3: Array Element Extraction Conditional
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a conditional type 'Flatten<T>':
 *   - If T extends (infer E)[]: return E
 *   - Otherwise: return T
 * 
 * Example:
 *   Flatten<string[]> => string
 *   Flatten<number>   => number
 */
// >>> YOUR CODE HERE <<<
export type Flatten<T> = T extends (infer E)[] ? E : T;


// ============================================================================
// STEP 4: Safe Function Return Resolver
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a conditional type 'FunctionReturnTypeOrNever<T>':
 *   - If T extends (...args: any[]) => infer R: return R
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type FunctionReturnTypeOrNever<T> = T extends (...args: any[]) => infer R ? R : never;


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (IsString<T>)...");
type TestStr = IsString<"hello">; // true
type TestNum = IsString<123>;     // false
const checkStr: TestStr = true;
const checkNum: TestNum = false;
testCheck("Step 1 - IsString conditional", checkStr === true && checkNum === false);

console.log("\nVerifying Step 2 (Diff<T, U>)...");
type Letters = "a" | "b" | "c";
type Remaining = Diff<Letters, "b">; // "a" | "c"
const testRem1: Remaining = "a";
const testRem2: Remaining = "c";
testCheck("Step 2 - Diff distributive conditional", testRem1 === "a" && testRem2 === "c");

console.log("\nVerifying Step 3 (Flatten<T>)...");
type FlatString = Flatten<string[]>;
type FlatNum = Flatten<number>;
const sVal: FlatString = "unwrapped";
const nVal: FlatNum = 42;
testCheck("Step 3 - Flatten type", typeof sVal === "string" && typeof nVal === "number");

console.log("\nVerifying Step 4 (FunctionReturnTypeOrNever)...");
type RetVal = FunctionReturnTypeOrNever<() => boolean>;
const bVal: RetVal = true;
testCheck("Step 4 - FunctionReturnTypeOrNever", bVal === true);

console.log("\n[Summary] Day 25 challenge checks completed!\n");
