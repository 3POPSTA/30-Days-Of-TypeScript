# 📘 Day 15: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 15: Interface vs Type & Declaration Merging**!

---

## 🎯 Challenge 1: Declaration Merging with Interfaces

### Problem
Demonstrate declaration merging by defining two `AppEnvironment` interfaces and returning an object satisfying both.

### Solution
```typescript
export interface AppEnvironment {
  nodeEnv: "development" | "production";
}

export interface AppEnvironment {
  port: number;
  apiSecret: string;
}

export function buildEnvironment(): AppEnvironment {
  return {
    nodeEnv: "production",
    port: 8080,
    apiSecret: "super-secret-key"
  };
}
```

### 💡 Why This Works & Scrimba Pro-Tip
- Declaration merging is how `@types/node` or `window` extensions work. Types cannot be merged (duplicate type identifiers error out), making interfaces the right choice for public library API contracts.

---

## 🎯 Challenge 2: When Type Alias is Mandatory

### Solution
```typescript
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type EndpointTuple = [method: HttpMethod, path: string];

export function formatEndpoint(endpoint: EndpointTuple): string {
  const [method, path] = endpoint;
  return `[${method}] ${path}`;
}
```

---

## 🎯 Challenge 3: Extending via Interface vs Intersecting via Type

### Solution
```typescript
export function areUsersCompatible(u1: ExtendedUser, u2: TExtendedUser): boolean {
  return u1.id === u2.id && u1.name === u2.name;
}
```

---

## 🎯 Challenge 4: Plugin Registry Pattern with Merging

### Solution
```typescript
export interface PluginRegistry {
  auth: boolean;
}

export interface PluginRegistry {
  logger: (msg: string) => void;
}

export function createPluginHost(): PluginRegistry {
  return {
    auth: true,
    logger: (_msg: string) => {}
  };
}
```

---

## 🚀 Next Steps
Advance to **Day 16: Classes, Access Modifiers & readonly**!
