/**
 * 🎯 Day 22: Keyof, Indexed Access & typeof Queries - Coding Challenges
 *
 * Extract property keys as unions, index into types (T[K]), and query types with typeof.
 *
 * 🚀 Run with: npm run challenge:22
 */

// ============================================================================
// 🎯 CHALLENGE 1: 'keyof' Union Extraction
// ============================================================================
/**
 * 1. Define 'VehicleSpec': { vin: string; horsepower: number; isElectric: boolean }
 * 2. Define 'VehicleKey' = keyof VehicleSpec
 * 3. Write 'hasSpecKey(k: string): k is VehicleKey'
 */
export interface VehicleSpec {
  vin: string;
  horsepower: number;
  isElectric: boolean;
}

export type VehicleKey = keyof VehicleSpec;

// 👇 YOUR CODE HERE:
export function hasSpecKey(k: string): k is VehicleKey {
  // TODO: Check if k is a valid key of VehicleSpec
  return ["vin", "horsepower", "isElectric"].includes(k);
}

// ============================================================================
// 🎯 CHALLENGE 2: Indexed Property Access (T[K])
// ============================================================================
/**
 * 1. Define 'VinType' = VehicleSpec["vin"]
 * 2. Define 'VehicleValuesUnion' = VehicleSpec[keyof VehicleSpec]
 * 3. Write 'describeVehicleProp<K extends keyof VehicleSpec>(spec: VehicleSpec, key: K): string':
 *    Returns: "Prop '<key>' has value: <value>"
 */
export type VinType = VehicleSpec["vin"];
export type VehicleValuesUnion = VehicleSpec[keyof VehicleSpec];

// 👇 YOUR CODE HERE:
export function describeVehicleProp<K extends keyof VehicleSpec>(spec: VehicleSpec, key: K): string {
  // TODO: Return formatted prop description
  return `Prop '${key}' has value: ${spec[key]}`;
}

// ============================================================================
// 🎯 CHALLENGE 3: Type Query on Runtime Configuration via 'typeof'
// ============================================================================
/**
 * 1. Given 'defaultAppConfig'
 * 2. Define 'AppConfiguration' = typeof defaultAppConfig
 * 3. Write 'cloneConfigWithPort(config, newPort): AppConfiguration'
 */
export const defaultAppConfig = {
  appName: "Typescript Tutor",
  port: 3000,
  enableLogging: true
};

export type AppConfiguration = typeof defaultAppConfig;

// 👇 YOUR CODE HERE:
export function cloneConfigWithPort(config: AppConfiguration, newPort: number): AppConfiguration {
  // TODO: Return cloned config with new port
  return { ...config, port: newPort };
}

// ============================================================================
// 🎯 CHALLENGE 4: Strongly Typed Property Setter
// ============================================================================
/**
 * Write 'updateRecordField<T, K extends keyof T>(record: T, key: K, newValue: T[K]): T'
 * Returns a new object with the specified key updated.
 */
// 👇 YOUR CODE HERE:
export function updateRecordField<T, K extends keyof T>(record: T, key: K, newValue: T[K]): T {
  // TODO: Return updated record
  return { ...record, [key]: newValue };
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:22
// ============================================================================
console.log("--- 🧪 Day 22 Challenge Results ---");
console.log("Challenge 1:", hasSpecKey("vin"), "|", hasSpecKey("color"));

const myCar: VehicleSpec = { vin: "1HGCR2F83HA", horsepower: 250, isElectric: false };
console.log("Challenge 2:", describeVehicleProp(myCar, "horsepower"));
console.log("Challenge 3:", cloneConfigWithPort(defaultAppConfig, 8080));
console.log("Challenge 4:", updateRecordField(myCar, "isElectric", true));
console.log("-----------------------------------\n");
