/**
 * ============================================================================
 * EXERCISES DAY 19: GENERICS: FUNCTIONS, INTERFACES & TYPES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 19_Day_Generics_basics/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export function level1Task<T>(item: T): T[] {
  return [item];
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export function level2Task<T>(payload: T): ApiResponse<T> {
  return { success: true, data: payload };
}

export class Stack<T> {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  get size(): number { return this.items.length; }
}

export function level3Task<T>(items: T[]): Stack<T> {
  const s = new Stack<T>();
  for (const it of items) s.push(it);
  return s;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay19(): Promise<boolean> {
  console.log("Verifying Day 19 Exercises (Generics: Functions, Interfaces & Types)...");

  const res1 = level1Task(42);
  if (!Array.isArray(res1) || res1[0] !== 42) throw new Error("L1 failed");

  const res2 = level2Task("ready");
  if (!res2.success || res2.data !== "ready") throw new Error("L2 failed");

  const s = level3Task([1, 2, 3]);
  if (s.size !== 3 || s.peek() !== 3) throw new Error("L3 failed");


  console.log(" Day 19: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("19_Day_Generics_basics[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay19();
}
