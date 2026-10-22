import * as fs from "fs";
import * as path from "path";
import { days01_05 } from "./days01_05.js";
import { days06_10 } from "./days06_10.js";
import { days11_15 } from "./days11_15.js";
import { days16_20 } from "./days16_20.js";
import { days21_25 } from "./days21_25.js";
import { days26_30 } from "./days26_30.js";
import { ChallengeFile } from "./types.js";

const allChallenges: ChallengeFile[] = [
  ...days01_05,
  ...days06_10,
  ...days11_15,
  ...days16_20,
  ...days21_25,
  ...days26_30
];

function generateAllChallenges(): void {
  const rootDir = process.cwd();
  console.log(`Starting generation of challenge.ts files for ${allChallenges.length} days...\n`);

  for (const item of allChallenges) {
    const dayFolder = path.join(rootDir, item.folder);
    if (!fs.existsSync(dayFolder)) {
      throw new Error(`Target directory ${dayFolder} does not exist!`);
    }

    const targetFile = path.join(dayFolder, "challenge.ts");
    fs.writeFileSync(targetFile, item.code, "utf-8");
    console.log(`  [OK] Created Day ${item.day.toString().padStart(2, "0")}: ${item.folder}/challenge.ts`);
  }

  console.log(`\nSuccessfully created all ${allChallenges.length} challenge.ts files!`);
}

generateAllChallenges();
