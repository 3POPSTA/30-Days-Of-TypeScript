// Day 8: Union Types & Literal Widening
// Run: npx tsx 08_Day_Unions_and_literals/unions_and_literals.ts

console.log("=== Day 8: Union Types & Literal Widening ===\n");

// 1. String & numeric literal unions
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type PortTier = 80 | 443 | 8080 | 8443;

function buildEndpoint(method: HttpMethod, host: string, port: PortTier): string {
    const scheme = port === 443 || port === 8443 ? "https" : "http";
    return `${method} ${scheme}://${host}:${port}`;
}

console.log(buildEndpoint("GET", "api.internal", 8443));

// 2. Preventing literal widening with `as const`
const requestSpec = {
    method: "POST",
    host: "payments.internal",
    port: 443,
} as const;

console.log(buildEndpoint(requestSpec.method, requestSpec.host, requestSpec.port), "\n");

// 3. Shared member access across unions without narrowing
function previewSlice(value: string | readonly string[]): string | readonly string[] {
    return value.slice(0, 3);
}
console.log("Union slice(string):", previewSlice("TypeScript"));
console.log("Union slice(array): ", previewSlice(["a", "b", "c", "d", "e"]), "\n");

// 4. `satisfies` operator: schema validation WITHOUT losing narrow types
type ThemeEntry = string | readonly [number, number, number];

const designTokens = {
    brandHex: "#2563eb",
    surfaceRgb: [15, 23, 42],
} satisfies Record<string, ThemeEntry>;

// Notice no narrowing needed: brandHex is known to be string, surfaceRgb is tuple/array!
console.log("Uppercase hex:", designTokens.brandHex.toUpperCase());
console.log("RGB red channel:", designTokens.surfaceRgb[0]);

export {};
