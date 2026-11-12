// Day 3: Special Types: any, unknown, never & void
// Run: npx tsx 03_Day_Special_types/special_types.ts

console.log("=== Day 3: Special Types (any, unknown, never, void) ===\n");

// 1. Safe boundary parsing with `unknown`
function formatUntrustedInput(payload: unknown): string {
    if (typeof payload === "string") {
        return `String(${payload.length} chars): "${payload.trim()}"`;
    }
    if (typeof payload === "number" && Number.isFinite(payload)) {
        return `Number: ${payload.toFixed(2)}`;
    }
    if (typeof payload === "object" && payload !== null && "id" in payload) {
        return `Object with id=${String((payload as { id: unknown }).id)}`;
    }
    return "Unrecognized payload";
}

console.log(formatUntrustedInput("  TypeScript 5  "));
console.log(formatUntrustedInput(99.95));
console.log(formatUntrustedInput({ id: "usr_104" }));
console.log("");

// 2. `void` in callbacks (ignoring returned number from push)
const collected: number[] = [];
function runForEach(items: readonly number[], callback: (item: number) => void): void {
    for (const item of items) {
        callback(item);
    }
}
runForEach([10, 20, 30], (n) => collected.push(n * 2));
console.log("Collected via void callback:", collected);

// 3. `never` for exhaustive union verification
type Environment = "development" | "staging" | "production";

function assertNever(unexpected: never): never {
    throw new Error(`Unhandled variant: ${String(unexpected)}`);
}

function getReplicaCount(env: Environment): number {
    switch (env) {
        case "development":
            return 1;
        case "staging":
            return 2;
        case "production":
            return 6;
        default:
            return assertNever(env);
    }
}

console.log("Production replicas:", getReplicaCount("production"));

export {};
