/**
 * DAY 03: SPECIAL TYPES (any, unknown, never, void)
 */
console.log("\n=== DAY 03: SPECIAL TYPES ===");
let safeInput: unknown = "TypeScript";
if (typeof safeInput === "string") {
  console.log("Safely narrowed string:", safeInput.toUpperCase());
}

function panic(message: string): never {
  throw new Error(message);
}
