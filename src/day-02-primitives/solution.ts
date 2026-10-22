/**
 * SOLUTION DAY 02
 */
export function parseBinary(binStr: string): number {
  return parseInt(binStr, 2);
}

export function formatCurrency(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function createSymbolRecord(keyName: string, value: string): { [k: symbol]: string } {
  const sym = Symbol(keyName);
  return { [sym]: value };
}
