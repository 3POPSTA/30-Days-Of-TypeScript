// Day 9: Type Narrowing & Control Flow Analysis
// Run: npx tsx 09_Day_Type_narrowing/type_narrowing.ts

console.log("=== Day 9: Type Narrowing & Control Flow Analysis ===\n");

// 1. `typeof` + explicit null narrowing
function formatPadding(text: string, pad: number | string | null): string {
    if (pad === null) return text;
    if (typeof pad === "number") return " ".repeat(pad) + text;
    return pad + text;
}

console.log("Padded (4 spaces):", JSON.stringify(formatPadding("ok", 4)));
console.log("Padded (prefix):  ", JSON.stringify(formatPadding("ok", ">> ")));
console.log("Padded (null):    ", JSON.stringify(formatPadding("ok", null)), "\n");

// 2. `in` operator narrowing across structural object unions
type HttpSource = { readonly url: string; readonly timeoutMs: number };
type FileSource = { readonly filePath: string; readonly encoding: "utf-8" | "ascii" };

function describeDataSource(src: HttpSource | FileSource): string {
    if ("url" in src) {
        return `HTTP GET ${src.url} (timeout=${src.timeoutMs}ms)`;
    }
    return `FILE ${src.filePath} (${src.encoding})`;
}

console.log(describeDataSource({ url: "https://api.example.com/v1", timeoutMs: 2500 }));
console.log(describeDataSource({ filePath: "/etc/app/config.json", encoding: "utf-8" }), "\n");

// 3. `instanceof` + `typeof` narrowing leaving exact tuple branch
function normalizeTimestamp(raw: Date | string | readonly [year: number, month: number, day: number]): string {
    if (raw instanceof Date) {
        return raw.toISOString();
    }
    if (typeof raw === "string") {
        return new Date(raw).toISOString();
    }
    const [y, m, d] = raw;
    return new Date(Date.UTC(y, m - 1, d)).toISOString();
}

console.log("From Date: ", normalizeTimestamp(new Date("2026-11-24T00:00:00Z")));
console.log("From Tuple:", normalizeTimestamp([2026, 11, 24]));

export {};
