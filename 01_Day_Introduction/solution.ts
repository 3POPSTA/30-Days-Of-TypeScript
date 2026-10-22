/**
 * ============================================================================
 * SOLUTION DAY 01: INTRODUCTION & GETTING STARTED
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 01] Verified reference implementation.");
