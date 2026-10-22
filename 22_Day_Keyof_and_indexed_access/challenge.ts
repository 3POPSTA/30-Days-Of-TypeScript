/**
 * ============================================================================
 * DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES — CODING CHALLENGES
 * ============================================================================
 * Type querying operators provide deep structural inspection:
 * - 'keyof T' produces a union of an object's keys
 * - 'T[K]' looks up property value types
 * - 'typeof' inspects runtime values to extract their TypeScript shape
 *
 * Test with:
 *   npx tsx 22_Day_Keyof_and_indexed_access/challenge.ts
 *   OR
 *   npm run challenge:22
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 22: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: 'keyof' Union Extraction
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an interface 'VehicleSpec':
 *   - vin: string;
 *   - horsepower: number;
 *   - isElectric: boolean;
 * 
 * Extract its keys into a type alias 'VehicleKey = keyof VehicleSpec'.
 * Write a function 'hasSpecKey(k: string): k is VehicleKey'.
 */
// >>> YOUR CODE HERE <<<
export interface VehicleSpec {
  vin: string;
  horsepower: number;
  isElectric: boolean;
}

export type VehicleKey = keyof VehicleSpec;

export function hasSpecKey(k: string): k is VehicleKey {
  // TODO: Replace with your implementation
  return ["vin", "horsepower", "isElectric"].includes(k);
}


// ============================================================================
// STEP 2: Indexed Property Access (T[K])
// ============================================================================
/**
 * CHALLENGE 2:
 * Define:
 *   type VinType = VehicleSpec["vin"]; // string
 *   type VehicleValuesUnion = VehicleSpec[keyof VehicleSpec]; // string | number | boolean
 * 
 * Write a function 'describeVehicleProp<K extends keyof VehicleSpec>(spec: VehicleSpec, key: K): string'
 * that returns: `Prop '${key}' has value: ${spec[key]}`
 */
// >>> YOUR CODE HERE <<<
export type VinType = VehicleSpec["vin"];
export type VehicleValuesUnion = VehicleSpec[keyof VehicleSpec];

export function describeVehicleProp<K extends keyof VehicleSpec>(spec: VehicleSpec, key: K): string {
  // TODO: Replace with your implementation
  return `Prop '${key}' has value: ${spec[key]}`;
}


// ============================================================================
// STEP 3: Type Query on Runtime Configuration via 'typeof'
// ============================================================================
/**
 * CHALLENGE 3:
 * Given the runtime constant 'defaultAppConfig':
 *   export const defaultAppConfig = {
 *     appName: "Typescript Tutor",
 *     port: 3000,
 *     enableLogging: true
 *   };
 * 
 * Extract its type using 'typeof defaultAppConfig' into 'type AppConfiguration'.
 * Write 'cloneConfigWithPort(config: AppConfiguration, newPort: number): AppConfiguration'.
 */
// >>> YOUR CODE HERE <<<
export const defaultAppConfig = {
  appName: "Typescript Tutor",
  port: 3000,
  enableLogging: true
};

export type AppConfiguration = typeof defaultAppConfig;

export function cloneConfigWithPort(config: AppConfiguration, newPort: number): AppConfiguration {
  // TODO: Replace with your implementation
  return { ...config, port: newPort };
}


// ============================================================================
// STEP 4: Strongly Typed Property Setter
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a generic function 'updateRecordField<T, K extends keyof T>(record: T, key: K, newValue: T[K]): T'
 * that returns a new copy of 'record' with the given property updated.
 */
// >>> YOUR CODE HERE <<<
export function updateRecordField<T, K extends keyof T>(record: T, key: K, newValue: T[K]): T {
  // TODO: Replace with your implementation
  return { ...record, [key]: newValue };
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (keyof & hasSpecKey)...");
testCheck("Step 1.1 - valid key", hasSpecKey("horsepower") === true);
testCheck("Step 1.2 - invalid key", hasSpecKey("color") === false);

console.log("\nVerifying Step 2 (Indexed Access)...");
const teslaSpec: VehicleSpec = { vin: "5YJSA1", horsepower: 450, isElectric: true };
testCheck("Step 2 - describeVehicleProp", describeVehicleProp(teslaSpec, "horsepower") === "Prop 'horsepower' has value: 450");

console.log("\nVerifying Step 3 (typeof queries)...");
const modifiedCfg = cloneConfigWithPort(defaultAppConfig, 8080);
testCheck("Step 3 - cloneConfigWithPort", modifiedCfg.port === 8080 && modifiedCfg.appName === "Typescript Tutor");

console.log("\nVerifying Step 4 (updateRecordField)...");
const updatedTesla = updateRecordField(teslaSpec, "isElectric", false);
testCheck("Step 4 - updateRecordField", updatedTesla.isElectric === false && teslaSpec.isElectric === true);

console.log("\n[Summary] Day 22 challenge checks completed!\n");
