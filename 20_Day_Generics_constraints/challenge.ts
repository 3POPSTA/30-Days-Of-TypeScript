/**
 * 🎯 Day 20: Generics Constraints & keyof Operator - Coding Challenges
 *
 * Constrain generic type parameters with 'extends' and the 'keyof' keyword.
 *
 * 🚀 Run with: npm run challenge:20
 */

// ============================================================================
// 🎯 CHALLENGE 1: Constraint with Length Property
// ============================================================================
/**
 * Write 'measureLength<T extends { length: number }>(item: T): number'
 * Returns item.length. Works on strings, arrays, and custom objects with .length.
 */
// 👇 YOUR CODE HERE:
export function measureLength<T extends { length: number }>(item: T): number {
  // TODO: Return item.length
  return item.length;
}

// ============================================================================
// 🎯 CHALLENGE 2: Safe Property Picker with 'keyof'
// ============================================================================
/**
 * Write 'pickProperty<T, K extends keyof T>(obj: T, key: K): T[K]'
 * Returns obj[key].
 */
// 👇 YOUR CODE HERE:
export function pickProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // TODO: Return property at key
  return obj[key];
}

// ============================================================================
// 🎯 CHALLENGE 3: Array Plucker
// ============================================================================
/**
 * Write 'pluck<T, K extends keyof T>(items: T[], key: K): T[K][]'
 * Maps each item to item[key].
 */
// 👇 YOUR CODE HERE:
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // TODO: Map items to item[key]
  return items.map(item => item[key]);
}

// ============================================================================
// 🎯 CHALLENGE 4: Entity Repository Lookup by ID
// ============================================================================
/**
 * Write 'findEntity<T extends { id: string | number }>(entities: T[], targetId: T["id"]): T | undefined'
 * Finds entity with e.id === targetId.
 */
// 👇 YOUR CODE HERE:
export function findEntity<T extends { id: string | number }>(entities: T[], targetId: T["id"]): T | undefined {
  // TODO: Find entity with matching ID
  return entities.find(e => e.id === targetId);
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:20
// ============================================================================
console.log("--- 🧪 Day 20 Challenge Results ---");
console.log("Challenge 1:", measureLength("TypeScript"), "|", measureLength([1, 2, 3]));

const book = { title: "Refactoring", author: "Martin Fowler", pages: 448 };
console.log("Challenge 2:", pickProperty(book, "title"));
console.log("Challenge 3:", pluck([book, { title: "Clean Code", author: "Uncle Bob", pages: 464 }], "author"));
console.log("Challenge 4:", findEntity([{ id: 101, name: "Alpha" }, { id: 102, name: "Beta" }], 102));
console.log("-----------------------------------\n");
