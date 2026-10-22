/**
 * ============================================================================
 * DAY 18: ENUMS & OBJECT LITERALS AS CONST - CODING CHALLENGES
 * ============================================================================
 * Enums create named sets of numeric or string constants:
 * - Numeric enums feature automatic auto-incrementing and reverse mapping
 * - String enums provide readable runtime serialization
 * - 'const' objects with 'as const' offer a tree-shakable alternative
 *
 * Test with:
 *   npx tsx 18_Day_Enums/challenge.ts
 *   OR
 *   npm run challenge:18
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 18: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Numeric and String Enums
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   1. A numeric enum 'Priority':
 *      - Low = 1, Medium = 2, High = 3, Critical = 4
 * 
 *   2. A string enum 'OrderStatus':
 *      - Pending = "PENDING"
 *      - Processing = "PROCESSING"
 *      - Completed = "COMPLETED"
 *      - Cancelled = "CANCELLED"
 */
// >>> YOUR CODE HERE <<<
export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

export enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED"
}


// ============================================================================
// STEP 2: Numeric Enum Reverse Mapping
// ============================================================================
/**
 * CHALLENGE 2:
 * Numeric enums support reverse mapping from value to name: Priority[1] === "Low".
 * 
 * Write a function 'getPriorityLabel(p: Priority): string' that returns the string
 * name of the priority enum value.
 */
// >>> YOUR CODE HERE <<<
export function getPriorityLabel(p: Priority): string {
  // TODO: Replace with your implementation
  return Priority[p];
}


// ============================================================================
// STEP 3: The 'as const' Object Alternative
// ============================================================================
/**
 * CHALLENGE 3:
 * In modern TypeScript, 'const' objects with 'as const' are widely preferred
 * over enums for bundle size and tree-shaking benefits.
 * 
 * Define:
 *   export const HttpCodes = {
 *     Ok: 200,
 *     Created: 201,
 *     NotFound: 404,
 *     InternalError: 500
 *   } as const;
 * 
 * Extract the union type 'HttpCode':
 *   type HttpCode = (typeof HttpCodes)[keyof typeof HttpCodes];
 */
// >>> YOUR CODE HERE <<<
export const HttpCodes = {
  Ok: 200,
  Created: 201,
  NotFound: 404,
  InternalError: 500
} as const;

export type HttpCode = (typeof HttpCodes)[keyof typeof HttpCodes];

export function isSuccessHttpCode(code: HttpCode): boolean {
  // TODO: Replace with your implementation
  return code === HttpCodes.Ok || code === HttpCodes.Created;
}


// ============================================================================
// STEP 4: Type Guard for String Enums
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a type guard 'isOrderStatus(val: unknown): val is OrderStatus' that
 * checks if an unknown runtime string is a valid OrderStatus enum value.
 * 
 * Hint: Check Object.values(OrderStatus).includes(val as any)
 */
// >>> YOUR CODE HERE <<<
export function isOrderStatus(val: unknown): val is OrderStatus {
  // TODO: Replace with your implementation
  return typeof val === "string" && Object.values(OrderStatus).includes(val as OrderStatus);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Enums)...");
testCheck("Step 1.1 - Priority numeric", Priority.High === 3);
testCheck("Step 1.2 - OrderStatus string", OrderStatus.Completed === "COMPLETED");

console.log("\nVerifying Step 2 (Reverse Mapping)...");
testCheck("Step 2 - getPriorityLabel", getPriorityLabel(Priority.Critical) === "Critical");

console.log("\nVerifying Step 3 (as const Object Alternative)...");
testCheck("Step 3.1 - HttpCodes values", HttpCodes.NotFound === 404);
testCheck("Step 3.2 - isSuccessHttpCode", isSuccessHttpCode(HttpCodes.Created) === true && isSuccessHttpCode(HttpCodes.NotFound) === false);

console.log("\nVerifying Step 4 (isOrderStatus type guard)...");
testCheck("Step 4.1 - valid enum value", isOrderStatus("COMPLETED") === true);
testCheck("Step 4.2 - invalid enum value", isOrderStatus("REFUNDED") === false);

console.log("\n[Summary] Day 18 challenge checks completed!\n");
