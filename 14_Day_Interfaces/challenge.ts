/**
 * ============================================================================
 * DAY 14: INTERFACES & INHERITANCE - CODING CHALLENGES
 * ============================================================================
 * Interfaces define pure contracts in TypeScript:
 * - Single and multiple inheritance with 'extends'
 * - Callable interfaces with properties
 * - Interface implementation by classes with 'implements'
 *
 * Test with:
 *   npx tsx 14_Day_Interfaces/challenge.ts
 *   OR
 *   npm run challenge:14
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 14: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Single Interface Inheritance
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   interface Vehicle {
 *     make: string;
 *     model: string;
 *     year: number;
 *   }
 * 
 * Extend it:
 *   interface ElectricVehicle extends Vehicle {
 *     batteryCapacityKWh: number;
 *     rangeMiles: number;
 *   }
 * 
 * Write a function 'createTeslaModel3(year: number): ElectricVehicle'.
 */
// >>> YOUR CODE HERE <<<
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
  // TODO: Replace with your implementation
  return {
    make: "Tesla",
    model: "Model 3",
    year,
    batteryCapacityKWh: 75,
    rangeMiles: 330
  };
}


// ============================================================================
// STEP 2: Multiple Interface Inheritance
// ============================================================================
/**
 * CHALLENGE 2:
 * Define:
 *   interface Printable { print(): string; }
 *   interface Serializable { toJSONString(): string; }
 * 
 * Extend both:
 *   interface ReportDocument extends Printable, Serializable {
 *     title: string;
 *     content: string;
 *   }
 * 
 * Write a factory function 'createReportDocument(title: string, content: string): ReportDocument'.
 */
// >>> YOUR CODE HERE <<<
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
  // TODO: Replace with your implementation
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


// ============================================================================
// STEP 3: Callable Interface with Properties
// ============================================================================
/**
 * CHALLENGE 3:
 * In TypeScript, an interface can represent a function that also has attached properties.
 * 
 * Define:
 *   interface CounterFunction {
 *     (): number;
 *     reset(): void;
 *   }
 * 
 * Write 'createCounterFunction()':
 *   - Each call increments an internal count and returns it.
 *   - .reset() resets internal count to 0.
 */
// >>> YOUR CODE HERE <<<
export interface CounterFunction {
  (): number;
  reset(): void;
}

export function createCounterFunction(): CounterFunction {
  // TODO: Replace with your implementation
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


// ============================================================================
// STEP 4: Repository Contract Implementation
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a generic repository interface:
 *   interface Repository<T, ID> {
 *     save(item: T): void;
 *     findById(id: ID): T | undefined;
 *     getAll(): T[];
 *   }
 * 
 * Implement the class 'MemoryRepository<T extends { id: ID }, ID>' that implements Repository<T, ID>.
 */
// >>> YOUR CODE HERE <<<
export interface Repository<T, ID> {
  save(item: T): void;
  findById(id: ID): T | undefined;
  getAll(): T[];
}

export class MemoryRepository<T extends { id: ID }, ID> implements Repository<T, ID> {
  private items: Map<ID, T> = new Map();

  save(item: T): void {
    // TODO: Replace with your implementation
    this.items.set(item.id, item);
  }

  findById(id: ID): T | undefined {
    // TODO: Replace with your implementation
    return this.items.get(id);
  }

  getAll(): T[] {
    // TODO: Replace with your implementation
    return Array.from(this.items.values());
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (ElectricVehicle)...");
const ev = createTeslaModel3(2025);
testCheck("Step 1 - createTeslaModel3", ev.make === "Tesla" && ev.batteryCapacityKWh === 75 && ev.year === 2025);

console.log("\nVerifying Step 2 (ReportDocument)...");
const rep = createReportDocument("Quarterly Report", "Growth is up 25%");
testCheck("Step 2.1 - print()", rep.print().includes("Quarterly Report"));
testCheck("Step 2.2 - toJSONString()", JSON.parse(rep.toJSONString()).title === "Quarterly Report");

console.log("\nVerifying Step 3 (CounterFunction)...");
const counter = createCounterFunction();
testCheck("Step 3.1 - increment", counter() === 1 && counter() === 2);
counter.reset();
testCheck("Step 3.2 - reset", counter() === 1);

console.log("\nVerifying Step 4 (MemoryRepository)...");
interface Item { id: string; name: string }
const repo = new MemoryRepository<Item, string>();
repo.save({ id: "it_1", name: "Keyboard" });
repo.save({ id: "it_2", name: "Mouse" });
testCheck("Step 4.1 - findById", repo.findById("it_1")?.name === "Keyboard");
testCheck("Step 4.2 - getAll", repo.getAll().length === 2);

console.log("\n[Summary] Day 14 challenge checks completed!\n");
