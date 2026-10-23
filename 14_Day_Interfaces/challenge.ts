/**
 * 🎯 Day 14: Interfaces & Inheritance - Coding Challenges
 *
 * Model object contracts, multiple inheritance, callable interfaces, and repositories.
 *
 * 🚀 Run with: npm run challenge:14
 */

// ============================================================================
// 🎯 CHALLENGE 1: Single Interface Inheritance
// ============================================================================
/**
 * 1. Define 'Vehicle': { make: string; model: string; year: number }
 * 2. Define 'ElectricVehicle' extending Vehicle:
 *    - batteryCapacityKWh: number
 *    - rangeMiles: number
 * 3. Write 'createTeslaModel3(year: number): ElectricVehicle'
 */
export interface Vehicle {
  make: string;
  model: string;
  year: number;
}

export interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  rangeMiles: number;
}

// 👇 YOUR CODE HERE:
export function createTeslaModel3(year: number): ElectricVehicle {
  // TODO: Return an ElectricVehicle with make "Tesla", model "Model 3"
  return { make: "Tesla", model: "Model 3", year, batteryCapacityKWh: 75, rangeMiles: 330 };
}

// ============================================================================
// 🎯 CHALLENGE 2: Multiple Interface Inheritance
// ============================================================================
/**
 * 1. Define 'Printable': { print(): string }
 * 2. Define 'Serializable': { toJSONString(): string }
 * 3. Define 'ReportDocument' extending both Printable and Serializable:
 *    - title: string
 *    - content: string
 * 4. Write 'createReportDocument(title, content): ReportDocument'
 */
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

// 👇 YOUR CODE HERE:
export function createReportDocument(title: string, content: string): ReportDocument {
  // TODO: Implement ReportDocument with print() and toJSONString()
  return {
    title,
    content,
    print() { return `=== ${this.title} ===\n${this.content}`; },
    toJSONString() { return JSON.stringify({ title: this.title, content: this.content }); }
  };
}

// ============================================================================
// 🎯 CHALLENGE 3: Callable Interface with Properties
// ============================================================================
/**
 * 1. Define callable interface 'CounterFunction':
 *    - (): number
 *    - reset(): void
 * 2. Write 'createCounterFunction(): CounterFunction'
 */
export interface CounterFunction {
  (): number;
  reset(): void;
}

// 👇 YOUR CODE HERE:
export function createCounterFunction(): CounterFunction {
  // TODO: Return a counter function that tracks count and has .reset()
  let count = 0;
  const fn = function () { return ++count; } as CounterFunction;
  fn.reset = () => { count = 0; };
  return fn;
}

// ============================================================================
// 🎯 CHALLENGE 4: Repository Contract Implementation
// ============================================================================
/**
 * 1. Define generic interface 'Repository<T, ID>':
 *    - save(item: T): void
 *    - findById(id: ID): T | undefined
 *    - getAll(): T[]
 * 2. Implement 'MemoryRepository<T extends { id: ID }, ID>'
 */
export interface Repository<T, ID> {
  save(item: T): void;
  findById(id: ID): T | undefined;
  getAll(): T[] | readonly T[];
}

// 👇 YOUR CODE HERE:
export class MemoryRepository<T extends { id: ID }, ID> implements Repository<T, ID> {
  private items = new Map<ID, T>();

  save(item: T): void {
    // TODO: store in items map
    this.items.set(item.id, item);
  }

  findById(id: ID): T | undefined {
    // TODO: retrieve from items map
    return this.items.get(id);
  }

  getAll(): T[] {
    // TODO: return array of items
    return Array.from(this.items.values());
  }
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:14
// ============================================================================
console.log("--- 🧪 Day 14 Challenge Results ---");
console.log("Challenge 1:", createTeslaModel3(2024));

const doc = createReportDocument("Q1 Report", "Sales up 20%");
console.log("Challenge 2 print:\n" + doc.print());

const counter = createCounterFunction();
console.log("Challenge 3 counter:", counter(), counter());
counter.reset();
console.log("Challenge 3 reset:", counter());

const repo = new MemoryRepository<{ id: string; name: string }, string>();
repo.save({ id: "p1", name: "Product 1" });
console.log("Challenge 4 repo:", repo.findById("p1"));
console.log("-----------------------------------\n");
