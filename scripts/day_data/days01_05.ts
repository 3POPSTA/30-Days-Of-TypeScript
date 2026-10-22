import { DayExamplesData } from "./types.js";

export const days01_05: DayExamplesData[] = [
  {
    day: 1,
    examples: [
      {
        title: "Explicit vs Inferred Type Annotations",
        scenario: "Understand how TypeScript automatically infers types when values are assigned vs when you need explicit annotations.",
        solution: `// Inferred: TypeScript knows message is a string
let greeting = "Hello, TypeScript!";
// greeting = 42; // Error: Type 'number' is not assignable to type 'string'

// Explicit: Good for uninitialized variables or documentation
let targetUser: string;
targetUser = "Alice";

console.log(\`\${greeting} Target: \${targetUser}\`);`,
        explanation: "TypeScript uses local type inference to determine types at variable declaration. When declaring variables without immediate assignment, explicit annotations prevent them from falling back to 'any'."
      },
      {
        title: "Strongly Typed Function Parameters & Return Types",
        scenario: "Ensure functions only accept valid argument types and guarantee the return type shape.",
        solution: `function calculateTotal(price: number, taxRate: number, discount: number = 0): number {
  const taxable = price - discount;
  return taxable + taxable * taxRate;
}

const total: number = calculateTotal(100, 0.08, 10);
console.log("Calculated Total:", total.toFixed(2));`,
        explanation: "By specifying parameter types and the return type ': number', TypeScript enforces compile-time verification so callers cannot pass strings or undefined where numbers are expected."
      },
      {
        title: "Preventing Type Coercion Bugs at Compile Time",
        scenario: "JavaScript allows adding a string and a number resulting in string concatenation ('5' + 3 = '53'). Show how TS prevents this.",
        solution: `function addStrict(a: number, b: number): number {
  return a + b;
}

// In JavaScript: addStrict("50", 10) would produce "5010"
// In TypeScript:
const result = addStrict(50, 10);
console.log("Strict Math Result:", result);`,
        explanation: "TypeScript checks operands at compile time, eliminating subtle coercion bugs common in JavaScript codebases."
      },
      {
        title: "Configuring Compiler Options (tsconfig.json)",
        scenario: "Demonstrate how compiler flags like 'noImplicitAny' and 'strictNullChecks' protect against unsafe patterns.",
        solution: `// In tsconfig.json:
// {
//   "compilerOptions": {
//     "strict": true,
//     "noImplicitAny": true,
//     "strictNullChecks": true
//   }
// }

// Without strictNullChecks, string could be null at runtime.
// With strict, you must explicitly declare nullability:
function getLength(str: string | null): number {
  if (str === null) return 0;
  return str.length;
}

console.log("Length of 'Hello':", getLength("Hello"));
console.log("Length of null:", getLength(null));`,
        explanation: "Enabling strict mode in tsconfig.json activates a suite of type-checking behaviors that turn potential runtime crashes into compile-time errors."
      },
      {
        title: "Transpilation Output: TypeScript vs Emitted JavaScript",
        scenario: "Show how type annotations are completely erased during compilation, leaving clean standard JavaScript.",
        solution: `// TypeScript Source:
interface UserProfile {
  name: string;
  role: string;
}

function formatUser(user: UserProfile): string {
  return \`User: \${user.name} (\${user.role})\`;
}

// Emitted JavaScript (types stripped):
// function formatUser(user) {
//   return "User: " + user.name + " (" + user.role + ")";
// }

console.log(formatUser({ name: "Bob", role: "Developer" }));`,
        explanation: "TypeScript types have zero runtime overhead because the compiler completely strips interfaces and type annotations during transpilation."
      },
      {
        title: "Creating a Formatted System Welcome Logger",
        scenario: "Build a reusable logger that prints system environment details with strict typing.",
        solution: `interface SystemInfo {
  app: string;
  version: string;
  mode: "development" | "production";
}

function logSystemStartup(info: SystemInfo): void {
  console.log(\`=== \${info.app.toUpperCase()} v\${info.version} [\${info.mode}] ===\`);
}

logSystemStartup({ app: "TutorEngine", version: "1.0.0", mode: "development" });`,
        explanation: "Using structured interfaces for logger functions ensures that telemetry and startup diagnostics remain consistent across all modules."
      },
      {
        title: "Handling Null and Undefined Safely",
        scenario: "Safely process an optional greeting string without risking 'TypeError: Cannot read properties of undefined'.",
        solution: `function buildGreeting(name?: string): string {
  // Nullish coalescing operator '??' provides safe fallback
  const recipient = name ?? "Anonymous Learner";
  return \`Welcome to Day 01, \${recipient}!\`;
}

console.log(buildGreeting());
console.log(buildGreeting("Jordan"));`,
        explanation: "Optional parameters '?' allow callers to omit arguments, and TypeScript requires checking or falling back before using their properties."
      },
      {
        title: "Strongly Typed Mathematical Geometry Calculator",
        scenario: "Create a geometry helper that computes circumference and area of a circle with strict typing.",
        solution: `interface CircleMetrics {
  radius: number;
  circumference: number;
  area: number;
}

function computeCircle(radius: number): CircleMetrics {
  return {
    radius,
    circumference: 2 * Math.PI * radius,
    area: Math.PI * radius * radius
  };
}

const metrics = computeCircle(5);
console.log(\`Radius: \${metrics.radius}, Area: \${metrics.area.toFixed(2)}\`);`,
        explanation: "Returning an interface contract guarantees that consumer code receives all required properties with their correct numeric types."
      },
      {
        title: "Validating User Input Shape at Runtime & Compile Time",
        scenario: "Combine compile-time typing with a runtime check to validate user submission data.",
        solution: `interface Submission {
  username: string;
  day: number;
}

function isValidSubmission(data: any): data is Submission {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof data.username === "string" &&
    typeof data.day === "number"
  );
}

const input = { username: "charlie", day: 1 };
if (isValidSubmission(input)) {
  console.log(\`Valid submission: \${input.username} on Day \${input.day}\`);
}`,
        explanation: "TypeScript type predicates ('data is Submission') bridge runtime input checks with compile-time type narrowing."
      },
      {
        title: "Building an Application Configuration Initializer",
        scenario: "Initialize an application settings object with default fallbacks and strict validation.",
        solution: `interface AppConfig {
  readonly apiUrl: string;
  readonly timeoutMs: number;
  readonly debug: boolean;
}

function createConfig(overrides: Partial<AppConfig> = {}): AppConfig {
  return {
    apiUrl: overrides.apiUrl ?? "https://api.example.com",
    timeoutMs: overrides.timeoutMs ?? 5000,
    debug: overrides.debug ?? false
  };
}

const config = createConfig({ debug: true });
console.log("Config Initialized:", config);`,
        explanation: "Using 'Partial<AppConfig>' allows callers to supply only the settings they wish to customize, while returning a complete 'AppConfig' object."
      }
    ]
  },
  {
    day: 2,
    examples: [
      {
        title: "String Manipulation and Template Literals",
        scenario: "Format a user handle and notification count into a sanitized string with strict types.",
        solution: `function formatNotification(username: string, unreadCount: number): string {
  const sanitized = username.trim().toLowerCase();
  return \`@\${sanitized} has \${unreadCount} unread message\${unreadCount === 1 ? "" : "s"}.\`;
}

console.log(formatNotification("  ElenaDev  ", 3));`,
        explanation: "Primitive string variables give access to all standard string methods while enforcing that only valid strings are formatted."
      },
      {
        title: "Number Bases: Decimal, Hexadecimal, Binary, and Octal",
        scenario: "Declare and compute numbers in different bases with full compiler support.",
        solution: `const decimal: number = 42;
const hex: number = 0x2a;
const binary: number = 0b101010;
const octal: number = 0o52;

console.log("Are all representations equal?", decimal === hex && hex === binary && binary === octal);`,
        explanation: "TypeScript supports ES6 number literal prefixes (0x, 0b, 0o). They all resolve to the primitive 'number' type at runtime."
      },
      {
        title: "Boolean Flags and Conditional Branching",
        scenario: "Manage authentication and permission flags with strict boolean typing.",
        solution: `interface AccessToken {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

function evaluateAccess(token: AccessToken): string {
  if (token.isAuthenticated && token.isAdmin) {
    return "Full Admin Access Granted";
  }
  if (token.isAuthenticated) {
    return "Standard User Access Granted";
  }
  return "Access Denied: Please Log In";
}

console.log(evaluateAccess({ isAuthenticated: true, isAdmin: false }));`,
        explanation: "Primitive booleans ensure that branch conditions do not accidentally accept truthy or falsy objects without explicit evaluation."
      },
      {
        title: "BigInt for High-Precision Financial Transactions",
        scenario: "Handle large integer values beyond JavaScript's Number.MAX_SAFE_INTEGER using the BigInt primitive.",
        solution: `const microCentsPerBtc: bigint = 100_000_000_000_000n;
const transactionFee: bigint = 25_000n;
const totalDeduction: bigint = microCentsPerBtc + transactionFee;

console.log("Total Micro-cents:", totalDeduction.toString());`,
        explanation: "BigInt ('bigint') literals with suffix 'n' prevent precision loss when dealing with cryptographically large integers or financial micro-units."
      },
      {
        title: "Unique Symbols as Object Keys",
        scenario: "Use primitive symbols to create unique, non-colliding property keys on objects.",
        solution: `const INTERNAL_ID: unique symbol = Symbol("internal_id");

interface SecureRecord {
  [INTERNAL_ID]: string;
  name: string;
}

const record: SecureRecord = {
  [INTERNAL_ID]: "sec_98412",
  name: "Confidential Report"
};

console.log("Record Name:", record.name);
console.log("Symbol Key Value:", record[INTERNAL_ID]);`,
        explanation: "'unique symbol' provides guaranteed collision-free identifiers for internal properties and metaprogramming."
      },
      {
        title: "Strict Null and Undefined Handling",
        scenario: "Demonstrate how TypeScript prevents accessing properties on null or undefined values.",
        solution: `function findEmail(userId: number): string | undefined {
  const directory: Record<number, string> = { 1: "alice@test.com" };
  return directory[userId];
}

const email = findEmail(2);
// email.toLowerCase(); // Error: 'email' is possibly 'undefined'
if (email !== undefined) {
  console.log("Email found:", email.toLowerCase());
} else {
  console.log("User email not found.");
}`,
        explanation: "Under 'strictNullChecks', 'undefined' and 'null' are distinct types and must be narrowed before accessing member properties."
      },
      {
        title: "Cents-to-Dollars Currency Formatter",
        scenario: "Convert an integer amount in cents to a formatted currency string '$XX.YY'.",
        solution: `function formatCentsToCurrency(cents: number): string {
  const dollars = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(dollars);
}

console.log(formatCentsToCurrency(2499)); // $24.99`,
        explanation: "Primitive numbers work seamlessly with the ECMAScript Intl API to provide localized, strongly-typed formatting."
      },
      {
        title: "Binary String to Decimal Converter",
        scenario: "Parse a binary representation string into its decimal number value with validation.",
        solution: `function binaryToDecimal(binaryStr: string): number {
  if (!/^[01]+$/.test(binaryStr)) {
    throw new Error(\`Invalid binary string: \${binaryStr}\`);
  }
  return parseInt(binaryStr, 2);
}

console.log("Binary 1101 in decimal is:", binaryToDecimal("1101")); // 13`,
        explanation: "Combining regex validation with 'parseInt' ensures runtime safety while maintaining the strictly typed signature '(binaryStr: string): number'."
      },
      {
        title: "Safe String-to-Integer Parser with Fallback",
        scenario: "Parse an integer string and return a fallback default if parsing yields NaN.",
        solution: `function safeParseInt(raw: string, fallback: number = 0): number {
  const parsed = parseInt(raw, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

console.log("Parsed '42':", safeParseInt("42", 1));
console.log("Parsed 'bad_input':", safeParseInt("bad_input", 100));`,
        explanation: "NaN is technically of type 'number' in JavaScript; checking with 'Number.isNaN' is essential for robust numeric conversions."
      },
      {
        title: "Metadata Symbol Registry with Typed Lookup",
        scenario: "Store and retrieve metadata from an object using a well-defined Symbol key.",
        solution: `const CREATED_AT_KEY = Symbol("createdAt");

interface LogEntry {
  message: string;
  [CREATED_AT_KEY]: number;
}

function createLog(message: string): LogEntry {
  return {
    message,
    [CREATED_AT_KEY]: Date.now()
  };
}

const entry = createLog("System rebooted");
console.log("Message:", entry.message);
console.log("Logged timestamp:", new Date(entry[CREATED_AT_KEY]).toISOString());`,
        explanation: "Using symbols as metadata keys keeps internal diagnostic fields from accidentally appearing in normal object key enumerations."
      }
    ]
  },
  {
    day: 3,
    examples: [
      {
        title: "Why 'any' Breaks Type Safety",
        scenario: "Demonstrate how 'any' disables compiler protection and leads to unexpected runtime crashes.",
        solution: `let unsafeData: any = "just a string";

// Unsafe: Compiles without error, but crashes at runtime!
// unsafeData.nonExistentMethod();

// Safer approach: use unknown or explicit types
let safeData: unknown = "just a string";
if (typeof safeData === "string") {
  console.log("Length of safeData:", safeData.length);
}`,
        explanation: "'any' silences all compiler checks. Any call, property access, or assignment is allowed, abandoning TypeScript's benefits."
      },
      {
        title: "Safe API Response Handling with 'unknown'",
        scenario: "Safely process an unvalidated API JSON response by typing it as 'unknown' before inspection.",
        solution: `function parseApiResponse(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

const rawResponse = parseApiResponse('{"userId": 42, "role": "admin"}');

if (
  typeof rawResponse === "object" &&
  rawResponse !== null &&
  "userId" in rawResponse &&
  typeof (rawResponse as { userId: unknown }).userId === "number"
) {
  console.log("Verified User ID:", (rawResponse as { userId: number }).userId);
}`,
        explanation: "'unknown' requires explicit type checking before you can read properties or invoke methods, making it ideal for untrusted inputs."
      },
      {
        title: "Narrowing 'unknown' with Primitive Type Guards",
        scenario: "Write a function that accepts 'unknown' and formats it depending on whether it is a string, number, or boolean.",
        solution: `function formatUnknown(val: unknown): string {
  if (typeof val === "string") {
    return \`String: "\${val.trim()}"\`;
  }
  if (typeof val === "number") {
    return \`Number: \${val.toFixed(2)}\`;
  }
  if (typeof val === "boolean") {
    return \`Boolean: \${val ? "TRUE" : "FALSE"}\`;
  }
  return "Unsupported type";
}

console.log(formatUnknown("  hello  "));
console.log(formatUnknown(123.456));
console.log(formatUnknown(true));`,
        explanation: "TypeScript's control flow analysis narrows 'unknown' to specific primitives inside 'typeof' branches."
      },
      {
        title: "Understanding 'void' in Callback Return Types",
        scenario: "Observe how 'void' indicates that a function caller will ignore the return value.",
        solution: `type ClickHandler = (event: string) => void;

// Implementation can return a value, but the consumer will ignore it
const handleClick: ClickHandler = (event) => {
  console.log("Handled click for:", event);
  return true; // Allowed in callbacks with void return type!
};

handleClick("submitButton");`,
        explanation: "In TypeScript callback signatures, 'void' does not force the function to return 'undefined'; it signals that callers won't inspect the returned value."
      },
      {
        title: "Exhaustive Switch Checking with 'never'",
        scenario: "Use the 'never' type in the default branch of a switch statement to ensure all union variants are handled.",
        solution: `type UserRole = "guest" | "member" | "admin";

function getDashboardUrl(role: UserRole): string {
  switch (role) {
    case "guest": return "/public";
    case "member": return "/dashboard";
    case "admin": return "/admin-portal";
    default: {
      const _exhaustiveCheck: never = role;
      throw new Error(\`Unhandled role: \${_exhaustiveCheck}\`);
    }
  }
}

console.log("Admin Dashboard:", getDashboardUrl("admin"));`,
        explanation: "If you add a new role like 'superadmin' to 'UserRole' without adding a corresponding case branch, TypeScript fails to compile because 'role' cannot be assigned to 'never'."
      },
      {
        title: "Throwing Exceptions with 'never' Return Type",
        scenario: "Define a fail-fast assertion helper that never returns to its call site.",
        solution: `function panic(errorMessage: string): never {
  throw new Error(\`[CRITICAL FAILURE] \${errorMessage}\`);
}

function processPositiveNumber(num: number): number {
  if (num <= 0) {
    panic("Number must be strictly positive");
  }
  return Math.sqrt(num);
}

console.log("Square root of 25:", processPositiveNumber(25));`,
        explanation: "Functions that always throw an exception or never complete have a return type of 'never', allowing TypeScript to infer that subsequent code is unreachable if called."
      },
      {
        title: "Safe JSON Parser Returning 'unknown'",
        scenario: "Wrap 'JSON.parse' in a safe helper that catches syntax errors and returns 'unknown'.",
        solution: `function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

const parsed = safeJsonParse('{"status": "ok"}');
if (typeof parsed === "object" && parsed !== null && "status" in parsed) {
  console.log("Status:", (parsed as { status: unknown }).status);
}`,
        explanation: "Returning 'unknown' instead of 'any' from JSON parsing forces downstream consumers to validate data structures before use."
      },
      {
        title: "Infinite Polling Loop Typed as 'never'",
        scenario: "Type an endless event loop function as returning 'never'.",
        solution: `function infiniteHeartbeat(): never {
  while (true) {
    // In real apps: poll server or wait for socket event
    throw new Error("Loop terminated for demonstration");
  }
}

// Any code placed after infiniteHeartbeat() is recognized as unreachable by the compiler.`,
        explanation: "An infinite loop that never finishes execution without throwing has a return type of 'never'."
      },
      {
        title: "Contrasting 'void' vs 'undefined'",
        scenario: "Understand when a function must explicitly return 'undefined' vs when it returns 'void'.",
        solution: `// Returns void: does not require a return statement
function logMessage(msg: string): void {
  console.log("LOG:", msg);
}

// Returns undefined: MUST explicitly return undefined
function getNothing(): undefined {
  return undefined;
}

logMessage("System initialized");
console.log("Explicit undefined:", getNothing());`,
        explanation: "'void' represents the absence of a meaningful return value. 'undefined' is a literal JavaScript primitive value that must be explicitly returned if declared."
      },
      {
        title: "Type-Safe Event Dispatcher with 'void' Listeners",
        scenario: "Build a mini event listener registry where callbacks perform side-effects without returning data.",
        solution: `type Listener = (data: string) => void;

class SimpleEmitter {
  private listeners: Listener[] = [];

  subscribe(fn: Listener): void {
    this.listeners.push(fn);
  }

  emit(data: string): void {
    for (const fn of this.listeners) {
      fn(data);
    }
  }
}

const emitter = new SimpleEmitter();
emitter.subscribe((msg) => console.log("Received:", msg));
emitter.emit("Hello Subscribers!");`,
        explanation: "Typing event handlers as '(data: string) => void' documents that the emitter will trigger the function purely for its side effects."
      }
    ]
  },
  {
    day: 4,
    examples: [
      {
        title: "Standard Array Declarations and Generics",
        scenario: "Declare arrays using both the shorthand 'T[]' and generic 'Array<T>' notations.",
        solution: `const scores: number[] = [95, 88, 92];
const tags: Array<string> = ["typescript", "programming", "tutorial"];

scores.push(100);
tags.push("education");

console.log("Scores Count:", scores.length);
console.log("Tags:", tags.join(", "));`,
        explanation: "'T[]' and 'Array<T>' are semantically identical in TypeScript. 'T[]' is typically preferred for brevity and readability."
      },
      {
        title: "Immutability with 'readonly T[]' and 'ReadonlyArray<T>'",
        scenario: "Prevent array mutation bugs by enforcing read-only constraints.",
        solution: `function calculateAverage(numbers: readonly number[]): number {
  // numbers.push(10); // Compile Error: Property 'push' does not exist on type 'readonly number[]'
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

const examResults: readonly number[] = [80, 90, 85];
console.log("Average Score:", calculateAverage(examResults));`,
        explanation: "'readonly T[]' disables mutating methods like push, pop, shift, and splice, guaranteeing data integrity across function calls."
      },
      {
        title: "Multidimensional Arrays and 2D Grids",
        scenario: "Model a 2D tic-tac-toe or chessboard grid with strongly typed rows and columns.",
        solution: `type Cell = "X" | "O" | null;
type Grid = Cell[][];

const board: Grid = [
  ["X", "O", "X"],
  [null, "X", "O"],
  ["O", null, "X"]
];

function printRow(row: Cell[]): string {
  return row.map(c => c ?? "-").join(" | ");
}

console.log("Board Row 1:", printRow(board[0]));`,
        explanation: "Multi-dimensional arrays like 'Cell[][]' preserve element typing across nested array indexing."
      },
      {
        title: "Type-Safe Array Filtering and Searching",
        scenario: "Filter an array of numbers and search for specific matches with strict inference.",
        solution: `const readings: number[] = [12, -4, 25, 0, 31, -8];

const positiveReadings: number[] = readings.filter(r => r > 0);
const firstColdSnap: number | undefined = readings.find(r => r < 0);

console.log("Positive readings:", positiveReadings);
console.log("First cold reading:", firstColdSnap);`,
        explanation: "Array methods like '.filter()' and '.find()' automatically retain the element types or return 'T | undefined' for search methods."
      },
      {
        title: "Typed Array Transformations with '.map()'",
        scenario: "Transform an array of product objects into a list of formatted price tags.",
        solution: `interface Product {
  id: number;
  name: string;
  price: number;
}

const inventory: Product[] = [
  { id: 1, name: "Keyboard", price: 79.99 },
  { id: 2, name: "Mouse", price: 49.50 }
];

const priceLabels: string[] = inventory.map(item => \`\${item.name}: $\${item.price.toFixed(2)}\`);
console.log(priceLabels);`,
        explanation: "TypeScript infers the return type of '.map(callback)' based on the return type of the callback function."
      },
      {
        title: "Complex Aggregation with '.reduce()' and Explicit Generics",
        scenario: "Group numbers into a summary object counting positives and negatives.",
        solution: `interface NumberSummary {
  positives: number;
  negatives: number;
  zeros: number;
}

const numbers = [10, -5, 0, 20, -15, 0, 30];

const summary = numbers.reduce<NumberSummary>(
  (acc, curr) => {
    if (curr > 0) acc.positives++;
    else if (curr < 0) acc.negatives++;
    else acc.zeros++;
    return acc;
  },
  { positives: 0, negatives: 0, zeros: 0 }
);

console.log("Summary:", summary);`,
        explanation: "Passing an explicit type argument to '.reduce<T>()' ensures the accumulator is strictly typed from initialization to final return."
      },
      {
        title: "Flattening Multi-Dimensional Arrays with '.flat()'",
        scenario: "Flatten an array of category tags into a single list with inferred types.",
        solution: `const nestedTags: string[][] = [
  ["frontend", "react"],
  ["backend", "node", "typescript"],
  ["devops", "docker"]
];

const flattened: string[] = nestedTags.flat();
console.log("Flattened tags:", flattened);`,
        explanation: "TypeScript's standard library typings accurately infer the depth and output type of the ES2019 '.flat()' method."
      },
      {
        title: "Matrix Transposition Function",
        scenario: "Transpose an NxM numeric matrix into an MxN matrix with strict array types.",
        solution: `function transposeMatrix(matrix: number[][]): number[][] {
  if (matrix.length === 0) return [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: number[][] = [];

  for (let c = 0; c < cols; c++) {
    const newRow: number[] = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    result.push(newRow);
  }
  return result;
}

const original = [[1, 2], [3, 4], [5, 6]];
console.log("Transposed:", transposeMatrix(original)); // [[1, 3, 5], [2, 4, 6]]`,
        explanation: "Nested array operations maintain strict type checking inside multi-tier loops."
      },
      {
        title: "Generic Array Chunking Utility",
        scenario: "Split an array into smaller chunks of a specified size.",
        solution: `function chunkArray<T>(items: readonly T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
}

const letters = ["a", "b", "c", "d", "e"];
console.log("Chunks of 2:", chunkArray(letters, 2));`,
        explanation: "By combining generics '<T>' with arrays, the chunking utility works seamlessly on any type (numbers, strings, objects) without losing type fidelity."
      },
      {
        title: "Immutable List State Operations (Add, Update, Remove)",
        scenario: "Perform standard immutable state management operations on an array.",
        solution: `interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialTasks: readonly Task[] = [
  { id: 1, title: "Learn TypeScript", completed: true },
  { id: 2, title: "Build a project", completed: false }
];

// 1. Add
const added = [...initialTasks, { id: 3, title: "Deploy to cloud", completed: false }];

// 2. Update
const updated = added.map(t => t.id === 2 ? { ...t, completed: true } : t);

// 3. Remove
const removed = updated.filter(t => t.id !== 1);

console.log("Remaining tasks:", removed.map(t => t.title));`,
        explanation: "Using spread operators, '.map()', and '.filter()' produces new immutable arrays satisfying 'readonly' constraints."
      }
    ]
  },
  {
    day: 5,
    examples: [
      {
        title: "Defining Fixed-Length Coordinates with Tuples",
        scenario: "Model a 2D or 3D coordinate point where each position has a specific type and length.",
        solution: `type Point2D = [x: number, y: number];
type Point3D = [x: number, y: number, z: number];

const origin: Point2D = [0, 0];
const target: Point3D = [10, 20, 30];

console.log(\`2D Origin: (\${origin[0]}, \${origin[1]})\`);
console.log(\`3D Target: (\${target[0]}, \${target[1]}, \${target[2]})\`);`,
        explanation: "Tuples guarantee both the exact number of elements and the type of each element at each specific index."
      },
      {
        title: "Labeled Tuples for Function Arguments",
        scenario: "Use labeled tuple elements to improve IntelliSense and documentation for tuple types.",
        solution: `type HttpResponse = [statusCode: number, statusText: string, isOk: boolean];

function handleResponse(res: HttpResponse): void {
  const [code, text, ok] = res;
  console.log(\`[\${code}] \${text} - OK? \${ok}\`);
}

handleResponse([200, "OK", true]);
handleResponse([404, "Not Found", false]);`,
        explanation: "Labeled elements like '[statusCode: number, statusText: string]' provide descriptive names in editor tooltips without altering runtime behavior."
      },
      {
        title: "Optional Elements in Tuples",
        scenario: "Define a tuple where trailing elements can be optionally provided.",
        solution: `type UserEntry = [id: number, name: string, nickname?: string];

const user1: UserEntry = [101, "Margaret"];
const user2: UserEntry = [102, "Alexander", "Alex"];

console.log("User 1:", user1[1], "Nickname:", user1[2] ?? "None");
console.log("User 2:", user2[1], "Nickname:", user2[2]);`,
        explanation: "A '?' on a tuple element makes it optional, allowing the tuple to vary between a minimum and maximum length."
      },
      {
        title: "Rest Elements in Tuples for Variadic Signatures",
        scenario: "Declare a tuple with a fixed head and variable-length trailing elements.",
        solution: `type TeamRoster = [teamLeader: string, ...members: string[]];

const engineering: TeamRoster = ["Alice", "Bob", "Charlie", "Diana"];

console.log("Leader:", engineering[0]);
console.log("Team Members:", engineering.slice(1).join(", "));`,
        explanation: "The rest operator '...members: string[]' in a tuple models non-empty lists with at least one element followed by zero or more elements."
      },
      {
        title: "'as const' Assertions for Immutable Readonly Tuples",
        scenario: "Lock an array literal into a readonly tuple with literal types using 'as const'.",
        solution: `const directions = ["NORTH", "EAST", "SOUTH", "WEST"] as const;
// directions is inferred as: readonly ["NORTH", "EAST", "SOUTH", "WEST"]

// directions.push("UP"); // Error: Cannot mutate readonly tuple
console.log("Primary direction:", directions[0]);`,
        explanation: "'as const' prevents type widening, converting mutable arrays into readonly tuples of literal types."
      },
      {
        title: "Emulating React's 'useState' Return Signature",
        scenario: "Create a state-holder function that returns a '[value, setter]' tuple with proper types.",
        solution: `function makeState<T>(initialValue: T): [() => T, (newValue: T) => void] {
  let current = initialValue;
  const get = () => current;
  const set = (newValue: T) => { current = newValue; };
  return [get, set];
}

const [getCount, setCount] = makeState(0);
console.log("Initial count:", getCount());
setCount(42);
console.log("Updated count:", getCount());`,
        explanation: "Returning a tuple '[get, set]' allows clean destructuring with guaranteed positional types."
      },
      {
        title: "Parsing CSV Row Strings into Typed Tuples",
        scenario: "Convert a comma-separated string into a strictly typed tuple representing database records.",
        solution: `type CsvUserRecord = [id: number, username: string, active: boolean];

function parseUserCsv(row: string): CsvUserRecord {
  const parts = row.split(",");
  return [
    parseInt(parts[0], 10),
    parts[1].trim(),
    parts[2].trim() === "true"
  ];
}

const record = parseUserCsv("42, SarahConnor, true");
console.log(\`Parsed User \${record[1]} (ID: \${record[0]})\`);`,
        explanation: "Tuples ensure that structured tabular rows maintain strictly typed columns."
      },
      {
        title: "Key-Value Pair Lookup Table using Tuples",
        scenario: "Store configuration lookup entries as an array of '[key, value]' tuples.",
        solution: `type ConfigEntry = [key: string, value: string | number];

const appConfigTable: ConfigEntry[] = [
  ["host", "localhost"],
  ["port", 8080],
  ["ssl", "false"]
];

function findConfig(table: ConfigEntry[], key: string): string | number | undefined {
  const match = table.find(entry => entry[0] === key);
  return match ? match[1] : undefined;
}

console.log("Port setting:", findConfig(appConfigTable, "port"));`,
        explanation: "Arrays of 2-element tuples '[K, V]' model key-value pairs cleanly and map directly to 'Map' constructor entries."
      },
      {
        title: "Tuple Destructuring with Rest Operators",
        scenario: "Extract specific positional items from a tuple while grouping the rest.",
        solution: `type BenchmarkData = [metricName: string, durationMs: number, ...tags: string[]];

const run: BenchmarkData = ["RenderTree", 14.5, "ui", "critical", "v2"];
const [metric, duration, ...categories] = run;

console.log(\`Benchmark: \${metric} took \${duration}ms\`);
console.log("Tags:", categories);`,
        explanation: "Tuple destructuring syntax in TypeScript mirrors JavaScript destructuring while preserving individual types."
      },
      {
        title: "Array Zip Function Returning Tuple Pairs",
        scenario: "Combine two equal-length arrays into an array of pair tuples.",
        solution: `function zip<T, U>(listA: readonly T[], listB: readonly U[]): [T, U][] {
  const length = Math.min(listA.length, listB.length);
  const result: [T, U][] = [];
  for (let i = 0; i < length; i++) {
    result.push([listA[i], listB[i]]);
  }
  return result;
}

const ids = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];
const paired = zip(ids, names);

console.log("Paired items:", paired);`,
        explanation: "The generic return type '[T, U][]' accurately represents pairs of elements merged from two input arrays."
      }
    ]
  }
];
