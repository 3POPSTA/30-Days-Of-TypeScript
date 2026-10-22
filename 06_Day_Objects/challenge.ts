/**
 * ============================================================================
 * DAY 06: OBJECT TYPES & PROPERTY MODIFIERS — CODING CHALLENGES
 * ============================================================================
 * Object types allow defining exact structural shapes with modifiers:
 * - 'readonly' prevents property re-assignment
 * - '?' marks properties as optional
 * - Index signatures '{ [key: string]: T }' model dynamic dictionaries
 *
 * Test with:
 *   npx tsx 06_Day_Objects/challenge.ts
 *   OR
 *   npm run challenge:06
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 06: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Defining Structural Object Types with Modifiers
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an object type 'UserProfile' with the following fields:
 *   - readonly id: string
 *   - username: string
 *   - email: string
 *   - bio?: string (optional)
 * 
 * Then write a function 'createUserProfile' that creates and returns a valid
 * UserProfile object with the provided parameters.
 */
// >>> YOUR CODE HERE <<<
export interface UserProfile {
  readonly id: string;
  username: string;
  email: string;
  bio?: string;
}

export function createUserProfile(id: string, username: string, email: string, bio?: string): UserProfile {
  // TODO: Replace with your implementation
  return { id, username, email, bio };
}


// ============================================================================
// STEP 2: Pure Immutable Updates
// ============================================================================
/**
 * CHALLENGE 2:
 * Because 'id' on UserProfile is 'readonly', it cannot be mutated.
 * 
 * Write a function 'updateUserBio' that accepts:
 *   - user (UserProfile): original user object
 *   - newBio (string): updated bio string
 * 
 * Return a NEW UserProfile object with the updated bio, preserving the
 * existing id, username, and email. Do NOT mutate 'user'.
 */
// >>> YOUR CODE HERE <<<
export function updateUserBio(user: UserProfile, newBio: string): UserProfile {
  // TODO: Replace with your implementation
  return { ...user, bio: newBio };
}


// ============================================================================
// STEP 3: Dynamic Index Signatures
// ============================================================================
/**
 * CHALLENGE 3:
 * An index signature allows objects to hold arbitrary dynamic keys.
 * 
 * Define a type 'MetricStore' with:
 *   - [metricName: string]: number
 * 
 * Write a function 'recordMetric' that accepts:
 *   - store (MetricStore)
 *   - metric (string)
 *   - delta (number)
 * 
 * If the metric exists in the store, add 'delta' to its value.
 * Otherwise, initialize it to 'delta'.
 * Return the updated store.
 */
// >>> YOUR CODE HERE <<<
export type MetricStore = { [metricName: string]: number };

export function recordMetric(store: MetricStore, metric: string, delta: number): MetricStore {
  // TODO: Replace with your implementation
  const current = store[metric] ?? 0;
  return { ...store, [metric]: current + delta };
}


// ============================================================================
// STEP 4: Nested Object Configuration
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a type 'ServerConfig' with:
 *   - host: string
 *   - port: number
 *   - database: {
 *       name: string;
 *       ssl: boolean;
 *     }
 * 
 * Write a function 'formatConnectionString' that takes 'config: ServerConfig'
 * and returns:
 *   "db://<host>:<port>/<name>?ssl=<ssl>"
 * 
 * Example:
 *   formatConnectionString({ host: "localhost", port: 5432, database: { name: "app_db", ssl: true } })
 *   => "db://localhost:5432/app_db?ssl=true"
 */
// >>> YOUR CODE HERE <<<
export interface ServerConfig {
  host: string;
  port: number;
  database: {
    name: string;
    ssl: boolean;
  };
}

export function formatConnectionString(config: ServerConfig): string {
  // TODO: Replace with your implementation
  return `db://${config.host}:${config.port}/${config.database.name}?ssl=${config.database.ssl}`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (UserProfile)...");
const user = createUserProfile("usr_101", "dev_ada", "ada@lovelace.dev", "Coding pioneer");
testCheck("Step 1 - createUserProfile", user.id === "usr_101" && user.bio === "Coding pioneer", user.username);

console.log("\nVerifying Step 2 (updateUserBio)...");
const updated = updateUserBio(user, "World's first computer programmer");
testCheck("Step 2 - updateUserBio immutable", updated.bio === "World's first computer programmer" && user.bio === "Coding pioneer");

console.log("\nVerifying Step 3 (MetricStore)...");
let metrics: MetricStore = { pageViews: 10 };
metrics = recordMetric(metrics, "pageViews", 5);
metrics = recordMetric(metrics, "errors", 1);
testCheck("Step 3.1 - existing metric incremented", metrics["pageViews"] === 15);
testCheck("Step 3.2 - new metric created", metrics["errors"] === 1);

console.log("\nVerifying Step 4 (ServerConfig)...");
const connStr = formatConnectionString({ host: "localhost", port: 5432, database: { name: "app_db", ssl: true } });
testCheck("Step 4 - formatConnectionString", connStr === "db://localhost:5432/app_db?ssl=true", connStr);

console.log("\n[Summary] Day 06 challenge checks completed!\n");
