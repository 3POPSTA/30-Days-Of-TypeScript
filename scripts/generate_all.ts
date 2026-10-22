import * as fs from "fs";
import * as path from "path";
import { days01_05 } from "./day_data/days01_05.js";
import { days06_10 } from "./day_data/days06_10.js";
import { days11_15 } from "./day_data/days11_15.js";
import { days16_20 } from "./day_data/days16_20.js";
import { days21_25 } from "./day_data/days21_25.js";
import { days26_30 } from "./day_data/days26_30.js";
import { DayExamplesData } from "./day_data/types.js";

const allDaysData: DayExamplesData[] = [
  ...days01_05,
  ...days06_10,
  ...days11_15,
  ...days16_20,
  ...days21_25,
  ...days26_30
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function processDay(dayData: DayExamplesData): void {
  const dayPad = dayData.day.toString().padStart(2, "0");
  const rootDir = process.cwd();

  // Find day folder
  const folders = fs.readdirSync(rootDir).filter(f => f.startsWith(`${dayPad}_Day_`));
  if (folders.length === 0) {
    throw new Error(`Folder for day ${dayPad} not found!`);
  }
  const folder = folders[0];
  const folderPath = path.join(rootDir, folder);

  // Find markdown file
  const mdFiles = fs.readdirSync(folderPath).filter(f => f.includes(`${dayPad}_day_`) && f.endsWith(".md"));
  if (mdFiles.length === 0) {
    throw new Error(`Markdown file for day ${dayPad} in ${folder} not found!`);
  }
  const mdFile = mdFiles[0];
  const mdFilePath = path.join(folderPath, mdFile);
  const readmeFilePath = path.join(folderPath, "README.md");

  let content = fs.readFileSync(mdFilePath, "utf-8");

  // 1. Build Examples & Solutions Markdown
  const examplesLines: string[] = [];
  examplesLines.push("## 💡 10 In-Depth Practical Examples & Solutions\n");

  dayData.examples.forEach((ex, idx) => {
    const num = idx + 1;
    examplesLines.push(`### Example ${num}: ${ex.title}`);
    examplesLines.push(`**Problem / Scenario:**\n${ex.scenario}\n`);
    examplesLines.push(`**Solution:**\n\`\`\`typescript\n${ex.solution.trim()}\n\`\`\`\n`);
    examplesLines.push(`**Explanation & Output:**\n${ex.explanation.trim()}\n`);
    if (num < dayData.examples.length) {
      examplesLines.push("---\n");
    }
  });

  const examplesBlock = examplesLines.join("\n");

  // 2. Replace Exercises section up to Congratulations
  const exercisesRegex = /##\s*[^\n]*Exercises[\s\S]*?(?=##\s*[^\n]*Congratulations)/i;
  if (!exercisesRegex.test(content)) {
    throw new Error(`Could not find Exercises section in ${mdFilePath}`);
  }

  content = content.replace(exercisesRegex, `${examplesBlock}\n---\n\n`);

  // 3. Update Table of Contents
  // Build new TOC snippet for examples
  const tocEntries: string[] = [
    "  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)"
  ];
  dayData.examples.forEach((ex, idx) => {
    const num = idx + 1;
    const headerTitle = `Example ${num}: ${ex.title}`;
    const anchor = slugify(headerTitle);
    tocEntries.push(`    - [${headerTitle}](#${anchor})`);
  });
  const tocBlock = tocEntries.join("\n");

  const oldTocRegex = /-\s*\[[^\n]*Exercises\][^\n]*\n(\s*-\s*\[Exercise:[^\n]*\n)*/i;
  if (oldTocRegex.test(content)) {
    content = content.replace(oldTocRegex, `${tocBlock}\n`);
  }

  // 4. Update Learning Objectives
  content = content.replace(
    /-\s*\[\s*\]\s*Complete all Level 1, Level 2, and Level 3 exercises[^\n]*/i,
    "- [ ] Study and implement the 10 in-depth practical examples with complete solutions."
  );

  // Write back to both <day_md> and README.md
  fs.writeFileSync(mdFilePath, content, "utf-8");
  fs.writeFileSync(readmeFilePath, content, "utf-8");

  console.log(`[SUCCESS] Day ${dayPad} (${folder}): Generated 10 examples and solutions!`);
}

function main(): void {
  console.log(`Starting generation for ${allDaysData.length} days...`);
  for (const day of allDaysData) {
    processDay(day);
  }
  console.log("\nAll 30 days processed successfully!");
}

main();
