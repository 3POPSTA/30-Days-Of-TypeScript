/**
 * ============================================================================
 * DAY 20: GENERICS CONSTRAINTS & KEYOF OPERATOR
 * ============================================================================
 * Constrain type parameters using 'extends', combine constraints with the 'keyof' operator, and guarantee property existence safely.
 * Run with: npm run day:20  OR  npx tsx 20_Day_Generics_constraints/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 20: GENERICS CONSTRAINTS & KEYOF OPERATOR");
console.log("=======================================================\n");

// Day 20: Generics Constraints & keyof Operator
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("String length:", getLength("hello"));
console.log("Array length:", getLength([1, 2, 3, 4]));

// Type-safe property getter
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Grace", score: 95 };
console.log("User name:", getProp(user, "name"));


console.log("\n[Summary] Day 20 lesson finished successfully!\n");
