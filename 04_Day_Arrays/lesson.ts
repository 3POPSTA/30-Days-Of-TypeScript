/**
 * ============================================================================
 * DAY 04: ARRAYS, READONLY ARRAYS & MATRICES
 * ============================================================================
 * Master typed arrays, generic Array<T> syntax, multidimensional arrays (matrices), and immutable readonly arrays.
 * Run with: npm run day:04  OR  npx tsx 04_Day_Arrays/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 04: ARRAYS, READONLY ARRAYS & MATRICES");
console.log("=======================================================\n");

// Day 04: Arrays, Readonly Arrays & Matrices
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const scores: Array<number> = [98, 85, 92, 100];

// Immutability with readonly
const immutableNumbers: readonly number[] = [1, 2, 3];
// immutableNumbers.push(4); // Compile error: property push does not exist!

// Matrix 2D
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix diagonal element [1][1] =", matrix[1][1]);


console.log("\n[Summary] Day 04 lesson finished successfully!\n");
