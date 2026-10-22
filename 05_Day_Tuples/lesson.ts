/**
 * ============================================================================
 * DAY 05: TUPLES, LABELED TUPLES & AS CONST
 * ============================================================================
 * Master fixed-length ordered collections with tuples, labeled tuples for readable IDE tooltips, and immutable 'as const' assertions.
 * Run with: npm run day:05  OR  npx tsx 05_Day_Tuples/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 05: TUPLES, LABELED TUPLES & AS CONST");
console.log("=======================================================\n");

// Day 05: Tuples, Labeled Tuples & as const
// 1. Basic & Labeled Tuple
type GeoPoint = [latitude: number, longitude: number, label?: string];
const office: GeoPoint = [60.1699, 24.9384, "Helsinki Office"];
console.log("Latitude:", office[0], "Longitude:", office[1]);

// 2. HTTP Status Tuple
type HttpResponse = [status: number, message: string];
const successResponse: HttpResponse = [200, "OK"];
console.log(`Status: ${successResponse[0]} (${successResponse[1]})`);

// 3. as const immutability
const directions = ["NORTH", "SOUTH", "EAST", "WEST"] as const;
// directions[0] = "UP"; // Compile Error!


console.log("\n[Summary] Day 05 lesson finished successfully!\n");
