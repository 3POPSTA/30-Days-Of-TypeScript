# 📘 Day 21: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 21: Generic Classes & Data Structures**!

---

## 🎯 Challenge 1 & 2: Generic Stack & Queue

### Solution
```typescript
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
```

---

## 🎯 Challenge 3: Generic Memory Cache

### Solution
```typescript
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
```

---

## 🎯 Challenge 4: Generic Priority Task Queue

### Solution
```typescript
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
```

---

## 🚀 Next Steps
Advance to **Day 22: Keyof, Indexed Access & typeof Queries**!
