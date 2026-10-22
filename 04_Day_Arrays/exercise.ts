/**
 * ============================================================================
 * EXERCISES DAY 04: ARRAYS, READONLY ARRAYS & MATRICES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 04_Day_Arrays/exercise.ts
 * Or run the complete test suite:
 *   npm test
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


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay04(): Promise<boolean> {
  console.log("Verifying Day 04 Exercises (Arrays, Readonly Arrays & Matrices)...");

  const res1 = level1Task([10, 20, 30, 40]);
  if (res1 !== 100) throw new Error("L1 failed: " + res1);

  const res2 = level2Task(["ts", "javascript", "go", "python"], 4);
  if (res2.length !== 2 || !res2.includes("javascript")) throw new Error("L2 failed");

  const res3 = level3Task([[1, 2], [3, 4], [5, 6]]);
  if (res3.length !== 2 || res3[0][2] !== 5) throw new Error("L3 failed");


  console.log(" Day 04: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("04_Day_Arrays[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay04();
}
