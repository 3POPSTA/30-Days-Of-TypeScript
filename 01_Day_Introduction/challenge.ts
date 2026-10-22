/**
 * ============================================================================
 * DAY 01: INTRODUCTION & GETTING STARTED - CODING CHALLENGES
 * ============================================================================
 * Welcome to Day 01's hands-on challenge!
 * 
 * INSTRUCTIONS:
 * 1. Read each challenge description and requirement in the comments below.
 * 2. Replace the starter placeholders (// >>> YOUR CODE HERE <<<) with your code.
 * 3. Test your solution by executing in your terminal:
 *      npx tsx 01_Day_Introduction/challenge.ts
 *    OR
 *      npm run challenge:01
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 01: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Explicit Variable Type Annotations
// ============================================================================
/**
 * CHALLENGE 1:
 * Declare 3 exported variables with EXPLICIT type annotations:
 *   - 'courseTitle': string with value "30 Days of TypeScript"
 *   - 'totalDays': number with value 30
 *   - 'isEnrolled': boolean with value true
 * 
 * Requirement:
 *   You must include the explicit type annotations (: string, : number, : boolean).
 */
// >>> YOUR CODE HERE <<<
export const courseTitle: string = "30 Days of TypeScript";
export const totalDays: number = 30;
export const isEnrolled: boolean = true;


// ============================================================================
// STEP 2: Strongly Typed Function Parameters & Return Type
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'formatBadge' that accepts:
 *   - title (string): The lesson title
 *   - day (number): The day number
 * 
 * Return a formatted string in the pattern:
 *   "[TS30] Day <2-digit-padded-number>: <title>"
 * 
 * Example:
 *   formatBadge("Primitive Types", 2) => "[TS30] Day 02: Primitive Types"
 * 
 * Hint: Use String(day).padStart(2, "0")
 */
// >>> YOUR CODE HERE <<<
export function formatBadge(title: string, day: number): string {
  // TODO: Replace with your implementation
  return `[TS30] Day ${String(day).padStart(2, "0")}: ${title}`;
}


// ============================================================================
// STEP 3: Strict Arithmetic & Type Coercion Protection
// ============================================================================
/**
 * CHALLENGE 3:
 * In JavaScript, "100" - 20 is 80, but "100" + 20 is "10020".
 * TypeScript eliminates this ambiguity.
 * 
 * Write a function 'calculateFinalPrice' that accepts:
 *   - basePrice (number)
 *   - discountRate (number, e.g. 0.15 for 15%)
 *   - shippingFee (number, e.g. 10)
 * 
 * Return the final total price as a number:
 *   (basePrice * (1 - discountRate)) + shippingFee
 * 
 * Example:
 *   calculateFinalPrice(100, 0.20, 15) => 95
 */
// >>> YOUR CODE HERE <<<
export function calculateFinalPrice(basePrice: number, discountRate: number, shippingFee: number): number {
  // TODO: Replace with your implementation
  return (basePrice * (1 - discountRate)) + shippingFee;
}


// ============================================================================
// STEP 4: Optional Parameters & Nullish Coalescing
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'greetScholar' that accepts an optional parameter:
 *   - scholarName (optional string, use '?')
 * 
 * If scholarName is provided, return:
 *   "Welcome, <scholarName>! Ready to code."
 * If scholarName is undefined or omitted, return:
 *   "Welcome, TypeScript Scholar! Ready to code."
 * 
 * Hint: Use the nullish coalescing operator '??'
 */
// >>> YOUR CODE HERE <<<
export function greetScholar(scholarName?: string): string {
  // TODO: Replace with your implementation
  const name = scholarName ?? "TypeScript Scholar";
  return `Welcome, ${name}! Ready to code.`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Explicit Annotations)...");
testCheck("Step 1.1 - courseTitle", courseTitle === "30 Days of TypeScript", courseTitle);
testCheck("Step 1.2 - totalDays", totalDays === 30, String(totalDays));
testCheck("Step 1.3 - isEnrolled", isEnrolled === true, String(isEnrolled));

console.log("\nVerifying Step 2 (formatBadge)...");
const badgeOut = formatBadge("Primitive Types", 2);
testCheck("Step 2 - formatBadge", badgeOut === "[TS30] Day 02: Primitive Types", badgeOut);

console.log("\nVerifying Step 3 (calculateFinalPrice)...");
const priceOut = calculateFinalPrice(100, 0.2, 15);
testCheck("Step 3 - calculateFinalPrice", priceOut === 95, `Result: ${priceOut}`);

console.log("\nVerifying Step 4 (greetScholar)...");
const greetWithArg = greetScholar("Alex");
const greetWithoutArg = greetScholar();
testCheck("Step 4.1 - with argument", greetWithArg === "Welcome, Alex! Ready to code.", greetWithArg);
testCheck("Step 4.2 - default fallback", greetWithoutArg === "Welcome, TypeScript Scholar! Ready to code.", greetWithoutArg);

console.log("\n[Summary] Day 01 challenge checks completed!\n");
