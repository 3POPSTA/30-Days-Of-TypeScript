/**
 * ============================================================================
 * DAY 05: TUPLES, LABELED TUPLES & AS CONST — CODING CHALLENGES
 * ============================================================================
 * Tuples are fixed-length arrays with strictly typed element positions:
 * - Labeled tuples: [lat: number, lng: number]
 * - Optional elements in tuples: [string, number?]
 * - Rest elements in tuples: [string, ...number[]]
 * - 'as const' literal assertion
 *
 * Test with:
 *   npx tsx 05_Day_Tuples/challenge.ts
 *   OR
 *   npm run challenge:05
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 05: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Labeled Geographic Point Tuple
// ============================================================================
/**
 * CHALLENGE 1:
 * Define a labeled tuple type 'GeoCoordinates' with:
 *   - lat: number
 *   - lng: number
 *   - elevation?: number (optional elevation in meters)
 * 
 * Then write a function 'formatCoordinates' that takes 'coords: GeoCoordinates':
 *   - If elevation is provided: `${lat.toFixed(2)}N, ${lng.toFixed(2)}E (${elevation}m)`
 *   - If elevation is omitted:  `${lat.toFixed(2)}N, ${lng.toFixed(2)}E`
 */
// >>> YOUR CODE HERE <<<
export type GeoCoordinates = [lat: number, lng: number, elevation?: number];

export function formatCoordinates(coords: GeoCoordinates): string {
  // TODO: Replace with your implementation
  const [lat, lng, elevation] = coords;
  if (elevation !== undefined) {
    return `${lat.toFixed(2)}N, ${lng.toFixed(2)}E (${elevation}m)`;
  }
  return `${lat.toFixed(2)}N, ${lng.toFixed(2)}E`;
}


// ============================================================================
// STEP 2: HTTP Response Tuple
// ============================================================================
/**
 * CHALLENGE 2:
 * Define a tuple type 'ApiResponse' representing:
 *   - [statusCode: number, statusText: string, data: unknown]
 * 
 * Write a function 'isSuccessResponse' that takes (res: ApiResponse):
 *   - Returns true if statusCode is between 200 and 299 inclusive.
 *   - Returns false otherwise.
 */
// >>> YOUR CODE HERE <<<
export type ApiResponse = [statusCode: number, statusText: string, data: unknown];

export function isSuccessResponse(res: ApiResponse): boolean {
  // TODO: Replace with your implementation
  const [statusCode] = res;
  return statusCode >= 200 && statusCode < 300;
}


// ============================================================================
// STEP 3: Variadic / Rest Elements in Tuples
// ============================================================================
/**
 * CHALLENGE 3:
 * A variadic tuple allows a variable number of elements of a certain type.
 * 
 * Define a tuple type 'ScoreEntry' representing:
 *   - A student's name (string) followed by zero or more test scores (number)
 *   - Syntax: [studentName: string, ...scores: number[]]
 * 
 * Write a function 'computeStudentAverage' that takes (entry: ScoreEntry):
 *   - If there are no scores, return 0.
 *   - Otherwise return the arithmetic average of the scores.
 */
// >>> YOUR CODE HERE <<<
export type ScoreEntry = [studentName: string, ...scores: number[]];

export function computeStudentAverage(entry: ScoreEntry): number {
  // TODO: Replace with your implementation
  const [_studentName, ...scores] = entry;
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  return sum / scores.length;
}


// ============================================================================
// STEP 4: Readonly Tuples with 'as const'
// ============================================================================
/**
 * CHALLENGE 4:
 * When you suffix an array with 'as const', TypeScript treats it as a readonly
 * tuple of string literal types, rather than string[].
 * 
 * Declare and export 'SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR", "de-DE"] as const'.
 * Extract the union type 'SupportedLocale' using:
 *   type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
 * 
 * Write a type guard 'isSupportedLocale' that checks if an arbitrary string is a SupportedLocale.
 */
// >>> YOUR CODE HERE <<<
export const SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR", "de-DE"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  // TODO: Replace with your implementation
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (GeoCoordinates)...");
const geo1: GeoCoordinates = [37.77, -122.41, 15];
const geo2: GeoCoordinates = [51.5, -0.12];
testCheck("Step 1.1 - with elevation", formatCoordinates(geo1) === "37.77N, -122.41E (15m)", formatCoordinates(geo1));
testCheck("Step 1.2 - without elevation", formatCoordinates(geo2) === "51.50N, -0.12E", formatCoordinates(geo2));

console.log("\nVerifying Step 2 (ApiResponse)...");
const okRes: ApiResponse = [200, "OK", { user: "Ada" }];
const notFoundRes: ApiResponse = [404, "Not Found", null];
testCheck("Step 2.1 - success code", isSuccessResponse(okRes) === true);
testCheck("Step 2.2 - error code", isSuccessResponse(notFoundRes) === false);

console.log("\nVerifying Step 3 (computeStudentAverage)...");
const studentScore: ScoreEntry = ["Grace", 90, 95, 100];
const emptyScore: ScoreEntry = ["Nobody"];
testCheck("Step 3.1 - average with scores", computeStudentAverage(studentScore) === 95, `Average: ${computeStudentAverage(studentScore)}`);
testCheck("Step 3.2 - average without scores", computeStudentAverage(emptyScore) === 0, `Average: ${computeStudentAverage(emptyScore)}`);

console.log("\nVerifying Step 4 (as const & SupportedLocale)...");
testCheck("Step 4.1 - valid locale", isSupportedLocale("en-US") === true);
testCheck("Step 4.2 - invalid locale", isSupportedLocale("ja-JP") === false);

console.log("\n[Summary] Day 05 challenge checks completed!\n");
