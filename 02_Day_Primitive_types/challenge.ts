/**
 * ============================================================================
 * DAY 02: PRIMITIVE DATA TYPES & TYPE ANNOTATIONS - CODING CHALLENGES
 * ============================================================================
 * Welcome to Day 02! Today you explore the 7 primitive types:
 * string, number, boolean, null, undefined, symbol, and bigint.
 *
 * Test with:
 *   npx tsx 02_Day_Primitive_types/challenge.ts
 *   OR
 *   npm run challenge:02
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 02: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: The 7 Primitive Variables
// ============================================================================
/**
 * CHALLENGE 1:
 * Declare and export the following 7 primitive variables with explicit types:
 *   - 'appName': string ("TypeScript Tutor")
 *   - 'maxUsers': number (10000)
 *   - 'isBeta': boolean (false)
 *   - 'emptyState': null (null)
 *   - 'unassigned': undefined (undefined)
 *   - 'bigSequence': bigint (9007199254740995n)
 *   - 'registryKey': symbol (Symbol("tutor.key"))
 */
// >>> YOUR CODE HERE <<<
export const appName: string = "TypeScript Tutor";
export const maxUsers: number = 10000;
export const isBeta: boolean = false;
export const emptyState: null = null;
export const unassigned: undefined = undefined;
export const bigSequence: bigint = 9007199254740995n;
export const registryKey: symbol = Symbol("tutor.key");


// ============================================================================
// STEP 2: BigInt Precision Arithmetic
// ============================================================================
/**
 * CHALLENGE 2:
 * JavaScript Numbers lose precision past 2^53 - 1 (Number.MAX_SAFE_INTEGER).
 * BigInt solves this for arbitrarily large integers.
 * 
 * Write a function 'multiplyBigInt' that takes two BigInt values:
 *   - a (bigint)
 *   - b (bigint)
 * 
 * Return their product as a bigint: a * b.
 */
// >>> YOUR CODE HERE <<<
export function multiplyBigInt(a: bigint, b: bigint): bigint {
  // TODO: Replace with your implementation
  return a * b;
}


// ============================================================================
// STEP 3: Multi-Base Number Representation
// ============================================================================
/**
 * CHALLENGE 3:
 * TypeScript allows decimal, hex (0x...), binary (0b...), and octal (0o...) numbers.
 * 
 * Write a function 'convertBases' that takes a decimal number and returns an object
 * with string representations in hex and binary:
 *   - hex: number in hexadecimal format (e.g. "2a" for 42)
 *   - binary: number in binary format (e.g. "101010" for 42)
 * 
 * Hint: Use num.toString(16) and num.toString(2)
 */
// >>> YOUR CODE HERE <<<
export interface BaseConversions {
  hex: string;
  binary: string;
}

export function convertBases(num: number): BaseConversions {
  // TODO: Replace with your implementation
  return {
    hex: num.toString(16),
    binary: num.toString(2)
  };
}


// ============================================================================
// STEP 4: Differentiating Null vs Undefined
// ============================================================================
/**
 * CHALLENGE 4:
 * In TypeScript, 'null' signals intentional absence of an object value,
 * while 'undefined' indicates a variable that has not been initialized.
 * 
 * Write a function 'describeSubmission' that accepts:
 *   - score (number | null | undefined)
 * 
 * Return:
 *   - If score is undefined: "NOT_SUBMITTED"
 *   - If score is null: "EXCUSED"
 *   - If score is a number: `SCORE: ${score}`
 */
// >>> YOUR CODE HERE <<<
export function describeSubmission(score: number | null | undefined): string {
  // TODO: Replace with your implementation
  if (score === undefined) return "NOT_SUBMITTED";
  if (score === null) return "EXCUSED";
  return `SCORE: ${score}`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Primitive Variables)...");
testCheck("Step 1.1 - appName", typeof appName === "string" && appName === "TypeScript Tutor", appName);
testCheck("Step 1.2 - maxUsers", typeof maxUsers === "number" && maxUsers === 10000, String(maxUsers));
testCheck("Step 1.3 - isBeta", typeof isBeta === "boolean" && isBeta === false, String(isBeta));
testCheck("Step 1.4 - emptyState", emptyState === null, "null");
testCheck("Step 1.5 - unassigned", unassigned === undefined, "undefined");
testCheck("Step 1.6 - bigSequence", typeof bigSequence === "bigint" && bigSequence === 9007199254740995n, bigSequence.toString());
testCheck("Step 1.7 - registryKey", typeof registryKey === "symbol", registryKey.toString());

console.log("\nVerifying Step 2 (multiplyBigInt)...");
const bigProd = multiplyBigInt(1000000000000n, 3n);
testCheck("Step 2 - multiplyBigInt", bigProd === 3000000000000n, bigProd.toString());

console.log("\nVerifying Step 3 (convertBases)...");
const bases = convertBases(42);
testCheck("Step 3 - convertBases", bases.hex === "2a" && bases.binary === "101010", JSON.stringify(bases));

console.log("\nVerifying Step 4 (describeSubmission)...");
testCheck("Step 4.1 - undefined", describeSubmission(undefined) === "NOT_SUBMITTED");
testCheck("Step 4.2 - null", describeSubmission(null) === "EXCUSED");
testCheck("Step 4.3 - number", describeSubmission(95) === "SCORE: 95");

console.log("\n[Summary] Day 02 challenge checks completed!\n");
