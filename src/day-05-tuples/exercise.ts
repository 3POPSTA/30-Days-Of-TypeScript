/**
 * EXERCISE DAY 05: TUPLES
 */
// Level 1: Labeled RGB tuple
export type RGB = [red: number, green: number, blue: number];
export function createRgb(r: number, g: number, b: number): RGB {
  return [r, g, b];
}

// Level 2: Variadic tuple: [leader: string, ...members: string[]]
export type Team = [leader: string, ...members: string[]];
export function getTeamSize(team: Team): number {
  return team.length;
}

// Level 3: Readonly tuple as const conversion
export const HttpMethods = ["GET", "POST", "PUT", "DELETE"] as const;
export type HttpMethod = (typeof HttpMethods)[number];

export function isAllowedMethod(method: string): method is HttpMethod {
  return (HttpMethods as readonly string[]).includes(method);
}

export function verifyDay05(): boolean {
  console.log("Verifying Day 05 Exercises...");
  const rgb = createRgb(255, 128, 0);
  if (rgb[0] !== 255 || rgb[2] !== 0) throw new Error("L1 failed");
  const team: Team = ["Alice", "Bob", "Charlie"];
  if (getTeamSize(team) !== 3) throw new Error("L2 failed");
  if (!isAllowedMethod("GET") || isAllowedMethod("PATCH")) throw new Error("L3 failed");
  console.log(" Day 05: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay05();
}
