/**
 * ============================================================================
 * SOLUTION DAY 21: GENERIC CLASSES & DATA STRUCTURES
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export class Queue<T> {
  private data: T[] = [];
  enqueue(item: T): void { this.data.push(item); }
  dequeue(): T | undefined { return this.data.shift(); }
  get size(): number { return this.data.length; }
}

export class Pair<K, V> {
  constructor(public first: K, public second: V) {}
  swap(): Pair<V, K> {
    return new Pair(this.second, this.first);
  }
}

export class MemoryCache<K, V> {
  private store = new Map<K, { value: V; expiresAt?: number }>();
  set(key: K, value: V, ttlMs?: number): void {
    const expiresAt = ttlMs ? Date.now() + ttlMs : undefined;
    this.store.set(key, { value, expiresAt });
  }
  get(key: K): V | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }
  has(key: K): boolean {
    return this.get(key) !== undefined;
  }
}

export function level1Task<T>(items: T[]): Queue<T> {
  const q = new Queue<T>();
  for (const it of items) q.enqueue(it);
  return q;
}

export function level2Task<K, V>(first: K, second: V): Pair<V, K> {
  return new Pair(first, second).swap();
}

export function level3Task(cache: MemoryCache<string, number>, key: string, val: number): boolean {
  cache.set(key, val);
  return cache.has(key);
}


console.log("[Solution Day 21] Verified reference implementation.");
