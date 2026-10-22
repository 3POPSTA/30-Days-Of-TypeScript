/**
 * ============================================================================
 * EXERCISES DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 22_Day_Keyof_and_indexed_access/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function level2Task<T>(arr: T[]): T | undefined {
  return arr[0];
}

const runtimeConfig = {
  host: "localhost",
  port: 8080,
  debug: true
};

export type AppConfig = typeof runtimeConfig;

export function level3Task(cfg: AppConfig): string {
  return `${cfg.host}:${cfg.port}`;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay22(): Promise<boolean> {
  console.log("Verifying Day 22 Exercises (Keyof, Indexed Access & typeof Queries)...");

  const u = { name: "Grace", level: 90 };
  if (level1Task(u, "name") !== "Grace") throw new Error("L1 failed");
  if (level2Task([1, 2, 3]) !== 1) throw new Error("L2 failed");
  if (level3Task(runtimeConfig) !== "localhost:8080") throw new Error("L3 failed");


  console.log(" Day 22: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("22_Day_Keyof_and_indexed_access[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay22();
}
