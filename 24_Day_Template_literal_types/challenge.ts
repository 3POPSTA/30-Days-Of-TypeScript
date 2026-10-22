/**
 * ============================================================================
 * DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS - CODING CHALLENGES
 * ============================================================================
 * Template literal types allow building strict string patterns using backtick
 * syntax, combining unions and built-in intrinsics (Uppercase, Lowercase, etc.).
 *
 * Test with:
 *   npx tsx 24_Day_Template_literal_types/challenge.ts
 *   OR
 *   npm run challenge:24
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 24: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Cross-Product Event Names
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   type Entity = "user" | "order" | "invoice";
 *   type Action = "create" | "update" | "delete";
 * 
 * Combine them into 'ScopedEvent':
 *   type ScopedEvent = `${Entity}:${Action}`;
 * 
 * Write a function 'formatEventLog(evt: ScopedEvent, id: string): string'
 * that returns: `[EVENT] ${evt} for ID #${id}`
 */
// >>> YOUR CODE HERE <<<
export type Entity = "user" | "order" | "invoice";
export type Action = "create" | "update" | "delete";
export type ScopedEvent = `${Entity}:${Action}`;

export function formatEventLog(evt: ScopedEvent, id: string): string {
  // TODO: Replace with your implementation
  return `[EVENT] ${evt} for ID #${id}`;
}


// ============================================================================
// STEP 2: String Intrinsics (Capitalize, Uppercase)
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a template literal type 'EventHandlerName<T extends string>'
 * that generates: `on${Capitalize<T>}`
 * 
 * Example:
 *   EventHandlerName<"click"> => "onClick"
 *   EventHandlerName<"hover"> => "onHover"
 */
// >>> YOUR CODE HERE <<<
export type EventHandlerName<T extends string> = `on${Capitalize<T>}`;


// ============================================================================
// STEP 3: CSS BEM Class Combinator
// ============================================================================
/**
 * CHALLENGE 3:
 * Define:
 *   type Component = "btn" | "card";
 *   type Variant = "primary" | "secondary";
 *   type Size = "sm" | "lg";
 *   type BEMButtonClass = `${Component}--${Variant}-${Size}`;
 * 
 * Write a function 'generateButtonClass(variant: Variant, size: Size): BEMButtonClass'.
 */
// >>> YOUR CODE HERE <<<
export type Component = "btn" | "card";
export type Variant = "primary" | "secondary";
export type Size = "sm" | "lg";
export type BEMButtonClass = `btn--${Variant}-${Size}`;

export function generateButtonClass(variant: Variant, size: Size): BEMButtonClass {
  // TODO: Replace with your implementation
  return `btn--${variant}-${size}`;
}


// ============================================================================
// STEP 4: Hex Color Template Validator
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a template literal type 'HexColor = `#${string}`'.
 * 
 * Write a type guard 'isHexColor(val: string): val is HexColor'
 * that validates the string starts with '#' and is followed by 3 or 6 hex digits.
 */
// >>> YOUR CODE HERE <<<
export type HexColor = `#${string}`;

export function isHexColor(val: string): val is HexColor {
  // TODO: Replace with your implementation
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(val);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (ScopedEvent)...");
const logLine = formatEventLog("user:create", "usr_100");
testCheck("Step 1 - formatEventLog", logLine === "[EVENT] user:create for ID #usr_100");

console.log("\nVerifying Step 2 (EventHandlerName)...");
type OnClickType = EventHandlerName<"click">;
const clickHandlerName: OnClickType = "onClick";
testCheck("Step 2 - EventHandlerName", clickHandlerName === "onClick");

console.log("\nVerifying Step 3 (BEMButtonClass)...");
const btnCls = generateButtonClass("primary", "lg");
testCheck("Step 3 - generateButtonClass", btnCls === "btn--primary-lg");

console.log("\nVerifying Step 4 (isHexColor)...");
testCheck("Step 4.1 - valid hex #FFF", isHexColor("#FFF") === true);
testCheck("Step 4.2 - valid hex #007ACC", isHexColor("#007ACC") === true);
testCheck("Step 4.3 - invalid hex", isHexColor("blue") === false);

console.log("\n[Summary] Day 24 challenge checks completed!\n");
