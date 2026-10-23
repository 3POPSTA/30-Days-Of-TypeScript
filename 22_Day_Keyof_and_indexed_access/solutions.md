# 📘 Day 22: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 22: Keyof, Indexed Access & typeof Queries**!

---

## 🎯 Challenge 1: 'keyof' Union Extraction

### Solution
```typescript
export interface VehicleSpec {
  vin: string;
  horsepower: number;
  isElectric: boolean;
}

export type VehicleKey = keyof VehicleSpec;

export function hasSpecKey(k: string): k is VehicleKey {
  return ["vin", "horsepower", "isElectric"].includes(k);
}
```

---

## 🎯 Challenge 2: Indexed Property Access (T[K])

### Solution
```typescript
export type VinType = VehicleSpec["vin"];
export type VehicleValuesUnion = VehicleSpec[keyof VehicleSpec];

export function describeVehicleProp<K extends keyof VehicleSpec>(
  spec: VehicleSpec,
  key: K
): string {
  return `Prop '${key}' has value: ${spec[key]}`;
}
```

---

## 🎯 Challenge 3: Type Query on Runtime Configuration via 'typeof'

### Solution
```typescript
export const defaultAppConfig = {
  appName: "Typescript Tutor",
  port: 3000,
  enableLogging: true
};

export type AppConfiguration = typeof defaultAppConfig;

export function cloneConfigWithPort(
  config: AppConfiguration,
  newPort: number
): AppConfiguration {
  return { ...config, port: newPort };
}
```

---

## 🎯 Challenge 4: Strongly Typed Property Setter

### Solution
```typescript
export function updateRecordField<T, K extends keyof T>(
  record: T,
  key: K,
  newValue: T[K]
): T {
  return { ...record, [key]: newValue };
}
```

---

## 🚀 Next Steps
Advance to **Day 23: Mapped Types & Key Remapping**!
