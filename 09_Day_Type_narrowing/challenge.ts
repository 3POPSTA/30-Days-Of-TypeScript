/**
 * 🎯 Day 09: Type Narrowing & Control Flow Analysis - Coding Challenges
 *
 * Master typeof, instanceof, in operator, and truthiness narrowing.
 *
 * 🚀 Run with: npm run challenge:09
 */

// ============================================================================
// 🎯 CHALLENGE 1: 'typeof' Narrowing
// ============================================================================
/**
 * Write a function 'doubleOrRepeat' that accepts:
 *   - input: string | number
 *
 * If input is a number: return input * 2
 * If input is a string: return input.repeat(2)
 */
// 👇 YOUR CODE HERE:
export function doubleOrRepeat(input: string | number): string | number {
  // TODO: Use typeof to branch between number and string
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 2: 'instanceof' Narrowing
// ============================================================================
/**
 * Write a function 'toStandardError' that accepts:
 *   - err: Error | string
 *
 * If err is an instance of Error: return err.message
 * If err is a string: return err
 */
// 👇 YOUR CODE HERE:
export function toStandardError(err: Error | string): string {
  // TODO: Use instanceof to extract error message
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 3: 'in' Operator Narrowing
// ============================================================================
/**
 * 1. Define:
 *    - Circle = { radius: number }
 *    - Rectangle = { width: number; height: number }
 *
 * 2. Write 'calculateArea(shape: Circle | Rectangle): number':
 *    - If "radius" in shape: Math.PI * shape.radius ** 2
 *    - Otherwise: shape.width * shape.height
 */
export type Circle = { radius: number };
export type Rectangle = { width: number; height: number };

// 👇 YOUR CODE HERE:
export function calculateArea(shape: Circle | Rectangle): number {
  // TODO: Use the 'in' operator to check for 'radius'
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 4: Truthiness & Nullish Narrowing
// ============================================================================
/**
 * Write a function 'sanitizeDisplayName' that accepts:
 *   - name: string | null | undefined
 *
 * If name is non-nullish and has non-whitespace characters, return name.trim().
 * Otherwise return "Anonymous".
 */
// 👇 YOUR CODE HERE:
export function sanitizeDisplayName(name: string | null | undefined): string {
  // TODO: Narrow and return trimmed name or fallback
  return "Anonymous";
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:09
// ============================================================================
console.log("--- 🧪 Day 09 Challenge Results ---");
console.log("Challenge 1:", doubleOrRepeat(21), "|", doubleOrRepeat("abc"));
console.log("Challenge 2:", toStandardError(new Error("Disk full")), "|", toStandardError("Plain error"));
console.log("Challenge 3 (circle):", calculateArea({ radius: 5 }).toFixed(2));
console.log("Challenge 3 (rect):", calculateArea({ width: 4, height: 6 }));
console.log("Challenge 4:", sanitizeDisplayName("  Alex  "), "|", sanitizeDisplayName(null));
console.log("-----------------------------------\n");
