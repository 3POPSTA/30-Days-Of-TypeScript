/**
 * ============================================================================
 * EXERCISE DAY 26: THE INFER KEYWORD & TYPE EXTRACTION
 * ============================================================================
 * Instructions:
 * Complete the TODO sections below. Once finished, run:
 *   npx tsx src/day-26-infer-keyword/exercise.ts
 */

// ----------------------------------------------------------------------------
// TODO Level 1 (Fundamentals): Implement MyReturnType<T> with infer
// ----------------------------------------------------------------------------
export function level1Task(input: string): string {
  // TODO: Implement according to requirements
  return `Day 26 L1: ${input.trim()}`;
}

// ----------------------------------------------------------------------------
// TODO Level 2 (Application): Implement MyParameters<T> with infer
// ----------------------------------------------------------------------------
export function level2Task(values: number[]): { count: number; sum: number } {
  // TODO: Implement according to requirements
  const sum = values.reduce((acc, curr) => acc + curr, 0);
  return { count: values.length, sum };
}

// ----------------------------------------------------------------------------
// TODO Level 3 (Mastery Challenge): Implement DeepAwaited<T> recursively unwrapping nested Promises
// ----------------------------------------------------------------------------
export function level3Task<T>(item: T): { success: boolean; data: T; day: number } {
  // TODO: Implement according to requirements
  return { success: true, data: item, day: 26 };
}

// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export function verifyDay26(): boolean {
  console.log("Verifying Day 26 Exercises (The infer Keyword & Type Extraction)...");

  const res1 = level1Task("  TypeScript  ");
  if (res1 !== "Day 26 L1: TypeScript") throw new Error("Failed Level 1 test");

  const res2 = level2Task([10, 20, 30]);
  if (res2.count !== 3 || res2.sum !== 60) throw new Error("Failed Level 2 test");

  const res3 = level3Task({ id: "hero" });
  if (!res3.success || res3.day !== 26 || res3.data.id !== "hero") {
    throw new Error("Failed Level 3 test");
  }

  console.log(" Day 26: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay26();
}
