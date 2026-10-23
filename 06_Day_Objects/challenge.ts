/**
 * 🎯 Day 06: Object Types & Property Modifiers - Coding Challenges
 *
 * Master object types, readonly properties, optional modifiers, and index signatures.
 *
 * 🚀 Run with: npm run challenge:06
 */

// ============================================================================
// 🎯 CHALLENGE 1: Defining Structural Object Types with Modifiers
// ============================================================================
/**
 * 1. Define interface 'UserProfile':
 *    - readonly id: string
 *    - username: string
 *    - email: string
 *    - bio?: optional string
 *
 * 2. Write 'createUserProfile(id, username, email, bio?)': UserProfile
 */
// 👇 YOUR CODE HERE:
export interface UserProfile {
  readonly id: string;
  username: string;
  email: string;
  bio?: string;
}

export function createUserProfile(id: string, username: string, email: string, bio?: string): UserProfile {
  // TODO: Return the UserProfile object
  return { id, username, email, bio };
}

// ============================================================================
// 🎯 CHALLENGE 2: Pure Immutable Updates
// ============================================================================
/**
 * Write a function 'updateUserBio' that accepts:
 *   - user: UserProfile
 *   - newBio: string
 *
 * Return a NEW UserProfile object with the updated bio.
 * Do NOT mutate 'user'.
 *
 * 💡 Hint: Use object spread { ...user, bio: newBio }
 */
// 👇 YOUR CODE HERE:
export function updateUserBio(user: UserProfile, newBio: string): UserProfile {
  // TODO: Return a new UserProfile with newBio
  return user;
}

// ============================================================================
// 🎯 CHALLENGE 3: Dynamic Index Signatures
// ============================================================================
/**
 * 1. Define 'MetricStore' with an index signature:
 *    [metricName: string]: number
 *
 * 2. Write 'recordMetric(store, metric, delta)': MetricStore
 *    Increment the existing metric value by delta (or initialize with delta if new).
 *    Return a new store object.
 */
// 👇 YOUR CODE HERE:
export type MetricStore = { [metricName: string]: number };

export function recordMetric(store: MetricStore, metric: string, delta: number): MetricStore {
  // TODO: Return a new store object with the updated metric
  return store;
}

// ============================================================================
// 🎯 CHALLENGE 4: Nested Object Configuration
// ============================================================================
/**
 * 1. Define 'ServerConfig':
 *    - host: string
 *    - port: number
 *    - database: { name: string; ssl: boolean }
 *
 * 2. Write 'formatConnectionString(config: ServerConfig): string':
 *    Return: "db://<host>:<port>/<dbName>?ssl=<ssl>"
 */
// 👇 YOUR CODE HERE:
export interface ServerConfig {
  host: string;
  port: number;
  database: {
    name: string;
    ssl: boolean;
  };
}

export function formatConnectionString(config: ServerConfig): string {
  // TODO: Return the formatted connection string
  return "";
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:06
// ============================================================================
console.log("--- 🧪 Day 06 Challenge Results ---");
const user = createUserProfile("u1", "alice", "alice@example.com");
console.log("Challenge 1:", user);
console.log("Challenge 2:", updateUserBio(user, "Learning TypeScript!"));
console.log("Challenge 3:", recordMetric({ pageViews: 10 }, "pageViews", 5));
console.log("Challenge 4:", formatConnectionString({ host: "localhost", port: 5432, database: { name: "testdb", ssl: true } }));
console.log("-----------------------------------\n");
