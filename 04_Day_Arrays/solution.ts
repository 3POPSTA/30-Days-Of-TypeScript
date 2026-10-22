/**
 * ============================================================================
 * SOLUTION DAY 04: ARRAYS, READONLY ARRAYS & MATRICES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export function level1Task(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function level2Task(strings: string[], minLength: number): string[] {
  return strings.filter(s => s.length >= minLength);
}

export function level3Task(matrix: number[][]): number[][] {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: number[][] = [];
  for (let c = 0; c < cols; c++) {
    const newRow: number[] = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    result.push(newRow);
  }
  return result;
}


console.log("[Solution Day 04] Verified reference implementation.");
