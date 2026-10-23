/**
 * 🎯 Day 27: Utility Types Part 1 - Coding Challenges
 *
 * Re-implement built-in utility types and compose them for DTO patterns.
 *
 * 🚀 Run with: npm run challenge:27
 */

// ============================================================================
// 🎯 CHALLENGE 1: Re-implementing Partial & Readonly
// ============================================================================
/**
 * 1. Define 'MyPartial<T>' = { [K in keyof T]?: T[K] }
 * 2. Define 'MyReadonly<T>' = { readonly [K in keyof T]: T[K] }
 */
// 👇 YOUR CODE HERE:
export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// ============================================================================
// 🎯 CHALLENGE 2: Re-implementing Pick & Omit
// ============================================================================
/**
 * 1. Define 'MyPick<T, K extends keyof T>' = { [P in K]: T[P] }
 * 2. Define 'MyOmit<T, K extends keyof any>' = { [P in Exclude<keyof T, K>]: T[P] }
 */
// 👇 YOUR CODE HERE:
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};

// ============================================================================
// 🎯 CHALLENGE 3: Dictionary Indexing with Record<K, V>
// ============================================================================
/**
 * Write 'createLookup<T extends { id: string }>(items: T[]): Record<string, T>'
 * Indexes an array of items by their .id.
 */
// 👇 YOUR CODE HERE:
export function createLookup<T extends { id: string }>(items: T[]): Record<string, T> {
  // TODO: Build lookup dictionary indexed by id
  const lookup: Record<string, T> = {};
  for (const item of items) {
    lookup[item.id] = item;
  }
  return lookup;
}

// ============================================================================
// 🎯 CHALLENGE 4: Composing Utilities for DTO Updates
// ============================================================================
/**
 * 1. Given 'UserAccount': { id: string; email: string; name: string; createdAt: number }
 * 2. Define 'UpdateUserDto' = Partial<Omit<UserAccount, "id" | "createdAt">>
 * 3. Write 'applyUserUpdate(original: UserAccount, patch: UpdateUserDto): UserAccount'
 */
export interface UserAccount {
  id: string;
  email: string;
  name: string;
  createdAt: number;
}

export type UpdateUserDto = Partial<Omit<UserAccount, "id" | "createdAt">>;

// 👇 YOUR CODE HERE:
export function applyUserUpdate(original: UserAccount, patch: UpdateUserDto): UserAccount {
  // TODO: Apply patch to original user
  return { ...original, ...patch };
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:27
// ============================================================================
console.log("--- 🧪 Day 27 Challenge Results ---");
const users = [{ id: "u1", name: "Alice" }, { id: "u2", name: "Bob" }];
console.log("Challenge 3 Lookup:", createLookup(users));

const originalUser: UserAccount = { id: "101", email: "old@test.com", name: "Old Name", createdAt: 1000 };
console.log("Challenge 4 DTO Update:", applyUserUpdate(originalUser, { name: "New Name" }));
console.log("-----------------------------------\n");
