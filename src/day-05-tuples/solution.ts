/**
 * SOLUTION DAY 05
 */
export type RGB = [red: number, green: number, blue: number];
export function createRgb(r: number, g: number, b: number): RGB {
  return [r, g, b];
}

export type Team = [leader: string, ...members: string[]];
export function getTeamSize(team: Team): number {
  return team.length;
}

export const HttpMethods = ["GET", "POST", "PUT", "DELETE"] as const;
export type HttpMethod = (typeof HttpMethods)[number];

export function isAllowedMethod(method: string): method is HttpMethod {
  return (HttpMethods as readonly string[]).includes(method);
}
