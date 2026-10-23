/**
 * 🎯 Day 28: Utility Types Part 2 - Coding Challenges
 *
 * Re-implement Exclude, Extract, NonNullable, Parameters, and inspect service methods.
 *
 * 🚀 Run with: npm run challenge:28
 */

// ============================================================================
// 🎯 CHALLENGE 1: Re-implementing Exclude & Extract
// ============================================================================
/**
 * 1. Define 'MyExclude<T, U>' = T extends U ? never : T
 * 2. Define 'MyExtract<T, U>' = T extends U ? T : never
 */
// 👇 YOUR CODE HERE:
export type MyExclude<T, U> = T extends U ? never : T;
export type MyExtract<T, U> = T extends U ? T : never;

// ============================================================================
// 🎯 CHALLENGE 2: Re-implementing NonNullable
// ============================================================================
/**
 * Define 'MyNonNullable<T>' = T extends null | undefined ? never : T
 */
// 👇 YOUR CODE HERE:
export type MyNonNullable<T> = T extends null | undefined ? never : T;

// ============================================================================
// 🎯 CHALLENGE 3: Re-implementing Parameters<T>
// ============================================================================
/**
 * Define 'MyParameters<T extends (...args: any[]) => any>' = T extends (...args: infer P) => any ? P : never
 */
// 👇 YOUR CODE HERE:
export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// ============================================================================
// 🎯 CHALLENGE 4: Inspecting Service Method Payloads
// ============================================================================
export async function registerCustomer(email: string, age: number, isVip: boolean) {
  return { customerId: "cust_123", registered: true };
}

// 1. Extract parameter tuple type:
export type CustomerRegistrationArgs = Parameters<typeof registerCustomer>;

// 2. Extract resolved return type:
export type RegistrationResult = Awaited<ReturnType<typeof registerCustomer>>;

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:28
// ============================================================================
console.log("--- 🧪 Day 28 Challenge Results ---");
type ActionTypes = "fetch" | "success" | "error" | "reset";
type NonReset = MyExclude<ActionTypes, "reset">; // "fetch" | "success" | "error"
type OnlySuccess = MyExtract<ActionTypes, "success">; // "success"
console.log("Challenge 1: MyExclude and MyExtract operational");

type NullableScore = number | null | undefined;
type Score = MyNonNullable<NullableScore>; // number
console.log("Challenge 2: MyNonNullable stripped null and undefined");

const sampleArgs: CustomerRegistrationArgs = ["user@example.com", 25, true];
console.log("Challenge 4 Sample Args:", sampleArgs);
console.log("-----------------------------------\n");
