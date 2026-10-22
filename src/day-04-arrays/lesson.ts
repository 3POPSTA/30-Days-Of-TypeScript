/**
 * DAY 04: ARRAYS & READONLY ARRAYS
 */
console.log("\n=== DAY 04: ARRAYS & READONLY ARRAYS ===");
const scores: readonly number[] = [10, 20, 30];
const doubled = scores.map((s) => s * 2);
console.log("Readonly original:", scores, "Doubled:", doubled);
