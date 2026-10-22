/**
 * ============================================================================
 * DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING — CODING CHALLENGES
 * ============================================================================
 * Discriminated unions (tagged unions) have a common literal discriminator
 * property, enabling safe, exhaustive pattern matching.
 *
 * Test with:
 *   npx tsx 11_Day_Discriminated_unions/challenge.ts
 *   OR
 *   npm run challenge:11
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 11: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Payment Method Discriminated Union
// ============================================================================
/**
 * CHALLENGE 1:
 * Define three payment types sharing the discriminator 'kind':
 *   - 'CreditCard': { kind: "credit_card"; last4: string; expMonth: number; expYear: number }
 *   - 'PayPal':     { kind: "paypal"; email: string }
 *   - 'Crypto':     { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string }
 * 
 * Compose them:
 *   type PaymentMethod = CreditCard | PayPal | Crypto;
 */
// >>> YOUR CODE HERE <<<
export type CreditCard = { kind: "credit_card"; last4: string; expMonth: number; expYear: number };
export type PayPal = { kind: "paypal"; email: string };
export type Crypto = { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string };
export type PaymentMethod = CreditCard | PayPal | Crypto;


// ============================================================================
// STEP 2: Exhaustive Switch Handler with Never
// ============================================================================
/**
 * CHALLENGE 2:
 * Write an exhaustive check helper 'assertUnreachable(x: never): never'.
 * Then write 'describePayment(method: PaymentMethod): string':
 *   - "credit_card": `Card ending in ${method.last4}`
 *   - "paypal":      `PayPal account ${method.email}`
 *   - "crypto":      `${method.coin} wallet ${method.walletAddress.slice(0, 6)}...`
 *   - default:       call assertUnreachable(method)
 */
// >>> YOUR CODE HERE <<<
export function assertUnreachable(x: never): never {
  throw new Error(`Unhandled union variant: ${JSON.stringify(x)}`);
}

export function describePayment(method: PaymentMethod): string {
  // TODO: Replace with your implementation
  switch (method.kind) {
    case "credit_card":
      return `Card ending in ${method.last4}`;
    case "paypal":
      return `PayPal account ${method.email}`;
    case "crypto":
      return `${method.coin} wallet ${method.walletAddress.slice(0, 6)}...`;
    default:
      return assertUnreachable(method);
  }
}


// ============================================================================
// STEP 3: Redux-Style Action & Reducer
// ============================================================================
/**
 * CHALLENGE 3:
 * Define an Action union with discriminator 'type':
 *   - { type: "ADD"; amount: number }
 *   - { type: "SUBTRACT"; amount: number }
 *   - { type: "RESET" }
 * 
 * Write a pure reducer 'counterReducer(state: number, action: Action): number'.
 */
// >>> YOUR CODE HERE <<<
export type Action =
  | { type: "ADD"; amount: number }
  | { type: "SUBTRACT"; amount: number }
  | { type: "RESET" };

export function counterReducer(state: number, action: Action): number {
  // TODO: Replace with your implementation
  switch (action.type) {
    case "ADD":
      return state + action.amount;
    case "SUBTRACT":
      return state - action.amount;
    case "RESET":
      return 0;
  }
}


// ============================================================================
// STEP 4: Remote Data Lifecycle State Machine
// ============================================================================
/**
 * CHALLENGE 4:
 * Model an async query state:
 *   type QueryState<T> =
 *     | { status: "idle" }
 *     | { status: "loading" }
 *     | { status: "success"; data: T }
 *     | { status: "error"; error: string };
 * 
 * Write a function 'unwrapQueryData<T>(state: QueryState<T>, fallback: T): T'
 * that returns 'data' if status === "success", otherwise returns 'fallback'.
 */
// >>> YOUR CODE HERE <<<
export type QueryState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function unwrapQueryData<T>(state: QueryState<T>, fallback: T): T {
  // TODO: Replace with your implementation
  if (state.status === "success") {
    return state.data;
  }
  return fallback;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 & 2 (describePayment)...");
const card: PaymentMethod = { kind: "credit_card", last4: "4242", expMonth: 12, expYear: 2028 };
const pp: PaymentMethod = { kind: "paypal", email: "ada@pay.com" };
const crypto: PaymentMethod = { kind: "crypto", coin: "BTC", walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" };
testCheck("Step 2.1 - credit_card", describePayment(card) === "Card ending in 4242");
testCheck("Step 2.2 - paypal", describePayment(pp) === "PayPal account ada@pay.com");
testCheck("Step 2.3 - crypto", describePayment(crypto) === "BTC wallet 1A1zP1...");

console.log("\nVerifying Step 3 (counterReducer)...");
let count = 0;
count = counterReducer(count, { type: "ADD", amount: 10 });
count = counterReducer(count, { type: "SUBTRACT", amount: 3 });
testCheck("Step 3.1 - add & subtract", count === 7);
count = counterReducer(count, { type: "RESET" });
testCheck("Step 3.2 - reset", count === 0);

console.log("\nVerifying Step 4 (unwrapQueryData)...");
const successState: QueryState<string[]> = { status: "success", data: ["TS", "JS"] };
const loadingState: QueryState<string[]> = { status: "loading" };
testCheck("Step 4.1 - success state", unwrapQueryData(successState, []).length === 2);
testCheck("Step 4.2 - loading fallback", unwrapQueryData(loadingState, ["default"]).join("") === "default");

console.log("\n[Summary] Day 11 challenge checks completed!\n");
