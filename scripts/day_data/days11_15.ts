import { DayExamplesData } from "./types.js";

export const days11_15: DayExamplesData[] = [
  {
    day: 11,
    examples: [
      {
        title: "Geometric Shape Area Calculator",
        scenario: "Calculate the area of various shapes using a common 'kind' discriminator property.",
        solution: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "square"; side: number };

function computeArea(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "rectangle":
      return s.width * s.height;
    case "square":
      return s.side * s.side;
  }
}

console.log("Circle area:", computeArea({ kind: "circle", radius: 5 }).toFixed(2));
console.log("Rectangle area:", computeArea({ kind: "rectangle", width: 4, height: 6 }));`,
        explanation: "By matching on 's.kind', TypeScript narrows the type of 's' to the specific shape variant in each switch case."
      },
      {
        title: "Network Request State Machine",
        scenario: "Model asynchronous data loading states (idle, loading, success, error) with discriminated unions.",
        solution: `type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T; receivedAt: number }
  | { status: "error"; error: string; code: number };

function renderState<T>(state: RequestState<T>): string {
  switch (state.status) {
    case "idle": return "Ready to fetch";
    case "loading": return "Loading in progress...";
    case "success": return \`Loaded \${JSON.stringify(state.data)}\`;
    case "error": return \`Error \${state.code}: \${state.error}\`;
  }
}

console.log(renderState({ status: "success", data: { user: "Ada" }, receivedAt: Date.now() }));`,
        explanation: "Discriminated unions make invalid states unrepresentable—for example, you cannot have 'data' when status is 'loading'."
      },
      {
        title: "Redux-Style Action Reducer",
        scenario: "Create a predictable counter reducer that processes actions tagged with 'type'.",
        solution: `type CounterAction =
  | { type: "INCREMENT"; amount: number }
  | { type: "DECREMENT"; amount: number }
  | { type: "RESET" };

function counterReducer(count: number, action: CounterAction): number {
  switch (action.type) {
    case "INCREMENT": return count + action.amount;
    case "DECREMENT": return count - action.amount;
    case "RESET": return 0;
  }
}

let count = 10;
count = counterReducer(count, { type: "INCREMENT", amount: 5 });
count = counterReducer(count, { type: "DECREMENT", amount: 3 });
console.log("Final Count:", count); // 12`,
        explanation: "Each action has a distinct payload structure discriminated by its literal 'type' property."
      },
      {
        title: "Exhaustive Switch Checking with 'assertNever'",
        scenario: "Guarantee that adding a new union variant triggers a compiler error if unhandled.",
        solution: `function assertNever(val: never): never {
  throw new Error(\`Unexpected object: \${JSON.stringify(val)}\`);
}

type NotificationChannel = "email" | "sms" | "push";

function sendNotice(channel: NotificationChannel, text: string): void {
  switch (channel) {
    case "email": console.log("Email sent:", text); break;
    case "sms": console.log("SMS sent:", text); break;
    case "push": console.log("Push notice sent:", text); break;
    default: assertNever(channel);
  }
}

sendNotice("email", "Your code is 123456");`,
        explanation: "Passing unhandled variants to 'assertNever(val: never)' produces a compile-time type error if any union member is missed."
      },
      {
        title: "User Authentication Session State",
        scenario: "Differentiate between an unauthenticated guest and an authenticated active user.",
        solution: `type Session =
  | { state: "anonymous" }
  | { state: "authenticated"; user: { id: string; name: string }; token: string };

function getGreeting(session: Session): string {
  if (session.state === "authenticated") {
    return \`Welcome back, \${session.user.name}!\`;
  }
  return "Welcome, Guest! Please sign in.";
}

console.log(getGreeting({ state: "authenticated", user: { id: "1", name: "David" }, token: "jwt_abc" }));`,
        explanation: "Using 'state' as discriminator eliminates the need for optional properties and prevents accessing 'token' on guests."
      },
      {
        title: "Multi-Provider Payment Processing",
        scenario: "Process payments via Credit Card, PayPal, or Crypto with provider-specific parameters.",
        solution: `type PaymentMethod =
  | { type: "credit_card"; cardNumber: string; cvv: string }
  | { type: "paypal"; email: string }
  | { type: "crypto"; walletAddress: string; network: "ETH" | "BTC" };

function processPayment(amount: number, method: PaymentMethod): void {
  switch (method.type) {
    case "credit_card":
      console.log(\`Charged \$\${amount} to card ending in \${method.cardNumber.slice(-4)}\`);
      break;
    case "paypal":
      console.log(\`Charged \$\${amount} to PayPal account \${method.email}\`);
      break;
    case "crypto":
      console.log(\`Sent \$\${amount} equivalent to \${method.network} address \${method.walletAddress}\`);
      break;
  }
}

processPayment(150, { type: "paypal", email: "payer@example.com" });`,
        explanation: "Each payment variant has its own required fields, ensuring safety during financial processing."
      },
      {
        title: "Notification Delivery Payload",
        scenario: "Dispatch messages through different channels with channel-specific payload attributes.",
        solution: `type DeliveryPayload =
  | { channel: "email"; subject: string; bodyHtml: string; recipient: string }
  | { channel: "sms"; text: string; phoneNumber: string }
  | { channel: "slack"; webhookUrl: string; markdownText: string };

function dispatchNotification(p: DeliveryPayload): void {
  if (p.channel === "email") {
    console.log(\`Sending email to \${p.recipient} - Subject: \${p.subject}\`);
  } else if (p.channel === "sms") {
    console.log(\`Sending SMS to \${p.phoneNumber}\`);
  } else {
    console.log(\`Posting to Slack via \${p.webhookUrl}\`);
  }
}

dispatchNotification({ channel: "sms", text: "Alert!", phoneNumber: "+15550199" });`,
        explanation: "Discriminated unions work seamlessly with standard 'if / else if' chains as well as 'switch' blocks."
      },
      {
        title: "Abstract Syntax Tree (AST) Expression Evaluator",
        scenario: "Evaluate mathematical expressions represented as a tree of arithmetic nodes.",
        solution: `type Expr =
  | { op: "literal"; value: number }
  | { op: "add"; left: Expr; right: Expr }
  | { op: "multiply"; left: Expr; right: Expr };

function evaluate(e: Expr): number {
  switch (e.op) {
    case "literal": return e.value;
    case "add": return evaluate(e.left) + evaluate(e.right);
    case "multiply": return evaluate(e.left) * evaluate(e.right);
  }
}

// Represents: (3 + 5) * 2
const expression: Expr = {
  op: "multiply",
  left: { op: "add", left: { op: "literal", value: 3 }, right: { op: "literal", value: 5 } },
  right: { op: "literal", value: 2 }
};

console.log("(3 + 5) * 2 =", evaluate(expression)); // 16`,
        explanation: "Recursive discriminated unions are the standard pattern for building interpreters, parsers, and compilers."
      },
      {
        title: "Form Field Validation State",
        scenario: "Track individual form field validation states in UI components.",
        solution: `type FieldState =
  | { status: "pristine" }
  | { status: "validating" }
  | { status: "valid"; value: string }
  | { status: "invalid"; error: string; rawInput: string };

function renderFeedback(field: FieldState): string {
  switch (field.status) {
    case "pristine": return "";
    case "validating": return "Checking availability...";
    case "valid": return "Looks good!";
    case "invalid": return \`Error: \${field.error}\`;
  }
}

console.log(renderFeedback({ status: "invalid", error: "Password too short", rawInput: "123" }));`,
        explanation: "Discriminating on 'status' cleanly isolates error messages and sanitized values to appropriate states."
      },
      {
        title: "Virtual File System Node Representation",
        scenario: "Model file system nodes where files have content and directories have children.",
        solution: `type FsNode =
  | { type: "file"; name: string; sizeBytes: number }
  | { type: "directory"; name: string; children: FsNode[] };

function calculateTotalSize(node: FsNode): number {
  if (node.type === "file") {
    return node.sizeBytes;
  }
  return node.children.reduce((sum, child) => sum + calculateTotalSize(child), 0);
}

const rootDir: FsNode = {
  type: "directory",
  name: "project",
  children: [
    { type: "file", name: "package.json", sizeBytes: 1024 },
    {
      type: "directory",
      name: "src",
      children: [{ type: "file", name: "index.ts", sizeBytes: 2048 }]
    }
  ]
};

console.log("Total Directory Size:", calculateTotalSize(rootDir), "bytes");`,
        explanation: "Recursive discriminated unions make file system and hierarchy navigation both intuitive and strictly typed."
      }
    ]
  },
  {
    day: 12,
    examples: [
      {
        title: "Explicit Parameter and Return Type Annotations",
        scenario: "Write functions with explicit signatures to prevent unintended implicit 'any'.",
        solution: `function calculateTax(subtotal: number, taxRate: number): number {
  return subtotal * taxRate;
}

const tax = calculateTax(150.00, 0.08);
console.log("Tax Amount:", tax.toFixed(2));`,
        explanation: "Annotating both parameters and return types documents function contracts and catches return value mismatches early."
      },
      {
        title: "Optional Parameters with Default Fallbacks",
        scenario: "Declare optional function parameters and provide clean default values.",
        solution: `function formatGreeting(name: string, prefix: string = "Hello", punctuation?: string): string {
  const mark = punctuation ?? "!";
  return \`\${prefix}, \${name}\${mark}\`;
}

console.log(formatGreeting("Alice"));
console.log(formatGreeting("Bob", "Good morning", "."));`,
        explanation: "Parameters with default values ('prefix: string = ...') are automatically optional for callers; optional parameters '?' can be omitted."
      },
      {
        title: "Rest Parameters for Variadic Summation",
        scenario: "Accept an arbitrary number of numeric arguments and compute their total.",
        solution: `function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum 3 items:", sumAll(1, 2, 3));
console.log("Sum 5 items:", sumAll(10, 20, 30, 40, 50));`,
        explanation: "Rest parameters '...args: T[]' bundle variable arguments into a typed array accessible within the function body."
      },
      {
        title: "Destructured Parameter Objects with Type Signatures",
        scenario: "Type an options parameter object when destructuring directly in the argument list.",
        solution: `interface CreateUserOptions {
  username: string;
  email: string;
  isAdmin?: boolean;
}

function createUser({ username, email, isAdmin = false }: CreateUserOptions): string {
  return \`Created user \${username} (\${email}) - Admin: \${isAdmin}\`;
}

console.log(createUser({ username: "grace", email: "grace@test.com" }));`,
        explanation: "Destructuring directly in parameters requires specifying the type contract after the destructuring pattern."
      },
      {
        title: "Contextual Typing in Higher-Order Callbacks",
        scenario: "Observe how TypeScript infers parameter types inside callbacks from the enclosing method signature.",
        solution: `const names = ["Ada", "Alan", "Grace"];

// 'n' is contextually typed as 'string' based on names being string[]
const upperNames = names.map(n => n.toUpperCase());
console.log("Uppercase names:", upperNames);`,
        explanation: "Contextual typing allows you to omit parameter annotations in closures when the calling context already specifies the type."
      },
      {
        title: "Function Factories (Currying & Closures)",
        scenario: "Create a multiplier factory function that returns a customized math function.",
        solution: `function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 7:", double(7));
console.log("Triple 7:", triple(7));`,
        explanation: "TypeScript supports higher-order functions by letting return types be function signatures like '(value: number) => number'."
      },
      {
        title: "'void' Callbacks vs Expected Return Values",
        scenario: "Understand why callback functions typed with 'void' can safely return values without causing compiler errors.",
        solution: `const storage: number[] = [];

function runSideEffect(callback: (item: number) => void): void {
  for (let i = 1; i <= 3; i++) {
    callback(i);
  }
}

// Array.prototype.push returns the new length (a number), but it is allowed:
runSideEffect(n => storage.push(n));
console.log("Storage:", storage);`,
        explanation: "In callback positions, 'void' means 'the caller will ignore any return value', providing flexibility for callers."
      },
      {
        title: "Readonly Parameters to Prevent Mutation",
        scenario: "Prevent helper functions from mutating input collections passed by reference.",
        solution: `function sortAscending(list: readonly number[]): number[] {
  // list.sort(); // Compile Error: sort does not exist on readonly number[]
  return [...list].sort((a, b) => a - b);
}

const originalScores = [40, 10, 50, 20];
const sorted = sortAscending(originalScores);
console.log("Original (unmutated):", originalScores);
console.log("Sorted copy:", sorted);`,
        explanation: "Marking parameters as 'readonly T[]' ensures pure, side-effect-free function implementations."
      },
      {
        title: "Generic Function Pipeline / Compose",
        scenario: "Compose multiple single-argument functions into a clean data pipeline.",
        solution: `function pipe<A, B, C>(fn1: (a: A) => B, fn2: (b: B) => C): (a: A) => C {
  return (a: A) => fn2(fn1(a));
}

const trim = (s: string) => s.trim();
const getLength = (s: string) => s.length;
const trimmedLength = pipe(trim, getLength);

console.log("Trimmed length:", trimmedLength("  TypeScript Pipeline  "));`,
        explanation: "Generics allow composing functions where the output type of the first step seamlessly flows into the input of the second."
      },
      {
        title: "Asynchronous Function Signatures with Error Handling",
        scenario: "Type async functions returning Promises and handle errors with typed signatures.",
        solution: `async function fetchUserData(id: number): Promise<{ id: number; username: string }> {
  if (id <= 0) {
    throw new Error("Invalid User ID");
  }
  return { id, username: \`user_\${id}\` };
}

fetchUserData(10)
  .then(u => console.log("Fetched user:", u.username))
  .catch(err => console.error(err.message));`,
        explanation: "Async functions always return 'Promise<T>', and TypeScript verifies that returned values match type 'T'."
      }
    ]
  },
  {
    day: 13,
    examples: [
      {
        title: "Single Parameter Overload (String vs Number Input)",
        scenario: "Create a formatter that behaves differently when passed a string vs a number.",
        solution: `function formatInput(val: string): string;
function formatInput(val: number): string;
function formatInput(val: string | number): string {
  if (typeof val === "number") {
    return \`NUM: \${val.toFixed(2)}\`;
  }
  return \`STR: \${val.toUpperCase()}\`;
}

console.log(formatInput(42));
console.log(formatInput("typescript"));`,
        explanation: "Overload signatures describe the public API, while the implementation signature handles all possible parameter combinations."
      },
      {
        title: "Variable Argument Count Overloads",
        scenario: "Support calling a date constructor with a timestamp or with separate year/month/day arguments.",
        solution: `function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(yearOrTimestamp, month - 1, day);
  }
  return new Date(yearOrTimestamp);
}

console.log("From timestamp:", makeDate(1700000000000).getFullYear());
console.log("From YMD:", makeDate(2026, 10, 22).toISOString().split("T")[0]);`,
        explanation: "Overloads allow callers to pass either 1 argument or 3 arguments, preventing confusing 2-argument calls."
      },
      {
        title: "DOM-Style Element Query Overload",
        scenario: "Return specific HTML element types depending on the tag name selector.",
        solution: `interface MockButton { tag: "button"; click(): void }
interface MockInput { tag: "input"; value: string }
interface MockDiv { tag: "div"; text: string }

function queryElement(tag: "button"): MockButton;
function queryElement(tag: "input"): MockInput;
function queryElement(tag: "div"): MockDiv;
function queryElement(tag: string): { tag: string } {
  return { tag };
}

const btn = queryElement("button");
console.log("Queried element tag:", btn.tag);`,
        explanation: "Matching string literal parameters in overload signatures allows returning the exact specialized type for each tag."
      },
      {
        title: "Coordinate Setter Overload",
        scenario: "Allow setting coordinates either via two numbers (x, y) or a single object { x, y }.",
        solution: `interface Point { x: number; y: number }

function setCoordinates(x: number, y: number): Point;
function setCoordinates(point: Point): Point;
function setCoordinates(arg1: number | Point, arg2?: number): Point {
  if (typeof arg1 === "object") {
    return { x: arg1.x, y: arg1.y };
  }
  return { x: arg1, y: arg2! };
}

console.log("Coords from pair:", setCoordinates(10, 20));
console.log("Coords from object:", setCoordinates({ x: 50, y: 100 }));`,
        explanation: "Overloads provide ergonomic flexibility so consumers can pass arguments in the format most convenient for them."
      },
      {
        title: "Cache Getter Overload with Fallback",
        scenario: "Return 'string | undefined' if no fallback is provided, or strictly 'string' if a fallback is supplied.",
        solution: `function getCached(key: string): string | undefined;
function getCached(key: string, fallback: string): string;
function getCached(key: string, fallback?: string): string | undefined {
  const cache: Record<string, string> = { theme: "dark" };
  return cache[key] ?? fallback;
}

const val1: string | undefined = getCached("missing");
const val2: string = getCached("missing", "default_val");
console.log("Val 1:", val1);
console.log("Val 2:", val2);`,
        explanation: "Overloading return types based on whether a fallback argument is present removes unnecessary 'undefined' checks for consumers."
      },
      {
        title: "Array vs Single Item Processing Overload",
        scenario: "Accept a single item and return a single result, or accept an array and return an array.",
        solution: `function doubleItems(val: number): number;
function doubleItems(val: number[]): number[];
function doubleItems(val: number | number[]): number | number[] {
  if (Array.isArray(val)) {
    return val.map(n => n * 2);
  }
  return val * 2;
}

const singleRes: number = doubleItems(21);
const arrayRes: number[] = doubleItems([1, 2, 3]);
console.log("Single:", singleRes);
console.log("Array:", arrayRes);`,
        explanation: "Overload signatures preserve the 1:1 relationship between single input -> single output and array input -> array output."
      },
      {
        title: "Class Method Overloading",
        scenario: "Overload a method inside a TypeScript class for flexible invocations.",
        solution: `class Logger {
  log(message: string): void;
  log(error: Error): void;
  log(arg: string | Error): void {
    if (arg instanceof Error) {
      console.error(\`[ERROR] \${arg.message}\`);
    } else {
      console.log(\`[INFO] \${arg}\`);
    }
  }
}

const logger = new Logger();
logger.log("Application started");
logger.log(new Error("Database connection lost"));`,
        explanation: "Methods in classes follow the exact same overloading syntax and rules as standalone functions."
      },
      {
        title: "Handling Optional Callbacks with Overloads",
        scenario: "Support synchronous execution when no callback is provided, or invoke the callback if given.",
        solution: `function executeTask(taskId: string): boolean;
function executeTask(taskId: string, onDone: (status: boolean) => void): void;
function executeTask(taskId: string, onDone?: (status: boolean) => void): boolean | void {
  const success = taskId.length > 0;
  if (onDone) {
    onDone(success);
    return;
  }
  return success;
}

const synResult: boolean = executeTask("TASK-101");
executeTask("TASK-102", (ok) => console.log("Callback received status:", ok));`,
        explanation: "Overloading distinguishes synchronous return values from void callback-style invocations."
      },
      {
        title: "Generic Function Overloading for Key-Value Lookups",
        scenario: "Look up typed properties from an object with overload fallback handling.",
        solution: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K];
function getProp<T, K extends keyof T>(obj: T, key: K, fallback: T[K]): T[K];
function getProp<T, K extends keyof T>(obj: T, key: K, fallback?: T[K]): T[K] {
  return obj[key] ?? fallback!;
}

const user = { name: "Helen", age: 32 };
console.log("Name:", getProp(user, "name"));
console.log("Age:", getProp(user, "age", 0));`,
        explanation: "Combining generics with function overloading delivers accurate type checking across dynamic property queries."
      },
      {
        title: "Strict Implementation Signature Rules",
        scenario: "Ensure the implementation signature is broad enough to satisfy all overload variants.",
        solution: `// Overloads
function parseValue(raw: string): string;
function parseValue(raw: number): number;
// Implementation signature MUST be compatible with (string) and (number):
function parseValue(raw: string | number): string | number {
  return raw;
}

console.log("Parsed string:", parseValue("hello"));
console.log("Parsed number:", parseValue(100));`,
        explanation: "The implementation signature is never directly callable by external consumers; only declared overloads are exposed."
      }
    ]
  },
  {
    day: 14,
    examples: [
      {
        title: "Declaring Core Domain Interfaces",
        scenario: "Define a clean interface representing an e-commerce customer account.",
        solution: `interface Customer {
  id: string;
  name: string;
  email: string;
  loyaltyPoints: number;
}

const cust: Customer = {
  id: "c_001",
  name: "Marcus",
  email: "marcus@shop.com",
  loyaltyPoints: 350
};

console.log(\`Customer \${cust.name} has \${cust.loyaltyPoints} points.\`);`,
        explanation: "Interfaces define named object contracts that enforce property existence and types."
      },
      {
        title: "Extending a Single Interface ('extends')",
        scenario: "Create a specialized VIPCustomer interface inheriting all Customer fields.",
        solution: `interface Customer {
  id: string;
  name: string;
}

interface VipCustomer extends Customer {
  vipTier: "gold" | "platinum";
  discountRate: number;
}

const vip: VipCustomer = {
  id: "v_777",
  name: "Serena",
  vipTier: "platinum",
  discountRate: 0.20
};

console.log(\`VIP: \${vip.name} (Tier: \${vip.vipTier}, Discount: \${vip.discountRate * 100}%)\`);`,
        explanation: "The 'extends' keyword inherits all members from the parent interface, adding new specialized fields."
      },
      {
        title: "Multiple Interface Inheritance",
        scenario: "Combine multiple independent interfaces into a unified composite interface.",
        solution: `interface CanFly { flySpeedMph: number }
interface CanSwim { swimDepthFeet: number }

interface Duck extends CanFly, CanSwim {
  quackVolumeDb: number;
}

const mallard: Duck = {
  flySpeedMph: 45,
  swimDepthFeet: 10,
  quackVolumeDb: 75
};

console.log(\`Duck flies at \${mallard.flySpeedMph} mph and dives to \${mallard.swimDepthFeet} ft.\`);`,
        explanation: "Interfaces can extend multiple interfaces simultaneously, separated by commas."
      },
      {
        title: "Method Signatures vs Callable Properties",
        scenario: "Compare method syntax ('run(): void') with function property syntax ('run: () => void').",
        solution: `interface Vehicle {
  // Method signature (allows method bivariance)
  drive(distanceKm: number): void;
  // Function property (strictly checked under --strictFunctionTypes)
  stop: () => void;
}

const car: Vehicle = {
  drive(km) { console.log(\`Drove \${km} km\`); },
  stop: () => console.log("Vehicle stopped")
};

car.drive(25);
car.stop();`,
        explanation: "Method signatures allow slight bivariance in callbacks, whereas function properties enforce strict contravariance."
      },
      {
        title: "Indexable Interface Signatures",
        scenario: "Define an interface that supports dynamic dictionary lookups.",
        solution: `interface CacheStore {
  readonly createdAt: number;
  [key: string]: string | number;
}

const cache: CacheStore = {
  createdAt: Date.now(),
  userCount: 1500,
  serverStatus: "HEALTHY"
};

console.log("Cached status:", cache["serverStatus"]);`,
        explanation: "Index signatures inside interfaces describe objects acting as dynamic lookup maps."
      },
      {
        title: "Constructor Signatures ('new (...args): T')",
        scenario: "Define an interface for a class constructor that can be instantiated with 'new'.",
        solution: `interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class DigitalClock implements ClockInterface {
  constructor(public h: number, public m: number) {}
  tick() { console.log(\`Tick: \${this.h}:\${this.m}\`); }
}

function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
  return new ctor(h, m);
}

const clock = createClock(DigitalClock, 12, 30);
clock.tick();`,
        explanation: "'new (...args): T' signatures model class constructors for factory functions and dependency injection."
      },
      {
        title: "Readonly and Optional Interface Properties",
        scenario: "Mix readonly, optional, and required fields in an audit-ready interface.",
        solution: `interface DocumentRevision {
  readonly revisionId: string;
  readonly timestamp: number;
  author: string;
  commitMessage?: string; // Optional
}

const rev: DocumentRevision = {
  revisionId: "rev_0042",
  timestamp: Date.now(),
  author: "Linus"
};

console.log("Revision:", rev.revisionId, "Author:", rev.author);`,
        explanation: "Modifying properties with 'readonly' and '?' creates robust and accurate domain contracts."
      },
      {
        title: "Implementing Interfaces in Classes",
        scenario: "Use the 'implements' keyword to guarantee a class fulfills an interface contract.",
        solution: `interface Serializer {
  serialize(): string;
}

class UserAccount implements Serializer {
  constructor(public username: string, public email: string) {}

  serialize(): string {
    return JSON.stringify({ username: this.username, email: this.email });
  }
}

const account = new UserAccount("satya", "satya@microsoft.com");
console.log("Serialized:", account.serialize());`,
        explanation: "A class implementing an interface must declare all required methods and properties."
      },
      {
        title: "Hybrid Interfaces (Callable Objects with Properties)",
        scenario: "Type a function that also has attached properties (e.g. like 'axios' or 'express').",
        solution: `interface CounterFunc {
  (incrementBy?: number): number;
  currentCount: number;
  reset(): void;
}

function createCounter(): CounterFunc {
  let count = 0;
  const fn = function(inc: number = 1) {
    count += inc;
    fn.currentCount = count;
    return count;
  } as CounterFunc;

  fn.currentCount = 0;
  fn.reset = () => { count = 0; fn.currentCount = 0; };
  return fn;
}

const counter = createCounter();
console.log("Step 1:", counter(5));
console.log("Step 2:", counter(3));
console.log("Current:", counter.currentCount);
counter.reset();
console.log("After reset:", counter.currentCount);`,
        explanation: "Hybrid interfaces represent functions that also function as objects with properties and methods."
      },
      {
        title: "Extensible Plugin Architecture with Interfaces",
        scenario: "Build a plugin registry where plugins register hooks conforming to an interface.",
        solution: `interface Plugin {
  name: string;
  version: string;
  initialize(context: { log: (msg: string) => void }): void;
}

class PluginManager {
  private plugins: Plugin[] = [];

  register(plugin: Plugin): void {
    plugin.initialize({ log: msg => console.log(\`[\${plugin.name}] \${msg}\`) });
    this.plugins.push(plugin);
  }
}

const manager = new PluginManager();
manager.register({
  name: "AnalyticsPlugin",
  version: "1.0.0",
  initialize(ctx) { ctx.log("Tracking initialized"); }
});`,
        explanation: "Interfaces decouple component implementations from consumption logic, enabling modular architectures."
      }
    ]
  },
  {
    day: 15,
    examples: [
      {
        title: "Declaration Merging with Interfaces",
        scenario: "Demonstrate how multiple interface definitions with the same name automatically merge.",
        solution: `// First definition
interface AppSettings {
  appName: string;
}

// Second definition (merges into AppSettings)
interface AppSettings {
  version: string;
  debugMode: boolean;
}

const settings: AppSettings = {
  appName: "TypeScript Tutor",
  version: "1.0.0",
  debugMode: true
};

console.log(\`App: \${settings.appName} v\${settings.version}\`);`,
        explanation: "Interfaces with identical names in the same scope merge their declarations. Type aliases do not support merging."
      },
      {
        title: "Type Aliases for Union and Primitive Types",
        scenario: "Show scenarios where type aliases can express constructs that interfaces cannot.",
        solution: `// Unions and primitives can only be declared with type aliases:
type Status = "ACTIVE" | "SUSPENDED" | "DELETED";
type ID = string | number;
type Coordinates = [latitude: number, longitude: number];

const userStatus: Status = "ACTIVE";
const coords: Coordinates = [37.7749, -122.4194];

console.log("Status:", userStatus, "Coords:", coords);`,
        explanation: "Interfaces cannot model unions, primitive aliases, or tuple types directly; type aliases must be used."
      },
      {
        title: "Intersection ('&') vs Interface Inheritance ('extends')",
        scenario: "Contrast syntax and error reporting between type intersections and interface inheritance.",
        solution: `// Interface Inheritance
interface BaseUser { id: string }
interface AdminUser extends BaseUser { role: "admin" }

// Type Intersection
type BaseToken = { token: string };
type AdminToken = BaseToken & { permissions: string[] };

const admin: AdminUser = { id: "u_1", role: "admin" };
const token: AdminToken = { token: "secret", permissions: ["ALL"] };

console.log("Admin ID:", admin.id);
console.log("Token:", token.token);`,
        explanation: "Interfaces detect incompatible property overrides at declaration time, while intersections create 'never' properties."
      },
      {
        title: "Augmenting Global Objects via Declaration Merging",
        scenario: "Add custom properties to Node's process.env or global namespace.",
        solution: `// Augmenting an interface simulates adding a custom field to global configs:
interface CustomGlobalConfig {
  apiUrl: string;
}

interface CustomGlobalConfig {
  authToken?: string; // Merged property!
}

const globalConfig: CustomGlobalConfig = {
  apiUrl: "https://api.domain.com",
  authToken: "bearer_xyz"
};

console.log("Global API URL:", globalConfig.apiUrl);`,
        explanation: "Declaration merging is how type definitions augment existing libraries and Node/browser global environments."
      },
      {
        title: "Tuple and Array Aliases with Types",
        scenario: "Represent strict tuple shapes using type aliases.",
        solution: `type ResponseTuple = [statusCode: number, headers: Record<string, string>, body: string];

const response: ResponseTuple = [200, { "Content-Type": "application/json" }, '{"status":"ok"}'];
console.log("Status code:", response[0]);`,
        explanation: "Fixed-length tuples cannot be declared using 'interface'; type aliases are required."
      },
      {
        title: "Performance: Interface Caching vs Type Flattening",
        scenario: "Understand why large enterprise codebases often prefer interfaces for object shapes.",
        solution: `// Interfaces create a named type identity that the compiler caches efficiently:
interface EntityModel {
  id: string;
  name: string;
}

// Complex intersections must be re-evaluated and flattened on each check:
type CombinedEntity = EntityModel & { extra: boolean };

const item: CombinedEntity = { id: "1", name: "Alpha", extra: true };
console.log("Item:", item.name);`,
        explanation: "The TypeScript compiler caches interface shapes by their declared name, improving type-checking performance."
      },
      {
        title: "Namespace and Interface Merging",
        scenario: "Merge an interface with a namespace to attach utility functions.",
        solution: `interface Album {
  title: string;
  year: number;
}

namespace Album {
  export function create(title: string, year: number): Album {
    return { title, year };
  }
}

const album = Album.create("Abbey Road", 1969);
console.log(\`Album: \${album.title} (\${album.year})\`);`,
        explanation: "Interfaces can merge with namespaces, allowing classes or factory functions to share the exact same identifier."
      },
      {
        title: "Mapped Types (Types Only) vs Interfaces",
        scenario: "Observe that mapped types can only be declared with type aliases.",
        solution: `type Flags = "optionA" | "optionB" | "optionC";

// Mapped type: Valid with 'type'
type FeatureFlags = {
  [K in Flags]: boolean;
};

const flags: FeatureFlags = {
  optionA: true,
  optionB: false,
  optionC: true
};

console.log("Option A:", flags.optionA);`,
        explanation: "Mapped types ('[K in Union]') are syntactically only valid inside 'type' declarations, not 'interface'."
      },
      {
        title: "Express Request Augmentation via Declaration Merging",
        scenario: "Model augmenting an Express Request object with a parsed user property.",
        solution: `interface RequestPayload {
  ip: string;
  url: string;
}

// Simulating middleware augmenting the request
interface RequestPayload {
  currentUser?: { id: string; email: string };
}

const req: RequestPayload = {
  ip: "127.0.0.1",
  url: "/dashboard",
  currentUser: { id: "u_99", email: "user@domain.com" }
};

console.log("Logged in user:", req.currentUser?.email);`,
        explanation: "Declaration merging allows libraries and middlewares to enrich standard request interfaces across packages."
      },
      {
        title: "Interface vs Type Decision Matrix",
        scenario: "A quick architectural summary to guide team styling decisions.",
        solution: `// Rule 1: Use interface for public APIs, object shapes, and classes
interface Repository<T> {
  findById(id: string): T | undefined;
}

// Rule 2: Use type for unions, primitives, tuples, and mapped types
type StatusOrError = "SUCCESS" | "FAILED" | "PENDING";
type StringTransformer = (input: string) => string;

const transform: StringTransformer = s => s.trim().toLowerCase();
console.log("Transformed:", transform("  HELLO WORLD  "));`,
        explanation: "Rule of thumb: Default to 'interface' for object structures and classes; use 'type' for unions, tuples, and advanced type gymnastics."
      }
    ]
  }
];
