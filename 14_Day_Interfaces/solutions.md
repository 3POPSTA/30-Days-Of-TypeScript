# 📘 Day 14: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 14: Interfaces & Inheritance**!

---

## 🎯 Challenge 1: Single Interface Inheritance

### Solution
```typescript
export interface Vehicle {
  make: string;
  model: string;
  year: number;
}

export interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  rangeMiles: number;
}

export function createTeslaModel3(year: number): ElectricVehicle {
  return {
    make: "Tesla",
    model: "Model 3",
    year,
    batteryCapacityKWh: 75,
    rangeMiles: 330
  };
}
```

---

## 🎯 Challenge 2: Multiple Interface Inheritance

### Solution
```typescript
export interface Printable {
  print(): string;
}

export interface Serializable {
  toJSONString(): string;
}

export interface ReportDocument extends Printable, Serializable {
  title: string;
  content: string;
}

export function createReportDocument(title: string, content: string): ReportDocument {
  return {
    title,
    content,
    print() {
      return `=== ${this.title} ===\n${this.content}`;
    },
    toJSONString() {
      return JSON.stringify({ title: this.title, content: this.content });
    }
  };
}
```

---

## 🎯 Challenge 3: Callable Interface with Properties

### Solution
```typescript
export interface CounterFunction {
  (): number;
  reset(): void;
}

export function createCounterFunction(): CounterFunction {
  let count = 0;
  const fn = function () {
    count++;
    return count;
  } as CounterFunction;
  fn.reset = () => {
    count = 0;
  };
  return fn;
}
```

---

## 🎯 Challenge 4: Repository Contract Implementation

### Solution
```typescript
export interface Repository<T, ID> {
  save(item: T): void;
  findById(id: ID): T | undefined;
  getAll(): T[];
}

export class MemoryRepository<T extends { id: ID }, ID> implements Repository<T, ID> {
  private items: Map<ID, T> = new Map();

  save(item: T): void {
    this.items.set(item.id, item);
  }

  findById(id: ID): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }
}
```

---

## 🚀 Next Steps
Proceed to **Day 15: Interface vs Type & Declaration Merging**!
