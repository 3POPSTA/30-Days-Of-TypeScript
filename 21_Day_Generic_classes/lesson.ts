/**
 * ============================================================================
 * DAY 21: GENERIC CLASSES & DATA STRUCTURES
 * ============================================================================
 * Milestone: Build generic data structures and an in-memory Cache with TTL expiration using generic classes.
 * Run with: npm run day:21  OR  npx tsx 21_Day_Generic_classes/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 21: GENERIC CLASSES & DATA STRUCTURES");
console.log("=======================================================\n");

// Day 21: Generic Classes & Data Structures
class MemoryCache<K, V> {
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
}

const cache = new MemoryCache<string, number>();
cache.set("count", 42);
console.log("Cached count:", cache.get("count"));


console.log("\n[Summary] Day 21 lesson finished successfully!\n");
