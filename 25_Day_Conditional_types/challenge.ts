/**
 * 🎯 Day 25: Conditional Types & Distributive Conditionals - Coding Challenges
 *
 * Write type-level ternary conditions (T extends U ? X : Y) and distributive filters.
 *
 * 🚀 Run with: npm run challenge:25
 */

// ============================================================================
// 🎯 CHALLENGE 1: Basic Type Inspection Conditional
// ============================================================================
/**
 * Define 'IsString<T>' = T extends string ? true : false
 */
// 👇 YOUR CODE HERE:
export type IsString<T> = T extends string ? true : false;

// ============================================================================
// 🎯 CHALLENGE 2: Distributive Union Filtering
// ============================================================================
/**
 * Define 'Diff<T, U>' = T extends U ? never : T
 * Filters out members of T that are assignable to U.
 */
// 👇 YOUR CODE HERE:
export type Diff<T, U> = T extends U ? never : T;

// ============================================================================
// 🎯 CHALLENGE 3: Array Element Extraction Conditional
// ============================================================================
/**
 * Define 'Flatten<T>' = T extends (infer E)[] ? E : T
 * Unwraps array elements or returns the type unchanged if not an array.
 */
// 👇 YOUR CODE HERE:
export type Flatten<T> = T extends (infer E)[] ? E : T;

// ============================================================================
// 🎯 CHALLENGE 4: Safe Function Return Resolver
// ============================================================================
/**
 * Define 'FunctionReturnTypeOrNever<T>' = T extends (...args: any[]) => infer R ? R : never
 */
// 👇 YOUR CODE HERE:
export type FunctionReturnTypeOrNever<T> = T extends (...args: any[]) => infer R ? R : never;

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:25
// ============================================================================
console.log("--- 🧪 Day 25 Challenge Results ---");
type Check1 = IsString<"hello">; // true
type Check2 = IsString<123>;     // false
console.log("Challenge 1: IsString<'hello'> is true, IsString<123> is false");

type Letters = "a" | "b" | "c" | "d";
type Filtered = Diff<Letters, "b" | "c">; // "a" | "d"
console.log("Challenge 2: Diff<Letters, 'b' | 'c'> produces 'a' | 'd'");

type Unwrapped = Flatten<number[]>; // number
console.log("Challenge 3: Flatten<number[]> produces number");

type FnReturn = FunctionReturnTypeOrNever<() => boolean>; // boolean
console.log("Challenge 4: FunctionReturnTypeOrNever produces boolean");
console.log("-----------------------------------\n");
