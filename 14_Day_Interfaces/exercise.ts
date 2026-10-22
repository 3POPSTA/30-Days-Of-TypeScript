/**
 * ============================================================================
 * EXERCISES DAY 14: INTERFACES & INHERITANCE
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 14_Day_Interfaces/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export interface User {
  id: number;
  name: string;
}

export interface AdminUser extends User {
  permissions: string[];
}

export function level1Task(admin: AdminUser): boolean {
  return admin.permissions.includes("ALL");
}

export interface Phone { dial: (num: string) => string; }
export interface Camera { snap: () => string; }
export interface SmartPhone extends Phone, Camera { brand: string; }

export function level2Task(phone: SmartPhone): string {
  return `${phone.brand} ${phone.snap()}`;
}

export interface PluginLifecycle {
  init: () => boolean;
  run: () => string;
  destroy: () => void;
}

export function level3Task(p: PluginLifecycle): string {
  if (p.init()) return p.run();
  return "FAILED_INIT";
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay14(): Promise<boolean> {
  console.log("Verifying Day 14 Exercises (Interfaces & Inheritance)...");

  const admin: AdminUser = { id: 1, name: "Root", permissions: ["ALL"] };
  if (!level1Task(admin)) throw new Error("L1 failed");

  const sp: SmartPhone = {
    brand: "Pixel",
    dial: n => "calling " + n,
    snap: () => "Photo captured"
  };
  if (level2Task(sp) !== "Pixel Photo captured") throw new Error("L2 failed");

  const p: PluginLifecycle = {
    init: () => true,
    run: () => "RUNNING",
    destroy: () => {}
  };
  if (level3Task(p) !== "RUNNING") throw new Error("L3 failed");


  console.log(" Day 14: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("14_Day_Interfaces[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay14();
}
