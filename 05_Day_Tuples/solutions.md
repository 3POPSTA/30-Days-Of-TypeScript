# 📘 Day 05: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 05: Tuples, Labeled Tuples & as const**!

---

## 🎯 Challenge 1: Labeled Geographic Point Tuple

### Problem
Define a labeled tuple `GeoCoordinates` with optional `elevation` and write `formatCoordinates`.

### Solution
```typescript
export type GeoCoordinates = [lat: number, lng: number, elevation?: number];

export function formatCoordinates(coords: GeoCoordinates): string {
  const [lat, lng, elevation] = coords;
  if (elevation !== undefined) {
    return `${lat.toFixed(2)}N, ${lng.toFixed(2)}E (${elevation}m)`;
  }
  return `${lat.toFixed(2)}N, ${lng.toFixed(2)}E`;
}
```

### 💡 Why This Works
- Labeled tuple elements (`lat:`, `lng:`, `elevation?:`) document the meaning of each position in IDE tooltips.
- The `?` on the last element indicates it is optional.

---

## 🎯 Challenge 2: HTTP Response Tuple

### Problem
Define `ApiResponse` and check for HTTP success (200-299).

### Solution
```typescript
export type ApiResponse = [statusCode: number, statusText: string, data: unknown];

export function isSuccessResponse(res: ApiResponse): boolean {
  const [statusCode] = res;
  return statusCode >= 200 && statusCode < 300;
}
```

### 💡 Why This Works
- Destructuring `const [statusCode] = res` extracts the first element by position with strict type safety.

---

## 🎯 Challenge 3: Variadic / Rest Elements in Tuples

### Problem
Define `ScoreEntry` with a leading string name and any number of trailing numbers. Compute the student's average.

### Solution
```typescript
export type ScoreEntry = [studentName: string, ...scores: number[]];

export function computeStudentAverage(entry: ScoreEntry): number {
  const [_studentName, ...scores] = entry;
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  return sum / scores.length;
}
```

### 💡 Why This Works
- Rest elements in tuples (`...scores: number[]`) represent a variable-length tail while locking down the type of each score.

---

## 🎯 Challenge 4: Readonly Tuples with 'as const'

### Problem
Create a literal tuple with `as const` and extract its union type.

### Solution
```typescript
export const SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR", "de-DE"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}
```

### 💡 Why This Works & Pro-Tip
- `as const` turns an array into a `readonly` tuple of exact string literal types.
- `(typeof SUPPORTED_LOCALES)[number]` indexes into the tuple, extracting the union: `"en-US" | "es-ES" | "fr-FR" | "de-DE"`!

---

## 🚀 Next Steps
Proceed to **Day 06: Object Types & Property Modifiers**!
