/**
 * ============================================================================
 * SOLUTION DAY 18: ENUMS & OBJECT LITERALS AS CONST
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

export const HttpStatus = {
  OK: 200,
  NotFound: 404,
  ServerError: 500
} as const;

export type HttpStatusCode = typeof HttpStatus[keyof typeof HttpStatus];

export function level1Task(dir: Direction): string {
  return `Moving ${dir}`;
}

export function level2Task(code: HttpStatusCode): string {
  switch (code) {
    case HttpStatus.OK: return "Success";
    case HttpStatus.NotFound: return "Missing";
    case HttpStatus.ServerError: return "Error";
  }
}

export function level3Task(statusMap: typeof HttpStatus): number[] {
  return Object.values(statusMap);
}


console.log("[Solution Day 18] Verified reference implementation.");
