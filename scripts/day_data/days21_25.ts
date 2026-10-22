import { DayExamplesData } from "./types.js";

export const days21_25: DayExamplesData[] = [
  {
    day: 21,
    examples: [
      {
        title: "Generic LIFO Stack ('Stack<T>')",
        scenario: "Implement a Last-In-First-Out data structure that works with any element type.",
        solution: `class Stack<T> {
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
console.log("Size:", numStack.size);   // 1`,
        explanation: "Generic classes parameterize all storage arrays and method return types, ensuring data integrity."
      },
      {
        title: "Generic FIFO Queue ('Queue<T>')",
        scenario: "Implement a First-In-First-Out queue with strongly typed enqueue and dequeue operations.",
        solution: `class Queue<T> {
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
console.log("Next task:", taskQueue.dequeue()); // "Email Sync"`,
        explanation: "The Queue guarantees elements dequeued are of the exact same type as those enqueued."
      },
      {
        title: "In-Memory Key-Value Memory Cache ('MemoryCache<K, V>')",
        scenario: "Create a generic cache supporting expiration and typed keys and values.",
        solution: `class MemoryCache<K, V> {
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
console.log("Cached Count:", cache.get("sessionCount"));`,
        explanation: "Two type parameters ('<K, V>') allow complete flexibility for both key types and stored value types."
      },
      {
        title: "Singly Linked List ('LinkedList<T>')",
        scenario: "Implement a typed singly-linked list with an append method and iterator.",
        solution: `class Node<T> {
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
console.log("Linked List array:", list.toArray());`,
        explanation: "Generic class nodes chain together while preserving type safety across all traversed elements."
      },
      {
        title: "Generic Result Monad Class ('Result<T, E>')",
        scenario: "Create a functional Result class encapsulating either a successful value or a failure error.",
        solution: `class Result<T, E> {
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
  val => \`Success: \${val * 2}\`,
  err => \`Failure: \${err}\`
);
console.log(msg);`,
        explanation: "Result monads prevent unhandled exceptions by forcing callers to handle both branches explicitly via '.match()'."
      },
      {
        title: "Generic Binary Tree Node ('TreeNode<T>')",
        scenario: "Build a generic binary tree data structure with in-order traversal.",
        solution: `class TreeNode<T> {
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
console.log("In-order tree values:", collected);`,
        explanation: "Recursive generic classes preserve type consistency during traversal operations."
      },
      {
        title: "Generic Repository Pattern with Base Entity Constraint",
        scenario: "Implement a data repository class constrained to objects with string IDs.",
        solution: `interface Entity { id: string }

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
console.log("Found User:", repo.findById("usr_1")?.name);`,
        explanation: "Constraining 'T extends Entity' ensures the class can always access 'item.id' safely."
      },
      {
        title: "Priority Queue with Custom Comparator",
        scenario: "Order elements in a generic queue using a custom comparison function.",
        solution: `class PriorityQueue<T> {
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
console.log("Top Priority Job:", pq.dequeue()?.title);`,
        explanation: "Supplying a typed comparison function to the constructor makes generic collections adaptable to any ordering criteria."
      },
      {
        title: "Generic Observable / Event Subject",
        scenario: "Implement the Observer pattern with a generic Subject emitting typed events.",
        solution: `class Subject<T> {
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
const unsubscribe = stockFeed.subscribe(quote => console.log(\`Stock \${quote.symbol}: $\${quote.price}\`));

stockFeed.next({ symbol: "GOOG", price: 185.50 });
unsubscribe();`,
        explanation: "Generic subjects allow decoupled, publish-subscribe message passing with complete payload type safety."
      },
      {
        title: "Generic Graph Adjacency List",
        scenario: "Model a directed graph where nodes and edges connect generic vertex identifiers.",
        solution: `class Graph<TNode> {
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
console.log("Connected to New York:", cityNetwork.getNeighbors("New York"));`,
        explanation: "Generic graph classes allow vertices to be numbers, strings, or complex domain objects."
      }
    ]
  },
  {
    day: 22,
    examples: [
      {
        title: "Extracting Keys with 'keyof'",
        scenario: "Use the 'keyof' operator to create a union of all property names of an object type.",
        solution: `interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function formatUserKey(key: UserKeys): string {
  return \`User property: \${key}\`;
}

console.log(formatUserKey("name"));`,
        explanation: "'keyof T' produces a string or numeric literal union representing all keys declared on 'T'."
      },
      {
        title: "Indexed Access for Object Properties ('T[K]')",
        scenario: "Query the specific type of a nested property on an interface.",
        solution: `interface SystemConfig {
  database: {
    connectionString: string;
    poolSize: number;
  };
  logging: {
    level: "debug" | "info" | "error";
  };
}

type DatabaseConfig = SystemConfig["database"];
type LogLevel = SystemConfig["logging"]["level"];

const db: DatabaseConfig = { connectionString: "postgres://localhost", poolSize: 10 };
const lvl: LogLevel = "debug";

console.log("DB pool:", db.poolSize, "Log level:", lvl);`,
        explanation: "Indexed access types ('T[K]') mirror JavaScript property lookup syntax at the type level."
      },
      {
        title: "Extracting Array Element Types ('T[number]')",
        scenario: "Extract the union of elements contained in an array type.",
        solution: `const statusCodes = [200, 201, 400, 404, 500] as const;

type StatusCode = (typeof statusCodes)[number]; // 200 | 201 | 400 | 404 | 500

function handleCode(code: StatusCode) {
  console.log("Handling HTTP status:", code);
}

handleCode(200);`,
        explanation: "Indexing an array or tuple type with '[number]' yields the union of all element types in that collection."
      },
      {
        title: "Capturing Runtime Shapes with 'typeof'",
        scenario: "Derive a type signature directly from an existing runtime JavaScript object.",
        solution: `const defaultServerOptions = {
  host: "127.0.0.1",
  port: 8080,
  timeout: 5000,
  enableSsl: false
};

type ServerOptions = typeof defaultServerOptions;

function startServer(opts: ServerOptions) {
  console.log(\`Starting server on \${opts.host}:\${opts.port}\`);
}

startServer({ host: "0.0.0.0", port: 3000, timeout: 2000, enableSsl: true });`,
        explanation: "'typeof value' refers to the TypeScript type of an existing value, keeping runtime values as the single source of truth."
      },
      {
        title: "Combining 'keyof typeof' for Const Objects",
        scenario: "Extract valid keys and values from an immutable dictionary.",
        solution: `const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404
} as const;

type HttpStatusKey = keyof typeof HTTP_STATUS; // "OK" | "CREATED" | "NOT_FOUND"
type HttpStatusVal = (typeof HTTP_STATUS)[HttpStatusKey]; // 200 | 201 | 404

console.log("Key 'OK' maps to:", HTTP_STATUS["OK"]);`,
        explanation: "'keyof typeof' extracts keys from a JavaScript constant object, preventing duplicated type declarations."
      },
      {
        title: "Safe Deep Property Lookup",
        scenario: "Safely read nested property types using chained indexed access.",
        solution: `interface ApiResponse {
  data: {
    users: {
      profile: {
        avatarUrl: string;
      }[];
    };
  };
}

type AvatarType = ApiResponse["data"]["users"]["profile"][number]["avatarUrl"];
const avatar: AvatarType = "https://cdn.example.com/avatar.png";
console.log("Avatar:", avatar);`,
        explanation: "Indexed access types can be chained deeply to unwrap complex nested API response schemas."
      },
      {
        title: "Extracting Method Signatures via Indexed Access",
        scenario: "Extract a specific method's type from a service interface.",
        solution: `interface NotificationService {
  notify(userId: string, message: string): Promise<boolean>;
  purge(): void;
}

type NotifyMethod = NotificationService["notify"];

const sendAlert: NotifyMethod = async (uid, msg) => {
  console.log(\`Alert for \${uid}: \${msg}\`);
  return true;
};

sendAlert("usr_99", "Disk 90% full");`,
        explanation: "Indexed access allows pulling individual method signatures from large interfaces for standalone use."
      },
      {
        title: "Dynamic Dictionary Access Types",
        scenario: "Access types of an index-signature dictionary dynamically.",
        solution: `interface TranslationDictionary {
  [locale: string]: Record<string, string>;
}

type SingleTranslation = TranslationDictionary[string];

const enTranslations: SingleTranslation = {
  welcome: "Welcome",
  farewell: "Goodbye"
};

console.log("Welcome in English:", enTranslations["welcome"]);`,
        explanation: "Indexing an interface by '[string]' extracts the value type of its string index signature."
      },
      {
        title: "Converting Const Object Values into Union Types",
        scenario: "Turn an object mapping codes to descriptions into a union of its values.",
        solution: `const Currencies = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound"
} as const;

type CurrencyName = (typeof Currencies)[keyof typeof Currencies];

function printCurrency(name: CurrencyName) {
  console.log("Currency:", name);
}

printCurrency("Euro");`,
        explanation: "Indexed access over 'keyof typeof' generates a union of all literal values stored in the const object."
      },
      {
        title: "Strongly Typed Configuration Path Resolver",
        scenario: "Access top-level config keys safely using 'keyof' and indexed types.",
        solution: `const appConfig = {
  api: "https://api.v2.io",
  maxRetries: 5,
  secure: true
} as const;

function getConfigVal<K extends keyof typeof appConfig>(key: K): (typeof appConfig)[K] {
  return appConfig[key];
}

console.log("API URL:", getConfigVal("api"));
console.log("Retries:", getConfigVal("maxRetries"));`,
        explanation: "Combining 'keyof typeof' with generic constraints guarantees compile-time accuracy for config queries."
      }
    ]
  },
  {
    day: 23,
    examples: [
      {
        title: "Basic Mapped Type ('{ [K in Keys]: boolean }')",
        scenario: "Create a feature flag toggle map from a union of feature keys.",
        solution: `type FeatureName = "darkMode" | "experimentalUi" | "betaApi";

type FeatureFlags = {
  [K in FeatureName]: boolean;
};

const flags: FeatureFlags = {
  darkMode: true,
  experimentalUi: false,
  betaApi: true
};

console.log("Dark mode active?", flags.darkMode);`,
        explanation: "Mapped types iterate over each string literal in a union to define corresponding object properties."
      },
      {
        title: "Modifying Mutability with '+readonly' and '-readonly'",
        scenario: "Transform a mutable interface into an immutable one and vice versa.",
        solution: `interface Person {
  name: string;
  age: number;
}

// Add readonly
type ReadonlyPerson = {
  +readonly [K in keyof Person]: Person[K];
};

// Strip readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

const frozen: ReadonlyPerson = { name: "Alan", age: 41 };
// frozen.age = 42; // Error!

const editable: Mutable<ReadonlyPerson> = { name: "Alan", age: 41 };
editable.age = 42; // Allowed!

console.log("Mutable age:", editable.age);`,
        explanation: "The '+readonly' and '-readonly' modifiers explicitly add or remove immutability constraints across all keys."
      },
      {
        title: "Modifying Optionality with '+?' and '-?'",
        scenario: "Make all properties optional or strip optionality to make all properties required.",
        solution: `interface FilterOptions {
  category?: string;
  minPrice?: number;
}

type ConcreteFilters<T> = {
  [K in keyof T]-?: T[K]; // Removes '?'
};

const activeFilter: ConcreteFilters<FilterOptions> = {
  category: "Electronics",
  minPrice: 0 // Must be provided!
};

console.log("Concrete category:", activeFilter.category);`,
        explanation: "The '-?' modifier removes optionality, transforming optional fields into strictly required ones."
      },
      {
        title: "Recreating 'Partial<T>' and 'Required<T>' from Scratch",
        scenario: "Understand how TypeScript's built-in Partial and Required utility types are implemented.",
        solution: `type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

interface User { id: number; name?: string }
type PartialUser = MyPartial<User>;
type StrictUser = MyRequired<User>;

const u: StrictUser = { id: 1, name: "Ada" };
console.log("User:", u);`,
        explanation: "Standard library utility types are simply mapped types utilizing the '?' and '-?' property modifiers."
      },
      {
        title: "Key Remapping using 'as' ('get${Capitalize<K>}')",
        scenario: "Automatically generate getter method names for each property in an interface.",
        solution: `interface Person {
  name: string;
  age: number;
}

type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

const personGetters: Getters<Person> = {
  getName: () => "Katherine Johnson",
  getAge: () => 101
};

console.log("Name getter:", personGetters.getName());`,
        explanation: "Key remapping ('as') uses template literal types to transform property keys into getter or setter function names."
      },
      {
        title: "Filtering Out Keys with 'as never'",
        scenario: "Remove non-string properties from an object type by remapping undesired keys to 'never'.",
        solution: `interface MixedData {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

type OnlyStringKeys<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type StringProperties = OnlyStringKeys<MixedData>;
// Result: { name: string; email: string }

const strings: StringProperties = { name: "Alice", email: "alice@test.com" };
console.log("Strings only:", strings);`,
        explanation: "Remapping a key to 'never' filters that property out of the resulting mapped type."
      },
      {
        title: "Recursive Deep Readonly Mapped Type",
        scenario: "Recursively freeze object properties and nested object properties.",
        solution: `type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

interface Config {
  db: { host: string; credentials: { user: string } };
}

const locked: DeepReadonly<Config> = {
  db: { host: "db.local", credentials: { user: "admin" } }
};

// locked.db.credentials.user = "root"; // Error!
console.log("Locked DB user:", locked.db.credentials.user);`,
        explanation: "Recursive mapped types conditionally apply transformations to nested object children."
      },
      {
        title: "Mapping Over Union Types",
        scenario: "Create a record type mapping union variants to event handler functions.",
        solution: `type EventKind = "click" | "hover" | "scroll";

type EventHandlers = {
  [E in EventKind as \`on\${Capitalize<E>}\`]: (eventData: unknown) => void;
};

const handlers: EventHandlers = {
  onClick: () => console.log("Click handled"),
  onHover: () => console.log("Hover handled"),
  onScroll: () => console.log("Scroll handled")
};

handlers.onClick(null);`,
        explanation: "Mapping directly over a union of strings lets you create comprehensive event listener interfaces."
      },
      {
        title: "Transforming Value Types ('Nullable<T>')",
        scenario: "Convert all properties of an object to allow null.",
        solution: `type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface Profile {
  bio: string;
  avatar: string;
}

const uninitializedProfile: Nullable<Profile> = {
  bio: null,
  avatar: null
};

console.log("Profile bio:", uninitializedProfile.bio);`,
        explanation: "Mapped types can transform the value types of every property while keeping the original keys intact."
      },
      {
        title: "Automatic Proxy / Validator Generator with Mapped Types",
        scenario: "Generate a validator object containing validation functions for every property of an entity.",
        solution: `interface UserForm {
  username: string;
  age: number;
}

type Validator<T> = {
  [K in keyof T]: (value: T[K]) => boolean;
};

const userValidator: Validator<UserForm> = {
  username: val => val.length >= 3,
  age: val => val >= 18
};

console.log("Username valid?", userValidator.username("linus"));
console.log("Age valid?", userValidator.age(15));`,
        explanation: "Mapped types ensure that validator functions always match the precise property types of the target form."
      }
    ]
  },
  {
    day: 24,
    examples: [
      {
        title: "Basic Template Literal Types ('hello ${string}')",
        scenario: "Constrain strings to follow a specific prefix or pattern.",
        solution: `type Greeting = \`Hello, \${string}!\`;

const g1: Greeting = "Hello, World!";
const g2: Greeting = "Hello, TypeScript!";
// const g3: Greeting = "Hi there!"; // Error: Type '"Hi there!"' is not assignable to type 'Greeting'

console.log(g1, g2);`,
        explanation: "Template literal types match string patterns at compile time using template literal syntax."
      },
      {
        title: "Intrinsic String Manipulation Utilities",
        scenario: "Use built-in Uppercase, Lowercase, Capitalize, and Uncapitalize type utilities.",
        solution: `type Event = "user_login";

type UpperEvent = Uppercase<Event>;         // "USER_LOGIN"
type LowerEvent = Lowercase<"SESSION_END">; // "session_end"
type CapEvent = Capitalize<"hello">;        // "Hello"
type UncapEvent = Uncapitalize<"Hello">;    // "hello"

const eventName: UpperEvent = "USER_LOGIN";
console.log("Event Name:", eventName);`,
        explanation: "TypeScript provides intrinsic compiler utilities to transform character casing in string types."
      },
      {
        title: "Modeling Database Actions ('${Action}_${Entity}')",
        scenario: "Generate all combinations of CRUD actions on database entities.",
        solution: `type Action = "CREATE" | "READ" | "UPDATE" | "DELETE";
type Entity = "USER" | "ORDER" | "PRODUCT";

type AuditAction = \`\${Action}_\${Entity}\`;

function recordAuditLog(action: AuditAction): void {
  console.log("Audit Action logged:", action);
}

recordAuditLog("CREATE_USER");
recordAuditLog("DELETE_ORDER");`,
        explanation: "Template literal types distribute across unions, producing cross-product permutations automatically."
      },
      {
        title: "Type-Safe CSS Dimension Units",
        scenario: "Enforce that dimension inputs include valid units like 'px', 'rem', or '%'.",
        solution: `type CssUnit = "px" | "rem" | "%" | "vh" | "vw";
type CssValue = \`\${number}\${CssUnit}\`;

function setStyleWidth(width: CssValue): void {
  console.log("Set width to:", width);
}

setStyleWidth("100px");
setStyleWidth("2.5rem");
setStyleWidth("50%");`,
        explanation: "Combining '${number}' with literal unions enforces strict numeric-with-unit formatting at compile time."
      },
      {
        title: "Event Handler Naming Convention ('on${Capitalize<Event>}')",
        scenario: "Generate event handler method names like 'onClick' and 'onHover' from event names.",
        solution: `type DomEvent = "click" | "hover" | "focus";

type DomHandlerName = \`on\${Capitalize<DomEvent>}\`; // "onClick" | "onHover" | "onFocus"

const handler: DomHandlerName = "onClick";
console.log("Registered handler:", handler);`,
        explanation: "Combining 'Capitalize' with template literal types standardizes callback and event listener naming."
      },
      {
        title: "Key Remapping with Template Literals in Mapped Types",
        scenario: "Convert an entity's fields into corresponding event publication keys.",
        solution: `interface State {
  count: number;
  user: string;
}

type StateChangeEvents = {
  [K in keyof State as \`on\${Capitalize<string & K>}Changed\`]: (newVal: State[K]) => void;
};

const listeners: StateChangeEvents = {
  onCountChanged: (val) => console.log("New count:", val),
  onUserChanged: (val) => console.log("New user:", val)
};

listeners.onCountChanged(10);`,
        explanation: "Key remapping with template literals generates expressive, strictly-typed event handler interfaces."
      },
      {
        title: "Parsing Delimited Strings at Type Level",
        scenario: "Split a composite string identifier 'namespace:action' into distinct components.",
        solution: `type SplitNamespace<T extends string> =
  T extends \`\${infer NS}:\${infer Act}\` ? [NS, Act] : [T, never];

type Command = SplitNamespace<"auth:login">; // ["auth", "login"]
type System = SplitNamespace<"system:reboot">; // ["system", "reboot"]

const cmd: Command = ["auth", "login"];
console.log(\`Namespace: \${cmd[0]}, Action: \${cmd[1]}\`);`,
        explanation: "Using 'infer' inside template literal conditionals allows string pattern extraction at compile time."
      },
      {
        title: "Type-Safe REST URL Route Parameters",
        scenario: "Extract route parameter names like ':id' from URL paths.",
        solution: `type ExtractRouteParams<T extends string> =
  T extends \`\${string}/:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractRouteParams<\`/\${Rest}\`>
    : T extends \`\${string}/:\${infer Param}\`
    ? Param
    : never;

type UserRouteParams = ExtractRouteParams<"/users/:userId/posts/:postId">;
// "userId" | "postId"

function navigate(route: string, params: Record<UserRouteParams, string>): void {
  console.log("Navigating to post:", params.postId, "for user:", params.userId);
}

navigate("/users/:userId/posts/:postId", { userId: "42", postId: "99" });`,
        explanation: "Recursive template literal types parse route parameters from URL string templates."
      },
      {
        title: "Snake_case to camelCase Conversion Type",
        scenario: "Convert snake_case string identifiers into camelCase types.",
        solution: `type SnakeToCamel<S extends string> =
  S extends \`\${infer Head}_\${infer Tail}\`
    ? \`\${Head}\${Capitalize<SnakeToCamel<Tail>>}\`
    : S;

type CamelUser = SnakeToCamel<"first_name_in_records">; // "firstNameInRecords"

const field: CamelUser = "firstNameInRecords";
console.log("Camel case field:", field);`,
        explanation: "Recursive template literal matching easily converts string naming conventions across boundary layers."
      },
      {
        title: "Strongly-Typed Redux Action Creator",
        scenario: "Build action types constrained by feature namespaces.",
        solution: `type Module = "cart" | "checkout";
type Verb = "add" | "remove" | "reset";

type ActionType = \`[\${Module}] \${Verb}\`;

interface AppAction {
  type: ActionType;
  payload?: unknown;
}

const action: AppAction = { type: "[cart] add", payload: { item: "Book" } };
console.log("Dispatched action:", action.type);`,
        explanation: "Template literal types prevent malformed action strings across state management systems."
      }
    ]
  },
  {
    day: 25,
    examples: [
      {
        title: "Basic Conditional Type ('T extends U ? X : Y')",
        scenario: "Return a boolean literal type based on whether an input is a string.",
        solution: `type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>;      // false

const a: A = true;
const b: B = false;
console.log("A is string?", a, "B is string?", b);`,
        explanation: "Conditional types select one of two possible types based on a type relationship test."
      },
      {
        title: "Distributive Behavior Over Unions",
        scenario: "Observe how conditional types distribute automatically across union members.",
        solution: `type ToArray<T> = T extends any ? T[] : never;

type StrNumArr = ToArray<string | number>;
// Distributes to: ToArray<string> | ToArray<number>
// Result: string[] | number[] (NOT (string | number)[])

const list1: StrNumArr = ["a", "b"];
const list2: StrNumArr = [1, 2, 3];
console.log("List 1:", list1, "List 2:", list2);`,
        explanation: "When a naked generic parameter is tested in a conditional type, it distributes across every member of a union."
      },
      {
        title: "Preventing Distribution with Tuple Wrapping ('[T]')",
        scenario: "Disable union distribution by wrapping the checked parameter in a tuple.",
        solution: `type NonDistributiveToArray<T> = [T] extends [any] ? T[] : never;

type CombinedArray = NonDistributiveToArray<string | number>;
// Result: (string | number)[]

const mixed: CombinedArray = ["text", 42, "more text"];
console.log("Mixed array:", mixed);`,
        explanation: "Wrapping type parameters in brackets '[T]' suppresses distributive behavior, checking the union as a whole."
      },
      {
        title: "Recreating 'NonNullable<T>'",
        scenario: "Build the built-in NonNullable utility using conditional types.",
        solution: `type MyNonNullable<T> = T extends null | undefined ? never : T;

type RawInput = string | null | undefined;
type CleanInput = MyNonNullable<RawInput>; // string

const input: CleanInput = "Safe Value";
console.log("Non-nullable string:", input);`,
        explanation: "Filtering out unwanted union members is accomplished by returning 'never' in the matching branch."
      },
      {
        title: "Type Filtering ('Filter<T, Condition>')",
        scenario: "Extract only primitive values from a union containing mixed types.",
        solution: `type FilterPrimitives<T> = T extends string | number | boolean ? T : never;

type MixedUnion = string | number | { id: string } | boolean | (() => void);
type Primitives = FilterPrimitives<MixedUnion>; // string | number | boolean

const p: Primitives = "Primitive string";
console.log("Primitive:", p);`,
        explanation: "Conditional types distribute across unions and filter out members that do not satisfy the constraint."
      },
      {
        title: "Nested Conditionals for Type Categorization",
        scenario: "Categorize an unknown type into human-readable descriptor strings.",
        solution: `type TypeDescriptor<T> =
  T extends string ? "text" :
  T extends number ? "numeric" :
  T extends boolean ? "flag" :
  T extends Function ? "callable" :
  "object-or-other";

type D1 = TypeDescriptor<"abc">; // "text"
type D2 = TypeDescriptor<123>;   // "numeric"
type D3 = TypeDescriptor<true>;  // "flag"

const d: D1 = "text";
console.log("Descriptor:", d);`,
        explanation: "Chained conditional types act like type-level if-else-if ladders to classify data types."
      },
      {
        title: "Conditional Function Return Types",
        scenario: "Vary the return type of a function dynamically based on a boolean parameter.",
        solution: `function parseData<T extends boolean>(asJson: T): T extends true ? object : string {
  if (asJson) {
    return { data: "parsed" } as any;
  }
  return '{"data":"parsed"}' as any;
}

const objResult = parseData(true);   // Type: object
const strResult = parseData(false);  // Type: string

console.log("Object:", objResult);
console.log("String:", strResult);`,
        explanation: "Conditional return types allow single function signatures to return different types depending on input arguments."
      },
      {
        title: "Flattening Nested Arrays ('Flatten<T>')",
        scenario: "Unwrap single-level or multi-level arrays into element types.",
        solution: `type Flatten<T> = T extends (infer U)[] ? U : T;

type NumberList = Flatten<number[]>;       // number
type SingleString = Flatten<string>;       // string
type NestedList = Flatten<Array<boolean>>; // boolean

const val: NumberList = 42;
console.log("Flattened value:", val);`,
        explanation: "Conditional types can inspect internal array types and unwrap them to their element types."
      },
      {
        title: "Type-Safe Cast Guard with Conditionals",
        scenario: "Enforce that a type cast is only permissible if the target extends the source.",
        solution: `type SafeCast<Source, Target> = Target extends Source ? Target : never;

type BaseUser = { id: string };
type AdminUser = { id: string; role: "admin" };

type CastResult = SafeCast<BaseUser, AdminUser>; // AdminUser (Valid extension)
type BadCast = SafeCast<BaseUser, { other: number }>; // never

const admin: CastResult = { id: "a_1", role: "admin" };
console.log("Admin:", admin);`,
        explanation: "Conditionals validate structural hierarchy before permitting conversions."
      },
      {
        title: "Dynamic Polymorphic Result Resolver",
        scenario: "Resolve the outcome type of a service call based on configuration options.",
        solution: `interface ServiceOptions {
  detailed: boolean;
}

type ServiceResult<T extends ServiceOptions> =
  T["detailed"] extends true ? { code: number; message: string; timestamp: number } : { code: number };

function executeService<T extends ServiceOptions>(opts: T): ServiceResult<T> {
  if (opts.detailed) {
    return { code: 200, message: "OK", timestamp: Date.now() } as ServiceResult<T>;
  }
  return { code: 200 } as ServiceResult<T>;
}

const simple = executeService({ detailed: false });
const detailed = executeService({ detailed: true });
console.log("Simple:", simple);
console.log("Detailed:", detailed);`,
        explanation: "Conditional types enable APIs that dynamically adapt their response structure based on options."
      }
    ]
  }
];
