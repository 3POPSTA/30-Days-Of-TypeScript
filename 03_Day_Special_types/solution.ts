/**
 * ============================================================================
 * SOLUTION DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 03] Verified reference implementation.");
