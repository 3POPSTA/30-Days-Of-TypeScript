/**
 * 🎯 Day 15: Interface vs Type & Declaration Merging - Coding Challenges
 *
 * Understand when to use interface vs type, declaration merging, and plugin registries.
 *
 * 🚀 Run with: npm run challenge:15
 */

// ============================================================================
// 🎯 CHALLENGE 1: Declaration Merging with Interfaces
// ============================================================================
/**
 * Interfaces can be declared multiple times in the same scope to merge their fields!
 */
export interface AppEnvironment {
  nodeEnv: "development" | "production";
}

export interface AppEnvironment {
  port: number;
  apiSecret: string;
}

// 👇 YOUR CODE HERE:
export function buildEnvironment(): AppEnvironment {
  // TODO: Return AppEnvironment containing all merged fields
  return {
    nodeEnv: "production",
    port: 8080,
    apiSecret: "super-secret-key"
  };
}

// ============================================================================
// 🎯 CHALLENGE 2: When Type Alias is Mandatory (Unions & Tuples)
// ============================================================================
/**
 * Types can represent unions and tuples directly, which interfaces cannot.
 *
 * 1. Define 'HttpMethod': "GET" | "POST" | "PUT" | "DELETE"
 * 2. Define 'EndpointTuple': [method: HttpMethod, path: string]
 * 3. Write 'formatEndpoint(endpoint: EndpointTuple): string' => "[<method>] <path>"
 */
// 👇 YOUR CODE HERE:
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type EndpointTuple = [method: HttpMethod, path: string];

export function formatEndpoint(endpoint: EndpointTuple): string {
  // TODO: Return formatted endpoint string
  const [method, path] = endpoint;
  return `[${method}] ${path}`;
}

// ============================================================================
// 🎯 CHALLENGE 3: Extending via Interface vs Intersecting via Type
// ============================================================================
export interface BaseUser { id: string }
export interface ExtendedUser extends BaseUser { name: string }

export type TBaseUser = { id: string };
export type TExtendedUser = TBaseUser & { name: string };

// 👇 YOUR CODE HERE:
export function areUsersCompatible(u1: ExtendedUser, u2: TExtendedUser): boolean {
  // TODO: Check if u1 and u2 have identical id and name
  return u1.id === u2.id && u1.name === u2.name;
}

// ============================================================================
// 🎯 CHALLENGE 4: Plugin Registry Pattern with Merging
// ============================================================================
export interface PluginRegistry {
  auth: boolean;
}

export interface PluginRegistry {
  logger: (msg: string) => void;
}

// 👇 YOUR CODE HERE:
export function createPluginHost(): PluginRegistry {
  // TODO: Return an object with all merged PluginRegistry properties
  return {
    auth: true,
    logger: (_msg: string) => {}
  };
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:15
// ============================================================================
console.log("--- 🧪 Day 15 Challenge Results ---");
console.log("Challenge 1:", buildEnvironment());
console.log("Challenge 2:", formatEndpoint(["POST", "/api/users"]));
console.log("Challenge 3:", areUsersCompatible({ id: "1", name: "Alex" }, { id: "1", name: "Alex" }));
console.log("Challenge 4:", createPluginHost());
console.log("-----------------------------------\n");
