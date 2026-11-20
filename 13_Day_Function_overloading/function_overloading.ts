// Day 13: Function Overloading & Generic Signatures
// Run: npx tsx 13_Day_Function_overloading/function_overloading.ts

console.log("=== Day 13: Function Overloading & Generic Signatures ===\n");

// 1. Correlating input types to exact output types
function reverseSequence(input: string): string;
function reverseSequence<T>(input: readonly T[]): T[];
function reverseSequence<T>(input: string | readonly T[]): string | T[] {
    if (typeof input === "string") {
        return [...input].reverse().join("");
    }
    return [...input].reverse();
}

const revStr: string = reverseSequence("TypeScript");
const revArr: number[] = reverseSequence([10, 20, 30, 40]);
console.log("Reversed string:", revStr);
console.log("Reversed array: ", revArr, "\n");

// 2. Arity-based overloading (implementation signature hidden from callers)
function makeRange(stop: number): number[];
function makeRange(start: number, stop: number, step?: number): number[];
function makeRange(a: number, b?: number, step: number = 1): number[] {
    const start = b === undefined ? 0 : a;
    const stop = b === undefined ? a : b;
    const result: number[] = [];
    for (let current = start; current < stop; current += step) {
        result.push(current);
    }
    return result;
}

console.log("makeRange(5):        ", makeRange(5));
console.log("makeRange(2, 12, 3): ", makeRange(2, 12, 3), "\n");

// 3. Literal-discriminated overloads (most specific first!)
function serializeRecord(data: Record<string, unknown>, format: "json"): string;
function serializeRecord(data: Record<string, unknown>, format: "bytes"): Uint8Array;
function serializeRecord(data: Record<string, unknown>, format: "json" | "bytes"): string | Uint8Array {
    const json = JSON.stringify(data);
    return format === "json" ? json : new TextEncoder().encode(json);
}

const asJson: string = serializeRecord({ ok: true, code: 200 }, "json");
const asBytes: Uint8Array = serializeRecord({ ok: true, code: 200 }, "bytes");
console.log("JSON output: ", asJson);
console.log("Bytes length:", asBytes.byteLength);

export {};
