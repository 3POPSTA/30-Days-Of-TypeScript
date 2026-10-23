/**
 * 🎯 Day 21: Generic Classes & Data Structures - Coding Challenges
 *
 * Implement reusable typed data structures: Stack, Queue, Cache, and Priority Queue.
 *
 * 🚀 Run with: npm run challenge:21
 */

// ============================================================================
// 🎯 CHALLENGE 1: Generic LIFO Stack
// ============================================================================
/**
 * Implement 'Stack<T>':
 * - push(item: T): void
 * - pop(): T | undefined
 * - peek(): T | undefined
 * - size(): number
 * - isEmpty(): boolean
 */
// 👇 YOUR CODE HERE:
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// ============================================================================
// 🎯 CHALLENGE 2: Generic FIFO Queue
// ============================================================================
/**
 * Implement 'Queue<T>':
 * - enqueue(item: T): void
 * - dequeue(): T | undefined
 * - size(): number
 */
// 👇 YOUR CODE HERE:
export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  size(): number {
    return this.items.length;
  }
}

// ============================================================================
// 🎯 CHALLENGE 3: Generic Key-Value Memory Cache
// ============================================================================
/**
 * Implement 'MemoryCache<K extends string | number, V>':
 * - set(key: K, value: V): void
 * - get(key: K): V | undefined
 * - has(key: K): boolean
 * - clear(): void
 */
// 👇 YOUR CODE HERE:
export class MemoryCache<K extends string | number, V> {
  private store = new Map<K, V>();

  set(key: K, value: V): void {
    this.store.set(key, value);
  }

  get(key: K): V | undefined {
    return this.store.get(key);
  }

  has(key: K): boolean {
    return this.store.has(key);
  }

  clear(): void {
    this.store.clear();
  }
}

// ============================================================================
// 🎯 CHALLENGE 4: Generic Priority Task Queue
// ============================================================================
/**
 * Implement 'PriorityTaskQueue<TTask extends { priority: number; id: string }>':
 * - addTask(task: TTask): void
 * - getNextTask(): TTask | undefined (removes and returns task with highest priority)
 */
// 👇 YOUR CODE HERE:
export class PriorityTaskQueue<TTask extends { priority: number; id: string }> {
  private tasks: TTask[] = [];

  addTask(task: TTask): void {
    this.tasks.push(task);
  }

  getNextTask(): TTask | undefined {
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
// 🧪 TEST RUNNER - Run: npm run challenge:21
// ============================================================================
console.log("--- 🧪 Day 21 Challenge Results ---");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log("Challenge 1 Stack peek:", stack.peek());

const queue = new Queue<string>();
queue.enqueue("First");
queue.enqueue("Second");
console.log("Challenge 2 Queue dequeue:", queue.dequeue());

const cache = new MemoryCache<string, number>();
cache.set("score", 100);
console.log("Challenge 3 Cache has & get:", cache.has("score"), cache.get("score"));

const pq = new PriorityTaskQueue<{ priority: number; id: string; name: string }>();
pq.addTask({ priority: 1, id: "t1", name: "Low priority" });
pq.addTask({ priority: 10, id: "t2", name: "High priority" });
console.log("Challenge 4 Priority Queue:", pq.getNextTask()?.name);
console.log("-----------------------------------\n");
