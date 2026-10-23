/**
 * 🎯 Day 18: Enums & Object Literals as const - Coding Challenges
 *
 * Explore numeric enums, reverse mapping, 'as const' objects, and enum type guards.
 *
 * 🚀 Run with: npm run challenge:18
 */

// ============================================================================
// 🎯 CHALLENGE 1: Numeric and String Enums
// ============================================================================
/**
 * 1. Define numeric enum 'Priority': Low = 1, Medium = 2, High = 3, Critical = 4
 * 2. Define string enum 'OrderStatus':
 *    Pending = "PENDING", Processing = "PROCESSING", Completed = "COMPLETED", Cancelled = "CANCELLED"
 */
// 👇 YOUR CODE HERE:
export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

export enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED"
}

// ============================================================================
// 🎯 CHALLENGE 2: Numeric Enum Reverse Mapping
// ============================================================================
/**
 * Write 'getPriorityLabel(p: Priority): string' that returns the name (e.g. Priority[1] => "Low").
 */
// 👇 YOUR CODE HERE:
export function getPriorityLabel(p: Priority): string {
  // TODO: Use reverse mapping to return the enum member name
  return Priority[p];
}

// ============================================================================
// 🎯 CHALLENGE 3: The 'as const' Object Alternative
// ============================================================================
/**
 * 1. Define 'HttpCodes' object literal as const:
 *    Ok: 200, Created: 201, NotFound: 404, InternalError: 500
 * 2. Extract type 'HttpCode' = (typeof HttpCodes)[keyof typeof HttpCodes]
 * 3. Write 'isSuccessHttpCode(code: HttpCode): boolean' (returns true for 200 and 201)
 */
// 👇 YOUR CODE HERE:
export const HttpCodes = {
  Ok: 200,
  Created: 201,
  NotFound: 404,
  InternalError: 500
} as const;

export type HttpCode = (typeof HttpCodes)[keyof typeof HttpCodes];

export function isSuccessHttpCode(code: HttpCode): boolean {
  // TODO: Return true if code is Ok or Created
  return code === HttpCodes.Ok || code === HttpCodes.Created;
}

// ============================================================================
// 🎯 CHALLENGE 4: Type Guard for String Enums
// ============================================================================
/**
 * Write a type guard 'isOrderStatus(val: unknown): val is OrderStatus'.
 */
// 👇 YOUR CODE HERE:
export function isOrderStatus(val: unknown): val is OrderStatus {
  // TODO: Check if val is a valid string enum member of OrderStatus
  return typeof val === "string" && Object.values(OrderStatus).includes(val as OrderStatus);
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:18
// ============================================================================
console.log("--- 🧪 Day 18 Challenge Results ---");
console.log("Challenge 1:", Priority.Critical, "|", OrderStatus.Completed);
console.log("Challenge 2:", getPriorityLabel(Priority.High));
console.log("Challenge 3:", isSuccessHttpCode(HttpCodes.Ok), "|", isSuccessHttpCode(HttpCodes.NotFound));
console.log("Challenge 4:", isOrderStatus("PROCESSING"), "|", isOrderStatus("UNKNOWN"));
console.log("-----------------------------------\n");
