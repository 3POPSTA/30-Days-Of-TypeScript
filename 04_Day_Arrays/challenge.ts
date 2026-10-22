/**
 * ============================================================================
 * DAY 04: ARRAYS, READONLY ARRAYS & MATRICES — CODING CHALLENGES
 * ============================================================================
 * Arrays are workhorses in TypeScript:
 * - 'T[]' or 'Array<T>' for mutable arrays
 * - 'readonly T[]' or 'ReadonlyArray<T>' to prevent mutation
 * - Multi-dimensional matrices 'T[][]'
 *
 * Test with:
 *   npx tsx 04_Day_Arrays/challenge.ts
 *   OR
 *   npm run challenge:04
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 04: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Basic Array Aggregation
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'sumPositiveNumbers' that accepts:
 *   - numbers (number[]): array of numbers
 * 
 * Return the sum of all strictly positive numbers (> 0).
 * If no positive numbers exist or the array is empty, return 0.
 * 
 * Example:
 *   sumPositiveNumbers([10, -5, 20, -1, 30]) => 60
 */
// >>> YOUR CODE HERE <<<
export function sumPositiveNumbers(numbers: number[]): number {
  // TODO: Replace with your implementation
  return numbers.filter(n => n > 0).reduce((acc, curr) => acc + curr, 0);
}


// ============================================================================
// STEP 2: Readonly Arrays & Immutable Appending
// ============================================================================
/**
 * CHALLENGE 2:
 * 'readonly string[]' prevents direct mutations like .push(), .pop(), or [index] = value.
 * 
 * Write a function 'appendTag' that accepts:
 *   - tags (readonly string[]): immutable array of tags
 *   - newTag (string): the tag to add
 * 
 * Return a NEW readonly array containing all previous tags plus 'newTag'.
 * Do NOT mutate 'tags'.
 * 
 * Hint: Use array spreading [...tags, newTag]
 */
// >>> YOUR CODE HERE <<<
export function appendTag(tags: readonly string[], newTag: string): readonly string[] {
  // TODO: Replace with your implementation
  return [...tags, newTag];
}


// ============================================================================
// STEP 3: Multi-Dimensional Matrices (2D Grids)
// ============================================================================
/**
 * CHALLENGE 3:
 * In mathematics, the "trace" of a square matrix is the sum of elements
 * on the main diagonal (matrix[0][0] + matrix[1][1] + ... + matrix[n-1][n-1]).
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
// >>> YOUR CODE HERE <<<
export function calculateMatrixTrace(matrix: number[][]): number {
  // TODO: Replace with your implementation
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] && typeof matrix[i][i] === "number") {
      sum += matrix[i][i];
    }
  }
  return sum;
}


// ============================================================================
// STEP 4: Typed Object Array Filtering & Projection
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'getActiveUserEmails' that accepts an array of user objects:
 *   - users ({ id: number; email: string; isActive: boolean }[])
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

// >>> YOUR CODE HERE <<<
export function getActiveUserEmails(users: UserRecord[]): string[] {
  // TODO: Replace with your implementation
  return users.filter(u => u.isActive).map(u => u.email);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (sumPositiveNumbers)...");
const sumRes = sumPositiveNumbers([10, -5, 20, -1, 30]);
testCheck("Step 1 - sumPositiveNumbers", sumRes === 60, `Result: ${sumRes}`);

console.log("\nVerifying Step 2 (appendTag)...");
const initialTags: readonly string[] = ["typescript", "javascript"];
const updatedTags = appendTag(initialTags, "node");
testCheck("Step 2 - appendTag immutable", updatedTags.length === 3 && updatedTags[2] === "node" && initialTags.length === 2);

console.log("\nVerifying Step 3 (calculateMatrixTrace)...");
const traceRes = calculateMatrixTrace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
testCheck("Step 3 - calculateMatrixTrace", traceRes === 15, `Trace: ${traceRes}`);

console.log("\nVerifying Step 4 (getActiveUserEmails)...");
const testUsers: UserRecord[] = [
  { id: 1, email: "alice@example.com", isActive: true },
  { id: 2, email: "bob@example.com", isActive: false },
  { id: 3, email: "carol@example.com", isActive: true }
];
const emails = getActiveUserEmails(testUsers);
testCheck("Step 4 - getActiveUserEmails", emails.length === 2 && emails[0] === "alice@example.com" && emails[1] === "carol@example.com", JSON.stringify(emails));

console.log("\n[Summary] Day 04 challenge checks completed!\n");
