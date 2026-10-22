/**
 * ============================================================================
 * DAY 23: MAPPED TYPES & KEY REMAPPING
 * ============================================================================
 * Transform existing types into new types with mapped types, modify flags (+/- readonly and ?), and remap keys using 'as'.
 * Run with: npm run day:23  OR  npx tsx 23_Day_Mapped_types/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 23: MAPPED TYPES & KEY REMAPPING");
console.log("=======================================================\n");

// Day 23: Mapped Types & Key Remapping
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Concrete<T> = {
  [K in keyof T]-?: T[K]; // Strips optional ?
};

interface Todo {
  title: string;
  description?: string;
}
type CompleteTodo = Concrete<Todo>;
console.log("Mapped type defined successfully");


console.log("\n[Summary] Day 23 lesson finished successfully!\n");
