/**
 * ============================================================================
 * DAY 23: MAPPED TYPES & KEY REMAPPING — CODING CHALLENGES
 * ============================================================================
 * Mapped types iterate over keys of an existing type to produce a new shape:
 * - Syntax: '{ [K in keyof T]: ... }'
 * - Modifiers: '+readonly', '-readonly', '?', '-?'
 * - Key remapping via 'as' and template literal types
 *
 * Test with:
 *   npx tsx 23_Day_Mapped_types/challenge.ts
 *   OR
 *   npm run challenge:23
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 23: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Basic Mapped Type (Nullable<T>)
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a generic mapped type 'Nullable<T>' that maps every property
 * in T to 'T[K] | null'.
 */
// >>> YOUR CODE HERE <<<
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export function makeNullable<T extends object>(obj: T): Nullable<T> {
  // TODO: Replace with your implementation
  const result = { ...obj } as Nullable<T>;
  return result;
}


// ============================================================================
// STEP 2: Stripping Modifiers (-readonly, -?)
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a mapped type 'MutableAndRequired<T>' that:
 *   - Removes 'readonly' (-readonly)
 *   - Removes optional modifier (-?)
 * 
 * Syntax: { -readonly [K in keyof T]-?: T[K] }
 */
// >>> YOUR CODE HERE <<<
export type MutableAndRequired<T> = {
  -readonly [K in keyof T]-?: T[K];
};


// ============================================================================
// STEP 3: Key Remapping via 'as' (Getters<T>)
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a mapped type 'Getters<T>' that creates getter method signatures
 * for every property in T, remapped to `get${Capitalize<string & K>}`.
 * 
 * Example:
 *   interface Person { name: string; age: number }
 *   Getters<Person> => { getName: () => string; getAge: () => number }
 */
// >>> YOUR CODE HERE <<<
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export function createGetters<T extends object>(obj: T): Getters<T> {
  // TODO: Replace with your implementation
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj)) {
    const getterName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    result[getterName] = () => val;
  }
  return result as Getters<T>;
}


// ============================================================================
// STEP 4: Value-Type Filtering Mapped Type
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a mapped type 'PickPropertiesOfType<T, TargetValue>' that retains
 * ONLY properties whose value extends TargetValue (remapping others to 'never').
 * 
 * Syntax:
 *   { [K in keyof T as T[K] extends TargetValue ? K : never]: T[K] }
 */
// >>> YOUR CODE HERE <<<
export type PickPropertiesOfType<T, TargetValue> = {
  [K in keyof T as T[K] extends TargetValue ? K : never]: T[K];
};


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Nullable<T>)...");
interface Person { name: string; age: number }
const nullablePerson: Nullable<Person> = { name: null, age: 30 };
testCheck("Step 1 - Nullable type works", nullablePerson.name === null && nullablePerson.age === 30);

console.log("\nVerifying Step 2 (MutableAndRequired<T>)...");
interface PartialConfig { readonly id?: string; readonly active?: boolean }
type ConcreteConfig = MutableAndRequired<PartialConfig>;
const configInstance: ConcreteConfig = { id: "cfg_1", active: true };
configInstance.id = "cfg_2"; // Mutable check
testCheck("Step 2 - MutableAndRequired", configInstance.id === "cfg_2");

console.log("\nVerifying Step 3 (Getters<T>)...");
const pGetters = createGetters({ name: "Ada", age: 36 });
testCheck("Step 3 - createGetters", pGetters.getName() === "Ada" && pGetters.getAge() === 36);

console.log("\nVerifying Step 4 (PickPropertiesOfType)...");
interface MixedEntity { id: number; title: string; desc: string; count: number }
type OnlyStrings = PickPropertiesOfType<MixedEntity, string>;
const sampleStrings: OnlyStrings = { title: "Doc", desc: "Guide" };
testCheck("Step 4 - filtered to string props", sampleStrings.title === "Doc" && sampleStrings.desc === "Guide");

console.log("\n[Summary] Day 23 challenge checks completed!\n");
