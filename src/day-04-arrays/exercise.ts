/**
 * EXERCISE DAY 04: ARRAYS & READONLY ARRAYS
 */
// Level 1: Calculate sum of readonly number array
export function sumReadonly(numbers: readonly number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Level 2: Extract diagonal elements of an NxN matrix
export function getMatrixDiagonal(matrix: readonly (readonly number[])[]): number[] {
  return matrix.map((row, i) => row[i] ?? 0);
}

// Level 3: Pure filter: return even numbers without mutating original array
export function filterEvensPure(numbers: readonly number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

export function verifyDay04(): boolean {
  console.log("Verifying Day 04 Exercises...");
  if (sumReadonly([1, 2, 3, 4]) !== 10) throw new Error("L1 failed");
  const m = [
    [1, 0, 0],
    [0, 5, 0],
    [0, 0, 9]
  ];
  const diag = getMatrixDiagonal(m);
  if (diag[0] !== 1 || diag[1] !== 5 || diag[2] !== 9) throw new Error("L2 failed");
  const evens = filterEvensPure([1, 2, 3, 4, 5, 6]);
  if (evens.length !== 3 || evens[0] !== 2) throw new Error("L3 failed");
  console.log(" Day 04: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay04();
}
