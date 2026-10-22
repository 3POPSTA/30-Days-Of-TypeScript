/**
 * ============================================================================
 * EXERCISES DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 03_Day_Special_types/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task(input: unknown): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return "FALLBACK";
}

export function level2Task(jsonString: string): unknown {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

export function level3Task(x: never): never {
  throw new Error(`Unexpected object reached never assertion: ${JSON.stringify(x)}`);
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay03(): Promise<boolean> {
  console.log("Verifying Day 03 Exercises (Special Types: any, unknown, never, void)...");

  const res1 = level1Task("hello");
  if (res1 !== "HELLO") throw new Error("L1 failed");
  if (level1Task(123) !== "FALLBACK") throw new Error("L1 fallback failed");

  const res2 = level2Task('{"valid": true}');
  if (typeof res2 !== "object" || res2 === null || (res2 as any).valid !== true) throw new Error("L2 failed");
  if (level2Task("{broken") !== null) throw new Error("L2 error fallback failed");

  // Verify L3 type compiles correctly
  const testFn = (val: "a"): string => {
    switch(val) {
      case "a": return "ok";
      default: return level3Task(val);
    }
  };
  if (testFn("a") !== "ok") throw new Error("L3 failed");


  console.log(" Day 03: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("03_Day_Special_types[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay03();
}
