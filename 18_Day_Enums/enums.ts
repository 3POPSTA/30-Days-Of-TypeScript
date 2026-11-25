// Day 18: Enums vs Const Objects & Idiomatic Patterns
// Run: npx tsx 18_Day_Enums/enums.ts

console.log("=== Day 18: Enums vs Const Objects & Idiomatic Patterns ===\n");

// 1. Nominal String Enum
enum DeploymentStage {
    Canary = "CANARY",
    Staging = "STAGING",
    Production = "PRODUCTION",
}

function promoteRelease(version: string, stage: DeploymentStage): string {
    return `Promoting ${version} -> ${stage}`;
}

console.log(promoteRelease("v2.4.0", DeploymentStage.Canary));

// 2. Idiomatic zero-overhead `as const` object + derived union type
const HttpCode = {
    Ok: 200,
    Created: 201,
    Unauthorized: 401,
    ServiceUnavailable: 503,
} as const;

type HttpCode = (typeof HttpCode)[keyof typeof HttpCode];

function isSuccessCode(code: HttpCode): boolean {
    return code >= 200 && code < 300;
}

// Accepts both symbolic constant AND exact literal 200!
console.log("HttpCode.Created is success:", isSuccessCode(HttpCode.Created));
console.log("Literal 503 is success:     ", isSuccessCode(503), "\n");

// 3. Bitmask permissions using powers of 2
const AccessFlags = {
    None: 0,
    Read: 1 << 0,    // 001 (1)
    Write: 1 << 1,   // 010 (2)
    Delete: 1 << 2,  // 100 (4)
} as const;

const editorMask: number = AccessFlags.Read | AccessFlags.Write;
const canWrite = (editorMask & AccessFlags.Write) === AccessFlags.Write;
const canDelete = (editorMask & AccessFlags.Delete) === AccessFlags.Delete;

console.log(`Bitmask ${editorMask.toString(2).padStart(3, "0")} -> canWrite=${canWrite}, canDelete=${canDelete}`);

export {};
