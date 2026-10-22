/**
 * SOLUTION DAY 04
 */
export function sumReadonly(numbers: readonly number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function getMatrixDiagonal(matrix: readonly (readonly number[])[]): number[] {
  return matrix.map((row, i) => row[i] ?? 0);
}

export function filterEvensPure(numbers: readonly number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
