/**
 * 🎯 Day 24: Template Literal Types & Event Strings - Coding Challenges
 *
 * Combine string unions, use intrinsics (Capitalize), build BEM classes, and validate patterns.
 *
 * 🚀 Run with: npm run challenge:24
 */

// ============================================================================
// 🎯 CHALLENGE 1: Cross-Product Event Names
// ============================================================================
/**
 * 1. Define:
 *    - Entity = "user" | "order" | "invoice"
 *    - Action = "create" | "update" | "delete"
 *    - ScopedEvent = `${Entity}:${Action}`
 *
 * 2. Write 'formatEventLog(evt: ScopedEvent, id: string): string' => "[EVENT] <evt> for ID #<id>"
 */
// 👇 YOUR CODE HERE:
export type Entity = "user" | "order" | "invoice";
export type Action = "create" | "update" | "delete";
export type ScopedEvent = `${Entity}:${Action}`;

export function formatEventLog(evt: ScopedEvent, id: string): string {
  // TODO: Return formatted event log
  return `[EVENT] ${evt} for ID #${id}`;
}

// ============================================================================
// 🎯 CHALLENGE 2: String Intrinsics (Capitalize, Uppercase)
// ============================================================================
/**
 * Define 'EventHandlerName<T extends string>' = `on${Capitalize<T>}`
 * Example: EventHandlerName<"click"> => "onClick"
 */
// 👇 YOUR CODE HERE:
export type EventHandlerName<T extends string> = `on${Capitalize<T>}`;

// ============================================================================
// 🎯 CHALLENGE 3: CSS BEM Class Combinator
// ============================================================================
/**
 * 1. Define:
 *    - Component = "btn" | "card"
 *    - Variant = "primary" | "secondary"
 *    - Size = "sm" | "lg"
 *    - BEMButtonClass = `btn--${Variant}-${Size}`
 *
 * 2. Write 'generateButtonClass(variant: Variant, size: Size): BEMButtonClass'
 */
// 👇 YOUR CODE HERE:
export type Component = "btn" | "card";
export type Variant = "primary" | "secondary";
export type Size = "sm" | "lg";
export type BEMButtonClass = `btn--${Variant}-${Size}`;

export function generateButtonClass(variant: Variant, size: Size): BEMButtonClass {
  // TODO: Return combined BEM class
  return `btn--${variant}-${size}`;
}

// ============================================================================
// 🎯 CHALLENGE 4: Hex Color Template Validator
// ============================================================================
/**
 * 1. Define 'HexColor' = `#${string}`
 * 2. Write 'isHexColor(val: string): val is HexColor' checking regex /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/
 */
// 👇 YOUR CODE HERE:
export type HexColor = `#${string}`;

export function isHexColor(val: string): val is HexColor {
  // TODO: Validate hex string format
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(val);
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:24
// ============================================================================
console.log("--- 🧪 Day 24 Challenge Results ---");
console.log("Challenge 1:", formatEventLog("order:create", "9912"));

type ClickHandler = EventHandlerName<"click">; // "onClick"
console.log("Challenge 2:", "onClick satisfies EventHandlerName<'click'>");

console.log("Challenge 3:", generateButtonClass("primary", "lg"));
console.log("Challenge 4:", isHexColor("#007ACC"), "|", isHexColor("blue"));
console.log("-----------------------------------\n");
