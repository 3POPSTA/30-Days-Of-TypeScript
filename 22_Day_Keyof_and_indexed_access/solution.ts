/**
 * ============================================================================
 * SOLUTION DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 22] Verified reference implementation.");
