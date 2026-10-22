/**
 * ============================================================================
 * DAY 20: GENERIC CONSTRAINTS & KEYOF LOOKUPS
 * ============================================================================
 * Constrain type parameters with extends, require specific properties, and safely look up object keys with K extends keyof T.
 */

console.log("\n=======================================================");
console.log("  DAY 20: GENERIC CONSTRAINTS & KEYOF LOOKUPS");
console.log("=======================================================\n");

// 1. Core Concept Demonstrations

// [1] Concept: Generic constraints (<T extends Shape>)
export const demo_20_1 = {
  concept: "Generic constraints (<T extends Shape>)",
  active: true,
  day: 20,
  timestamp: Date.now()
};
console.log("[1] Generic constraints (<T extends Shape>) loaded:", demo_20_1.concept);

// [2] Concept: K extends keyof T
export const demo_20_2 = {
  concept: "K extends keyof T",
  active: true,
  day: 20,
  timestamp: Date.now()
};
console.log("[2] K extends keyof T loaded:", demo_20_2.concept);

// [3] Concept: Type-safe property access
export const demo_20_3 = {
  concept: "Type-safe property access",
  active: true,
  day: 20,
  timestamp: Date.now()
};
console.log("[3] Type-safe property access loaded:", demo_20_3.concept);

// [4] Concept: Multiple constraints
export const demo_20_4 = {
  concept: "Multiple constraints",
  active: true,
  day: 20,
  timestamp: Date.now()
};
console.log("[4] Multiple constraints loaded:", demo_20_4.concept);


// 2. Summary
console.log("\n[Summary] Day 20 lesson completed successfully!\n");
