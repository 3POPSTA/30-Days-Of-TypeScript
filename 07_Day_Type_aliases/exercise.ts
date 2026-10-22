/**
 * ============================================================================
 * EXERCISES DAY 07: TYPE ALIASES & INTERSECTION TYPES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 07_Day_Type_aliases/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type Contact = { name: string; phone: string };
export type Emergency = { emergencyContact: string; emergencyPhone: string };
export type FullContact = Contact & Emergency;

export function level1Task(contact: Contact, emergency: Emergency): FullContact {
  return { ...contact, ...emergency };
}

export function level2Task<T>(entity: T, author: string): T & { createdAt: number; author: string } {
  return {
    ...entity,
    createdAt: 1700000000000,
    author
  };
}

export function level3Task(read: boolean, write: boolean, admin: boolean): { canRead: boolean } & { canWrite: boolean } & { isAdmin: boolean } {
  return { canRead: read, canWrite: write, isAdmin: admin };
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay07(): Promise<boolean> {
  console.log("Verifying Day 07 Exercises (Type Aliases & Intersection Types)...");

  const res1 = level1Task({ name: "Alex", phone: "123" }, { emergencyContact: "Mom", emergencyPhone: "999" });
  if (res1.name !== "Alex" || res1.emergencyPhone !== "999") throw new Error("L1 failed");

  const res2 = level2Task({ title: "Guide" }, "Asabeneh");
  if (res2.title !== "Guide" || res2.author !== "Asabeneh") throw new Error("L2 failed");

  const res3 = level3Task(true, false, true);
  if (!res3.canRead || res3.canWrite || !res3.isAdmin) throw new Error("L3 failed");


  console.log(" Day 07: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("07_Day_Type_aliases[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay07();
}
