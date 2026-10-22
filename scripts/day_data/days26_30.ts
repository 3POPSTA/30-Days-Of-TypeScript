import { DayExamplesData } from "./types.js";

export const days26_30: DayExamplesData[] = [
  {
    day: 26,
    examples: [
      {
        title: "Extracting Function Return Types ('MyReturnType<T>')",
        scenario: "Deduce the return type of any function type using the 'infer' keyword.",
        solution: `type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchUser() {
  return { id: 101, username: "AdaLovelace", verified: true };
}

type UserResult = MyReturnType<typeof fetchUser>;
// Inferred: { id: number; username: string; verified: boolean }

const user: UserResult = { id: 101, username: "AdaLovelace", verified: true };
console.log("Extracted return type:", user.username);`,
        explanation: "'infer R' declares a new type variable within the conditional 'extends' clause that the compiler deduces from context."
      },
      {
        title: "Extracting Function Parameter Types ('MyParameters<T>')",
        scenario: "Unpack function parameter lists into a tuple type.",
        solution: `type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

function notify(userId: string, count: number, urgent: boolean): void {}

type NotifyArgs = MyParameters<typeof notify>; // [userId: string, count: number, urgent: boolean]

const args: NotifyArgs = ["usr_1", 3, true];
notify(...args);
console.log("Parameters unpacked:", args);`,
        explanation: "'infer P' captures the entire argument list as a labeled tuple type."
      },
      {
        title: "Unwrapping Promise Values ('UnwrapPromise<T>')",
        scenario: "Unwrap single or nested Promise types into their inner resolved values.",
        solution: `type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

type DeepPromise = Promise<Promise<string>>;
type Resolved = UnwrapPromise<DeepPromise>; // string

const message: Resolved = "Resolved from nested promise";
console.log("Unwrapped:", message);`,
        explanation: "Recursive conditional types with 'infer' repeatedly unwrap nested Promises, identical to the standard 'Awaited<T>' utility."
      },
      {
        title: "Extracting Array Element Types ('ElementType<T>')",
        scenario: "Extract the underlying item type of an array or readonly array.",
        solution: `type ElementType<T> = T extends readonly (infer E)[] ? E : never;

type Scores = number[];
type ScoreElement = ElementType<Scores>; // number

type Colors = readonly ["red", "green", "blue"];
type ColorElement = ElementType<typeof Colors>; // "red" | "green" | "blue"

const c: ColorElement = "green";
console.log("Extracted array element:", c);`,
        explanation: "'infer E' extracts the element type regardless of whether the array is mutable or readonly."
      },
      {
        title: "Extracting Constructor Parameters ('MyConstructorParameters<T>')",
        scenario: "Capture the constructor arguments of any instantiable class.",
        solution: `type MyConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;

class HttpClient {
  constructor(public baseUrl: string, public timeoutMs: number = 3000) {}
}

type ClientArgs = MyConstructorParameters<typeof HttpClient>; // [baseUrl: string, timeoutMs?: number]

const params: ClientArgs = ["https://api.github.com", 5000];
const client = new HttpClient(...params);
console.log("Client Base URL:", client.baseUrl);`,
        explanation: "'infer P' on a constructor signature captures the constructor's parameters as a tuple."
      },
      {
        title: "Unwrapping Custom Generic Containers",
        scenario: "Extract the payload type from a custom Container or Response envelope.",
        solution: `interface Envelope<T> {
  payload: T;
  checksum: string;
}

type UnwrapPayload<T> = T extends Envelope<infer P> ? P : never;

type StringEnvelope = Envelope<{ token: string; expires: number }>;
type Inner = UnwrapPayload<StringEnvelope>;

const innerData: Inner = { token: "abc", expires: 3600 };
console.log("Token:", innerData.token);`,
        explanation: "'infer' can target any type argument in any generic interface or type structure."
      },
      {
        title: "Extracting Tuple Head and Tail",
        scenario: "Separate a tuple into its first element ('Head') and remaining elements ('Tail').",
        solution: `type Shift<T extends any[]> = T extends [infer Head, ...infer Tail] ? Tail : [];
type First<T extends any[]> = T extends [infer Head, ...any[]] ? Head : never;

type FullTuple = [string, number, boolean];
type OnlyFirst = First<FullTuple>; // string
type Remaining = Shift<FullTuple>; // [number, boolean]

const head: OnlyFirst = "Leader";
const tail: Remaining = [42, true];
console.log("Head:", head, "Tail:", tail);`,
        explanation: "Combining 'infer' with tuple rest patterns allows type-level functional array manipulation."
      },
      {
        title: "Inferring String Template Parts",
        scenario: "Extract protocol and domain components from a URL string type.",
        solution: `type ParseUrl<T extends string> =
  T extends \`\${infer Protocol}://\${infer Domain}/\${infer Path}\`
    ? { protocol: Protocol; domain: Domain; path: Path }
    : never;

type Parsed = ParseUrl<"https://typescriptlang.org/docs">;
// { protocol: "https"; domain: "typescriptlang.org"; path: "docs" }

const urlInfo: Parsed = {
  protocol: "https",
  domain: "typescriptlang.org",
  path: "docs"
};

console.log("Parsed Domain:", urlInfo.domain);`,
        explanation: "Using multiple 'infer' variables inside template literal types parses structured strings at compile time."
      },
      {
        title: "Extracting Method Return Types from Class Interfaces",
        scenario: "Extract the return type of a specific method across an interface.",
        solution: `interface DatabaseClient {
  query(sql: string): Promise<Record<string, unknown>[]>;
  disconnect(): void;
}

type QueryReturn = DatabaseClient["query"] extends (...args: any[]) => infer R ? R : never;

async function runQuery(): QueryReturn {
  return [{ id: 1, name: "Sample" }];
}

runQuery().then(rows => console.log("Queried rows:", rows.length));`,
        explanation: "'infer' extracts inner method return signatures even when combined with indexed access."
      },
      {
        title: "Inferring Reducer State and Actions",
        scenario: "Automatically infer state and action types from a reducer function.",
        solution: `type InferReducer<T> = T extends (state: infer S, action: infer A) => infer S
  ? { state: S; action: A }
  : never;

const myReducer = (state: { count: number }, action: { type: "INC" } | { type: "DEC" }) => {
  return state;
};

type InferredTypes = InferReducer<typeof myReducer>;
const dummyAction: InferredTypes["action"] = { type: "INC" };
console.log("Action type:", dummyAction.type);`,
        explanation: "'infer' can capture both state and action parameters simultaneously from higher-order patterns."
      }
    ]
  },
  {
    day: 27,
    examples: [
      {
        title: "'Partial<T>' for Entity Patch Payloads",
        scenario: "Create an update function that accepts any subset of an entity's fields.",
        solution: `interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
}

function updateUser(original: User, patch: Partial<User>): User {
  return { ...original, ...patch };
}

const current: User = { id: "1", name: "Ada", email: "ada@lovelace.com", bio: "Mathematician" };
const updated = updateUser(current, { bio: "First Computer Programmer" });

console.log("Updated bio:", updated.bio);`,
        explanation: "'Partial<T>' makes all properties of 'T' optional, perfect for HTTP PATCH endpoints and updates."
      },
      {
        title: "'Required<T>' for Complete Configurations",
        scenario: "Convert optional configuration fields into strictly mandatory properties.",
        solution: `interface AppSettings {
  env?: "dev" | "prod";
  port?: number;
}

function startApplication(config: Required<AppSettings>): void {
  console.log(\`Running in \${config.env} on port \${config.port}\`);
}

startApplication({ env: "prod", port: 8080 });`,
        explanation: "'Required<T>' strips all '?' modifiers, guaranteeing that no properties are undefined."
      },
      {
        title: "'Readonly<T>' for Immutable Snapshots",
        scenario: "Freeze entity objects so callers cannot accidentally modify properties.",
        solution: `interface Point { x: number; y: number }

function getOrigin(): Readonly<Point> {
  return { x: 0, y: 0 };
}

const origin = getOrigin();
// origin.x = 10; // Error: Cannot assign to 'x' because it is a read-only property.
console.log("Origin coordinates:", origin.x, origin.y);`,
        explanation: "'Readonly<T>' marks every property as read-only, protecting internal states."
      },
      {
        title: "'Record<K, T>' for Key-Value Dictionaries",
        scenario: "Map a union of countries to their currency symbols using 'Record<K, T>'.",
        solution: `type CountryCode = "US" | "UK" | "JP";

const currencyMap: Record<CountryCode, string> = {
  US: "USD ($)",
  UK: "GBP (£)",
  JP: "JPY (¥)"
};

console.log("Japan Currency:", currencyMap["JP"]);`,
        explanation: "'Record<Keys, Type>' builds an object type whose keys are 'Keys' and values are 'Type'."
      },
      {
        title: "'Pick<T, K>' for Selecting Entity Subsets",
        scenario: "Select only the publicly shareable properties of a user profile.",
        solution: `interface FullUser {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
}

type PublicUser = Pick<FullUser, "id" | "username">;

const publicProfile: PublicUser = {
  id: "u_42",
  username: "Ada"
};

console.log("Public profile:", publicProfile);`,
        explanation: "'Pick<T, K>' creates a new type containing only the keys specified in 'K'."
      },
      {
        title: "'Omit<T, K>' for Sanitizing Sensitive Fields",
        scenario: "Exclude sensitive fields like passwords and tokens from database responses.",
        solution: `interface UserAccount {
  id: string;
  email: string;
  salt: string;
  hashedSecret: string;
}

type SafeUserAccount = Omit<UserAccount, "salt" | "hashedSecret">;

const safeAccount: SafeUserAccount = {
  id: "acc_1",
  email: "user@domain.com"
};

console.log("Safe Account:", safeAccount);`,
        explanation: "'Omit<T, K>' constructs a type by removing the specified keys 'K' from 'T'."
      },
      {
        title: "Combining 'Pick' and 'Omit' for DTO Transformation",
        scenario: "Build a create request DTO by omitting system IDs and picking desired fields.",
        solution: `interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  createdAt: Date;
}

type CreateProductDTO = Omit<Product, "id" | "createdAt"> & {
  initialStock: number;
};

const newProduct: CreateProductDTO = {
  sku: "BOOK-001",
  name: "TypeScript Deep Dive",
  price: 39.99,
  initialStock: 100
};

console.log("New Product SKU:", newProduct.sku);`,
        explanation: "Combining utility types with intersections enables flexible Data Transfer Object modeling."
      },
      {
        title: "Custom 'RequireAtLeastOne<T>' Using Standard Utilities",
        scenario: "Require that callers provide at least one contact method (email or phone).",
        solution: `type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

interface ContactInfo {
  email?: string;
  phone?: string;
}

type ValidContact = RequireAtLeastOne<ContactInfo>;

const c1: ValidContact = { email: "test@domain.com" }; // Valid
const c2: ValidContact = { phone: "+123456789" };      // Valid
// const c3: ValidContact = {}; // Error!

console.log("Contact 1:", c1);`,
        explanation: "Composing standard utility types lets you enforce sophisticated domain rules like 'at least one property'."
      },
      {
        title: "Custom 'DeepPartial<T>' Architecture",
        scenario: "Recursively make all nested properties of an object optional.",
        solution: `type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface Company {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

const partialCompany: DeepPartial<Company> = {
  address: {
    city: "Seattle" // Street and name omitted!
  }
};

console.log("Partial city:", partialCompany.address?.city);`,
        explanation: "Recursive mapped types build custom utility extensions that handle deeply nested object graphs."
      },
      {
        title: "Real-World User Management Service Using Utility Types",
        scenario: "Demonstrate a complete CRUD service interface built entirely using standard utilities.",
        solution: `interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}

interface UserService {
  create(payload: Omit<UserEntity, "id" | "createdAt">): UserEntity;
  update(id: string, patch: Partial<Omit<UserEntity, "id">>): UserEntity;
  list(): ReadonlyArray<UserEntity>;
}

const service: UserService = {
  create(p) { return { ...p, id: "1", createdAt: new Date() }; },
  update(id, patch) { return { id, name: "Name", email: "e", role: "user", createdAt: new Date(), ...patch }; },
  list() { return []; }
};

const user = service.create({ name: "Alan", email: "alan@turing.org", role: "admin" });
console.log("Created user role:", user.role);`,
        explanation: "Using utility types across service interfaces keeps method inputs tightly constrained and eliminates duplicate types."
      }
    ]
  },
  {
    day: 28,
    examples: [
      {
        title: "'Exclude<T, U>' for Filtering Unions",
        scenario: "Remove unwanted types from a union.",
        solution: `type AllActions = "START" | "STOP" | "PAUSE" | "RESUME";
type ActiveActions = Exclude<AllActions, "STOP">; // "START" | "PAUSE" | "RESUME"

function triggerAction(action: ActiveActions): void {
  console.log("Triggered:", action);
}

triggerAction("START");
triggerAction("RESUME");`,
        explanation: "'Exclude<T, U>' checks each member of 'T' and excludes those that extend 'U'."
      },
      {
        title: "'Extract<T, U>' for Selecting Matching Variants",
        scenario: "Extract only the members of a union that match a target criteria.",
        solution: `type Event =
  | { type: "click"; x: number; y: number }
  | { type: "hover"; element: string }
  | { type: "keydown"; key: string };

type MouseEvents = Extract<Event, { x: number }>; // { type: "click"; x: number; y: number }

const clickEvt: MouseEvents = { type: "click", x: 100, y: 200 };
console.log("Mouse Click X:", clickEvt.x);`,
        explanation: "'Extract<T, U>' retains only those union members that are assignable to 'U'."
      },
      {
        title: "'NonNullable<T>' for Purging Null and Undefined",
        scenario: "Purge null and undefined types from a union of nullable values.",
        solution: `type PossibleGreeting = string | null | undefined;
type DefiniteGreeting = NonNullable<PossibleGreeting>; // strictly string

function greet(msg: DefiniteGreeting): void {
  console.log("Greeting:", msg.toUpperCase());
}

greet("Welcome aboard!");`,
        explanation: "'NonNullable<T>' excludes 'null' and 'undefined' from any union."
      },
      {
        title: "'Parameters<T>' for Intercepting Function Arguments",
        scenario: "Extract and forward arguments from an existing function.",
        solution: `function sendEmail(to: string, subject: string, body: string): boolean {
  console.log(\`Sending to \${to}: \${subject}\`);
  return true;
}

type SendEmailArgs = Parameters<typeof sendEmail>;

function sendEmailWithLog(...args: SendEmailArgs): boolean {
  console.log("[AUDIT LOG] Email initiated");
  return sendEmail(...args);
}

sendEmailWithLog("dev@team.com", "Release Notes", "Version 2.0 deployed.");`,
        explanation: "'Parameters<T>' extracts a function's parameter types as a tuple, making decorators and proxies type-safe."
      },
      {
        title: "'ReturnType<T>' for Dynamic Factory Typing",
        scenario: "Infer the complex return object of a factory function without manual interface duplication.",
        solution: `function makeStore() {
  return {
    state: { counter: 0, theme: "dark" as const },
    increment() {},
    toggleTheme() {}
  };
}

type Store = ReturnType<typeof makeStore>;

function inspectStore(s: Store): void {
  console.log("Store theme:", s.state.theme);
}

inspectStore(makeStore());`,
        explanation: "'ReturnType<T>' extracts whatever type a function returns, ensuring factory consumers stay automatically synchronized."
      },
      {
        title: "'ConstructorParameters<T>' & 'InstanceType<T>' for Dependency Injection",
        scenario: "Dynamically instantiate classes within an IoC container.",
        solution: `class MailService {
  constructor(public apiKey: string) {}
  send() { console.log("Sent via", this.apiKey); }
}

type MailParams = ConstructorParameters<typeof MailService>; // [apiKey: string]
type MailInstance = InstanceType<typeof MailService>;       // MailService

function createService(args: MailParams): MailInstance {
  return new MailService(...args);
}

const service = createService(["api_secret_key"]);
service.send();`,
        explanation: "'ConstructorParameters' and 'InstanceType' allow factory functions to instantiate arbitrary classes safely."
      },
      {
        title: "'ThisParameterType<T>' and 'OmitThisParameter<T>'",
        scenario: "Extract or remove explicit 'this' parameter types from function signatures.",
        solution: `function describeCircle(this: { radius: number }, unit: string): string {
  return \`Circle of \${this.radius} \${unit}\`;
}

type BoundDescriber = OmitThisParameter<typeof describeCircle>;

const circle = { radius: 5 };
const bound: BoundDescriber = describeCircle.bind(circle);

console.log(bound("meters"));`,
        explanation: "'OmitThisParameter<T>' produces a function type with the explicit 'this' parameter removed."
      },
      {
        title: "'Awaited<T>' for Deep Promise Unwrapping",
        scenario: "Extract the eventual resolved value from nested or async return types.",
        solution: `async function fetchStats() {
  return { activeUsers: 450, servers: 12 };
}

type Stats = Awaited<ReturnType<typeof fetchStats>>;

const currentStats: Stats = { activeUsers: 500, servers: 14 };
console.log("Active users:", currentStats.activeUsers);`,
        explanation: "'Awaited<T>' unwraps Promises, recursively flattening any nested Promise layers."
      },
      {
        title: "Type-Safe Event Broker with Utility Types",
        scenario: "Build a generic event broker using 'Parameters' and 'Record'.",
        solution: `interface EventSignatures {
  userRegistered: (id: string, name: string) => void;
  orderPlaced: (orderId: number, total: number) => void;
}

class EventBroker {
  private handlers: { [K in keyof EventSignatures]?: EventSignatures[K][] } = {};

  on<K extends keyof EventSignatures>(event: K, handler: EventSignatures[K]): void {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event]!.push(handler);
  }

  emit<K extends keyof EventSignatures>(event: K, ...args: Parameters<EventSignatures[K]>): void {
    const list = this.handlers[event] ?? [];
    for (const fn of list) {
      (fn as any)(...args);
    }
  }
}

const broker = new EventBroker();
broker.on("userRegistered", (id, name) => console.log(\`Registered \${name} (\${id})\`));
broker.emit("userRegistered", "usr_101", "Grace Hopper");`,
        explanation: "'Parameters<EventSignatures[K]>' guarantees that 'emit' only accepts the exact argument types defined for that specific event."
      },
      {
        title: "Composing Custom High-Level Utility Combinators",
        scenario: "Combine Exclude and Extract to compute difference and symmetric difference between unions.",
        solution: `type Diff<T, U> = Exclude<T, U>;
type Common<T, U> = Extract<T, U>;
type SymmetricDiff<T, U> = Diff<T, U> | Diff<U, T>;

type SetA = "a" | "b" | "c";
type SetB = "b" | "c" | "d";

type OnlyInA = Diff<SetA, SetB>;               // "a"
type InBoth = Common<SetA, SetB>;              // "b" | "c"
type UniqueToEither = SymmetricDiff<SetA, SetB>; // "a" | "d"

const diffVal: UniqueToEither = "d";
console.log("Unique element:", diffVal);`,
        explanation: "Combining basic utility types enables set-theoretic type manipulation directly within TypeScript."
      }
    ]
  },
  {
    day: 29,
    examples: [
      {
        title: "Typing Async Functions and Promises ('Promise<T>')",
        scenario: "Ensure asynchronous functions declare their resolved value types explicitly.",
        solution: `async function fetchMetric(id: string): Promise<number> {
  // Simulating async network delay
  return 42.8;
}

fetchMetric("cpu_usage").then(val => {
  console.log("Fetched metric value:", val.toFixed(2));
});`,
        explanation: "All 'async' functions return a 'Promise<T>', and the compiler prevents returning values that don't match 'T'."
      },
      {
        title: "Parallel Async Operations with 'Promise.all' and Tuple Types",
        scenario: "Run multiple promises concurrently while preserving the distinct return type of each.",
        solution: `async function fetchUser(): Promise<{ name: string }> { return { name: "Alice" }; }
async function fetchScore(): Promise<number> { return 98; }

async function loadDashboard(): Promise<void> {
  // TypeScript infers the exact tuple: [{ name: string }, number]
  const [user, score] = await Promise.all([fetchUser(), fetchScore()]);
  console.log(\`Dashboard: User \${user.name} has score \${score}\`);
}

loadDashboard();`,
        explanation: "Promise.all preserves the positional types of input promises as a strongly typed tuple."
      },
      {
        title: "Handling Partial Failures with 'Promise.allSettled'",
        scenario: "Safely process a batch of promises where some may succeed and others fail.",
        solution: `async function taskOk(): Promise<string> { return "Success"; }
async function taskFail(): Promise<string> { throw new Error("Network timeout"); }

async function runBatch(): Promise<void> {
  const results = await Promise.allSettled([taskOk(), taskFail()]);

  for (const res of results) {
    if (res.status === "fulfilled") {
      console.log("Fulfilled with value:", res.value);
    } else {
      console.error("Rejected with reason:", (res.reason as Error).message);
    }
  }
}

runBatch();`,
        explanation: "'Promise.allSettled' returns a discriminated union with status 'fulfilled' (holding 'value') or 'rejected' (holding 'reason')."
      },
      {
        title: "The Result / Either Monad Pattern ('Result<T, E>')",
        scenario: "Return errors as values to avoid unhandled try/catch exceptions.",
        solution: `type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

function safeDivide(num: number, denom: number): Result<number, string> {
  if (denom === 0) {
    return { ok: false, error: "Cannot divide by zero" };
  }
  return { ok: true, data: num / denom };
}

const res = safeDivide(10, 0);
if (res.ok) {
  console.log("Result:", res.data);
} else {
  console.warn("Caught expected error:", res.error);
}`,
        explanation: "The Result pattern turns runtime exceptions into predictable compile-time branches."
      },
      {
        title: "Type-Safe Try/Catch Wrapper Function",
        scenario: "Wrap any throwing function in a helper that safely converts throws into a Result object.",
        solution: `function tryCatch<T>(fn: () => T): { success: true; value: T } | { success: false; error: Error } {
  try {
    return { success: true, value: fn() };
  } catch (err: unknown) {
    const errorObj = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorObj };
  }
}

const outcome = tryCatch(() => JSON.parse('{"valid": true}'));
if (outcome.success) {
  console.log("Parsed value:", outcome.value);
}`,
        explanation: "In TypeScript catch clauses, the error variable is typed as 'unknown', requiring narrowing before inspection."
      },
      {
        title: "Typed AbortController and Timeout Handling",
        scenario: "Cancel long-running async requests with typed AbortSignal support.",
        solution: `async function delayWithSignal(ms: number, signal?: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new Error("Aborted early"));
    const timer = setTimeout(() => resolve("Completed"), ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new Error("Operation aborted"));
    });
  });
}

const controller = new AbortController();
delayWithSignal(100, controller.signal)
  .then(console.log)
  .catch(err => console.log("Caught:", err.message));`,
        explanation: "Typing cancellation tokens via 'AbortSignal' allows building responsive, leak-free async workflows."
      },
      {
        title: "Async Generators and 'AsyncIterable<T>'",
        scenario: "Stream typed records asynchronously using an async generator.",
        solution: `async function* countStream(max: number): AsyncGenerator<number, void, unknown> {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

async function streamConsumer(): Promise<void> {
  const values: number[] = [];
  for await (const val of countStream(3)) {
    values.push(val);
  }
  console.log("Streamed values:", values);
}

streamConsumer();`,
        explanation: "'AsyncGenerator<YieldType, ReturnType, NextType>' ensures streamed data is fully type-checked inside 'for await' loops."
      },
      {
        title: "Custom Error Class Hierarchy with Type Guards",
        scenario: "Define specialized application errors and discriminate them at runtime.",
        solution: `class DomainError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class NotFoundError extends DomainError {
  constructor(resource: string) {
    super(\`Resource '\${resource}' not found\`, "NOT_FOUND");
  }
}

try {
  throw new NotFoundError("UserProfile");
} catch (e: unknown) {
  if (e instanceof DomainError) {
    console.error(\`Domain Error [\${e.code}]: \${e.message}\`);
  }
}`,
        explanation: "Setting the prototype explicitly in custom error constructors ensures 'instanceof' checks work reliably across all targets."
      },
      {
        title: "Strongly-Typed Event Emitter with Async Listeners",
        scenario: "Execute async listeners sequentially and wait for their completion.",
        solution: `type AsyncListener<T> = (data: T) => Promise<void>;

class AsyncEmitter<T> {
  private listeners: AsyncListener<T>[] = [];

  on(fn: AsyncListener<T>): void {
    this.listeners.push(fn);
  }

  async emit(data: T): Promise<void> {
    for (const fn of this.listeners) {
      await fn(data);
    }
  }
}

const emitter = new AsyncEmitter<string>();
emitter.on(async msg => { console.log("Async received:", msg); });
emitter.emit("Hello Async World!");`,
        explanation: "Typing async listeners with 'Promise<void>' allows emitters to await each subscriber in sequence."
      },
      {
        title: "Exponential Backoff Retry Utility with Strict Types",
        scenario: "Retry a failing promise-returning operation with typed exponential backoff.",
        solution: `async function retry<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (err: unknown) {
      attempt++;
      if (attempt >= maxRetries) throw err;
      // Exponential delay: 10ms, 20ms, 40ms...
      await new Promise(r => setTimeout(r, 10 * 2 ** attempt));
    }
  }
}

let counter = 0;
retry(async () => {
  counter++;
  if (counter < 2) throw new Error("Temporary failure");
  return "Success on attempt " + counter;
}).then(res => console.log(res));`,
        explanation: "Generic retry wrappers retain the exact resolved type '<T>' of the underlying operation while managing retries."
      }
    ]
  },
  {
    day: 30,
    examples: [
      {
        title: "Domain Entities with Strict Generics & Readonly Identifiers",
        scenario: "Establish core immutable workflow entities with typed payloads.",
        solution: `interface WorkflowEntity<TPayload> {
  readonly id: string;
  readonly workflowName: string;
  readonly createdAt: number;
  payload: TPayload;
}

const entity: WorkflowEntity<{ orderId: string; amount: number }> = {
  id: "wf_001",
  workflowName: "OrderProcessing",
  createdAt: Date.now(),
  payload: { orderId: "ord_99", amount: 150 }
};

console.log("Entity ID:", entity.id, "Order:", entity.payload.orderId);`,
        explanation: "Generic workflow models ensure pipeline context objects remain strictly typed from start to finish."
      },
      {
        title: "Discriminated Union Event Specification for Pipeline",
        scenario: "Model all pipeline lifecycle events using discriminated unions.",
        solution: `type WorkflowEvent<TData> =
  | { type: "STARTED"; runId: string }
  | { type: "STEP_PROGRESS"; stepName: string; percent: number }
  | { type: "COMPLETED"; result: TData }
  | { type: "FAILED"; error: string };

function logPipelineEvent<T>(evt: WorkflowEvent<T>): void {
  switch (evt.type) {
    case "STARTED": console.log(\`Run \${evt.runId} started\`); break;
    case "STEP_PROGRESS": console.log(\`Step \${evt.stepName}: \${evt.percent}%\`); break;
    case "COMPLETED": console.log("Workflow completed successfully"); break;
    case "FAILED": console.error(\`Workflow failed: \${evt.error}\`); break;
  }
}

logPipelineEvent({ type: "STARTED", runId: "run_881" });`,
        explanation: "Discriminated union events provide clear lifecycle state transitions with zero ambiguity."
      },
      {
        title: "Strongly-Typed Middleware Pipeline",
        scenario: "Execute a chain of middleware functions that transform workflow state.",
        solution: `type Middleware<TContext> = (ctx: TContext, next: () => Promise<void>) => Promise<void>;

class Pipeline<TContext> {
  private middlewares: Middleware<TContext>[] = [];

  use(fn: Middleware<TContext>): this {
    this.middlewares.push(fn);
    return this;
  }

  async execute(ctx: TContext): Promise<void> {
    let index = 0;
    const next = async (): Promise<void> => {
      if (index < this.middlewares.length) {
        const mw = this.middlewares[index++];
        await mw(ctx, next);
      }
    };
    await next();
  }
}

const pipe = new Pipeline<{ log: string[] }>();
pipe.use(async (ctx, next) => {
  ctx.log.push("Step 1 started");
  await next();
  ctx.log.push("Step 1 finished");
});

const context = { log: [] };
pipe.execute(context).then(() => console.log("Pipeline Log:", context.log));`,
        explanation: "Typed middleware chains power enterprise orchestrators like Express, Koa, and event processors."
      },
      {
        title: "Step Context and State Transition Validator",
        scenario: "Enforce valid state transitions (Pending -> Running -> Done) using a typed state validator.",
        solution: `type StepStatus = "PENDING" | "RUNNING" | "DONE" | "ERROR";

const VALID_NEXT: Record<StepStatus, readonly StepStatus[]> = {
  PENDING: ["RUNNING"],
  RUNNING: ["DONE", "ERROR"],
  DONE: [],
  ERROR: ["PENDING"] // Allows retry
};

function transition(current: StepStatus, target: StepStatus): StepStatus {
  if (!VALID_NEXT[current].includes(target)) {
    throw new Error(\`Invalid step transition from \${current} to \${target}\`);
  }
  return target;
}

console.log("Transition PENDING -> RUNNING:", transition("PENDING", "RUNNING"));`,
        explanation: "Typed transition maps prevent invalid state transitions at both compile time and runtime."
      },
      {
        title: "Resilient Step Executor with Retry & Fallback",
        scenario: "Execute individual steps with automated fallback values upon failure.",
        solution: `interface StepDefinition<TIn, TOut> {
  name: string;
  run(input: TIn): Promise<TOut>;
  fallback?(err: Error): TOut;
}

async function executeStep<TIn, TOut>(step: StepDefinition<TIn, TOut>, input: TIn): Promise<TOut> {
  try {
    return await step.run(input);
  } catch (err: unknown) {
    if (step.fallback) {
      return step.fallback(err as Error);
    }
    throw err;
  }
}

const robustStep: StepDefinition<number, string> = {
  name: "SafeDivider",
  run: async (n) => { if (n === 0) throw new Error("Zero error"); return (100 / n).toString(); },
  fallback: () => "Infinity (Fallback)"
};

executeStep(robustStep, 0).then(res => console.log("Step result:", res));`,
        explanation: "Providing typed fallbacks ensures workflow pipelines can degrade gracefully without crashing."
      },
      {
        title: "Mapped Event Handler Registry",
        scenario: "Register handlers for every step of an event-driven workflow using mapped types.",
        solution: `type WorkflowSteps = "validate" | "process" | "notify";

type StepHandlerMap = {
  [K in WorkflowSteps]: (data: string) => Promise<boolean>;
};

const handlers: StepHandlerMap = {
  validate: async d => d.length > 0,
  process: async d => true,
  notify: async d => { console.log("Notified for:", d); return true; }
};

handlers.notify("Order #100");`,
        explanation: "Mapped types ensure that every declared workflow step has an associated handler function."
      },
      {
        title: "Template Literal Subscription Topics ('workflow:${Status}')",
        scenario: "Listen for specific status changes using template literal event topics.",
        solution: `type Status = "started" | "finished" | "failed";
type Topic = \`workflow:\${Status}\`;

function subscribeTopic(topic: Topic, callback: () => void): void {
  console.log("Subscribed to topic:", topic);
}

subscribeTopic("workflow:started", () => {});
subscribeTopic("workflow:finished", () => {});`,
        explanation: "Template literal topics enforce strictly typed event channels and message routing."
      },
      {
        title: "Async Step Orchestrator with 'Promise.allSettled'",
        scenario: "Run multiple independent workflow steps concurrently and aggregate results.",
        solution: `interface StepResult {
  step: string;
  success: boolean;
}

async function runStep(name: string): Promise<StepResult> {
  return { step: name, success: true };
}

async function orchestrate(): Promise<void> {
  const steps = ["InventoryCheck", "FraudAnalysis", "TaxCalculation"];
  const outcomes = await Promise.allSettled(steps.map(runStep));

  for (const outcome of outcomes) {
    if (outcome.status === "fulfilled") {
      console.log(\`Step \${outcome.value.step} completed.\`);
    }
  }
}

orchestrate();`,
        explanation: "Parallel step orchestration maximizes throughput while preserving error reporting per step."
      },
      {
        title: "Immutable Audit Trail Generator with Utility Types",
        scenario: "Produce a readonly audit trail log capturing each executed workflow phase.",
        solution: `interface AuditLog {
  runId: string;
  events: readonly string[];
  completedAt: number;
}

function createAuditSnapshot(runId: string, events: string[]): Readonly<AuditLog> {
  return Object.freeze({
    runId,
    events: Object.freeze([...events]),
    completedAt: Date.now()
  });
}

const audit = createAuditSnapshot("run_001", ["Started", "Validated", "Shipped"]);
console.log("Audit Run ID:", audit.runId, "Events:", audit.events.length);`,
        explanation: "'Readonly<T>' and 'Object.freeze' provide tamper-proof runtime and compile-time audit logging."
      },
      {
        title: "Complete End-to-End Workflow Execution & Type-Safe Verification",
        scenario: "Assemble all components into a working event-driven workflow engine.",
        solution: `interface WorkflowContext {
  userId: string;
  isVerified: boolean;
  score: number;
}

class WorkflowEngine {
  async runWorkflow(userId: string): Promise<WorkflowContext> {
    const ctx: WorkflowContext = { userId, isVerified: false, score: 0 };

    // Step 1: Verification
    ctx.isVerified = userId.startsWith("user_");
    // Step 2: Scoring
    ctx.score = ctx.isVerified ? 100 : 0;

    return ctx;
  }
}

const engine = new WorkflowEngine();
engine.runWorkflow("user_ada_01").then(finalState => {
  console.log("Workflow Complete!");
  console.log(\`User: \${finalState.userId}, Verified: \${finalState.isVerified}, Score: \${finalState.score}\`);
});`,
        explanation: "The complete workflow engine unifies generics, interfaces, async/await, and strict typing into an enterprise-ready architecture."
      }
    ]
  }
];
