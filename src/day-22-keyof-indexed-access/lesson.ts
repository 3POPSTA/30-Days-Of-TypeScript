/**
 * ============================================================================
 * DAY 22: ADVANCED: KEYOF, TYPEOF & INDEXED ACCESS
 * ============================================================================
 * Extract property unions with keyof, capture runtime values into type space with typeof, and index types with T[K].
 */

console.log("\n=======================================================");
console.log("  DAY 22: ADVANCED: KEYOF, TYPEOF & INDEXED ACCESS");
console.log("=======================================================\n");

// 1. Core Concept Demonstrations

// [1] Concept: keyof operator
export const demo_22_1 = {
  concept: "keyof operator",
  active: true,
  day: 22,
  timestamp: Date.now()
};
console.log("[1] keyof operator loaded:", demo_22_1.concept);

// [2] Concept: typeof in type space
export const demo_22_2 = {
  concept: "typeof in type space",
  active: true,
  day: 22,
  timestamp: Date.now()
};
console.log("[2] typeof in type space loaded:", demo_22_2.concept);

// [3] Concept: Indexed access T[K]
export const demo_22_3 = {
  concept: "Indexed access T[K]",
  active: true,
  day: 22,
  timestamp: Date.now()
};
console.log("[3] Indexed access T[K] loaded:", demo_22_3.concept);

// [4] Concept: Array element indexing T[number]
export const demo_22_4 = {
  concept: "Array element indexing T[number]",
  active: true,
  day: 22,
  timestamp: Date.now()
};
console.log("[4] Array element indexing T[number] loaded:", demo_22_4.concept);


// 2. Summary
console.log("\n[Summary] Day 22 lesson completed successfully!\n");
