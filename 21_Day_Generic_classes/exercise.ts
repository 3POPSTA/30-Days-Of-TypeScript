/**
 * ============================================================================
 * EXERCISES DAY 21: GENERIC CLASSES & DATA STRUCTURES
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 21_Day_Generic_classes/exercise.ts
 * Or run the complete test suite:
 *   npm test
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


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay21(): Promise<boolean> {
  console.log("Verifying Day 21 Exercises (Generic Classes & Data Structures)...");

  const q = level1Task([10, 20]);
  if (q.size !== 2 || q.dequeue() !== 10) throw new Error("L1 failed");

  const p = level2Task("id", 101);
  if (p.first !== 101 || p.second !== "id") throw new Error("L2 failed");

  const mc = new MemoryCache<string, number>();
  if (!level3Task(mc, "views", 500) || mc.get("views") !== 500) throw new Error("L3 failed");


  console.log(" Day 21: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("21_Day_Generic_classes[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay21();
}
