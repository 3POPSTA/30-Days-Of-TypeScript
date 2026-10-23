/**
 * 🎯 Day 05: Tuples, Labeled Tuples & as const - Coding Challenges
 *
 * Tuples are fixed-length arrays where each position has a specific type.
 *
 * 🚀 Run with: npm run challenge:05
 */

// ============================================================================
// 🎯 CHALLENGE 1: Labeled Geographic Point Tuple
// ============================================================================
/**
 * 1. Define a labeled tuple 'GeoCoordinates':
 *    - lat: number
 *    - lng: number
 *    - elevation?: optional number
 *
 * 2. Write 'formatCoordinates(coords: GeoCoordinates): string':
 *    - If elevation is provided: "${lat.toFixed(2)}N, ${lng.toFixed(2)}E (${elevation}m)"
 *    - If omitted: "${lat.toFixed(2)}N, ${lng.toFixed(2)}E"
 */
// 👇 YOUR CODE HERE:
export type GeoCoordinates = [lat: number, lng: number, elevation?: number];

export function formatCoordinates(coords: GeoCoordinates): string {
  // TODO: Format the coordinate string with or without elevation
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 2: HTTP Response Tuple
// ============================================================================
/**
 * 1. Define 'ApiResponse' tuple:
 *    [statusCode: number, statusText: string, data: unknown]
 *
 * 2. Write 'isSuccessResponse(res: ApiResponse): boolean':
 *    Returns true if statusCode is between 200 and 299 (inclusive).
 */
// 👇 YOUR CODE HERE:
export type ApiResponse = [statusCode: number, statusText: string, data: unknown];

export function isSuccessResponse(res: ApiResponse): boolean {
  // TODO: Return true if statusCode is in the 200-299 range
  return false;
}

// ============================================================================
// 🎯 CHALLENGE 3: Variadic / Rest Elements in Tuples
// ============================================================================
/**
 * 1. Define 'ScoreEntry' tuple:
 *    [studentName: string, ...scores: number[]]
 *
 * 2. Write 'computeStudentAverage(entry: ScoreEntry): number':
 *    Returns the average score. If no scores are recorded, return 0.
 */
// 👇 YOUR CODE HERE:
export type ScoreEntry = [studentName: string, ...scores: number[]];

export function computeStudentAverage(entry: ScoreEntry): number {
  // TODO: Compute and return the average of the scores
  return 0;
}

// ============================================================================
// 🎯 CHALLENGE 4: Readonly Tuples with 'as const'
// ============================================================================
/**
 * 1. Define 'SUPPORTED_LOCALES' as const: ["en-US", "es-ES", "fr-FR", "de-DE"]
 * 2. Extract type 'SupportedLocale' = (typeof SUPPORTED_LOCALES)[number]
 * 3. Write 'isSupportedLocale(locale: string): locale is SupportedLocale'
 */
// 👇 YOUR CODE HERE:
export const SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR", "de-DE"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  // TODO: Check if locale is one of SUPPORTED_LOCALES
  return false;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:05
// ============================================================================
console.log("--- 🧪 Day 05 Challenge Results ---");
console.log("Challenge 1:", formatCoordinates([37.77, -122.41, 15]), "|", formatCoordinates([51.5, -0.12]));
console.log("Challenge 2:", isSuccessResponse([200, "OK", { id: 1 }]), "|", isSuccessResponse([404, "Not Found", null]));
console.log("Challenge 3:", computeStudentAverage(["Alice", 90, 80, 100]), "|", computeStudentAverage(["Bob"]));
console.log("Challenge 4:", isSupportedLocale("en-US"), "|", isSupportedLocale("ja-JP"));
console.log("-----------------------------------\n");
