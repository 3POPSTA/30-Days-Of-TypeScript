# 📘 Day 06: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 06: Object Types & Property Modifiers**!

---

## 🎯 Challenge 1: Defining Structural Object Types with Modifiers

### Problem
Define `UserProfile` with `readonly id`, required `username` and `email`, and optional `bio?`.

### Solution
```typescript
export interface UserProfile {
  readonly id: string;
  username: string;
  email: string;
  bio?: string;
}

export function createUserProfile(
  id: string,
  username: string,
  email: string,
  bio?: string
): UserProfile {
  return { id, username, email, bio };
}
```

### 💡 Why This Works
- `readonly` prevents changing `id` after creation (`user.id = "..."` causes a compile error).
- `bio?` marks the property as optional (`string | undefined`).

---

## 🎯 Challenge 2: Pure Immutable Updates

### Problem
Update `bio` on `UserProfile` without mutating the input object.

### Solution
```typescript
export function updateUserBio(user: UserProfile, newBio: string): UserProfile {
  return { ...user, bio: newBio };
}
```

### 💡 Why This Works
- Spreading `{ ...user, bio: newBio }` copies all existing properties into a fresh object and overrides `bio`.

---

## 🎯 Challenge 3: Dynamic Index Signatures

### Problem
Create a flexible key-value store of numbers using an index signature.

### Solution
```typescript
export type MetricStore = { [metricName: string]: number };

export function recordMetric(
  store: MetricStore,
  metric: string,
  delta: number
): MetricStore {
  const current = store[metric] ?? 0;
  return { ...store, [metric]: current + delta };
}
```

### 💡 Why This Works
- `[metricName: string]: number` allows any arbitrary string key with a numeric value.

---

## 🎯 Challenge 4: Nested Object Configuration

### Problem
Type a nested configuration object and build a database connection string.

### Solution
```typescript
export interface ServerConfig {
  host: string;
  port: number;
  database: {
    name: string;
    ssl: boolean;
  };
}

export function formatConnectionString(config: ServerConfig): string {
  return `db://${config.host}:${config.port}/${config.database.name}?ssl=${config.database.ssl}`;
}
```

---

## 🚀 Next Steps
Advance to **Day 07: Type Aliases & Intersection Types**!
