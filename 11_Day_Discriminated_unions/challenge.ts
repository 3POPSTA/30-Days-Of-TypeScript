/**
 * 🎯 Day 11: Discriminated Unions & Pattern Matching - Coding Challenges
 *
 * Model complex domain states safely with tagged unions and exhaustive switches.
 *
 * 🚀 Run with: npm run challenge:11
 */

// ============================================================================
// 🎯 CHALLENGE 1: Payment Method Discriminated Union
// ============================================================================
/**
 * Define a tagged union 'PaymentMethod' consisting of:
 * 1. CreditCard: { kind: "credit_card"; last4: string; expMonth: number; expYear: number }
 * 2. PayPal: { kind: "paypal"; email: string }
 * 3. Crypto: { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string }
 */
// 👇 YOUR CODE HERE:
export type CreditCard = { kind: "credit_card"; last4: string; expMonth: number; expYear: number };
export type PayPal = { kind: "paypal"; email: string };
export type Crypto = { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string };
export type PaymentMethod = CreditCard | PayPal | Crypto;

// ============================================================================
// 🎯 CHALLENGE 2: Exhaustive Switch Handler with Never
// ============================================================================
/**
 * 1. Write 'assertUnreachable(x: never): never' which throws an Error.
 * 2. Write 'describePayment(method: PaymentMethod): string':
 *    - "credit_card" => "Card ending in <last4>"
 *    - "paypal"      => "PayPal account <email>"
 *    - "crypto"      => "<coin> wallet <first-6-chars-of-address>..."
 *    - default       => assertUnreachable(method)
 */
// 👇 YOUR CODE HERE:
export function assertUnreachable(x: never): never {
  // TODO: Throw error with unhandled variant
  throw new Error("Unhandled union variant");
}

export function describePayment(method: PaymentMethod): string {
  // TODO: Switch exhaustively on method.kind
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 3: Redux-Style Action & Reducer
// ============================================================================
/**
 * 1. Define 'Action' union:
 *    | { type: "ADD"; amount: number }
 *    | { type: "SUBTRACT"; amount: number }
 *    | { type: "RESET" }
 *
 * 2. Write 'counterReducer(state: number, action: Action): number'
 */
// 👇 YOUR CODE HERE:
export type Action =
  | { type: "ADD"; amount: number }
  | { type: "SUBTRACT"; amount: number }
  | { type: "RESET" };

export function counterReducer(state: number, action: Action): number {
  // TODO: Handle ADD, SUBTRACT, and RESET
  return state;
}

// ============================================================================
// 🎯 CHALLENGE 4: Remote Data Lifecycle State Machine
// ============================================================================
/**
 * 1. Define 'QueryState<T>' union:
 *    | { status: "idle" }
 *    | { status: "loading" }
 *    | { status: "success"; data: T }
 *    | { status: "error"; error: string }
 *
 * 2. Write 'unwrapQueryData<T>(state: QueryState<T>, fallback: T): T':
 *    Returns state.data if status === "success", otherwise fallback.
 */
// 👇 YOUR CODE HERE:
export type QueryState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function unwrapQueryData<T>(state: QueryState<T>, fallback: T): T {
  // TODO: Return data if success, else fallback
  return fallback;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:11
// ============================================================================
console.log("--- 🧪 Day 11 Challenge Results ---");
const card: PaymentMethod = { kind: "credit_card", last4: "4242", expMonth: 12, expYear: 2028 };
console.log("Challenge 2:", describePayment(card));
console.log("Challenge 3:", counterReducer(10, { type: "ADD", amount: 5 }));
console.log("Challenge 4:", unwrapQueryData({ status: "success", data: "Fresh Data" }, "Fallback"));
console.log("-----------------------------------\n");
