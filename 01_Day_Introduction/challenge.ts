/**
 * 🎯 Day 01: Introduction & Getting Started - Coding Challenges
 *
 * Welcome to Day 01 of 30 Days of TypeScript!
 *
 * 🚀 HOW TO PLAY:
 * 1. Read each challenge below.
 * 2. Replace the starter placeholders (// TODO) with your own code.
 * 3. Run your file in the terminal to see your results:
 *      npm run challenge:01
 *    or:
 *      npx tsx 01_Day_Introduction/challenge.ts
 *
 * 💡 Stuck? Check out `solutions.md` for complete answers & explanations!
 */

// ============================================================================
// 🎯 CHALLENGE 1: Explicit Variable Type Annotations
// ============================================================================
/**
 * Declare and export 3 variables with EXPLICIT type annotations:
 * 1. 'courseTitle': string with value "30 Days of TypeScript"
 * 2. 'totalDays': number with value 30
 * 3. 'isEnrolled': boolean with value true
 *
 * 💡 Scrimba Tip: In TypeScript, adding `: type` after the variable name
 * explicitly locks down its type.
 */
// 👇 YOUR CODE HERE:
export const courseTitle: any = "30 Days of TypeScript"; // TODO: Replace 'any' with explicit type
export const totalDays: any = 30;                        // TODO: Replace 'any' with explicit type
export const isEnrolled: any = true;                     // TODO: Replace 'any' with explicit type

// ============================================================================
// 🎯 CHALLENGE 2: Strongly Typed Function Parameters & Return Type
// ============================================================================
/**
 * Write a function 'formatBadge' that accepts:
 *   - 'title' (string): The lesson title
 *   - 'day' (number): The day number
 *
 * Return a formatted string in the pattern:
 *   "[TS30] Day <2-digit-padded-number>: <title>"
 *
 * Example:
 *   formatBadge("Primitive Types", 2) => "[TS30] Day 02: Primitive Types"
 *
 * 💡 Hint: Use String(day).padStart(2, "0")
 */
// 👇 YOUR CODE HERE:
export function formatBadge(title: string, day: number): string {
  // TODO: Return the formatted badge string
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 3: Strict Arithmetic & Type Coercion Protection
// ============================================================================
/**
 * In JavaScript, "100" - 20 is 80, but "100" + 20 is "10020". TypeScript eliminates this!
 *
 * Write a function 'calculateFinalPrice' that accepts:
 *   - 'basePrice' (number)
 *   - 'discountRate' (number, e.g. 0.20 for 20%)
 *   - 'shippingFee' (number, e.g. 15)
 *
 * Return the final total price as a number:
 *   (basePrice * (1 - discountRate)) + shippingFee
 *
 * Example:
 *   calculateFinalPrice(100, 0.20, 15) => 95
 */
// 👇 YOUR CODE HERE:
export function calculateFinalPrice(basePrice: number, discountRate: number, shippingFee: number): number {
  // TODO: Calculate and return the final price
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 4: Optional Parameters & Nullish Coalescing
// ============================================================================
/**
 * Write a function 'greetScholar' that accepts an optional parameter:
 *   - 'scholarName' (optional string, use '?')
 *
 * Return:
 *   - If scholarName is provided: "Welcome, <scholarName>! Ready to code."
 *   - If scholarName is undefined or omitted: "Welcome, TypeScript Scholar! Ready to code."
 *
 * 💡 Hint: Use the nullish coalescing operator '??'
 */
// 👇 YOUR CODE HERE:
export function greetScholar(scholarName?: string): string {
  // TODO: Return the greeting message with fallback
  return "";
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:01
// ============================================================================
console.log("--- 🧪 Day 01 Challenge Results ---");
console.log("Challenge 1:", { courseTitle, totalDays, isEnrolled });
console.log("Challenge 2:", formatBadge("Primitive Types", 2));
console.log("Challenge 3:", calculateFinalPrice(100, 0.2, 15));
console.log("Challenge 4:", greetScholar("Alex"), "|", greetScholar());
console.log("-----------------------------------\n");
