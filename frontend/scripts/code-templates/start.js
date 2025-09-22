import fs from "fs";
import path from "path";

// --- CLI args ---
// Usage: create-component <ComponentName> [outputDir]
const [, , _componentName, _outputDir] = process.argv;

const componentName = _componentName
  ? _componentName.replace(/\.tsx$/i, "")
  : undefined;
const templatePath = path.join(
  path.dirname(new URL(import.meta.url).pathname),
  "react-component.txt",
);
const outputDir = _outputDir ?? path.join(process.cwd(), `app/components`);

if (!componentName) {
  console.error("Usage: create-component <ComponentName> [outputDir]");
  process.exit(1);
}

try {
  // --- Read template ---
  const template = fs.readFileSync(templatePath, "utf8");

  // --- Replace placeholders ---
  const content = template.replace(/<ComponentName>/g, componentName);

  // --- Ensure output directory exists ---
  fs.mkdirSync(outputDir, { recursive: true });

  // --- Resolve output path ---
  const outPath = path.join(outputDir, `${componentName}.tsx`);

  // --- Check if file already exists ---
  if (fs.existsSync(outPath)) {
    console.error(`❌ Error: File already exists at ${outPath}`);
    process.exit(1);
  }

  // --- Write file ---
  fs.writeFileSync(outPath, content, "utf8");
  console.log(`Created component at: ${outPath}`);
} catch (err) {
  console.error(`❌ Failed to create component: ${err.message}`);
  process.exit(1);
}
