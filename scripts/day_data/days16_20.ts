import { DayExamplesData } from "./types.js";

export const days16_20: DayExamplesData[] = [
  {
    day: 16,
    examples: [
      {
        title: "Basic Class with Typed Properties and Constructor",
        scenario: "Declare a standard TypeScript class with typed instance fields and a constructor.",
        solution: `class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(holder: string, initialDeposit: number) {
    this.accountHolder = holder;
    this.balance = initialDeposit;
  }

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }
}

const acct = new BankAccount("Alice", 500);
console.log("New Balance:", acct.deposit(250));`,
        explanation: "TypeScript requires explicitly typing class instance variables or assigning them default initializers."
      },
      {
        title: "Constructor Parameter Properties Shorthand",
        scenario: "Use accessibility modifiers in constructor arguments to declare and assign fields automatically.",
        solution: `class Employee {
  constructor(
    public readonly id: number,
    public name: string,
    private salary: number
  ) {}

  getSalarySlip(): string {
    return \`Employee \${this.name} earns \$\${this.salary}\`;
  }
}

const emp = new Employee(101, "Diana", 95000);
console.log("Employee Name:", emp.name);
console.log("Salary Slip:", emp.getSalarySlip());`,
        explanation: "Prefixing constructor parameters with 'public', 'private', 'protected', or 'readonly' automatically creates and assigns class fields."
      },
      {
        title: "Public, Private, and Protected Modifiers",
        scenario: "Observe access boundary restrictions between parent classes and subclasses.",
        solution: `class Vehicle {
  public make: string;
  protected maxSpeed: number;
  private vin: string;

  constructor(make: string, maxSpeed: number, vin: string) {
    this.make = make;
    this.maxSpeed = maxSpeed;
    this.vin = vin;
  }
}

class SportsCar extends Vehicle {
  printSpecs() {
    console.log(\`\${this.make} top speed: \${this.maxSpeed} mph\`);
    // this.vin; // Error: 'vin' is private to Vehicle
  }
}

const car = new SportsCar("Porsche", 190, "VIN12345");
car.printSpecs();`,
        explanation: "'private' is only accessible inside the declaring class. 'protected' is accessible within the declaring class and its subclasses."
      },
      {
        title: "ECMAScript Private Fields ('#field') vs TypeScript 'private'",
        scenario: "Compare TypeScript compile-time 'private' with JavaScript hard private fields.",
        solution: `class SecureVault {
  // Hard runtime private: impossible to access outside class even via JS reflection
  #secretPasscode: string;

  constructor(passcode: string) {
    this.#secretPasscode = passcode;
  }

  unlock(entered: string): boolean {
    return this.#secretPasscode === entered;
  }
}

const vault = new SecureVault("alpha-omega-99");
console.log("Unlock success?", vault.unlock("alpha-omega-99"));`,
        explanation: "ECMAScript '#private' fields guarantee true runtime encapsulation enforced by the JavaScript engine."
      },
      {
        title: "Readonly Class Fields for Immutable Data",
        scenario: "Protect immutable class members from being overwritten after construction.",
        solution: `class ServerNode {
  readonly ipAddress: string;
  readonly bootTimestamp: number = Date.now();

  constructor(ip: string) {
    this.ipAddress = ip;
  }
}

const node = new ServerNode("192.168.1.100");
// node.ipAddress = "10.0.0.1"; // Error: Cannot assign to 'ipAddress' because it is a read-only property.
console.log("Node IP:", node.ipAddress);`,
        explanation: "'readonly' fields can only be assigned during declaration or inside the constructor."
      },
      {
        title: "Getters and Setters with Validation",
        scenario: "Encapsulate private state using accessors with type validation.",
        solution: `class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(val: number) {
    if (val < -273.15) {
      throw new Error("Temperature below absolute zero is impossible!");
    }
    this._celsius = val;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(\`\${temp.celsius}°C = \${temp.fahrenheit}°F\`);`,
        explanation: "TypeScript automatically verifies that 'get' and 'set' accessor pairs share compatible types."
      },
      {
        title: "Static Properties and Factory Methods",
        scenario: "Use static members for class-level constants and factory construction logic.",
        solution: `class Point {
  static readonly ORIGIN = new Point(0, 0);

  constructor(public readonly x: number, public readonly y: number) {}

  static fromPolar(r: number, thetaRad: number): Point {
    return new Point(r * Math.cos(thetaRad), r * Math.sin(thetaRad));
  }
}

const pt = Point.fromPolar(10, Math.PI / 4);
console.log(\`Polar point coords: (\${pt.x.toFixed(2)}, \${pt.y.toFixed(2)})\`);
console.log("Origin:", Point.ORIGIN);`,
        explanation: "Static members belong to the constructor function itself rather than instance objects."
      },
      {
        title: "Class Implementing Multiple Interfaces",
        scenario: "Enforce that a class conforms to multiple interface contracts.",
        solution: `interface Printable { print(): void }
interface Savable { save(): boolean }

class Invoice implements Printable, Savable {
  constructor(public id: string, public total: number) {}

  print(): void {
    console.log(\`Invoice #\${this.id} Total: \$\${this.total}\`);
  }

  save(): boolean {
    console.log(\`Saved invoice \${this.id}\`);
    return true;
  }
}

const inv = new Invoice("INV-88", 450);
inv.print();
inv.save();`,
        explanation: "A class can implement multiple interfaces separated by commas, fulfilling every declared contract."
      },
      {
        title: "Thread-Safe Singleton Pattern",
        scenario: "Implement the Singleton design pattern with a private constructor.",
        solution: `class DatabasePool {
  private static instance: DatabasePool;

  private constructor() {
    // Private constructor prevents direct 'new DatabasePool()'
  }

  public static getInstance(): DatabasePool {
    if (!DatabasePool.instance) {
      DatabasePool.instance = new DatabasePool();
    }
    return DatabasePool.instance;
  }

  public query(sql: string): string {
    return \`Executed: \${sql}\`;
  }
}

const pool1 = DatabasePool.getInstance();
const pool2 = DatabasePool.getInstance();
console.log("Are singletons identical?", pool1 === pool2);`,
        explanation: "Private constructors ensure instantiation only happens via the static factory method."
      },
      {
        title: "Fluent Builder Pattern with Method Chaining",
        scenario: "Build a request configuration builder returning 'this' for chainable calls.",
        solution: `class RequestBuilder {
  private method: string = "GET";
  private headers: Record<string, string> = {};

  setMethod(method: "GET" | "POST" | "PUT"): this {
    this.method = method;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  build(): { method: string; headers: Record<string, string> } {
    return { method: this.method, headers: this.headers };
  }
}

const req = new RequestBuilder()
  .setMethod("POST")
  .addHeader("Content-Type", "application/json")
  .build();

console.log("Built Request:", req);`,
        explanation: "Returning 'this' as the return type enables fluent method chaining that preserves subclass typing."
      }
    ]
  },
  {
    day: 17,
    examples: [
      {
        title: "Basic Abstract Class with Abstract and Concrete Methods",
        scenario: "Define a base Animal class that enforces sound generation while sharing sleeping behavior.",
        solution: `abstract class Animal {
  constructor(public name: string) {}

  // Abstract method: must be implemented by subclasses
  abstract makeSound(): string;

  // Concrete method: shared by all subclasses
  sleep(): void {
    console.log(\`\${this.name} is sleeping: zzz...\`);
  }
}

class Dog extends Animal {
  makeSound(): string { return "Woof! Woof!"; }
}

const dog = new Dog("Buddy");
console.log(dog.makeSound());
dog.sleep();`,
        explanation: "Abstract classes cannot be directly instantiated with 'new Animal()'; they serve as blueprints for subclasses."
      },
      {
        title: "Subclass Implementation of Abstract Members",
        scenario: "Ensure derived classes implement all required abstract methods and properties.",
        solution: `abstract class PaymentProcessor {
  abstract readonly providerName: string;
  abstract process(amount: number): boolean;

  logTransaction(amount: number): void {
    console.log(\`[\${this.providerName}] Processing \$\${amount}\`);
  }
}

class StripeProcessor extends PaymentProcessor {
  readonly providerName = "Stripe";

  process(amount: number): boolean {
    this.logTransaction(amount);
    return true;
  }
}

const stripe = new StripeProcessor();
stripe.process(99.99);`,
        explanation: "Subclasses must implement all abstract properties and methods before they can be instantiated."
      },
      {
        title: "Explicit Overriding with the 'override' Keyword",
        scenario: "Use the 'override' keyword to prevent accidental method mismatches during refactoring.",
        solution: `class BaseService {
  start(): void { console.log("Base service started"); }
}

class CustomService extends BaseService {
  override start(): void {
    console.log("Custom service pre-checks...");
    super.start();
  }
}

const svc = new CustomService();
svc.start();`,
        explanation: "With '--noImplicitOverride', the 'override' keyword ensures that a method intentionally overrides a base class method."
      },
      {
        title: "Abstract Properties in Base Classes",
        scenario: "Declare an abstract property that subclasses must supply.",
        solution: `abstract class ReportGenerator {
  abstract readonly format: "PDF" | "CSV" | "HTML";

  generate(data: unknown[]): string {
    return \`Generated \${this.format} report for \${data.length} records\`;
  }
}

class PdfReport extends ReportGenerator {
  readonly format = "PDF";
}

const reporter = new PdfReport();
console.log(reporter.generate([1, 2, 3]));`,
        explanation: "Abstract properties guarantee that every subclass defines required configuration properties."
      },
      {
        title: "Polymorphic Collection of Abstract Base Classes",
        scenario: "Store diverse subclasses in an array of the abstract base type and invoke common methods.",
        solution: `abstract class Graphic {
  abstract draw(): void;
}

class CircleGraphic extends Graphic {
  draw(): void { console.log("Drawing Circle (O)"); }
}

class SquareGraphic extends Graphic {
  draw(): void { console.log("Drawing Square ([])"); }
}

const canvas: Graphic[] = [new CircleGraphic(), new SquareGraphic()];
for (const item of canvas) {
  item.draw(); // Polymorphic dispatch
}`,
        explanation: "Polymorphism lets you treat different subclass instances uniformly through their shared abstract base class."
      },
      {
        title: "Template Method Pattern in Data Processing",
        scenario: "Define a fixed skeleton algorithm in the base class, delegating steps to subclasses.",
        solution: `abstract class DataPipeline {
  // Template method defining algorithm structure:
  public run(): void {
    this.extract();
    this.transform();
    this.load();
  }

  protected abstract extract(): void;
  protected abstract transform(): void;

  protected load(): void {
    console.log("Default Loader: Writing to database");
  }
}

class CsvPipeline extends DataPipeline {
  protected extract(): void { console.log("Extracting CSV file"); }
  protected transform(): void { console.log("Parsing comma-separated rows"); }
}

const pipeline = new CsvPipeline();
pipeline.run();`,
        explanation: "The Template Method pattern controls execution order while leaving specific steps customizable in subclasses."
      },
      {
        title: "Abstract Database Repository Base Class",
        scenario: "Create a generic CRUD base class with common caching logic.",
        solution: `abstract class BaseRepository<T extends { id: string }> {
  private cache = new Map<string, T>();

  abstract fetchFromDb(id: string): T | undefined;

  getById(id: string): T | undefined {
    if (this.cache.has(id)) {
      return this.cache.get(id);
    }
    const record = this.fetchFromDb(id);
    if (record) this.cache.set(id, record);
    return record;
  }
}

class UserRepository extends BaseRepository<{ id: string; name: string }> {
  fetchFromDb(id: string) {
    return { id, name: \`User_\${id}\` };
  }
}

const repo = new UserRepository();
console.log("Fetched:", repo.getById("101"));`,
        explanation: "Combining generics with abstract classes allows writing reusable repository, caching, and data access layers."
      },
      {
        title: "Protected Constructors in Abstract Classes",
        scenario: "Enforce that base class constructors can only be invoked by subclass 'super()' calls.",
        solution: `abstract class ConfigBase {
  protected constructor(public environment: string) {}
}

class ProductionConfig extends ConfigBase {
  constructor() {
    super("production");
  }
}

const prod = new ProductionConfig();
console.log("Environment:", prod.environment);`,
        explanation: "Protected constructors prevent external instantiation while allowing subclasses to initialize base state."
      },
      {
        title: "Comparing Abstract Class vs Interface with Default Methods",
        scenario: "Understand when to choose an abstract class (code sharing) vs an interface (pure contract).",
        solution: `// Interface: zero runtime JS, pure type definition
interface Identifiable { id: string }

// Abstract class: real JS class prototype, can hold state and private members
abstract class Entity implements Identifiable {
  constructor(public id: string, public createdAt: number = Date.now()) {}
}

class ProductEntity extends Entity {}

const prod = new ProductEntity("prod_1");
console.log("Product:", prod.id, "Created:", prod.createdAt);`,
        explanation: "Use abstract classes when you need shared implementation and private state; use interfaces for structural contracts."
      },
      {
        title: "Step Execution Pipeline with Abstract Classes",
        scenario: "Build a chain of execution steps with typed inputs and outputs.",
        solution: `abstract class Step<TInput, TOutput> {
  abstract execute(input: TInput): TOutput;
}

class StringSanitizer extends Step<string, string> {
  execute(input: string): string {
    return input.trim().toLowerCase();
  }
}

class WordCounter extends Step<string, number> {
  execute(input: string): number {
    return input.split(/\\s+/).length;
  }
}

const text = "   TypeScript Is Awesome   ";
const step1 = new StringSanitizer();
const step2 = new WordCounter();

const count = step2.execute(step1.execute(text));
console.log("Word count:", count); // 3`,
        explanation: "Generic abstract classes allow building modular, type-safe execution pipelines."
      }
    ]
  },
  {
    day: 18,
    examples: [
      {
        title: "Numeric Enums and Default Auto-Incrementing",
        scenario: "Declare a numeric enum where members receive auto-incrementing integer values.",
        solution: `enum Direction {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}

console.log("East value:", Direction.East);
console.log("South value:", Direction.South);`,
        explanation: "By default, numeric enums start at 0 and increment by 1 for each successive member."
      },
      {
        title: "String Enums for Explicit Values",
        scenario: "Define a string enum for human-readable API endpoints or status codes.",
        solution: `enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR"
}

function writeLog(level: LogLevel, msg: string): void {
  console.log(\`[\${level}] \${msg}\`);
}

writeLog(LogLevel.Info, "Service online");`,
        explanation: "String enums serialize to readable string values at runtime, making debugging and logging much easier."
      },
      {
        title: "Reverse Mapping in Numeric Enums",
        scenario: "Look up an enum member name from its numeric value.",
        solution: `enum StatusCode {
  Ok = 200,
  NotFound = 404,
  InternalError = 500
}

const codeValue: number = 404;
const codeName: string = StatusCode[codeValue]; // Reverse lookup

console.log(\`Code \${codeValue} is: \${codeName}\`); // "NotFound"`,
        explanation: "Numeric enums generate reverse mappings from values to member names in JavaScript runtime objects."
      },
      {
        title: "'const enum' for Inlined Performance",
        scenario: "Eliminate runtime enum objects by inlining member values at compile time.",
        solution: `const enum HttpVerb {
  Get = "GET",
  Post = "POST"
}

// In emitted JavaScript, HttpVerb.Get is replaced with the literal string "GET":
const currentVerb = HttpVerb.Get;
console.log("Emitted verb:", currentVerb);`,
        explanation: "'const enum' generates zero JavaScript code; the compiler directly replaces all references with their literal values."
      },
      {
        title: "The 'as const' Object Literal Pattern",
        scenario: "Create a modern enum alternative using an immutable object literal.",
        solution: `const Color = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blue: "#0000ff"
} as const;

type ColorType = (typeof Color)[keyof typeof Color];

function paint(c: ColorType): void {
  console.log("Painting with color:", c);
}

paint(Color.Green);
paint("#ff0000");`,
        explanation: "The 'as const' object pattern is tree-shakeable, standard JavaScript, and avoids enum pitfalls."
      },
      {
        title: "Deriving Union Types from 'as const' Objects ('keyof typeof')",
        scenario: "Extract both key unions and value unions from a constant dictionary.",
        solution: `const Role = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER"
} as const;

type RoleKey = keyof typeof Role; // "Admin" | "Editor" | "Viewer"
type RoleValue = (typeof Role)[RoleKey]; // "ADMIN" | "EDITOR" | "VIEWER"

const myRole: RoleValue = Role.Admin;
console.log("Assigned role:", myRole);`,
        explanation: "'keyof typeof' extracts the keys of a const object, and indexed access extracts the union of its values."
      },
      {
        title: "Bitwise Flags with Enums for Permission Systems",
        scenario: "Combine multiple permissions using bitwise OR in a numeric enum.",
        solution: `enum Permission {
  None = 0,
  Read = 1 << 0,   // 1
  Write = 1 << 1,  // 2
  Execute = 1 << 2 // 4
}

const userPerms = Permission.Read | Permission.Write;

function canWrite(perms: number): boolean {
  return (perms & Permission.Write) !== 0;
}

console.log("Has write permission?", canWrite(userPerms));`,
        explanation: "Bitwise enums allow compact representation of multiple boolean capabilities within a single integer."
      },
      {
        title: "Enum vs String Literal Union Benchmark",
        scenario: "Compare enum ergonomics with string literal unions.",
        solution: `// Option A: Enum
enum EnvironmentEnum { Dev = "DEV", Prod = "PROD" }

// Option B: Literal Union (No runtime overhead, pure type)
type EnvironmentUnion = "DEV" | "PROD";

function setEnv(env: EnvironmentUnion) {
  console.log("Environment:", env);
}

setEnv("DEV");`,
        explanation: "String literal unions have zero runtime footprint and allow passing string literals directly without importing an enum object."
      },
      {
        title: "Validating Runtime Input Against Enums",
        scenario: "Safely verify if an external string matches an enum member.",
        solution: `enum Priority { Low = "L", Medium = "M", High = "H" }

function isPriority(val: string): val is Priority {
  return Object.values(Priority).includes(val as Priority);
}

const inputStr = "M";
if (isPriority(inputStr)) {
  console.log("Valid priority chosen:", inputStr);
}`,
        explanation: "Using 'Object.values(Enum)' allows runtime verification before casting to the enum type."
      },
      {
        title: "Type-Safe State Machine Using 'as const' Objects",
        scenario: "Define allowed state transitions using const objects and type checking.",
        solution: `const State = {
  Idle: "IDLE",
  Running: "RUNNING",
  Stopped: "STOPPED"
} as const;

type StateType = (typeof State)[keyof typeof State];

const ALLOWED_TRANSITIONS: Record<StateType, readonly StateType[]> = {
  [State.Idle]: [State.Running],
  [State.Running]: [State.Stopped, State.Idle],
  [State.Stopped]: [State.Idle]
};

function canTransition(from: StateType, to: StateType): boolean {
  return ALLOWED_TRANSITIONS[from].includes(to);
}

console.log("Idle -> Running?", canTransition(State.Idle, State.Running));
console.log("Stopped -> Running?", canTransition(State.Stopped, State.Running));`,
        explanation: "Const objects provide typed keys for defining finite state machines with transition validation."
      }
    ]
  },
  {
    day: 19,
    examples: [
      {
        title: "Generic Identity Function '<T>(arg: T): T'",
        scenario: "Create a function that returns whatever value is passed into it while preserving exact typing.",
        solution: `function identity<T>(arg: T): T {
  return arg;
}

const str = identity("Hello Generics"); // Type: string
const num = identity(42);               // Type: number
console.log(str, num);`,
        explanation: "The type variable '<T>' captures the argument's type and uses it as the return type, avoiding type loss."
      },
      {
        title: "Multiple Generic Parameters '<T, U>'",
        scenario: "Build a generic pair container holding two different types.",
        solution: `function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = makePair("version", 5.7);
console.log(\`Key: \${pair[0]}, Value: \${pair[1]}\`);`,
        explanation: "Functions can accept multiple generic type variables to express relationships between distinct arguments."
      },
      {
        title: "Generic Interface for API Response Envelope",
        scenario: "Standardize backend API responses wrapping arbitrary data payloads.",
        solution: `interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: number;
}

interface UserData { id: number; name: string }

const response: ApiResponse<UserData> = {
  success: true,
  data: { id: 1, name: "Isaac" },
  timestamp: Date.now()
};

console.log("Response User:", response.data.name);`,
        explanation: "Generic interfaces allow creating reusable envelopes that wrap different data types."
      },
      {
        title: "Generic Type Alias for Paginated Collections",
        scenario: "Define a paginated result type for list views.",
        solution: `type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  hasMore: boolean;
};

const bookPages: Paginated<string> = {
  items: ["Chapter 1", "Chapter 2"],
  total: 10,
  page: 1,
  hasMore: true
};

console.log(\`Page \${bookPages.page}: \${bookPages.items.join(", ")}\`);`,
        explanation: "Generic type aliases provide clean syntax for parameterizing collection structures."
      },
      {
        title: "Default Generic Type Parameters ('<T = string>')",
        scenario: "Provide a sensible default type when callers do not supply a type argument.",
        solution: `interface KeyValuePair<K = string, V = unknown> {
  key: K;
  value: V;
}

// Uses default K = string, V = unknown:
const entry: KeyValuePair = { key: "status", value: 200 };
// Explicitly provides K = number, V = boolean:
const flagged: KeyValuePair<number, boolean> = { key: 42, value: true };

console.log(entry.key, flagged.key);`,
        explanation: "Default type parameters reduce boilerplate for consumers by providing standard defaults."
      },
      {
        title: "Generic Array Reversal and Slicing",
        scenario: "Implement an immutable array reverser that retains the original item types.",
        solution: `function reverseList<T>(items: readonly T[]): T[] {
  return [...items].reverse();
}

const words = ["alpha", "beta", "gamma"];
console.log("Reversed words:", reverseList(words));`,
        explanation: "Generics allow utility functions to accept and return typed arrays without casting."
      },
      {
        title: "Generic Box Container",
        scenario: "Wrap values in a generic box object with getter and updater methods.",
        solution: `class Box<T> {
  constructor(private value: T) {}

  get(): T { return this.value; }
  set(newValue: T): void { this.value = newValue; }
}

const strBox = new Box<string>("Secret Message");
console.log("Box Content:", strBox.get());
strBox.set("Updated Message");
console.log("New Content:", strBox.get());`,
        explanation: "Generic classes maintain state safety across all instance method calls."
      },
      {
        title: "Generic Higher-Order Function (Memoization)",
        scenario: "Cache the results of any single-argument function with type safety.",
        solution: `function memoize<TArg, TResult>(fn: (arg: TArg) => TResult): (arg: TArg) => TResult {
  const cache = new Map<TArg, TResult>();
  return (arg: TArg): TResult => {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

const computeSquare = memoize((n: number) => n * n);
console.log("Square of 9:", computeSquare(9));
console.log("Square of 9 (cached):", computeSquare(9));`,
        explanation: "Generic closures preserve argument and return types between original and wrapped functions."
      },
      {
        title: "Type Inference in Generic Invocations",
        scenario: "Observe how TypeScript automatically infers '<T>' without explicit angle brackets.",
        solution: `function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers T as 'number':
const firstNum = firstElement([10, 20, 30]);
// TypeScript infers T as 'string':
const firstStr = firstElement(["apple", "banana"]);

console.log("First number:", firstNum, "First string:", firstStr);`,
        explanation: "You rarely need to write 'firstElement<number>([10])'; type inference deduces 'T' automatically from arguments."
      },
      {
        title: "Generic Event Subscription Store",
        scenario: "Store and retrieve generic callbacks mapped to specific topics.",
        solution: `type Callback<T> = (data: T) => void;

class EventSlot<T> {
  private handlers: Callback<T>[] = [];

  subscribe(handler: Callback<T>): void {
    this.handlers.push(handler);
  }

  notify(data: T): void {
    for (const h of this.handlers) h(data);
  }
}

const userSlot = new EventSlot<{ id: number; name: string }>();
userSlot.subscribe(u => console.log(\`Received user: \${u.name}\`));
userSlot.notify({ id: 1, name: "Ada Lovelace" });`,
        explanation: "Generics allow event channels to guarantee that listeners receive the exact expected payload type."
      }
    ]
  },
  {
    day: 20,
    examples: [
      {
        title: "Basic Generic Constraints with 'extends'",
        scenario: "Constrain a generic type parameter to types that have a 'length' property.",
        solution: `interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log("Item length:", item.length);
  return item;
}

logLength("Hello World");
logLength([1, 2, 3, 4]);
logLength({ length: 10, name: "Custom Object" });`,
        explanation: "'T extends HasLength' guarantees that 'item' has a numeric 'length' property, while preserving the exact type 'T'."
      },
      {
        title: "Property Key Constraint ('K extends keyof T')",
        scenario: "Safely read an object's property by constraining the key argument.",
        solution: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", active: true };
const userName = getProperty(user, "name"); // Type: string
const userActive = getProperty(user, "active"); // Type: boolean

console.log("User Name:", userName, "Active:", userActive);`,
        explanation: "'K extends keyof T' ensures that 'key' must be a valid property name on 'obj', and the return type is accurately inferred as 'T[K]'."
      },
      {
        title: "Generic Object Property Setter",
        scenario: "Update an object's property safely, ensuring the new value matches that property's type.",
        solution: `function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

const car = { make: "Toyota", year: 2020 };
setProperty(car, "year", 2022); // Allowed
// setProperty(car, "year", "2022"); // Error: 'string' not assignable to 'number'

console.log("Updated Car:", car);`,
        explanation: "By pairing 'key: K' with 'value: T[K]', TypeScript enforces that the assigned value matches the property's type."
      },
      {
        title: "Constraining to Primitive Types",
        scenario: "Restrict a generic parameter to only numbers or strings.",
        solution: `function stringifyPrimitive<T extends string | number | boolean>(val: T): string {
  return \`Val: \${String(val)}\`;
}

console.log(stringifyPrimitive("text"));
console.log(stringifyPrimitive(42));
console.log(stringifyPrimitive(true));`,
        explanation: "'T extends Primitive' prevents complex objects, functions, or symbols from being passed."
      },
      {
        title: "Deep Property Constraint",
        scenario: "Constrain access to nested properties within an object.",
        solution: `interface HasId { id: string }

function pluckId<T extends HasId>(entity: T): string {
  return entity.id;
}

const user = { id: "u_123", email: "user@test.com", profile: { age: 30 } };
console.log("Plucked ID:", pluckId(user));`,
        explanation: "The constraint requires that any argument has an 'id: string' property, regardless of whatever other properties exist."
      },
      {
        title: "Safe Object Merging with Constraints",
        scenario: "Merge two distinct object types, ensuring both are non-primitive objects.",
        solution: `function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Bob" }, { role: "Admin" });
console.log(\`Merged: \${merged.name} - \${merged.role}\`);`,
        explanation: "'T extends object' restricts type arguments to non-primitive reference types."
      },
      {
        title: "Filtering Record Values by Type Constraint",
        scenario: "Filter keys from an object whose values match a specific type constraint.",
        solution: `function sumNumericValues<T extends Record<string, any>>(obj: T): number {
  let total = 0;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number") {
      total += obj[key];
    }
  }
  return total;
}

const stats = { views: 100, likes: 25, title: "Post" };
console.log("Sum of numbers:", sumNumericValues(stats));`,
        explanation: "Using 'Record<string, any>' with runtime narrowing enables flexible mathematical processing on arbitrary object shapes."
      },
      {
        title: "Factory Function with Constructor Constraint",
        scenario: "Create instances of classes dynamically using a generic constructor constraint.",
        solution: `interface Constructable<T> {
  new (...args: any[]): T;
}

function instantiate<T>(ctor: Constructable<T>, ...args: any[]): T {
  return new ctor(...args);
}

class Widget {
  constructor(public title: string) {}
}

const widget = instantiate(Widget, "Primary Dashboard Widget");
console.log("Widget title:", widget.title);`,
        explanation: "'new (...args: any[]) => T' enforces that the passed argument must be a constructable class returning 'T'."
      },
      {
        title: "Discriminating Array vs Non-Array Generics",
        scenario: "Ensure a function only operates on arrays and inspects element properties.",
        solution: `function findById<T extends { id: number }>(items: readonly T[], targetId: number): T | undefined {
  return items.find(item => item.id === targetId);
}

const users = [{ id: 1, name: "Grace" }, { id: 2, name: "Alan" }];
console.log("Found:", findById(users, 2)?.name);`,
        explanation: "The constraint 'T extends { id: number }' combined with 'items: readonly T[]' ensures that every element has an 'id'."
      },
      {
        title: "Type-Safe Event Bus with Keyed Event Map",
        scenario: "Build a strongly-typed event emitter where events and payloads are strictly constrained.",
        solution: `interface EventMap {
  login: { username: string; timestamp: number };
  logout: { username: string };
}

class TypedEmitter<TMap extends Record<string, any>> {
  private listeners: { [K in keyof TMap]?: ((data: TMap[K]) => void)[] } = {};

  on<K extends keyof TMap>(event: K, handler: (data: TMap[K]) => void): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(handler);
  }

  emit<K extends keyof TMap>(event: K, data: TMap[K]): void {
    const handlers = this.listeners[event] ?? [];
    for (const h of handlers) h(data);
  }
}

const bus = new TypedEmitter<EventMap>();
bus.on("login", data => console.log(\`\${data.username} logged in at \${data.timestamp}\`));
bus.emit("login", { username: "ada", timestamp: Date.now() });`,
        explanation: "Constraining 'K extends keyof TMap' guarantees that only registered events can be emitted, and their payloads must strictly match."
      }
    ]
  }
];
