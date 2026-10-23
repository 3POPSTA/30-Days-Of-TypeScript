# 📘 Day 03: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 03: Special Types (any, unknown, never, void)**!

---

## 🎯 Challenge 1: Safe Property Extraction from 'unknown'

### Problem
Extract the length of an `unknown` value if it is a string or an array; otherwise return `-1`.

### Solution
```typescript
export function safeExtractLength(val: unknown): number {
  if (typeof val === "string") {
    return val.length;
  }
  if (Array.isArray(val)) {
    return val.length;
  }
  return -1;
}
```

### 💡 Why This Works
- `unknown` forbids accessing any properties until narrowed.
- `typeof val === "string"` narrows `val` to `string`.
- `Array.isArray(val)` narrows `val` to `any[]`.

---

## 🎯 Challenge 2: Pure Side-Effects with 'void'

### Problem
Append a timestamped message to a string array with return type `void`.

### Solution
```typescript
export function appendLogEntry(logArray: string[], message: string): void {
  const datePrefix = new Date().toISOString().slice(0, 10);
  logArray.push(`[${datePrefix}] ${message}`);
}
```

### 💡 Why This Works
- `void` explicitly indicates that the caller should not expect or use any returned value.

---

## 🎯 Challenge 3: Exhaustive Switch Checking with 'never'

### Problem
Implement `assertNever` and an exhaustive switch statement over `TrafficLight`.

### Solution
```typescript
export type TrafficLight = "red" | "yellow" | "green";

export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}

export function getLightInstruction(light: TrafficLight): string {
  switch (light) {
    case "red":
      return "Stop immediately";
    case "yellow":
      return "Prepare to stop";
    case "green":
      return "Proceed safely";
    default:
      return assertNever(light);
  }
}
```

### 💡 Why This Works & Scrimba Pro-Tip
- If someone adds `"blue"` to `TrafficLight` in the future, TypeScript will immediately flag an error in `assertNever(light)` because `light` is no longer `never` in the default branch!

---

## 🎯 Challenge 4: Safe JSON Deserializer Guard

### Problem
Create `safeJsonParse(raw: string): unknown` that returns `null` if JSON parsing fails.

### Solution
```typescript
export function safeJsonParse(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
```

### 💡 Why This Works
- Instead of returning `any` (which disables all type checking), returning `unknown` forces consumer code to validate the structure before using it.

---

## 🚀 Next Steps
Advance to **Day 04: Arrays, Readonly Arrays & Matrices**!
