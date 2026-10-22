/**
 * DAY 02: PRIMITIVE TYPES & INFERENCE
 */
console.log("\n=== DAY 02: PRIMITIVES & TYPE INFERENCE ===");
const decimal: number = 42;
const hex: number = 0x2a; // 42 in hex
const binary: number = 0b101010; // 42 in binary
const bigVal: bigint = 9007199254740991n;
const uniqueSym: symbol = Symbol("id");

console.log({ decimal, hex, binary, bigVal: bigVal.toString() });
