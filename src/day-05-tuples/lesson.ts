/**
 * DAY 05: TUPLES & AS CONST
 */
console.log("\n=== DAY 05: TUPLES ===");
type Point3D = [x: number, y: number, z: number];
const p: Point3D = [10, 20, 30];
const directions = ["NORTH", "SOUTH", "EAST", "WEST"] as const;
console.log("Point:", p, "Directions tuple:", directions);
