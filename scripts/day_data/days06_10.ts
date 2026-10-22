import { DayExamplesData } from "./types.js";

export const days06_10: DayExamplesData[] = [
  {
    day: 6,
    examples: [
      {
        title: "Inline Object Type Annotations",
        scenario: "Declare and use inline anonymous object types for quick ad-hoc function parameters.",
        solution: `function printCoordinates(pt: { x: number; y: number }): void {
  console.log(\`Coordinate: X=\${pt.x}, Y=\${pt.y}\`);
}

printCoordinates({ x: 10, y: 25 });`,
        explanation: "Inline object types describe the expected shape without declaring a separate named interface or type alias."
      },
      {
        title: "Optional Properties with '?' Modifier",
        scenario: "Define object properties that may be omitted by callers.",
        solution: `interface UserPreferences {
  theme: "light" | "dark";
  notificationsEnabled: boolean;
  fontSize?: number; // Optional
}

function applyPreferences(pref: UserPreferences): void {
  const size = pref.fontSize ?? 14;
  console.log(\`Applied Theme: \${pref.theme}, Font: \${size}px\`);
}

applyPreferences({ theme: "dark", notificationsEnabled: true });`,
        explanation: "The '?' modifier marks a property as optional, meaning its value can be 'T | undefined' or absent altogether."
      },
      {
        title: "Readonly Properties for Immutable IDs",
        scenario: "Prevent accidental reassignment of critical entity identifiers.",
        solution: `interface DatabaseEntity {
  readonly id: string;
  readonly createdAt: Date;
  title: string;
}

const entity: DatabaseEntity = {
  id: "ent_9901",
  createdAt: new Date(),
  title: "Draft Document"
};

entity.title = "Published Document"; // Allowed
// entity.id = "new_id"; // Error: Cannot assign to 'id' because it is a read-only property.

console.log("Updated title:", entity.title);`,
        explanation: "'readonly' modifier prevents properties from being modified after object creation."
      },
      {
        title: "Dynamic Keys with Index Signatures",
        scenario: "Handle dynamic dictionary objects where property keys are not known in advance.",
        solution: `interface ErrorDictionary {
  [errorCode: string]: string;
}

const errors: ErrorDictionary = {
  ERR_404: "Page not found",
  ERR_500: "Internal server error"
};

errors["ERR_403"] = "Forbidden access";
console.log("Error 404 message:", errors["ERR_404"]);`,
        explanation: "Index signatures like '[key: string]: string' allow an object to hold arbitrary properties that match the specified value type."
      },
      {
        title: "Excess Property Checks (Literals vs Variables)",
        scenario: "Understand why passing an object literal with extra fields fails, but assigning an existing variable passes.",
        solution: `interface BoxConfig {
  width: number;
  height: number;
}

function createBox(config: BoxConfig): number {
  return config.width * config.height;
}

// Fails excess property check:
// createBox({ width: 10, height: 20, color: "red" });

// Passes via structural compatibility:
const extendedConfig = { width: 10, height: 20, color: "red" };
console.log("Box Area:", createBox(extendedConfig));`,
        explanation: "TypeScript performs excess property checking on fresh object literals to catch typos. Variables with extra properties are allowed under structural typing."
      },
      {
        title: "Deeply Nested Object Types for App Settings",
        scenario: "Model complex hierarchical application configurations.",
        solution: `interface ServerConfig {
  network: {
    host: string;
    port: number;
    ssl: {
      enabled: boolean;
      certPath?: string;
    };
  };
}

const server: ServerConfig = {
  network: {
    host: "0.0.0.0",
    port: 443,
    ssl: {
      enabled: true,
      certPath: "/etc/ssl/cert.pem"
    }
  }
};

console.log(\`Listening on \${server.network.host}:\${server.network.port}\`);`,
        explanation: "Nested interfaces or inline shapes preserve strict type checking at every level of the object hierarchy."
      },
      {
        title: "Safe Property Access with Optional Chaining and Nullish Coalescing",
        scenario: "Safely navigate deep optional properties without causing runtime exceptions.",
        solution: `interface Account {
  owner?: {
    profile?: {
      displayName?: string;
    };
  };
}

function getOwnerName(acc: Account): string {
  return acc.owner?.profile?.displayName ?? "Guest User";
}

console.log("User 1:", getOwnerName({ owner: { profile: { displayName: "Arthur" } } }));
console.log("User 2:", getOwnerName({}));`,
        explanation: "Optional chaining ('?.') stops evaluation and returns undefined if an intermediate reference is null or undefined; '??' provides a fallback."
      },
      {
        title: "Object Destructuring with Renaming and Defaults",
        scenario: "Destructure object properties while providing type annotations and defaults.",
        solution: `interface Dimensions {
  width: number;
  height: number;
  depth?: number;
}

function computeVolume({ width, height, depth = 1 }: Dimensions): number {
  return width * height * depth;
}

console.log("Volume with default depth:", computeVolume({ width: 5, height: 10 }));`,
        explanation: "Type annotations on destructured parameters are placed after the destructuring pattern, not inside it."
      },
      {
        title: "Deep Object Freezing Utility",
        scenario: "Recursively freeze an object and cast it to a readonly type.",
        solution: `function deepFreeze<T extends object>(obj: T): Readonly<T> {
  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    const val = (obj as any)[key];
    if (val && typeof val === "object" && !Object.isFrozen(val)) {
      deepFreeze(val);
    }
  }
  return obj as Readonly<T>;
}

const settings = deepFreeze({ api: { endpoint: "/v1" } });
console.log("Frozen endpoint:", settings.api.endpoint);`,
        explanation: "Deep freeze combines runtime 'Object.freeze' with TypeScript's compile-time 'Readonly<T>' guarantees."
      },
      {
        title: "Object Merge Utility with Default Values",
        scenario: "Merge partial user options into a complete default configuration object.",
        solution: `interface HttpClientOptions {
  timeout: number;
  retries: number;
  headers: Record<string, string>;
}

const defaultOptions: HttpClientOptions = {
  timeout: 3000,
  retries: 3,
  headers: { "Content-Type": "application/json" }
};

function buildClientOptions(overrides: Partial<HttpClientOptions>): HttpClientOptions {
  return {
    ...defaultOptions,
    ...overrides,
    headers: { ...defaultOptions.headers, ...(overrides.headers ?? {}) }
  };
}

const client = buildClientOptions({ timeout: 5000 });
console.log("Client options:", client);`,
        explanation: "Combining object spread operators with typed defaults guarantees the returned object satisfies all required interface contracts."
      }
    ]
  },
  {
    day: 7,
    examples: [
      {
        title: "Basic Type Aliases for Domain Concepts",
        scenario: "Create descriptive aliases for primitive types to make signatures self-documenting.",
        solution: `type UUID = string;
type Timestamp = number;
type EmailAddress = string;

interface UserSession {
  sessionId: UUID;
  userEmail: EmailAddress;
  issuedAt: Timestamp;
}

const session: UserSession = {
  sessionId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  userEmail: "dev@company.com",
  issuedAt: Date.now()
};

console.log("Session User:", session.userEmail);`,
        explanation: "Type aliases give readable, domain-specific names to primitive types without incurring any runtime penalty."
      },
      {
        title: "Combining Entity Shapes with Intersection ('&')",
        scenario: "Compose larger object shapes by combining smaller, focused type building blocks.",
        solution: `type Identifiable = { id: string };
type Timestamped = { createdAt: Date; updatedAt: Date };
type Tagged = { tags: string[] };

type BlogPost = Identifiable & Timestamped & Tagged & {
  title: string;
  content: string;
};

const post: BlogPost = {
  id: "p_101",
  createdAt: new Date(),
  updatedAt: new Date(),
  tags: ["typescript", "fullstack"],
  title: "Mastering Intersection Types",
  content: "Intersections combine all properties into a unified type."
};

console.log("Blog Post ID:", post.id, "Title:", post.title);`,
        explanation: "The intersection operator '&' produces a type containing all properties from every constituent type."
      },
      {
        title: "Audit Trail Metadata Composition",
        scenario: "Standardize database record auditing by intersecting domain models with an AuditInfo type.",
        solution: `type AuditInfo = {
  createdBy: string;
  updatedBy: string;
  version: number;
};

type Product = {
  sku: string;
  price: number;
};

type AuditedProduct = Product & AuditInfo;

function printAudit(item: AuditedProduct): void {
  console.log(\`SKU \${item.sku} (v\${item.version}) updated by \${item.updatedBy}\`);
}

printAudit({
  sku: "SKU-992",
  price: 29.99,
  createdBy: "system",
  updatedBy: "admin",
  version: 2
});`,
        explanation: "Intersecting entity schemas with metadata components promotes modularity and prevents duplicate field declarations."
      },
      {
        title: "Handling Property Collisions in Intersections",
        scenario: "Explore what happens when intersecting types share identical or conflicting property types.",
        solution: `type A = { id: number; metadata: { source: string } };
type B = { id: number; metadata: { author: string } };

type AB = A & B;

// The resulting 'metadata' property is an intersection of both metadata shapes:
const combined: AB = {
  id: 1,
  metadata: {
    source: "API",
    author: "Alice"
  }
};

console.log("Combined metadata:", combined.metadata);`,
        explanation: "When overlapping properties exist, TypeScript intersects their individual property types recursively."
      },
      {
        title: "Self-Referential / Recursive Type Aliases (JSON Tree)",
        scenario: "Model arbitrary nested JSON values using recursive type aliases.",
        solution: `type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

const payload: JSONValue = {
  title: "Config",
  version: 2,
  active: true,
  items: ["alpha", 42, { nested: null }]
};

console.log("JSON Payload verified:", payload);`,
        explanation: "TypeScript allows type aliases to reference themselves, enabling precise modeling of trees, ASTs, and JSON structures."
      },
      {
        title: "Linked List Node Structure",
        scenario: "Implement a classic singly-linked list node using recursive type aliases.",
        solution: `type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

const list: ListNode<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

function printList<T>(head: ListNode<T> | null): void {
  let curr = head;
  const vals: T[] = [];
  while (curr !== null) {
    vals.push(curr.value);
    curr = curr.next;
  }
  console.log("List:", vals.join(" -> "));
}

printList(list);`,
        explanation: "Recursive type aliases make data structures like trees and linked lists type-safe from root to leaf."
      },
      {
        title: "Combining Behaviors via Intersecting Function Types",
        scenario: "Combine an invokable function with metadata properties using intersection.",
        solution: `type GreeterFunction = {
  (name: string): string;
  defaultLocale: string;
};

const greeter: GreeterFunction = Object.assign(
  (name: string) => \`Hello, \${name}!\`,
  { defaultLocale: "en-US" }
);

console.log(greeter("Grace"));
console.log("Locale:", greeter.defaultLocale);`,
        explanation: "Intersecting a callable signature with an object shape creates hybrid callable objects."
      },
      {
        title: "API Request and Response Model Composition",
        scenario: "Compose API envelopes by intersecting pagination and status models.",
        solution: `type ApiStatus = { success: boolean; timestamp: number };
type Pagination = { page: number; pageSize: number; totalCount: number };

type PaginatedApiResponse<T> = ApiStatus & {
  data: T[];
  pagination: Pagination;
};

const userResponse: PaginatedApiResponse<{ id: number; name: string }> = {
  success: true,
  timestamp: Date.now(),
  data: [{ id: 1, name: "Lucas" }],
  pagination: { page: 1, pageSize: 20, totalCount: 1 }
};

console.log("Response records:", userResponse.data.length);`,
        explanation: "Generic type aliases combined with intersections let you build standardized API response formats across all backend endpoints."
      },
      {
        title: "Generic Type Aliases with Default Parameters",
        scenario: "Create a flexible Result container type with default error type.",
        solution: `type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { ok: false, error: "Division by zero" };
  }
  return { ok: true, value: a / b };
}

const res = divide(10, 2);
if (res.ok) {
  console.log("Quotient:", res.value);
} else {
  console.log("Error:", res.error);
}`,
        explanation: "Type aliases support generic type parameters with defaults, providing flexible utility abstractions."
      },
      {
        title: "Deep Readonly Object Alias",
        scenario: "Create a recursively immutable type alias that prevents nested property mutations.",
        solution: `type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface CompanyConfig {
  name: string;
  headquarters: {
    city: string;
    zipCode: number;
  };
}

const company: DeepReadonly<CompanyConfig> = {
  name: "TechCorp",
  headquarters: {
    city: "San Francisco",
    zipCode: 94105
  }
};

// company.headquarters.city = "New York"; // Compile Error!
console.log("Company City:", company.headquarters.city);`,
        explanation: "Mapped types inside type aliases allow recursive structural transformation across nested objects."
      }
    ]
  },
  {
    day: 8,
    examples: [
      {
        title: "String Literal Unions for Application Status",
        scenario: "Constrain an order state machine to only allowed string literals.",
        solution: `type OrderStatus = "draft" | "submitted" | "processing" | "shipped" | "delivered";

function canCancelOrder(status: OrderStatus): boolean {
  return status === "draft" || status === "submitted";
}

console.log("Can cancel submitted order?", canCancelOrder("submitted"));
console.log("Can cancel shipped order?", canCancelOrder("shipped"));`,
        explanation: "String literal unions restrict variables to a closed set of exact string values, eliminating typos."
      },
      {
        title: "Numeric Literal Unions for Dice Rolls or Priority",
        scenario: "Model strict priority levels (1, 2, 3) or a dice roll (1 through 6).",
        solution: `type PriorityLevel = 1 | 2 | 3;

function getSlaHours(priority: PriorityLevel): number {
  switch (priority) {
    case 1: return 2;   // Critical: 2h
    case 2: return 8;   // High: 8h
    case 3: return 24;  // Normal: 24h
  }
}

console.log("SLA for priority 1:", getSlaHours(1), "hours");`,
        explanation: "Numeric literal types ensure functions only accept exact numeric values, preventing out-of-range arguments."
      },
      {
        title: "Mixed Primitive Unions (string | number)",
        scenario: "Handle identifiers that may arrive as numeric IDs or alphanumeric UUIDs.",
        solution: `type EntityId = string | number;

function formatId(id: EntityId): string {
  if (typeof id === "number") {
    return \`ID#\${id.toString().padStart(6, "0")}\`;
  }
  return \`UUID:\${id.toLowerCase()}\`;
}

console.log(formatId(42));
console.log(formatId("A1B2C3D4"));`,
        explanation: "TypeScript requires narrowing union types with runtime checks like 'typeof' before calling type-specific methods."
      },
      {
        title: "Literal Narrowing with Strict Equality",
        scenario: "Narrow down union variants inside equality check branches.",
        solution: `type Theme = "light" | "dark" | "system";

function getBackgroundColor(theme: Theme, prefersDark: boolean): string {
  if (theme === "system") {
    return prefersDark ? "#121212" : "#ffffff";
  }
  return theme === "dark" ? "#1e1e1e" : "#f5f5f5";
}

console.log("Dark Theme Color:", getBackgroundColor("dark", false));
console.log("System Theme Color:", getBackgroundColor("system", true));`,
        explanation: "Control flow analysis narrows literal unions step-by-step as equality checks eliminate possibilities."
      },
      {
        title: "Boolean Literal Unions for Strict Feature Flags",
        scenario: "Define feature toggles that only accept exact boolean literals.",
        solution: `type MaintenanceMode = false; // Strictly disabled in production
type BetaAllowed = true | false;

function launchApp(maintenance: MaintenanceMode, beta: BetaAllowed): void {
  console.log("App running in production. Beta enabled?", beta);
}

launchApp(false, true);`,
        explanation: "Boolean literals 'true' and 'false' can be used as distinct types to enforce invariant states."
      },
      {
        title: "Union of Diverse Object Shapes",
        scenario: "Represent multiple event structures using a union of object types.",
        solution: `type MouseClickEvent = { type: "click"; x: number; y: number };
type KeyPressEvent = { type: "keypress"; key: string; ctrlKey: boolean };

type UIEvent = MouseClickEvent | KeyPressEvent;

function logUIEvent(event: UIEvent): void {
  if (event.type === "click") {
    console.log(\`Clicked at (\${event.x}, \${event.y})\`);
  } else {
    console.log(\`Key pressed: \${event.key} (CTRL: \${event.ctrlKey})\`);
  }
}

logUIEvent({ type: "click", x: 120, y: 350 });`,
        explanation: "Unions of object shapes allow processing different data payloads safely through common tag properties."
      },
      {
        title: "HTTP Request Method Validator",
        scenario: "Accept only valid standard HTTP methods in an API client.",
        solution: `type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

function sendRequest(url: string, method: HttpMethod): void {
  console.log(\`[\${method}] Sending request to: \${url}\`);
}

sendRequest("/api/v1/users", "GET");
sendRequest("/api/v1/users/42", "DELETE");`,
        explanation: "Restricting arguments to literal unions prevents invalid method names from ever reaching network sockets."
      },
      {
        title: "Type-Safe CSS Dimension Units",
        scenario: "Create a flexible CSS dimension helper that accepts raw pixel numbers or string units.",
        solution: `type CssDimension = number | \`\${number}px\` | \`\${number}rem\` | \`\${number}%\`;

function formatDimension(dim: CssDimension): string {
  if (typeof dim === "number") {
    return \`\${dim}px\`;
  }
  return dim;
}

console.log(formatDimension(16));
console.log(formatDimension("2.5rem"));
console.log(formatDimension("100%"));`,
        explanation: "Template literal types combined with primitive unions provide compiler-validated syntax for CSS values."
      },
      {
        title: "Flexible Argument Normalizer Function",
        scenario: "Write a function that normalizes a string or string array into a sanitized array.",
        solution: `function normalizeTags(input: string | string[]): string[] {
  if (typeof input === "string") {
    return input.split(",").map(t => t.trim().toLowerCase());
  }
  return input.map(t => t.trim().toLowerCase());
}

console.log("Normalized CSV:", normalizeTags("React, TypeScript, Redux"));
console.log("Normalized Array:", normalizeTags([" NodeJS ", "Docker "]));`,
        explanation: "Accepting a union like 'string | string[]' gives callers ergonomic flexibility while keeping internal logic type-safe."
      },
      {
        title: "Event Action Payload Dispatcher",
        scenario: "Model multiple command actions and handle them with strict literal matching.",
        solution: `type Action =
  | { action: "SET_THEME"; payload: "light" | "dark" }
  | { action: "SET_VOLUME"; payload: number }
  | { action: "RESET_ALL" };

function dispatch(action: Action): void {
  switch (action.action) {
    case "SET_THEME":
      console.log("Theme set to:", action.payload);
      break;
    case "SET_VOLUME":
      console.log("Volume adjusted to:", action.payload);
      break;
    case "RESET_ALL":
      console.log("Settings reset to defaults");
      break;
  }
}

dispatch({ action: "SET_THEME", payload: "dark" });
dispatch({ action: "RESET_ALL" });`,
        explanation: "Unions of actions provide the foundation for robust, predictable state management architectures."
      }
    ]
  },
  {
    day: 9,
    examples: [
      {
        title: "Narrowing with 'typeof' for Primitives",
        scenario: "Differentiate between string, number, and boolean arguments at runtime.",
        solution: `function padValue(val: string | number, padding: number): string {
  if (typeof val === "number") {
    return val.toString().padStart(padding, "0");
  }
  return val.padStart(padding, " ");
}

console.log("Padded number:", padValue(42, 5));
console.log("Padded string:", padValue("Hi", 5));`,
        explanation: "'typeof' checks ('string', 'number', 'boolean', 'symbol', 'bigint', 'undefined') narrow union types within 'if' branches."
      },
      {
        title: "Narrowing with 'instanceof' for Dates and Errors",
        scenario: "Discriminate between Date instances and ISO date strings.",
        solution: `function toEpochSeconds(input: Date | string): number {
  if (input instanceof Date) {
    return Math.floor(input.getTime() / 1000);
  }
  return Math.floor(new Date(input).getTime() / 1000);
}

console.log("From Date:", toEpochSeconds(new Date()));
console.log("From ISO string:", toEpochSeconds("2026-01-01T00:00:00Z"));`,
        explanation: "'instanceof' checks verify prototype chains and safely narrow object classes like Date, RegExp, and Error."
      },
      {
        title: "Narrowing with the 'in' Operator",
        scenario: "Check for the existence of specific properties on distinct object types.",
        solution: `type AdminUser = { role: "admin"; permissions: string[] };
type RegularUser = { role: "user"; email: string };

function inspectAccount(user: AdminUser | RegularUser): void {
  if ("permissions" in user) {
    console.log("Admin permissions:", user.permissions.join(", "));
  } else {
    console.log("User email:", user.email);
  }
}

inspectAccount({ role: "admin", permissions: ["manage_users", "delete_content"] });`,
        explanation: "The 'in' operator tests for the presence of a property and narrows the union accordingly."
      },
      {
        title: "Truthiness Narrowing for Optional Values",
        scenario: "Safely filter out null, undefined, or empty strings using boolean truthiness.",
        solution: `function printFirstElement(arr?: string[] | null): void {
  if (arr && arr.length > 0) {
    console.log("First element:", arr[0].toUpperCase());
  } else {
    console.log("Array is empty or absent.");
  }
}

printFirstElement(["typescript", "javascript"]);
printFirstElement(null);`,
        explanation: "Truthiness checks like 'if (arr)' eliminate null, undefined, false, 0, and '' from the type."
      },
      {
        title: "Equality Narrowing with '===' and '!=='",
        scenario: "Narrow identical types across two different variables by comparing them.",
        solution: `function compareValues(a: string | number, b: string | boolean): void {
  if (a === b) {
    // Both 'a' and 'b' must be strings here, because string is their only shared type!
    console.log("Matching strings:", a.toUpperCase());
  } else {
    console.log("Different values or types");
  }
}

compareValues("alpha", "alpha");`,
        explanation: "Strict equality checks between different unions narrow both variables to their common intersected type."
      },
      {
        title: "Early Return Guard Clauses",
        scenario: "Clean up nested conditionals by returning early once edge conditions are ruled out.",
        solution: `function processInput(input: string | null | undefined): number {
  if (input === null || input === undefined) {
    return 0; // Guard clause handles non-strings
  }
  // TypeScript knows 'input' is guaranteed to be a string here:
  return input.trim().length;
}

console.log("Length of valid input:", processInput("  TypeScript Tutor  "));
console.log("Length of null:", processInput(null));`,
        explanation: "Control flow analysis tracks variable paths and removes handled types after early return statements."
      },
      {
        title: "Narrowing with 'Array.isArray'",
        scenario: "Differentiate between single items and arrays of items.",
        solution: `function sumItems(items: number | number[]): number {
  if (Array.isArray(items)) {
    return items.reduce((a, b) => a + b, 0);
  }
  return items;
}

console.log("Sum single:", sumItems(42));
console.log("Sum array:", sumItems([10, 20, 30]));`,
        explanation: "'Array.isArray' automatically narrows 'any[] | T' to the specific array variant."
      },
      {
        title: "Discriminating Nullable Objects from Values",
        scenario: "Handle an object that might be null before accessing its methods.",
        solution: `interface SessionData {
  token: string;
  expires: number;
}

function isSessionValid(session: SessionData | null): boolean {
  if (!session) return false;
  return session.expires > Date.now();
}

console.log("Valid session?", isSessionValid({ token: "xyz", expires: Date.now() + 10000 }));`,
        explanation: "Checking '!session' narrows the type from 'SessionData | null' to strictly 'SessionData' in the subsequent block."
      },
      {
        title: "Exhaustiveness Narrowing in Switch Statements",
        scenario: "Verify that all union values are handled across a switch statement.",
        solution: `type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

function getVector(dir: Direction): [number, number] {
  switch (dir) {
    case "UP": return [0, -1];
    case "DOWN": return [0, 1];
    case "LEFT": return [-1, 0];
    case "RIGHT": return [1, 0];
  }
}

console.log("Vector for RIGHT:", getVector("RIGHT"));`,
        explanation: "TypeScript validates that all union members are handled, ensuring the function always returns a valid vector."
      },
      {
        title: "Multi-Step Data Validation Pipeline",
        scenario: "Progressively validate unknown incoming data into a strongly typed domain entity.",
        solution: `interface VerifiedUser {
  id: number;
  email: string;
}

function validatePayload(raw: unknown): VerifiedUser {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("Payload must be a non-null object");
  }

  if (!("id" in raw) || typeof (raw as any).id !== "number") {
    throw new Error("Invalid or missing 'id'");
  }

  if (!("email" in raw) || typeof (raw as any).email !== "string") {
    throw new Error("Invalid or missing 'email'");
  }

  return {
    id: (raw as any).id,
    email: (raw as any).email
  };
}

const payload = validatePayload({ id: 101, email: "user@domain.com" });
console.log("Validated user:", payload.email);`,
        explanation: "Step-by-step control flow narrowing ensures that external unknown data is completely verified before being passed into business logic."
      }
    ]
  },
  {
    day: 10,
    examples: [
      {
        title: "Writing a Basic Type Predicate ('val is string')",
        scenario: "Create a reusable type guard function that narrows 'unknown' to 'string'.",
        solution: `function isString(val: unknown): val is string {
  return typeof val === "string";
}

const testValue: unknown = "Hello TypeScript";
if (isString(testValue)) {
  console.log("Upper string:", testValue.toUpperCase());
}`,
        explanation: "A return type of 'val is string' informs the TypeScript compiler that returning 'true' confirms the argument is of type 'string'."
      },
      {
        title: "Custom Object Type Guard for User Authentication",
        scenario: "Verify that an unknown object matches a User profile structure.",
        solution: `interface AuthUser {
  id: string;
  email: string;
  roles: string[];
}

function isAuthUser(obj: unknown): obj is AuthUser {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj && typeof (obj as any).id === "string" &&
    "email" in obj && typeof (obj as any).email === "string" &&
    "roles" in obj && Array.isArray((obj as any).roles)
  );
}

const candidate: unknown = { id: "u_1", email: "auth@test.com", roles: ["admin"] };
if (isAuthUser(candidate)) {
  console.log(\`Authenticated \${candidate.email} with roles: \${candidate.roles.join(", ")}\`);
}`,
        explanation: "Custom object type guards validate runtime shape and provide immediate compile-time type safety."
      },
      {
        title: "Filtering Array Values with Type Predicates",
        scenario: "Filter null and undefined elements from an array while narrowing the array type.",
        solution: `function isDefined<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}

const mixedList: (string | null | undefined)[] = ["alpha", null, "beta", undefined, "gamma"];
const cleanStrings: string[] = mixedList.filter(isDefined);

console.log("Clean list:", cleanStrings);`,
        explanation: "Standard '.filter(Boolean)' loses type information. A type predicate like 'val is T' narrows '(T | null | undefined)[]' to 'T[]'."
      },
      {
        title: "Assertion Signatures ('asserts condition')",
        scenario: "Create an invariant assertion function that throws on false and narrows types.",
        solution: `function assertCondition(condition: boolean, msg: string): asserts condition {
  if (!condition) {
    throw new Error(\`Assertion failed: \${msg}\`);
  }
}

function processScore(score: number | null): number {
  assertCondition(score !== null, "Score must not be null");
  // TypeScript now knows score is number:
  return score * 1.1;
}

console.log("Adjusted score:", processScore(100));`,
        explanation: "'asserts condition' tells TypeScript that if the function returns normally without throwing, the condition is guaranteed to be true."
      },
      {
        title: "Assertion Signature with Type Narrowing ('asserts val is T')",
        scenario: "Assert that a value is an Error instance or throw.",
        solution: `function assertIsError(err: unknown): asserts err is Error {
  if (!(err instanceof Error)) {
    throw new Error("Value is not an Error instance");
  }
}

try {
  throw new Error("Disk quota exceeded");
} catch (e: unknown) {
  assertIsError(e);
  console.log("Caught Error Message:", e.message);
}`,
        explanation: "'asserts val is T' narrows the passed variable in the remaining scope without requiring an 'if' block."
      },
      {
        title: "Discriminating Domain Errors with Type Guards",
        scenario: "Differentiate between network errors, validation errors, and auth errors.",
        solution: `interface NetworkError {
  kind: "NETWORK";
  statusCode: number;
}

interface ValidationError {
  kind: "VALIDATION";
  fields: Record<string, string>;
}

type AppError = NetworkError | ValidationError;

function isNetworkError(error: AppError): error is NetworkError {
  return error.kind === "NETWORK";
}

const err: AppError = { kind: "NETWORK", statusCode: 503 };
if (isNetworkError(err)) {
  console.log("Network status:", err.statusCode);
}`,
        explanation: "Type guards provide clean separation of error handling logic based on domain classifications."
      },
      {
        title: "Recursive Type Guard for Nested Data Structures",
        scenario: "Validate that a tree node is valid and recursively well-formed.",
        solution: `interface TreeNode {
  value: string;
  children?: TreeNode[];
}

function isTreeNode(obj: unknown): obj is TreeNode {
  if (typeof obj !== "object" || obj === null) return false;
  if (!("value" in obj) || typeof (obj as any).value !== "string") return false;
  if ("children" in obj && (obj as any).children !== undefined) {
    if (!Array.isArray((obj as any).children)) return false;
    return (obj as any).children.every(isTreeNode);
  }
  return true;
}

const tree: unknown = { value: "root", children: [{ value: "child1" }, { value: "child2" }] };
if (isTreeNode(tree)) {
  console.log("Root node value:", tree.value);
}`,
        explanation: "Type predicates can be recursive, validating nested hierarchical structures completely at runtime."
      },
      {
        title: "Validating Array of Specific Objects ('isUserArray')",
        scenario: "Check if an unknown variable is an array where every item satisfies an interface.",
        solution: `interface Member {
  name: string;
  active: boolean;
}

function isMember(obj: unknown): obj is Member {
  return typeof obj === "object" && obj !== null && "name" in obj && "active" in obj;
}

function isMemberArray(val: unknown): val is Member[] {
  return Array.isArray(val) && val.every(isMember);
}

const inputList: unknown = [{ name: "Sam", active: true }, { name: "Tara", active: false }];
if (isMemberArray(inputList)) {
  console.log("Active members:", inputList.filter(m => m.active).map(m => m.name));
}`,
        explanation: "Combining 'Array.isArray' with '.every(predicate)' safely asserts that the entire list belongs to 'T[]'."
      },
      {
        title: "Type Guard for Promises / Thenables",
        scenario: "Detect whether an unknown value is a Promise or thenable object.",
        solution: `function isPromise<T = unknown>(val: unknown): val is Promise<T> {
  return (
    typeof val === "object" &&
    val !== null &&
    "then" in val &&
    typeof (val as any).then === "function"
  );
}

const syncVal = 42;
const asyncVal = Promise.resolve("resolved value");

console.log("Is 42 a promise?", isPromise(syncVal));
console.log("Is Promise a promise?", isPromise(asyncVal));`,
        explanation: "Duck-typing through custom predicates is the standard way to detect Promises and asynchronous objects."
      },
      {
        title: "Runtime Validation of Literal Union Membership",
        scenario: "Validate if an untrusted string is a member of an allowed string literal union.",
        solution: `const VALID_CURRENCIES = ["USD", "EUR", "GBP", "JPY"] as const;
type Currency = (typeof VALID_CURRENCIES)[number];

function isCurrency(val: string): val is Currency {
  return (VALID_CURRENCIES as readonly string[]).includes(val);
}

const userChoice = "EUR";
if (isCurrency(userChoice)) {
  console.log("Selected valid currency:", userChoice);
}`,
        explanation: "Combining 'as const' arrays with type predicates ensures runtime checks and compile-time types stay perfectly in sync."
      }
    ]
  }
];
