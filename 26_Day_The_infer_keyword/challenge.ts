/**
 * ============================================================================
 * DAY 26: THE INFER KEYWORD & UNWRAPPING TYPES — CODING CHALLENGES
 * ============================================================================
 * The 'infer' keyword allows introducing a type variable inside the 'extends'
 * clause of a conditional type to deduce and extract hidden types:
 * - Extracting function return types
 * - Unwrapping Promise values
 * - Extracting array element types
 * - Extracting constructor parameters
 *
 * Test with:
 *   npx tsx 26_Day_The_infer_keyword/challenge.ts
 *   OR
 *   npm run challenge:26
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 26: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Re-implementing ReturnType with infer
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a conditional type 'MyReturnType<T>':
 *   - If T extends (...args: any[]) => infer R: return R
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


// ============================================================================
// STEP 2: Recursive Promise Unwrapper (DeepAwaited)
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a recursive type 'DeepAwaited<T>':
 *   - If T extends Promise<infer U>: recursively unpack DeepAwaited<U>
 *   - Otherwise: return T
 * 
 * Example:
 *   DeepAwaited<Promise<Promise<string>>> => string
 */
// >>> YOUR CODE HERE <<<
export type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;


// ============================================================================
// STEP 3: Extracting Array Element Types
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a type 'ElementOf<T>':
 *   - If T extends readonly (infer E)[]: return E
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never;


// ============================================================================
// STEP 4: Extracting the First Parameter of a Function
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a type 'FirstParam<T>':
 *   - If T extends (first: infer P, ...rest: any[]) => any: return P
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type FirstParam<T> = T extends (first: infer P, ...rest: any[]) => any ? P : never;


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (MyReturnType)...");
function sampleFn(): { id: string; ok: boolean } {
  return { id: "1", ok: true };
}
type SampleReturn = MyReturnType<typeof sampleFn>;
const checkSample: SampleReturn = { id: "1", ok: true };
testCheck("Step 1 - MyReturnType extracted", checkSample.id === "1");

console.log("\nVerifying Step 2 (DeepAwaited)...");
type NestedPromise = Promise<Promise<number>>;
type Unwrapped = DeepAwaited<NestedPromise>;
const numCheck: Unwrapped = 42;
testCheck("Step 2 - DeepAwaited", numCheck === 42);

console.log("\nVerifying Step 3 (ElementOf)...");
type StringArr = string[];
type StrEl = ElementOf<StringArr>;
const strElCheck: StrEl = "extracted";
testCheck("Step 3 - ElementOf", strElCheck === "extracted");

console.log("\nVerifying Step 4 (FirstParam)...");
function greetUser(greeting: string, loud: boolean): void {
  console.log(greeting, loud);
}
type FirstP = FirstParam<typeof greetUser>;
const pCheck: FirstP = "Hello";
testCheck("Step 4 - FirstParam", pCheck === "Hello");

console.log("\n[Summary] Day 26 challenge checks completed!\n");
