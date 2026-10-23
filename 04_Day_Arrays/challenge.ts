/**
 * 🎯 Day 04: Arrays, Readonly Arrays & Matrices - Coding Challenges
 *
 * Arrays are workhorses in TypeScript:
 * - 'T[]' for mutable arrays
 * - 'readonly T[]' to prevent mutation
 * - Multi-dimensional matrices 'T[][]'
 *
 * 🚀 Run with: npm run challenge:04
 */

// ============================================================================
// 🎯 CHALLENGE 1: Basic Array Aggregation
// ============================================================================
/**
 * Write a function 'sumPositiveNumbers' that accepts:
 *   - numbers (number[]): array of numbers
 *
 * Return the sum of all strictly positive numbers (> 0).
 * If no positive numbers exist or the array is empty, return 0.
 *
 * Example:
 *   sumPositiveNumbers([10, -5, 20, -1, 30]) => 60
 */
// 👇 YOUR CODE HERE:
export function sumPositiveNumbers(numbers: number[]): number {
  // TODO: Filter positive numbers and calculate sum
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 2: Readonly Arrays & Immutable Appending
// ============================================================================
/**
 * 'readonly string[]' prevents direct mutations like .push() or [index] = value.
 *
 * Write a function 'appendTag' that accepts:
 *   - tags (readonly string[]): immutable array of tags
 *   - newTag (string): the tag to add
 *
 * Return a NEW readonly array containing all previous tags plus 'newTag'.
 * Do NOT mutate 'tags'.
 *
 * 💡 Hint: Use array spreading [...tags, newTag]
 */
// 👇 YOUR CODE HERE:
export function appendTag(tags: readonly string[], newTag: string): readonly string[] {
  // TODO: Return a new array with newTag appended
  return [];
}

// ============================================================================
// 🎯 CHALLENGE 3: Multi-Dimensional Matrices (2D Grids)
// ============================================================================
/**
 * The "trace" of a square matrix is the sum of elements on the main diagonal:
 * matrix[0][0] + matrix[1][1] + ... + matrix[n-1][n-1].
 *
 * Write a function 'calculateMatrixTrace' that accepts:
 *   - matrix (number[][]): a square 2D matrix
 *
 * Return the trace sum as a number.
 *
 * Example:
 *   calculateMatrixTrace([
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9]
 *   ]) => 1 + 5 + 9 = 15
 */
// 👇 YOUR CODE HERE:
export function calculateMatrixTrace(matrix: number[][]): number {
  // TODO: Sum the diagonal elements matrix[i][i]
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 4: Typed Object Array Filtering & Projection
// ============================================================================
/**
 * Write a function 'getActiveUserEmails' that accepts an array of user objects:
 *   - users (UserRecord[])
 *
 * Return an array of strings containing ONLY the emails of active users.
 *
 * Example:
 *   getActiveUserEmails([
 *     { id: 1, email: "alice@example.com", isActive: true },
 *     { id: 2, email: "bob@example.com", isActive: false },
 *     { id: 3, email: "carol@example.com", isActive: true }
 *   ]) => ["alice@example.com", "carol@example.com"]
 */
export interface UserRecord {
  id: number;
  email: string;
  isActive: boolean;
}

// 👇 YOUR CODE HERE:
export function getActiveUserEmails(users: UserRecord[]): string[] {
  // TODO: Filter active users and map to emails
  return [];
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:04
// ============================================================================
console.log("--- 🧪 Day 04 Challenge Results ---");
console.log("Challenge 1:", sumPositiveNumbers([10, -5, 20, -1, 30]));
console.log("Challenge 2:", appendTag(["ts", "js"], "node"));
console.log("Challenge 3:", calculateMatrixTrace([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

const testUsers: UserRecord[] = [
  { id: 1, email: "alice@example.com", isActive: true },
  { id: 2, email: "bob@example.com", isActive: false },
  { id: 3, email: "carol@example.com", isActive: true }
];
console.log("Challenge 4:", getActiveUserEmails(testUsers));
console.log("-----------------------------------\n");
