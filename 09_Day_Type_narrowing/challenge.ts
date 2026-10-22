/**
 * ============================================================================
 * DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS — CODING CHALLENGES
 * ============================================================================
 * TypeScript refines broad types into narrower ones using control flow checks:
 * - 'typeof' for primitives
 * - 'instanceof' for class instances
 * - 'in' operator for property existence
 * - Truthiness and equality checks
 *
 * Test with:
 *   npx tsx 09_Day_Type_narrowing/challenge.ts
 *   OR
 *   npm run challenge:09
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 09: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: 'typeof' Narrowing
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'doubleOrRepeat' that accepts:
 *   - input (string | number)
 * 
 * Behavior:
 *   - If input is a number: return input * 2.
 *   - If input is a string: return input.repeat(2).
 */
// >>> YOUR CODE HERE <<<
export function doubleOrRepeat(input: string | number): string | number {
  // TODO: Replace with your implementation
  if (typeof input === "number") {
    return input * 2;
  }
  return input.repeat(2);
}


// ============================================================================
// STEP 2: 'instanceof' Narrowing
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'toStandardError' that accepts:
 *   - err (Error | string)
 * 
 * If err is an instance of Error, return its 'message' property.
 * If err is a string, return the string.
 */
// >>> YOUR CODE HERE <<<
export function toStandardError(err: Error | string): string {
  // TODO: Replace with your implementation
  if (err instanceof Error) {
    return err.message;
  }
  return err;
}


// ============================================================================
// STEP 3: 'in' Operator Narrowing
// ============================================================================
/**
 * CHALLENGE 3:
 * Define types:
 *   - type Circle = { radius: number };
 *   - type Rectangle = { width: number; height: number };
 * 
 * Write a function 'calculateArea' that accepts (shape: Circle | Rectangle):
 *   - If "radius" in shape: return Math.PI * shape.radius ** 2
 *   - Otherwise: return shape.width * shape.height
 */
// >>> YOUR CODE HERE <<<
export type Circle = { radius: number };
export type Rectangle = { width: number; height: number };

export function calculateArea(shape: Circle | Rectangle): number {
  // TODO: Replace with your implementation
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  }
  return shape.width * shape.height;
}


// ============================================================================
// STEP 4: Truthiness & Nullish Narrowing
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'sanitizeDisplayName' that accepts:
 *   - name (string | null | undefined)
 * 
 * If 'name' is truthy and its trimmed version is not empty, return the trimmed name.
 * Otherwise, return "Anonymous".
 */
// >>> YOUR CODE HERE <<<
export function sanitizeDisplayName(name: string | null | undefined): string {
  // TODO: Replace with your implementation
  if (name && name.trim().length > 0) {
    return name.trim();
  }
  return "Anonymous";
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (typeof narrowing)...");
testCheck("Step 1.1 - number double", doubleOrRepeat(21) === 42);
testCheck("Step 1.2 - string repeat", doubleOrRepeat("TS") === "TSTS");

console.log("\nVerifying Step 2 (instanceof narrowing)...");
testCheck("Step 2.1 - Error instance", toStandardError(new Error("Timeout error")) === "Timeout error");
testCheck("Step 2.2 - string error", toStandardError("Plain error message") === "Plain error message");

console.log("\nVerifying Step 3 (in operator narrowing)...");
const circleArea = calculateArea({ radius: 10 });
const rectArea = calculateArea({ width: 5, height: 4 });
testCheck("Step 3.1 - circle area", Math.round(circleArea) === 314);
testCheck("Step 3.2 - rect area", rectArea === 20);

console.log("\nVerifying Step 4 (Truthiness narrowing)...");
testCheck("Step 4.1 - valid name", sanitizeDisplayName("  Ada Lovelace  ") === "Ada Lovelace");
testCheck("Step 4.2 - whitespace name", sanitizeDisplayName("   ") === "Anonymous");
testCheck("Step 4.3 - null", sanitizeDisplayName(null) === "Anonymous");
testCheck("Step 4.4 - undefined", sanitizeDisplayName(undefined) === "Anonymous");

console.log("\n[Summary] Day 09 challenge checks completed!\n");
