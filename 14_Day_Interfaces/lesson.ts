/**
 * ============================================================================
 * DAY 14: INTERFACES & INHERITANCE
 * ============================================================================
 * Define object and method contracts using interfaces, extend interfaces hierarchically, and compose multiple interfaces.
 * Run with: npm run day:14  OR  npx tsx 14_Day_Interfaces/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 14: INTERFACES & INHERITANCE");
console.log("=======================================================\n");

// Day 14: Interfaces & Inheritance
interface Vehicle {
  make: string;
  model: string;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  charge: () => void;
}

const tesla: ElectricVehicle = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacityKWh: 75,
  charge: () => console.log("Charging...")
};
console.log("EV:", tesla);


console.log("\n[Summary] Day 14 lesson finished successfully!\n");
