/**
 * EXERCISE DAY 02: PRIMITIVE TYPES
 */
// Level 1: Parse string representation of binary to decimal number
export function parseBinary(binStr: string): number {
  return parseInt(binStr, 2);
}

// Level 2: Format cents to dollar currency string: 1450 -> "$14.50"
export function formatCurrency(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

// Level 3: Create an object with a Symbol property for metadata
export function createSymbolRecord(keyName: string, value: string): { [k: symbol]: string } {
  const sym = Symbol(keyName);
  return { [sym]: value };
}

export function verifyDay02(): boolean {
  console.log("Verifying Day 02 Exercises...");
  if (parseBinary("1010") !== 10) throw new Error("L1 failed");
  if (formatCurrency(1999) !== "$19.99") throw new Error("L2 failed");
  const rec = createSymbolRecord("meta", "secret");
  const syms = Object.getOwnPropertySymbols(rec);
  if (syms.length !== 1 || rec[syms[0]!] !== "secret") throw new Error("L3 failed");
  console.log(" Day 02: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay02();
}
