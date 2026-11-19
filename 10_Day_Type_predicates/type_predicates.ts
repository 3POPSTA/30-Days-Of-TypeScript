// Day 10: Type Predicates & Assertion Functions
// Run: npx tsx 10_Day_Type_predicates/type_predicates.ts

console.log("=== Day 10: Type Predicates & Assertion Functions ===\n");

// 1. User-defined type predicate (`candidate is SessionToken`)
interface SessionToken {
    readonly userId: string;
    readonly expiresAt: number;
}

function isSessionToken(candidate: unknown): candidate is SessionToken {
    return (
        typeof candidate === "object" &&
        candidate !== null &&
        "userId" in candidate &&
        typeof candidate.userId === "string" &&
        "expiresAt" in candidate &&
        typeof candidate.expiresAt === "number"
    );
}

const untrustedJson: unknown = JSON.parse('{"userId":"usr_77","expiresAt":1893456000}');
if (isSessionToken(untrustedJson)) {
    console.log(`Verified token for ${untrustedJson.userId} (exp: ${untrustedJson.expiresAt})\n`);
}

// 2. Generic predicate for type-safe `.filter()`
function isPresent<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

const sparseEnvVars: (string | null | undefined)[] = ["us-east-1", undefined, "eu-central-1", null, "ap-northeast-1"];
const activeRegions: string[] = sparseEnvVars.filter(isPresent);
console.log("Filtered active regions:", activeRegions, "\n");

// 3. Invariant assertion function (`asserts value is ...`)
function assertValidPort(value: unknown): asserts value is number {
    if (typeof value !== "number" || !Number.isInteger(value) || value < 1 || value > 65535) {
        throw new RangeError(`Invalid TCP port: ${String(value)}`);
    }
}

const rawPort: unknown = 5432;
assertValidPort(rawPort);
// `rawPort` is narrowed to `number` here!
console.log("Verified port + 1:", rawPort + 1);

export {};
