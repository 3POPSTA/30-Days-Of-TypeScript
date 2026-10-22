/**
 * ============================================================================
 * EXERCISES DAY 23: MAPPED TYPES & KEY REMAPPING
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 23_Day_Mapped_types/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

export type Optional<T> = {
  [K in keyof T]?: T[K];
};

export function level1Task<T extends object>(obj: T): MyReadonly<T> {
  return Object.freeze({ ...obj });
}

export function level2Task<T extends object>(obj: T): Optional<T> {
  return { ...obj };
}

export function level3Task<T extends Record<string, any>>(obj: T): Record<string, () => any> {
  const result: Record<string, () => any> = {};
  for (const k of Object.keys(obj)) {
    const capitalized = k.charAt(0).toUpperCase() + k.slice(1);
    result[`get${capitalized}`] = () => obj[k];
  }
  return result;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay23(): Promise<boolean> {
  console.log("Verifying Day 23 Exercises (Mapped Types & Key Remapping)...");

  const res1 = level1Task({ a: 1 });
  if (res1.a !== 1) throw new Error("L1 failed");

  const res2 = level2Task({ title: "Task" });
  if (res2.title !== "Task") throw new Error("L2 failed");

  const getters = level3Task({ name: "Ada", age: 36 });
  if (getters.getName() !== "Ada" || getters.getAge() !== 36) throw new Error("L3 failed");


  console.log(" Day 23: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("23_Day_Mapped_types[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay23();
}
