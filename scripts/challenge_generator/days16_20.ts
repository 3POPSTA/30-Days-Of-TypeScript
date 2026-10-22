import { ChallengeFile } from "./types.js";

export const days16_20: ChallengeFile[] = [
  // ==========================================================================
  // DAY 16: CLASSES, ACCESS MODIFIERS & READONLY
  // ==========================================================================
  {
    day: 16,
    folder: "16_Day_Classes",
    topic: "Classes, Access Modifiers & readonly",
    code: `/**
 * ============================================================================
 * DAY 16: CLASSES, ACCESS MODIFIERS & READONLY — CODING CHALLENGES
 * ============================================================================
 * TypeScript brings enterprise OOP features to ES6 classes:
 * - Access modifiers: public (default), private (# or private), protected
 * - Parameter properties (concise constructors)
 * - Readonly fields and smart getters/setters
 * - Static factory methods
 *
 * Test with:
 *   npx tsx 16_Day_Classes/challenge.ts
 *   OR
 *   npm run challenge:16
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 16: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Parameter Properties & Private State
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a class 'BankAccount' using parameter properties in its constructor:
 *   - public readonly accountNumber: string
 *   - protected ownerName: string
 *   - private _balance: number
 * 
 * Implement methods:
 *   - getBalance(): number (returns _balance)
 *   - deposit(amount: number): void (if amount > 0, adds to _balance)
 *   - withdraw(amount: number): boolean (if amount > 0 and amount <= _balance, subtracts and returns true; otherwise false)
 */
// >>> YOUR CODE HERE <<<
export class BankAccount {
  constructor(
    public readonly accountNumber: string,
    protected ownerName: string,
    private _balance: number
  ) {}

  getBalance(): number {
    // TODO: Replace with your implementation
    return this._balance;
  }

  deposit(amount: number): void {
    // TODO: Replace with your implementation
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    // TODO: Replace with your implementation
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}


// ============================================================================
// STEP 2: Smart Getters & Setters with Validation
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a class 'Temperature':
 *   - private field: _celsius (number)
 *   - constructor initializes _celsius
 *   - getter 'celsius': returns _celsius
 *   - setter 'celsius': sets _celsius if value >= -273.15 (absolute zero);
 *     otherwise throws an Error("Below absolute zero!")
 *   - getter 'fahrenheit': returns (celsius * 9) / 5 + 32
 */
// >>> YOUR CODE HERE <<<
export class Temperature {
  private _celsius: number;

  constructor(initialCelsius: number) {
    this._celsius = initialCelsius;
  }

  get celsius(): number {
    // TODO: Replace with your implementation
    return this._celsius;
  }

  set celsius(val: number) {
    // TODO: Replace with your implementation
    if (val < -273.15) {
      throw new Error("Below absolute zero!");
    }
    this._celsius = val;
  }

  get fahrenheit(): number {
    // TODO: Replace with your implementation
    return (this._celsius * 9) / 5 + 32;
  }
}


// ============================================================================
// STEP 3: Static Utility Members & Factory Pattern
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a class 'IdGenerator':
 *   - private static sequence: number = 0;
 *   - static generate(prefix: string): string => \`\${prefix}_\${++sequence}\`
 *   - static reset(): void => resets sequence to 0
 */
// >>> YOUR CODE HERE <<<
export class IdGenerator {
  private static sequence = 0;

  static generate(prefix: string): string {
    // TODO: Replace with your implementation
    return \`\${prefix}_\${++IdGenerator.sequence}\`;
  }

  static reset(): void {
    // TODO: Replace with your implementation
    IdGenerator.sequence = 0;
  }
}


// ============================================================================
// STEP 4: Protected Inheritance
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a subclass 'SavingsAccount' that extends 'BankAccount':
 *   - constructor takes (accountNumber: string, ownerName: string, initialBalance: number, interestRate: number)
 *   - method 'applyInterest(): void' => deposits (getBalance() * interestRate)
 *   - method 'getAccountSummary(): string' => returns \`Owner: \${this.ownerName}, Balance: $\${this.getBalance()}\`
 */
// >>> YOUR CODE HERE <<<
export class SavingsAccount extends BankAccount {
  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number,
    private interestRate: number
  ) {
    super(accountNumber, ownerName, initialBalance);
  }

  applyInterest(): void {
    // TODO: Replace with your implementation
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }

  getAccountSummary(): string {
    // TODO: Replace with your implementation
    return \`Owner: \${this.ownerName}, Balance: $\${this.getBalance()}\`;
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (BankAccount)...");
const acc = new BankAccount("AC123", "Ada", 100);
acc.deposit(50);
const didWithdraw = acc.withdraw(30);
testCheck("Step 1 - deposit and withdraw", didWithdraw === true && acc.getBalance() === 120);

console.log("\\nVerifying Step 2 (Temperature)...");
const temp = new Temperature(25);
testCheck("Step 2.1 - fahrenheit calculation", temp.fahrenheit === 77);
temp.celsius = 0;
testCheck("Step 2.2 - freezing point", temp.fahrenheit === 32);

console.log("\\nVerifying Step 3 (IdGenerator)...");
IdGenerator.reset();
const id1 = IdGenerator.generate("user");
const id2 = IdGenerator.generate("user");
testCheck("Step 3 - IdGenerator sequence", id1 === "user_1" && id2 === "user_2");

console.log("\\nVerifying Step 4 (SavingsAccount)...");
const sav = new SavingsAccount("SA999", "Grace", 1000, 0.05);
sav.applyInterest();
testCheck("Step 4 - SavingsAccount interest", sav.getBalance() === 1050 && sav.getAccountSummary().includes("Grace"));

console.log("\\n[Summary] Day 16 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM
  // ==========================================================================
  {
    day: 17,
    folder: "17_Day_Abstract_classes",
    topic: "Abstract Classes, override & Polymorphism",
    code: `/**
 * ============================================================================
 * DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM — CODING CHALLENGES
 * ============================================================================
 * Abstract classes define incomplete base classes that cannot be instantiated directly:
 * - 'abstract' methods define signatures child classes must implement
 * - 'override' keyword ensures safe polymorphic implementation
 * - Template method pattern coordinates concrete and abstract methods
 *
 * Test with:
 *   npx tsx 17_Day_Abstract_classes/challenge.ts
 *   OR
 *   npm run challenge:17
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 17: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Abstract Base Class
// ============================================================================
/**
 * CHALLENGE 1:
 * Create an abstract base class 'TaxCalculator':
 *   - abstract calculateTax(taxableIncome: number): number;
 *   - concrete formatTax(taxableIncome: number): string {
 *       const tax = this.calculateTax(taxableIncome);
 *       return \`$\${tax.toFixed(2)}\`;
 *     }
 */
// >>> YOUR CODE HERE <<<
export abstract class TaxCalculator {
  abstract calculateTax(taxableIncome: number): number;

  formatTax(taxableIncome: number): string {
    // TODO: Replace with your implementation
    const tax = this.calculateTax(taxableIncome);
    return \`$\${tax.toFixed(2)}\`;
  }
}


// ============================================================================
// STEP 2: Concrete Implementation with 'override'
// ============================================================================
/**
 * CHALLENGE 2:
 * Implement two concrete subclasses:
 *   1. 'FlatTaxCalculator' (extends TaxCalculator):
 *      - constructor(public readonly rate: number)
 *      - override calculateTax(income: number): return income * this.rate
 * 
 *   2. 'ProgressiveTaxCalculator' (extends TaxCalculator):
 *      - if income <= 50000: 10% (income * 0.10)
 *      - if income > 50000: 5000 + (income - 50000) * 0.20
 */
// >>> YOUR CODE HERE <<<
export class FlatTaxCalculator extends TaxCalculator {
  constructor(public readonly rate: number) {
    super();
  }

  override calculateTax(taxableIncome: number): number {
    // TODO: Replace with your implementation
    return taxableIncome * this.rate;
  }
}

export class ProgressiveTaxCalculator extends TaxCalculator {
  override calculateTax(taxableIncome: number): number {
    // TODO: Replace with your implementation
    if (taxableIncome <= 50000) {
      return taxableIncome * 0.1;
    }
    return 5000 + (taxableIncome - 50000) * 0.2;
  }
}


// ============================================================================
// STEP 3: Template Method Pattern
// ============================================================================
/**
 * CHALLENGE 3:
 * Implement an abstract class 'DocumentExporter':
 *   - generateDocument(): string {
 *       return \`\${this.renderHeader()}\\n\${this.renderBody()}\\n\${this.renderFooter()}\`;
 *     }
 *   - protected abstract renderHeader(): string;
 *   - protected abstract renderBody(): string;
 *   - protected renderFooter(): string { return "=== END OF DOCUMENT ==="; }
 * 
 * Implement concrete class 'MarkdownDocumentExporter' that supplies the abstract methods.
 */
// >>> YOUR CODE HERE <<<
export abstract class DocumentExporter {
  generateDocument(): string {
    // TODO: Replace with your implementation
    return \`\${this.renderHeader()}\\n\${this.renderBody()}\\n\${this.renderFooter()}\`;
  }

  protected abstract renderHeader(): string;
  protected abstract renderBody(): string;
  protected renderFooter(): string {
    return "=== END OF DOCUMENT ===";
  }
}

export class MarkdownDocumentExporter extends DocumentExporter {
  constructor(private title: string, private content: string) {
    super();
  }

  protected override renderHeader(): string {
    // TODO: Replace with your implementation
    return \`# \${this.title}\`;
  }

  protected override renderBody(): string {
    // TODO: Replace with your implementation
    return this.content;
  }
}


// ============================================================================
// STEP 4: Polymorphic Collection Runner
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'computeTaxComparison' that accepts:
 *   - calculators (TaxCalculator[]): polymorphic list of calculators
 *   - income (number)
 * 
 * Return an array of formatted tax strings from each calculator.
 */
// >>> YOUR CODE HERE <<<
export function computeTaxComparison(calculators: TaxCalculator[], income: number): string[] {
  // TODO: Replace with your implementation
  return calculators.map(c => c.formatTax(income));
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 & 2 (Tax Calculators)...");
const flat = new FlatTaxCalculator(0.15);
const prog = new ProgressiveTaxCalculator();
testCheck("Step 2.1 - flat tax calculation", flat.calculateTax(100000) === 15000);
testCheck("Step 2.2 - progressive tax <= 50k", prog.calculateTax(40000) === 4000);
testCheck("Step 2.3 - progressive tax > 50k", prog.calculateTax(100000) === 15000);

console.log("\\nVerifying Step 3 (Template Method Pattern)...");
const mdExporter = new MarkdownDocumentExporter("TypeScript 101", "Learning abstract classes");
const exported = mdExporter.generateDocument();
testCheck("Step 3 - template method", exported.includes("# TypeScript 101") && exported.includes("=== END OF DOCUMENT ==="));

console.log("\\nVerifying Step 4 (computeTaxComparison)...");
const comparison = computeTaxComparison([flat, prog], 60000);
testCheck("Step 4 - comparison output", comparison[0] === "$9000.00" && comparison[1] === "$7000.00");

console.log("\\n[Summary] Day 17 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 18: ENUMS & OBJECT LITERALS AS CONST
  // ==========================================================================
  {
    day: 18,
    folder: "18_Day_Enums",
    topic: "Enums & Object Literals as const",
    code: `/**
 * ============================================================================
 * DAY 18: ENUMS & OBJECT LITERALS AS CONST — CODING CHALLENGES
 * ============================================================================
 * Enums create named sets of numeric or string constants:
 * - Numeric enums feature automatic auto-incrementing and reverse mapping
 * - String enums provide readable runtime serialization
 * - 'const' objects with 'as const' offer a tree-shakable alternative
 *
 * Test with:
 *   npx tsx 18_Day_Enums/challenge.ts
 *   OR
 *   npm run challenge:18
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 18: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Numeric and String Enums
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   1. A numeric enum 'Priority':
 *      - Low = 1, Medium = 2, High = 3, Critical = 4
 * 
 *   2. A string enum 'OrderStatus':
 *      - Pending = "PENDING"
 *      - Processing = "PROCESSING"
 *      - Completed = "COMPLETED"
 *      - Cancelled = "CANCELLED"
 */
// >>> YOUR CODE HERE <<<
export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

export enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED"
}


// ============================================================================
// STEP 2: Numeric Enum Reverse Mapping
// ============================================================================
/**
 * CHALLENGE 2:
 * Numeric enums support reverse mapping from value to name: Priority[1] === "Low".
 * 
 * Write a function 'getPriorityLabel(p: Priority): string' that returns the string
 * name of the priority enum value.
 */
// >>> YOUR CODE HERE <<<
export function getPriorityLabel(p: Priority): string {
  // TODO: Replace with your implementation
  return Priority[p];
}


// ============================================================================
// STEP 3: The 'as const' Object Alternative
// ============================================================================
/**
 * CHALLENGE 3:
 * In modern TypeScript, 'const' objects with 'as const' are widely preferred
 * over enums for bundle size and tree-shaking benefits.
 * 
 * Define:
 *   export const HttpCodes = {
 *     Ok: 200,
 *     Created: 201,
 *     NotFound: 404,
 *     InternalError: 500
 *   } as const;
 * 
 * Extract the union type 'HttpCode':
 *   type HttpCode = (typeof HttpCodes)[keyof typeof HttpCodes];
 */
// >>> YOUR CODE HERE <<<
export const HttpCodes = {
  Ok: 200,
  Created: 201,
  NotFound: 404,
  InternalError: 500
} as const;

export type HttpCode = (typeof HttpCodes)[keyof typeof HttpCodes];

export function isSuccessHttpCode(code: HttpCode): boolean {
  // TODO: Replace with your implementation
  return code === HttpCodes.Ok || code === HttpCodes.Created;
}


// ============================================================================
// STEP 4: Type Guard for String Enums
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a type guard 'isOrderStatus(val: unknown): val is OrderStatus' that
 * checks if an unknown runtime string is a valid OrderStatus enum value.
 * 
 * Hint: Check Object.values(OrderStatus).includes(val as any)
 */
// >>> YOUR CODE HERE <<<
export function isOrderStatus(val: unknown): val is OrderStatus {
  // TODO: Replace with your implementation
  return typeof val === "string" && Object.values(OrderStatus).includes(val as OrderStatus);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Enums)...");
testCheck("Step 1.1 - Priority numeric", Priority.High === 3);
testCheck("Step 1.2 - OrderStatus string", OrderStatus.Completed === "COMPLETED");

console.log("\\nVerifying Step 2 (Reverse Mapping)...");
testCheck("Step 2 - getPriorityLabel", getPriorityLabel(Priority.Critical) === "Critical");

console.log("\\nVerifying Step 3 (as const Object Alternative)...");
testCheck("Step 3.1 - HttpCodes values", HttpCodes.NotFound === 404);
testCheck("Step 3.2 - isSuccessHttpCode", isSuccessHttpCode(HttpCodes.Created) === true && isSuccessHttpCode(HttpCodes.NotFound) === false);

console.log("\\nVerifying Step 4 (isOrderStatus type guard)...");
testCheck("Step 4.1 - valid enum value", isOrderStatus("COMPLETED") === true);
testCheck("Step 4.2 - invalid enum value", isOrderStatus("REFUNDED") === false);

console.log("\\n[Summary] Day 18 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 19: GENERICS: FUNCTIONS, INTERFACES & TYPES
  // ==========================================================================
  {
    day: 19,
    folder: "19_Day_Generics_basics",
    topic: "Generics: Functions, Interfaces & Types",
    code: `/**
 * ============================================================================
 * DAY 19: GENERICS BASICS — CODING CHALLENGES
 * ============================================================================
 * Generics provide parameterized types that make functions, interfaces,
 * and classes reusable across diverse data types while preserving safety.
 *
 * Test with:
 *   npx tsx 19_Day_Generics_basics/challenge.ts
 *   OR
 *   npm run challenge:19
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 19: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Generic Envelope / Box Wrapper
// ============================================================================
/**
 * CHALLENGE 1:
 * Define a generic interface 'Box<T>':
 *   - content: T;
 *   - boxedAt: number;
 * 
 * Write a generic function 'wrapInBox<T>(value: T): Box<T>'
 * that packages 'value' along with boxedAt initialized to Date.now().
 */
// >>> YOUR CODE HERE <<<
export interface Box<T> {
  content: T;
  boxedAt: number;
}

export function wrapInBox<T>(value: T): Box<T> {
  // TODO: Replace with your implementation
  return {
    content: value,
    boxedAt: Date.now()
  };
}


// ============================================================================
// STEP 2: Generic Multi-Parameter Pair
// ============================================================================
/**
 * CHALLENGE 2:
 * Define a generic interface 'Pair<K, V>':
 *   - first: K;
 *   - second: V;
 * 
 * Write a function 'swapPair<K, V>(pair: Pair<K, V>): Pair<V, K>'
 * that returns a new pair with reversed elements.
 */
// >>> YOUR CODE HERE <<<
export interface Pair<K, V> {
  first: K;
  second: V;
}

export function swapPair<K, V>(pair: Pair<K, V>): Pair<V, K> {
  // TODO: Replace with your implementation
  return {
    first: pair.second,
    second: pair.first
  };
}


// ============================================================================
// STEP 3: Generic Array Partitioner
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a generic function 'partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]]':
 *   - Returns a 2-element tuple [matches, nonMatches].
 *   - matches contains items where predicate returns true.
 *   - nonMatches contains items where predicate returns false.
 */
// >>> YOUR CODE HERE <<<
export function partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]] {
  // TODO: Replace with your implementation
  const matches: T[] = [];
  const nonMatches: T[] = [];
  for (const item of items) {
    if (predicate(item)) {
      matches.push(item);
    } else {
      nonMatches.push(item);
    }
  }
  return [matches, nonMatches];
}


// ============================================================================
// STEP 4: Generic Result Monad
// ============================================================================
/**
 * CHALLENGE 4:
 * Define:
 *   type Result<T, E> =
 *     | { success: true; data: T }
 *     | { success: false; error: E };
 * 
 * Write 'mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E>':
 *   - If res.success is true: return { success: true, data: fn(res.data) }
 *   - If res.success is false: return unchanged { success: false, error: res.error }
 */
// >>> YOUR CODE HERE <<<
export type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };

export function mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E> {
  // TODO: Replace with your implementation
  if (res.success) {
    return { success: true, data: fn(res.data) };
  }
  return res;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Box<T>)...");
const stringBox = wrapInBox("Generics are powerful");
testCheck("Step 1 - wrapInBox", stringBox.content === "Generics are powerful" && stringBox.boxedAt > 0);

console.log("\\nVerifying Step 2 (Pair<K, V>)...");
const originalPair: Pair<string, number> = { first: "age", second: 30 };
const swapped = swapPair(originalPair);
testCheck("Step 2 - swapPair", swapped.first === 30 && swapped.second === "age");

console.log("\\nVerifying Step 3 (partition)...");
const [evens, odds] = partition([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
testCheck("Step 3 - partition", evens.join(",") === "2,4,6" && odds.join(",") === "1,3,5");

console.log("\\nVerifying Step 4 (mapSuccess Result)...");
const ok: Result<number, string> = { success: true, data: 10 };
const mappedOk = mapSuccess(ok, n => n * 5);
const err: Result<number, string> = { success: false, error: "Network down" };
const mappedErr = mapSuccess(err, (n: number) => n * 5);
testCheck("Step 4.1 - success mapped", mappedOk.success && mappedOk.data === 50);
testCheck("Step 4.2 - error preserved", !mappedErr.success && mappedErr.error === "Network down");

console.log("\\n[Summary] Day 19 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 20: GENERICS CONSTRAINTS & KEYOF OPERATOR
  // ==========================================================================
  {
    day: 20,
    folder: "20_Day_Generics_constraints",
    topic: "Generics Constraints & keyof Operator",
    code: `/**
 * ============================================================================
 * DAY 20: GENERICS CONSTRAINTS & KEYOF — CODING CHALLENGES
 * ============================================================================
 * Generic constraints 'extends' ensure type parameters satisfy minimum shapes:
 * - 'T extends { length: number }'
 * - 'K extends keyof T' (type-safe property access)
 * - Safe collection pluckers and mergers
 *
 * Test with:
 *   npx tsx 20_Day_Generics_constraints/challenge.ts
 *   OR
 *   npm run challenge:20
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 20: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Constraint with Length Property
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'measureLength<T extends { length: number }>(item: T): number'
 * that returns the length property of the item.
 * 
 * Works for strings, arrays, or custom objects with length.
 */
// >>> YOUR CODE HERE <<<
export function measureLength<T extends { length: number }>(item: T): number {
  // TODO: Replace with your implementation
  return item.length;
}


// ============================================================================
// STEP 2: Safe Property Picker with 'keyof'
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'pickProperty<T, K extends keyof T>(obj: T, key: K): T[K]'
 * that returns obj[key] with exact compile-time type safety.
 */
// >>> YOUR CODE HERE <<<
export function pickProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // TODO: Replace with your implementation
  return obj[key];
}


// ============================================================================
// STEP 3: Array Plucker
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a function 'pluck<T, K extends keyof T>(items: T[], key: K): T[K][]'
 * that extracts the values of 'key' from every item in 'items'.
 * 
 * Example:
 *   pluck([{ id: 1, name: "A" }, { id: 2, name: "B" }], "name") => ["A", "B"]
 */
// >>> YOUR CODE HERE <<<
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // TODO: Replace with your implementation
  return items.map(item => item[key]);
}


// ============================================================================
// STEP 4: Entity Repository Lookup by ID
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'findEntity<T extends { id: string | number }>(entities: T[], targetId: T["id"]): T | undefined'
 * that searches 'entities' and returns the first element whose id === targetId.
 */
// >>> YOUR CODE HERE <<<
export function findEntity<T extends { id: string | number }>(entities: T[], targetId: T["id"]): T | undefined {
  // TODO: Replace with your implementation
  return entities.find(e => e.id === targetId);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (measureLength)...");
testCheck("Step 1.1 - string length", measureLength("TypeScript") === 10);
testCheck("Step 1.2 - array length", measureLength([1, 2, 3, 4, 5]) === 5);
testCheck("Step 1.3 - custom object", measureLength({ length: 42 }) === 42);

console.log("\\nVerifying Step 2 (pickProperty)...");
const book = { title: "Refactoring", pages: 448, published: 1999 };
testCheck("Step 2 - pickProperty", pickProperty(book, "title") === "Refactoring");

console.log("\\nVerifying Step 3 (pluck)...");
const users = [
  { id: 1, username: "ada", active: true },
  { id: 2, username: "grace", active: false }
];
const usernames = pluck(users, "username");
testCheck("Step 3 - pluck", usernames.join(",") === "ada,grace");

console.log("\\nVerifying Step 4 (findEntity)...");
const found = findEntity(users, 2);
testCheck("Step 4 - findEntity", found?.username === "grace");

console.log("\\n[Summary] Day 20 challenge checks completed!\\n");
`
  }
];
