/**
 * 🎯 Day 23: Mapped Types & Key Remapping - Coding Challenges
 *
 * Transform property types, strip modifiers (-readonly, -?), and remap keys using 'as'.
 *
 * 🚀 Run with: npm run challenge:23
 */

// ============================================================================
// 🎯 CHALLENGE 1: Basic Mapped Type (Nullable<T>)
// ============================================================================
/**
 * 1. Define 'Nullable<T>' mapped type: maps every key in T to T[K] | null
 * 2. Write 'makeNullable<T extends object>(obj: T): Nullable<T>'
 */
// 👇 YOUR CODE HERE:
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export function makeNullable<T extends object>(obj: T): Nullable<T> {
  // TODO: Cast and return object as Nullable<T>
  return { ...obj } as Nullable<T>;
}

// ============================================================================
// 🎯 CHALLENGE 2: Stripping Modifiers (-readonly, -?)
// ============================================================================
/**
 * Define 'MutableAndRequired<T>' that removes 'readonly' and makes all optional keys required:
 *   -readonly [K in keyof T]-?: T[K]
 */
// 👇 YOUR CODE HERE:
export type MutableAndRequired<T> = {
  -readonly [K in keyof T]-?: T[K];
};

// ============================================================================
// 🎯 CHALLENGE 3: Key Remapping via 'as' (Getters<T>)
// ============================================================================
/**
 * 1. Define 'Getters<T>' mapped type:
 *    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
 * 2. Write 'createGetters<T extends object>(obj: T): Getters<T>'
 */
// 👇 YOUR CODE HERE:
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export function createGetters<T extends object>(obj: T): Getters<T> {
  // TODO: Build getters dictionary for each property
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj)) {
    const getterName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    result[getterName] = () => val;
  }
  return result as Getters<T>;
}

// ============================================================================
// 🎯 CHALLENGE 4: Value-Type Filtering Mapped Type
// ============================================================================
/**
 * Define 'PickPropertiesOfType<T, TargetValue>' that picks only properties
 * whose value extends TargetValue.
 */
// 👇 YOUR CODE HERE:
export type PickPropertiesOfType<T, TargetValue> = {
  [K in keyof T as T[K] extends TargetValue ? K : never]: T[K];
};

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:23
// ============================================================================
console.log("--- 🧪 Day 23 Challenge Results ---");
const user = { name: "Alice", age: 30 };
console.log("Challenge 1 Nullable:", makeNullable(user));

type ReadonlyPartialUser = { readonly id?: number; name?: string };
type FullUser = MutableAndRequired<ReadonlyPartialUser>;
const testUser: FullUser = { id: 1, name: "Bob" };
console.log("Challenge 2 MutableAndRequired:", testUser);

const userGetters = createGetters({ name: "Charlie", score: 99 });
console.log("Challenge 3 Getters:", (userGetters as any).getName(), (userGetters as any).getScore());

type Mixed = { id: number; name: string; email: string; active: boolean };
type StringPropsOnly = PickPropertiesOfType<Mixed, string>;
const stringsObj: StringPropsOnly = { name: "Dave", email: "dave@example.com" };
console.log("Challenge 4 StringPropsOnly:", stringsObj);
console.log("-----------------------------------\n");
