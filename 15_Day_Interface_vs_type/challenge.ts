/**
 * ============================================================================
 * DAY 15: INTERFACE VS TYPE & DECLARATION MERGING — CODING CHALLENGES
 * ============================================================================
 * Interfaces and Type Aliases are both central to TypeScript, but have distinct
 * advantages:
 * - Interfaces support declaration merging (ideal for libraries/plugins)
 * - Types support unions, primitives, tuples, and mapped types
 *
 * Test with:
 *   npx tsx 15_Day_Interface_vs_type/challenge.ts
 *   OR
 *   npm run challenge:15
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 15: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Declaration Merging with Interfaces
// ============================================================================
/**
 * CHALLENGE 1:
 * Declare an interface 'AppEnvironment' with:
 *   - nodeEnv: "development" | "production"
 * 
 * In the same scope, declare 'AppEnvironment' again to merge:
 *   - port: number
 *   - apiSecret: string
 * 
 * Write a function 'buildEnvironment(): AppEnvironment'.
 */
// >>> YOUR CODE HERE <<<
export interface AppEnvironment {
  nodeEnv: "development" | "production";
}

export interface AppEnvironment {
  port: number;
  apiSecret: string;
}

export function buildEnvironment(): AppEnvironment {
  // TODO: Replace with your implementation
  return {
    nodeEnv: "production",
    port: 8080,
    apiSecret: "super-secret-key"
  };
}


// ============================================================================
// STEP 2: When Type Alias is Mandatory (Unions & Tuples)
// ============================================================================
/**
 * CHALLENGE 2:
 * An interface CANNOT represent a pure union or a tuple type alias.
 * 
 * Define:
 *   type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
 *   type EndpointTuple = [method: HttpMethod, path: string];
 * 
 * Write a function 'formatEndpoint(endpoint: EndpointTuple): string':
 *   Returns: "[METHOD] /path"
 * 
 * Example:
 *   formatEndpoint(["GET", "/api/v1/users"]) => "[GET] /api/v1/users"
 */
// >>> YOUR CODE HERE <<<
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type EndpointTuple = [method: HttpMethod, path: string];

export function formatEndpoint(endpoint: EndpointTuple): string {
  // TODO: Replace with your implementation
  const [method, path] = endpoint;
  return `[${method}] ${path}`;
}


// ============================================================================
// STEP 3: Extending via Interface vs Intersecting via Type
// ============================================================================
/**
 * CHALLENGE 3:
 * Show understanding of both patterns:
 *   1. Interface inheritance:
 *      interface BaseUser { id: string }
 *      interface ExtendedUser extends BaseUser { name: string }
 * 
 *   2. Type intersection:
 *      type TBaseUser = { id: string }
 *      type TExtendedUser = TBaseUser & { name: string }
 * 
 * Write 'areUsersCompatible(u1: ExtendedUser, u2: TExtendedUser): boolean'
 * that returns true if both have matching id and name.
 */
// >>> YOUR CODE HERE <<<
export interface BaseUser { id: string }
export interface ExtendedUser extends BaseUser { name: string }

export type TBaseUser = { id: string };
export type TExtendedUser = TBaseUser & { name: string };

export function areUsersCompatible(u1: ExtendedUser, u2: TExtendedUser): boolean {
  // TODO: Replace with your implementation
  return u1.id === u2.id && u1.name === u2.name;
}


// ============================================================================
// STEP 4: Plugin Registry Pattern with Merging
// ============================================================================
/**
 * CHALLENGE 4:
 * Define an interface 'PluginRegistry' with an initial plugin 'auth: boolean'.
 * Merge a new plugin 'logger: (msg: string) => void'.
 * 
 * Write a function 'createPluginHost(): PluginRegistry'.
 */
// >>> YOUR CODE HERE <<<
export interface PluginRegistry {
  auth: boolean;
}

export interface PluginRegistry {
  logger: (msg: string) => void;
}

export function createPluginHost(): PluginRegistry {
  // TODO: Replace with your implementation
  return {
    auth: true,
    logger: (_msg: string) => {}
  };
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (AppEnvironment Merging)...");
const env = buildEnvironment();
testCheck("Step 1 - merged interface has all fields", env.nodeEnv === "production" && env.port === 8080 && env.apiSecret === "super-secret-key");

console.log("\nVerifying Step 2 (HttpMethod & EndpointTuple)...");
const ep: EndpointTuple = ["POST", "/api/v1/auth/login"];
testCheck("Step 2 - formatEndpoint", formatEndpoint(ep) === "[POST] /api/v1/auth/login");

console.log("\nVerifying Step 3 (Interface vs Type compatibility)...");
const u1: ExtendedUser = { id: "10", name: "Grace" };
const u2: TExtendedUser = { id: "10", name: "Grace" };
testCheck("Step 3 - areUsersCompatible", areUsersCompatible(u1, u2) === true);

console.log("\nVerifying Step 4 (PluginRegistry)...");
const host = createPluginHost();
testCheck("Step 4 - createPluginHost", host.auth === true && typeof host.logger === "function");

console.log("\n[Summary] Day 15 challenge checks completed!\n");
