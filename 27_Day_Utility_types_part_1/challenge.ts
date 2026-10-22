/**
 * ============================================================================
 * DAY 27: UTILITY TYPES MASTERCLASS (PART 1) - CODING CHALLENGES
 * ============================================================================
 * Built-in utility types transform types effortlessly:
 * - Partial<T> & Required<T>
 * - Readonly<T>
 * - Record<K, V>
 * - Pick<T, K> & Omit<T, K>
 *
 * Test with:
 *   npx tsx 27_Day_Utility_types_part_1/challenge.ts
 *   OR
 *   npm run challenge:27
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 27: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Re-implementing Partial & Readonly
// ============================================================================
/**
 * CHALLENGE 1:
 * Re-create TypeScript's built-ins from scratch using mapped types:
 *   - 'MyPartial<T>': makes every property optional
 *   - 'MyReadonly<T>': makes every property readonly
 */
// >>> YOUR CODE HERE <<<
export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};


// ============================================================================
// STEP 2: Re-implementing Pick & Omit
// ============================================================================
/**
 * CHALLENGE 2:
 * Re-create:
 *   - 'MyPick<T, K extends keyof T>': picks only keys K
 *   - 'MyOmit<T, K extends keyof any>': excludes keys K from T
 */
// >>> YOUR CODE HERE <<<
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};


// ============================================================================
// STEP 3: Dictionary Indexing with Record<K, V>
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a function 'createLookup<T extends { id: string }>(items: T[]): Record<string, T>'
 * that indexes an array of entities by their 'id' field.
 */
// >>> YOUR CODE HERE <<<
export function createLookup<T extends { id: string }>(items: T[]): Record<string, T> {
  // TODO: Replace with your implementation
  const lookup: Record<string, T> = {};
  for (const item of items) {
    lookup[item.id] = item;
  }
  return lookup;
}


// ============================================================================
// STEP 4: Composing Utilities for DTO Updates
// ============================================================================
/**
 * CHALLENGE 4:
 * Given:
 *   interface UserAccount {
 *     id: string;
 *     createdAt: Date;
 *     username: string;
 *     email: string;
 *     avatarUrl: string;
 *   }
 * 
 * Define 'UpdateUserDto' which allows updating username, email, or avatarUrl
 * optionally, but excludes 'id' and 'createdAt'.
 * 
 * Syntax: Partial<Omit<UserAccount, "id" | "createdAt">>
 */
export interface UserAccount {
  id: string;
  createdAt: Date;
  username: string;
  email: string;
  avatarUrl: string;
}

// >>> YOUR CODE HERE <<<
export type UpdateUserDto = Partial<Omit<UserAccount, "id" | "createdAt">>;

export function applyUserUpdate(original: UserAccount, patch: UpdateUserDto): UserAccount {
  // TODO: Replace with your implementation
  return { ...original, ...patch };
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (MyPartial & MyReadonly)...");
interface Task { title: string; done: boolean }
const partialTask: MyPartial<Task> = { title: "Study" };
const readonlyTask: MyReadonly<Task> = { title: "Complete", done: true };
testCheck("Step 1 - MyPartial & MyReadonly", partialTask.done === undefined && readonlyTask.title === "Complete");

console.log("\nVerifying Step 2 (MyPick & MyOmit)...");
type PickedTask = MyPick<Task, "title">;
type OmittedTask = MyOmit<Task, "done">;
const t1: PickedTask = { title: "T1" };
const t2: OmittedTask = { title: "T2" };
testCheck("Step 2 - MyPick & MyOmit", t1.title === "T1" && t2.title === "T2");

console.log("\nVerifying Step 3 (createLookup)...");
const lookup = createLookup([
  { id: "u1", name: "Ada" },
  { id: "u2", name: "Bob" }
]);
testCheck("Step 3 - createLookup", lookup["u1"]?.name === "Ada" && lookup["u2"]?.name === "Bob");

console.log("\nVerifying Step 4 (UpdateUserDto)...");
const initialUser: UserAccount = {
  id: "usr_1",
  createdAt: new Date(),
  username: "ada",
  email: "ada@lovelace.dev",
  avatarUrl: "https://avatar.dev/ada"
};
const patchedUser = applyUserUpdate(initialUser, { email: "newada@lovelace.dev" });
testCheck("Step 4 - applyUserUpdate", patchedUser.email === "newada@lovelace.dev" && patchedUser.username === "ada" && patchedUser.id === "usr_1");

console.log("\n[Summary] Day 27 challenge checks completed!\n");
