const path = require("path");
const fs = require("fs");
const jszip = require("jszip");

const iconFile = path.join(__dirname, "icon.png");
const pluginJSON = path.join(__dirname, "plugin.json");
const distFolder = path.join(__dirname, "dist");

if (!fs.existsSync(pluginJSON)) {
  console.error("❌ Error: plugin.json not found! Cannot package plugin.");
  process.exit(1);
}

const json = JSON.parse(fs.readFileSync(pluginJSON, "utf8"));
const zip = new jszip();

// 1. Add Icon
if (fs.existsSync(iconFile)) {
  zip.file("icon.png", fs.readFileSync(iconFile));
} else {
  console.warn("⚠️ Warning: icon.png not found at root.");
}

// 2. Add plugin.json
zip.file("plugin.json", fs.readFileSync(pluginJSON));

// 3. Add Readme
let readmePath = json.readme ? path.join(__dirname, json.readme) : null;

if (!readmePath || !fs.existsSync(readmePath)) {
  const defaults = ["readme.md", "README.md", "readme.MD", "README.MD"];
  for (const fallback of defaults) {
    const fallbackPath = path.join(__dirname, fallback);
    if (fs.existsSync(fallbackPath)) {
      readmePath = fallbackPath;
      break;
    }
  }
}

if (readmePath && fs.existsSync(readmePath)) {
  zip.file("readme.md", fs.readFileSync(readmePath));
  console.log("Added readme to zip from:", path.basename(readmePath));
} else {
  console.warn("⚠️ Warning: No readme file detected.");
}

// 4. Add Dist Files to the zip root (so main.js sits beside plugin.json)
function loadFile(root, folder) {
  if (!fs.existsSync(folder)) {
    console.error(`❌ Error: Compilation folder "${folder}" does not exist. Run build first.`);
    return;
  }

  const distFiles = fs.readdirSync(folder);
  distFiles.forEach((file) => {
    const fullPath = path.join(folder, file);
    const stat = fs.statSync(fullPath);
    const relativePath = path.join(root, file);

    if (stat.isDirectory()) {
      zip.folder(relativePath.replace(/\\/g, "/"));
      loadFile(relativePath, fullPath);
    } else {
      zip.file(relativePath.replace(/\\/g, "/"), fs.readFileSync(fullPath));
    }
  });
}

loadFile("", distFolder);

// 5. Generate Zip
const outputZipPath = path.join(__dirname, "plugin.zip");
zip
  .generateNodeStream({ type: "nodebuffer", streamFiles: true })
  .pipe(fs.createWriteStream(outputZipPath))
  .on("finish", () => {
    console.log("✅ Plugin archived successfully as plugin.zip");
  })
  .on("error", (err) => {
    console.error("❌ Zip Generation failed:", err);
  });