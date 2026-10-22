# 30 Days Of TypeScript: Day 21 - Generic Classes & Data Structures

<div align="center">
  <p><a href="../20_Day_Generics_constraints/20_day_generics_constraints.md">&lt;&lt; Day 20</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md">Day 22 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 21 - Generic Classes & Data Structures](#30-days-of-typescript-day-21---generic-classes-data-structures)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Generic Classes](#1-generic-classes)
    - [2. Production In-Memory Cache](#2-production-in-memory-cache)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Generic LIFO Stack ('Stack<T>')](#example-1-generic-lifo-stack-stackt)
    - [Example 2: Generic FIFO Queue ('Queue<T>')](#example-2-generic-fifo-queue-queuet)
    - [Example 3: In-Memory Key-Value Memory Cache ('MemoryCache<K, V>')](#example-3-in-memory-key-value-memory-cache-memorycachek-v)
    - [Example 4: Singly Linked List ('LinkedList<T>')](#example-4-singly-linked-list-linkedlistt)
    - [Example 5: Generic Result Monad Class ('Result<T, E>')](#example-5-generic-result-monad-class-resultt-e)
    - [Example 6: Generic Binary Tree Node ('TreeNode<T>')](#example-6-generic-binary-tree-node-treenodet)
    - [Example 7: Generic Repository Pattern with Base Entity Constraint](#example-7-generic-repository-pattern-with-base-entity-constraint)
    - [Example 8: Priority Queue with Custom Comparator](#example-8-priority-queue-with-custom-comparator)
    - [Example 9: Generic Observable / Event Subject](#example-9-generic-observable-event-subject)
    - [Example 10: Generic Graph Adjacency List](#example-10-generic-graph-adjacency-list)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Milestone: Build generic data structures and an in-memory Cache with TTL expiration using generic classes.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Generic Classes**
- [ ] Master **Production In-Memory Cache**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Generic Classes

Classes parameterized with types, providing type safety across instance fields and methods.


### 2. Production In-Memory Cache

Store arbitrary key-value pairs with optional TTL timestamp expiration.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:21
```

Here is the source code for today's lesson:
```typescript
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

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Generic LIFO Stack ('Stack<T>')
**Problem / Scenario:**
Implement a Last-In-First-Out data structure that works with any element type.

**Solution:**
```typescript
class Stack<T> {
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

  get size(): number {
    return this.items.length;
  }
}

const numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
console.log("Popped:", numStack.pop()); // 20
console.log("Size:", numStack.size);   // 1
```

**Explanation & Output:**
Generic classes parameterize all storage arrays and method return types, ensuring data integrity.

---

### Example 2: Generic FIFO Queue ('Queue<T>')
**Problem / Scenario:**
Implement a First-In-First-Out queue with strongly typed enqueue and dequeue operations.

**Solution:**
```typescript
class Queue<T> {
  private elements: T[] = [];

  enqueue(item: T): void {
    this.elements.push(item);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

const taskQueue = new Queue<string>();
taskQueue.enqueue("Email Sync");
taskQueue.enqueue("Database Backup");
console.log("Next task:", taskQueue.dequeue()); // "Email Sync"
```

**Explanation & Output:**
The Queue guarantees elements dequeued are of the exact same type as those enqueued.

---

### Example 3: In-Memory Key-Value Memory Cache ('MemoryCache<K, V>')
**Problem / Scenario:**
Create a generic cache supporting expiration and typed keys and values.

**Solution:**
```typescript
class MemoryCache<K, V> {
  private store = new Map<K, { value: V; expiresAt: number }>();

  set(key: K, value: V, ttlMs: number): void {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  get(key: K): V | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }
}

const cache = new MemoryCache<string, number>();
cache.set("sessionCount", 42, 60000);
console.log("Cached Count:", cache.get("sessionCount"));
```

**Explanation & Output:**
Two type parameters ('<K, V>') allow complete flexibility for both key types and stored value types.

---

### Example 4: Singly Linked List ('LinkedList<T>')
**Problem / Scenario:**
Implement a typed singly-linked list with an append method and iterator.

**Solution:**
```typescript
class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  private head: Node<T> | null = null;

  append(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  toArray(): T[] {
    const res: T[] = [];
    let curr = this.head;
    while (curr) {
      res.push(curr.data);
      curr = curr.next;
    }
    return res;
  }
}

const list = new LinkedList<number>();
list.append(100);
list.append(200);
console.log("Linked List array:", list.toArray());
```

**Explanation & Output:**
Generic class nodes chain together while preserving type safety across all traversed elements.

---

### Example 5: Generic Result Monad Class ('Result<T, E>')
**Problem / Scenario:**
Create a functional Result class encapsulating either a successful value or a failure error.

**Solution:**
```typescript
class Result<T, E> {
  private constructor(
    private readonly isSuccess: boolean,
    private readonly value?: T,
    private readonly error?: E
  ) {}

  static ok<T, E = never>(value: T): Result<T, E> {
    return new Result<T, E>(true, value);
  }

  static fail<E, T = never>(error: E): Result<T, E> {
    return new Result<T, E>(false, undefined, error);
  }

  match<R>(onSuccess: (val: T) => R, onFailure: (err: E) => R): R {
    if (this.isSuccess) {
      return onSuccess(this.value!);
    }
    return onFailure(this.error!);
  }
}

const success = Result.ok<number, string>(100);
const msg = success.match(
  val => `Success: ${val * 2}`,
  err => `Failure: ${err}`
);
console.log(msg);
```

**Explanation & Output:**
Result monads prevent unhandled exceptions by forcing callers to handle both branches explicitly via '.match()'.

---

### Example 6: Generic Binary Tree Node ('TreeNode<T>')
**Problem / Scenario:**
Build a generic binary tree data structure with in-order traversal.

**Solution:**
```typescript
class TreeNode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(public value: T) {}

  inOrder(visitor: (val: T) => void): void {
    if (this.left) this.left.inOrder(visitor);
    visitor(this.value);
    if (this.right) this.right.inOrder(visitor);
  }
}

const root = new TreeNode<string>("B");
root.left = new TreeNode<string>("A");
root.right = new TreeNode<string>("C");

const collected: string[] = [];
root.inOrder(val => collected.push(val));
console.log("In-order tree values:", collected);
```

**Explanation & Output:**
Recursive generic classes preserve type consistency during traversal operations.

---

### Example 7: Generic Repository Pattern with Base Entity Constraint
**Problem / Scenario:**
Implement a data repository class constrained to objects with string IDs.

**Solution:**
```typescript
interface Entity { id: string }

class InMemoryRepository<T extends Entity> {
  private records = new Map<string, T>();

  save(item: T): void {
    this.records.set(item.id, item);
  }

  findById(id: string): T | undefined {
    return this.records.get(id);
  }
}

interface UserProfile extends Entity { name: string; email: string }
const repo = new InMemoryRepository<UserProfile>();
repo.save({ id: "usr_1", name: "Ada", email: "ada@domain.com" });
console.log("Found User:", repo.findById("usr_1")?.name);
```

**Explanation & Output:**
Constraining 'T extends Entity' ensures the class can always access 'item.id' safely.

---

### Example 8: Priority Queue with Custom Comparator
**Problem / Scenario:**
Order elements in a generic queue using a custom comparison function.

**Solution:**
```typescript
class PriorityQueue<T> {
  private items: T[] = [];

  constructor(private compare: (a: T, b: T) => number) {}

  enqueue(item: T): void {
    this.items.push(item);
    this.items.sort(this.compare);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

interface Job { title: string; priority: number }
const pq = new PriorityQueue<Job>((a, b) => b.priority - a.priority); // Highest priority first

pq.enqueue({ title: "Background Cleanup", priority: 1 });
pq.enqueue({ title: "Emergency Security Patch", priority: 10 });
console.log("Top Priority Job:", pq.dequeue()?.title);
```

**Explanation & Output:**
Supplying a typed comparison function to the constructor makes generic collections adaptable to any ordering criteria.

---

### Example 9: Generic Observable / Event Subject
**Problem / Scenario:**
Implement the Observer pattern with a generic Subject emitting typed events.

**Solution:**
```typescript
class Subject<T> {
  private observers: ((data: T) => void)[] = [];

  subscribe(fn: (data: T) => void): () => void {
    this.observers.push(fn);
    return () => {
      this.observers = this.observers.filter(o => o !== fn);
    };
  }

  next(value: T): void {
    for (const obs of this.observers) obs(value);
  }
}

const stockFeed = new Subject<{ symbol: string; price: number }>();
const unsubscribe = stockFeed.subscribe(quote => console.log(`Stock ${quote.symbol}: ${quote.price}`));

stockFeed.next({ symbol: "GOOG", price: 185.50 });
unsubscribe();
```

**Explanation & Output:**
Generic subjects allow decoupled, publish-subscribe message passing with complete payload type safety.

---

### Example 10: Generic Graph Adjacency List
**Problem / Scenario:**
Model a directed graph where nodes and edges connect generic vertex identifiers.

**Solution:**
```typescript
class Graph<TNode> {
  private adjacencyList = new Map<TNode, TNode[]>();

  addVertex(v: TNode): void {
    if (!this.adjacencyList.has(v)) this.adjacencyList.set(v, []);
  }

  addEdge(from: TNode, to: TNode): void {
    this.addVertex(from);
    this.addVertex(to);
    this.adjacencyList.get(from)!.push(to);
  }

  getNeighbors(v: TNode): TNode[] {
    return this.adjacencyList.get(v) ?? [];
  }
}

const cityNetwork = new Graph<string>();
cityNetwork.addEdge("New York", "Boston");
cityNetwork.addEdge("New York", "Philadelphia");
console.log("Connected to New York:", cityNetwork.getNeighbors("New York"));
```

**Explanation & Output:**
Generic graph classes allow vertices to be numbers, strings, or complex domain objects.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 21** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../20_Day_Generics_constraints/20_day_generics_constraints.md">&lt;&lt; Day 20</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md">Day 22 &gt;&gt;</a></p>
</div>
