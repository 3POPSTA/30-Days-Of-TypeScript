/**
 * 🎯 Day 02: Primitive Data Types - Coding Challenges
 *
 * Today you explore the 7 primitive types in TypeScript:
 * string, number, boolean, null, undefined, symbol, and bigint.
 *
 * 🚀 Run anytime with:
 *   npm run challenge:02
 * Or:
 *   npx tsx 02_Day_Primitive_types/challenge.ts
 */

// ============================================================================
// 🎯 CHALLENGE 1: The 7 Primitive Variables
// ============================================================================
/**
 * Declare and export the following 7 primitive variables with explicit types:
 *   - 'appName': string ("TypeScript Tutor")
 *   - 'maxUsers': number (10000)
 *   - 'isBeta': boolean (false)
 *   - 'emptyState': null (null)
 *   - 'unassigned': undefined (undefined)
 *   - 'bigSequence': bigint (9007199254740995n)
 *   - 'registryKey': symbol (Symbol("tutor.key"))
 */
// 👇 YOUR CODE HERE:
export const appName: any = "TypeScript Tutor";              // TODO: Add : string
export const maxUsers: any = 10000;                          // TODO: Add : number
export const isBeta: any = false;                            // TODO: Add : boolean
export const emptyState: any = null;                         // TODO: Add : null
export const unassigned: any = undefined;                    // TODO: Add : undefined
export const bigSequence: any = 9007199254740995n;           // TODO: Add : bigint
export const registryKey: any = Symbol("tutor.key");         // TODO: Add : symbol

// ============================================================================
// 🎯 CHALLENGE 2: BigInt Precision Arithmetic
// ============================================================================
/**
 * Regular numbers lose precision past 2^53 - 1 (Number.MAX_SAFE_INTEGER).
 * BigInt allows arbitrary precision integer math.
 *
 * Write a function 'multiplyBigInt' that takes two BigInt values:
 *   - a (bigint)
 *   - b (bigint)
 *
 * Return their product as a bigint: a * b.
 */
// 👇 YOUR CODE HERE:
export function multiplyBigInt(a: bigint, b: bigint): bigint {
  // TODO: Return the product of a and b as a bigint
  return 0n;
}

// ============================================================================
// 🎯 CHALLENGE 3: Multi-Base Number Representation
// ============================================================================
/**
 * TypeScript supports decimal, hex (0x...), binary (0b...), and octal (0o...).
 *
 * Write a function 'convertBases' that takes a decimal number and returns an object
 * with string representations in hex and binary:
 *   - hex: number in hexadecimal (e.g. "2a" for 42)
 *   - binary: number in binary (e.g. "101010" for 42)
 *
 * 💡 Hint: Use num.toString(16) and num.toString(2)
 */
export interface BaseConversions {
  hex: string;
  binary: string;
}

// 👇 YOUR CODE HERE:
export function convertBases(num: number): BaseConversions {
  // TODO: Return { hex: ..., binary: ... }
  return { hex: "", binary: "" };
}

// ============================================================================
// 🎯 CHALLENGE 4: Differentiating Null vs Undefined
// ============================================================================
/**
 * 'null' signals an intentional empty value; 'undefined' means not yet assigned.
 *
 * Write a function 'describeSubmission' that accepts:
 *   - score (number | null | undefined)
 *
 * Return:
 *   - If score is undefined: "NOT_SUBMITTED"
 *   - If score is null: "EXCUSED"
 *   - If score is a number: `SCORE: ${score}`
 */
// 👇 YOUR CODE HERE:
export function describeSubmission(score: number | null | undefined): string {
  // TODO: Check undefined, null, and number, then return the matching string
  return "";
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:02
// ============================================================================
console.log("--- 🧪 Day 02 Challenge Results ---");
console.log("Challenge 1:", { appName, maxUsers, isBeta, emptyState, unassigned, bigSequence, registryKey: registryKey.toString() });
console.log("Challenge 2:", multiplyBigInt(1000000000000n, 3n));
console.log("Challenge 3:", convertBases(42));
console.log("Challenge 4:", describeSubmission(undefined), "|", describeSubmission(null), "|", describeSubmission(95));
console.log("-----------------------------------\n");
