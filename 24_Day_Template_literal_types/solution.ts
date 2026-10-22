/**
 * ============================================================================
 * SOLUTION DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
 */

export type HexColor = `#${string}`;

export function level1Task(color: HexColor): boolean {
  return color.startsWith("#");
}

export function level2Task<E extends string, A extends string>(entity: E, action: A): `${E}:${A}` {
  return `${entity}:${action}`;
}

export class SimpleEventBus {
  private handlers = new Map<string, ((payload: any) => void)[]>();

  on(event: string, handler: (payload: any) => void): void {
    const list = this.handlers.get(event) ?? [];
    list.push(handler);
    this.handlers.set(event, list);
  }

  emit(event: string, payload: any): void {
    const list = this.handlers.get(event) ?? [];
    for (const h of list) h(payload);
  }
}

export function level3Task(bus: SimpleEventBus, event: string, val: string): string {
  let captured = "";
  bus.on(event, (data) => { captured = data; });
  bus.emit(event, val);
  return captured;
}


console.log("[Solution Day 24] Verified reference implementation.");
