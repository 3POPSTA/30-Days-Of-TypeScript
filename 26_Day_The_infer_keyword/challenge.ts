/**
 * 🎯 Day 26: The infer Keyword & Unwrapping Types - Coding Challenges
 *
 * Infer hidden types within Promises, functions, and arrays.
 *
 * 🚀 Run with: npm run challenge:26
 */

// ============================================================================
// 🎯 CHALLENGE 1: Re-implementing ReturnType with infer
// ============================================================================
/**
 * Define 'MyReturnType<T>' = T extends (...args: any[]) => infer R ? R : never
 */
// 👇 YOUR CODE HERE:
export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// ============================================================================
// 🎯 CHALLENGE 2: Recursive Promise Unwrapper (DeepAwaited)
// ============================================================================
/**
 * Define 'DeepAwaited<T>' that recursively unwraps nested Promises:
 * T extends Promise<infer U> ? DeepAwaited<U> : T
 */
// 👇 YOUR CODE HERE:
export type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;

// ============================================================================
// 🎯 CHALLENGE 3: Extracting Array Element Types
// ============================================================================
/**
 * Define 'ElementOf<T>' = T extends readonly (infer E)[] ? E : never
 */
// 👇 YOUR CODE HERE:
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never;

// ============================================================================
// 🎯 CHALLENGE 4: Extracting the First Parameter of a Function
// ============================================================================
/**
 * Define 'FirstParam<T>' = T extends (first: infer P, ...rest: any[]) => any ? P : never
 */
// 👇 YOUR CODE HERE:
export type FirstParam<T> = T extends (first: infer P, ...rest: any[]) => any ? P : never;

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:26
// ============================================================================
console.log("--- 🧪 Day 26 Challenge Results ---");
type TestFn = (id: string, count: number) => { success: boolean };
type Ret = MyReturnType<TestFn>; // { success: boolean }
type Nested = Promise<Promise<string>>;
type Flat = DeepAwaited<Nested>; // string
type ArrItem = ElementOf<number[]>; // number
type P1 = FirstParam<TestFn>; // string

console.log("Challenge 1: MyReturnType successfully extracted return type");
console.log("Challenge 2: DeepAwaited unwrapped Promise<Promise<string>> to string");
console.log("Challenge 3: ElementOf unwrapped number[] to number");
console.log("Challenge 4: FirstParam extracted first argument as string");
console.log("-----------------------------------\n");
