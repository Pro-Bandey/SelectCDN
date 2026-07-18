import * as esbuild from "esbuild";
import { exec } from "child_process";
import path from "path";

const isServe = process.argv.includes("--serve");

function packZip() {
  exec("node ./pack-zip.js", (err, stdout, stderr) => {
    if (err) {
      console.error("Error generating zip bundle:", err);
      return;
    }
    if (stdout) console.log(stdout.trim());
    if (stderr) console.error(stderr.trim());
  });
}

function openBrowser(url) {
  const startCommand = {
    win32: `start "" "${url}"`,
    darwin: `open "${url}"`,
    linux: `xdg-open "${url}"`,
  }[process.platform];

  if (startCommand) {
    exec(startCommand, (err) => {
      if (err) {
        console.log(`\nℹ️  Headless environment detected or auto-open failed. Please open: ${url}`);
      } else {
        console.log(`\n🚀 Auto-opened development preview in your browser.`);
      }
    });
  } else {
    console.log(`\n👉 Please open your browser manually and go to: ${url}`);
  }
}

const zipPlugin = {
  name: "zip-plugin",
  setup(build) {
    build.onEnd(() => {
      packZip();
    });
  },
};

let buildConfig = {
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: !isServe, 
  logLevel: "info",
  color: true,
  // Compiles directly to the root dist folder to align with the packager
  outdir: "dist",
  loader: {
    ".json": "json" 
  },
  plugins: [zipPlugin],
};

(async function () {
  if (isServe) {
    console.log("Starting local dev server & watch cycle on port 2000...");
    const ctx = await esbuild.context(buildConfig);

    await ctx.watch();

    // Serve from the root project folder so both /dist/ and /dev/ are accessible to the browser
    await ctx.serve({
      servedir: ".",
      port: 2000,
    });

    const targetUrl = "http://localhost:2000/dev/";
    console.log(`👉 Server is running at ${targetUrl}`);

    openBrowser(targetUrl);
  } else {
    console.log("Compiling production assets...");
    await esbuild.build(buildConfig);
  }
})();