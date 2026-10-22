/**
 * ============================================================================
 * DAY 21: GENERIC CLASSES & DATA STRUCTURES — CODING CHALLENGES
 * ============================================================================
 * Generic classes bind type parameters to an entire instance, ensuring
 * consistency across all methods and internal storage.
 *
 * Test with:
 *   npx tsx 21_Day_Generic_classes/challenge.ts
 *   OR
 *   npm run challenge:21
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 21: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Generic LIFO Stack
// ============================================================================
/**
 * CHALLENGE 1:
 * Implement a generic LIFO (Last-In-First-Out) 'Stack<T>' class:
 *   - push(item: T): void
 *   - pop(): T | undefined
 *   - peek(): T | undefined
 *   - size(): number
 *   - isEmpty(): boolean
 */
// >>> YOUR CODE HERE <<<
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    // TODO: Replace with your implementation
    this.items.push(item);
  }

  pop(): T | undefined {
    // TODO: Replace with your implementation
    return this.items.pop();
  }

  peek(): T | undefined {
    // TODO: Replace with your implementation
    return this.items[this.items.length - 1];
  }

  size(): number {
    // TODO: Replace with your implementation
    return this.items.length;
  }

  isEmpty(): boolean {
    // TODO: Replace with your implementation
    return this.items.length === 0;
  }
}


// ============================================================================
// STEP 2: Generic FIFO Queue
// ============================================================================
/**
 * CHALLENGE 2:
 * Implement a generic FIFO (First-In-First-Out) 'Queue<T>' class:
 *   - enqueue(item: T): void
 *   - dequeue(): T | undefined
 *   - size(): number
 */
// >>> YOUR CODE HERE <<<
export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    // TODO: Replace with your implementation
    this.items.push(item);
  }

  dequeue(): T | undefined {
    // TODO: Replace with your implementation
    return this.items.shift();
  }

  size(): number {
    // TODO: Replace with your implementation
    return this.items.length;
  }
}


// ============================================================================
// STEP 3: Generic Key-Value Memory Cache
// ============================================================================
/**
 * CHALLENGE 3:
 * Implement a generic 'MemoryCache<K extends string | number, V>' class:
 *   - set(key: K, value: V): void
 *   - get(key: K): V | undefined
 *   - has(key: K): boolean
 *   - clear(): void
 */
// >>> YOUR CODE HERE <<<
export class MemoryCache<K extends string | number, V> {
  private store = new Map<K, V>();

  set(key: K, value: V): void {
    // TODO: Replace with your implementation
    this.store.set(key, value);
  }

  get(key: K): V | undefined {
    // TODO: Replace with your implementation
    return this.store.get(key);
  }

  has(key: K): boolean {
    // TODO: Replace with your implementation
    return this.store.has(key);
  }

  clear(): void {
    // TODO: Replace with your implementation
    this.store.clear();
  }
}


// ============================================================================
// STEP 4: Generic Priority Task Queue
// ============================================================================
/**
 * CHALLENGE 4:
 * Implement a class 'PriorityTaskQueue<TTask extends { priority: number; id: string }>':
 *   - addTask(task: TTask): void
 *   - getNextTask(): TTask | undefined
 *     (dequeues and returns the task with the HIGHEST priority number)
 */
// >>> YOUR CODE HERE <<<
export class PriorityTaskQueue<TTask extends { priority: number; id: string }> {
  private tasks: TTask[] = [];

  addTask(task: TTask): void {
    // TODO: Replace with your implementation
    this.tasks.push(task);
  }

  getNextTask(): TTask | undefined {
    // TODO: Replace with your implementation
    if (this.tasks.length === 0) return undefined;
    let highestIdx = 0;
    for (let i = 1; i < this.tasks.length; i++) {
      if (this.tasks[i].priority > this.tasks[highestIdx].priority) {
        highestIdx = i;
      }
    }
    return this.tasks.splice(highestIdx, 1)[0];
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Stack<T>)...");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
testCheck("Step 1.1 - peek", stack.peek() === 20);
testCheck("Step 1.2 - pop", stack.pop() === 20 && stack.size() === 1);

console.log("\nVerifying Step 2 (Queue<T>)...");
const queue = new Queue<string>();
queue.enqueue("first");
queue.enqueue("second");
testCheck("Step 2 - dequeue", queue.dequeue() === "first" && queue.size() === 1);

console.log("\nVerifying Step 3 (MemoryCache<K, V>)...");
const cache = new MemoryCache<string, { theme: string }>();
cache.set("settings", { theme: "dark" });
testCheck("Step 3.1 - cache get", cache.get("settings")?.theme === "dark");
testCheck("Step 3.2 - cache has", cache.has("settings") === true && cache.has("missing") === false);

console.log("\nVerifying Step 4 (PriorityTaskQueue)...");
const pQueue = new PriorityTaskQueue<{ id: string; priority: number }>();
pQueue.addTask({ id: "job_low", priority: 1 });
pQueue.addTask({ id: "job_high", priority: 10 });
pQueue.addTask({ id: "job_medium", priority: 5 });
testCheck("Step 4 - highest priority dequeued first", pQueue.getNextTask()?.id === "job_high");

console.log("\n[Summary] Day 21 challenge checks completed!\n");
