/**
 * ============================================================================
 * DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS
 * ============================================================================
 * Create custom type guards using 'val is Type' syntax to inform the compiler across functions, and use assertion functions with 'asserts val is Type'.
 * Run with: npm run day:10  OR  npx tsx 10_Day_Type_predicates/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS");
console.log("=======================================================\n");

// Day 10: Type Predicates & Custom Type Guards
interface Car {
  drive: () => void;
}

function isCar(vehicle: unknown): vehicle is Car {
  return typeof vehicle === "object" && vehicle !== null && "drive" in vehicle;
}

const obj: unknown = { drive: () => console.log("Driving!") };
if (isCar(obj)) {
  obj.drive(); // Safely narrowed!
}


console.log("\n[Summary] Day 10 lesson finished successfully!\n");
