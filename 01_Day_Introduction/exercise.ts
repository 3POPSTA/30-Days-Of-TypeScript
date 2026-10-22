/**
 * ============================================================================
 * EXERCISES DAY 01: INTRODUCTION & GETTING STARTED
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 01_Day_Introduction/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(learner: string): string {
  return `Hello, ${learner.trim()}!`;
}

export function level2Task(width: number, height: number): number {
  if (width < 0 || height < 0) throw new Error("Dimensions must be positive");
  return width * height;
}

export function level3Task(platformName: string): { platform: string; isTypeScript: boolean; day: number } {
  return {
    platform: platformName,
    isTypeScript: true,
    day: 1
  };
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay01(): Promise<boolean> {
  console.log("Verifying Day 01 Exercises (Introduction & Getting Started)...");

  const res1 = level1Task("  TypeScript Developer  ");
  if (res1 !== "Hello, TypeScript Developer!") throw new Error("L1 failed");

  const res2 = level2Task(8, 5);
  if (res2 !== 40) throw new Error("L2 failed");

  const res3 = level3Task("Node.js");
  if (!res3.isTypeScript || res3.day !== 1) throw new Error("L3 failed");


  console.log(" Day 01: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("01_Day_Introduction[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay01();
}
