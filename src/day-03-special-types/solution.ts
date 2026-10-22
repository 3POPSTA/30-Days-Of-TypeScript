/**
 * SOLUTION DAY 03
 */
export function getSafeLength(input: unknown): number {
  if (typeof input === "string") return input.length;
  if (Array.isArray(input)) return input.length;
  return -1;
}

export function logAction(action: string): void {
  console.log(`Action logged: ${action}`);
}

export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}
