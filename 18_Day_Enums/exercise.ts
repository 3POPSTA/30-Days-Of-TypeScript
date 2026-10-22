/**
 * ============================================================================
 * EXERCISES DAY 18: ENUMS & OBJECT LITERALS AS CONST
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 18_Day_Enums/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

export const HttpStatus = {
  OK: 200,
  NotFound: 404,
  ServerError: 500
} as const;

export type HttpStatusCode = typeof HttpStatus[keyof typeof HttpStatus];

export function level1Task(dir: Direction): string {
  return `Moving ${dir}`;
}

export function level2Task(code: HttpStatusCode): string {
  switch (code) {
    case HttpStatus.OK: return "Success";
    case HttpStatus.NotFound: return "Missing";
    case HttpStatus.ServerError: return "Error";
  }
}

export function level3Task(statusMap: typeof HttpStatus): number[] {
  return Object.values(statusMap);
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay18(): Promise<boolean> {
  console.log("Verifying Day 18 Exercises (Enums & Object Literals as const)...");

  if (level1Task(Direction.Up) !== "Moving UP") throw new Error("L1 failed");
  if (level2Task(200) !== "Success") throw new Error("L2 failed");
  if (level3Task(HttpStatus).length !== 3) throw new Error("L3 failed");


  console.log(" Day 18: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("18_Day_Enums[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay18();
}
