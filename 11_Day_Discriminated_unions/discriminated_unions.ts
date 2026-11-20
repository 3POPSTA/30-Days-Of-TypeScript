// Day 11: Discriminated Unions & Exhaustiveness Checking
// Run: npx tsx 11_Day_Discriminated_unions/discriminated_unions.ts

console.log("=== Day 11: Discriminated Unions & Exhaustiveness Checking ===\n");

// 1. Exhaustiveness helper
function assertNever(value: never): never {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
}

// 2. Tagged union modeling payment outcomes
type PaymentOutcome =
    | { readonly kind: "approved"; readonly transactionId: string; readonly amountCents: number }
    | { readonly kind: "declined"; readonly reasonCode: string; readonly canRetry: boolean }
    | { readonly kind: "challenge_required"; readonly verificationUrl: string };

function formatPaymentOutcome(outcome: PaymentOutcome): string {
    switch (outcome.kind) {
        case "approved":
            return `✅ Approved ($${(outcome.amountCents / 100).toFixed(2)}) [tx=${outcome.transactionId}]`;
        case "declined":
            return `❌ Declined (${outcome.reasonCode}) — retryable: ${outcome.canRetry}`;
        case "challenge_required":
            return `🔐 3DS Challenge required at ${outcome.verificationUrl}`;
        default:
            return assertNever(outcome);
    }
}

const sampleOutcomes: readonly PaymentOutcome[] = [
    { kind: "approved", transactionId: "tx_9941", amountCents: 4999 },
    { kind: "declined", reasonCode: "INSUFFICIENT_FUNDS", canRetry: false },
    { kind: "challenge_required", verificationUrl: "https://pay.example.com/3ds/abc" },
];

for (const item of sampleOutcomes) {
    console.log(formatPaymentOutcome(item));
}

export {};
