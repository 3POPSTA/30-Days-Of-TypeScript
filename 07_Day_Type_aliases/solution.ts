/**
 * ============================================================================
 * SOLUTION DAY 07: TYPE ALIASES & INTERSECTION TYPES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 07] Verified reference implementation.");
