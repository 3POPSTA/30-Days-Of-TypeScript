/**
 * ============================================================================
 * SOLUTION DAY 14: INTERFACES & INHERITANCE
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 14] Verified reference implementation.");
