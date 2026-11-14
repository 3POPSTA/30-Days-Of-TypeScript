// Day 6: Object Types, Index Signatures & Modifiers
// Run: npx tsx 06_Day_Objects/objects.ts

console.log("=== Day 6: Object Types, Index Signatures & Modifiers ===\n");

// 1. Readonly & optional property modifiers
type ServiceEndpoint = {
    readonly serviceId: string;
    host: string;
    port: number;
    healthPath?: string;
    readonly tags: readonly string[];
};

function describeEndpoint(ep: ServiceEndpoint): string {
    const path = ep.healthPath ?? "/healthz";
    return `[${ep.serviceId}] http://${ep.host}:${ep.port}${path} (tags: ${ep.tags.join(", ")})`;
}

const authEndpoint: ServiceEndpoint = {
    serviceId: "svc-auth",
    host: "10.0.1.15",
    port: 8443,
    tags: ["core", "zero-trust"],
};

console.log(describeEndpoint(authEndpoint));

// 2. Structural width subtyping
const extendedNode = {
    serviceId: "svc-billing",
    host: "10.0.1.22",
    port: 9000,
    healthPath: "/ready",
    tags: ["payments"],
    region: "us-west-2", // Extra property allowed via variable reference
};
console.log(describeEndpoint(extendedNode), "\n");

// 3. Safe dictionary index signature
type FeatureFlagMap = {
    readonly [flagKey: string]: boolean | undefined;
};

const flags: FeatureFlagMap = {
    enableNewCheckout: true,
    enableBetaSearch: false,
};

function isFlagEnabled(store: FeatureFlagMap, key: string): boolean {
    return store[key] ?? false;
}

console.log("enableNewCheckout:", isFlagEnabled(flags, "enableNewCheckout"));
console.log("unregisteredFlag: ", isFlagEnabled(flags, "unregisteredFlag"));

export {};
