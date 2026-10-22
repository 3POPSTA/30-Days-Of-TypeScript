/**
 * ============================================================================
 * SOLUTION DAY 19: GENERICS: FUNCTIONS, INTERFACES & TYPES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 19] Verified reference implementation.");
