import browserSync from "browser-sync";
import { watch } from "chokidar";
import path from "node:path";
import process from "node:process";
import { build } from "./build.mjs";

const root = process.cwd();

const bs = browserSync.create();
let queued = false;
let building = false;

async function rebuild(event, filePath) {
  if (building) {
    queued = true;
    return;
  }

  building = true;
  const label = filePath ? path.relative(root, filePath) : "file";
  console.log(`[rebuild] ${label} changed — building...`);
  const start = Date.now();
  try {
    await build({ clean: false });
    console.log(`[rebuild] done in ${Date.now() - start}ms`);
    bs.reload();
  } catch (error) {
    console.error(`[rebuild] error:`, error.message ?? error);
  } finally {
    building = false;
    if (queued) {
      queued = false;
      rebuild();
    }
  }
}

await build();

bs.init({
  server: "dist",
  open: false,
  notify: false,
  port: 3000,
  ui: false,
  files: false,
  middleware: [
    function devContentSecurityPolicy(_req, res, next) {
      res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' ws: http://localhost:* http://127.0.0.1:*;"
      );
      next();
    }
  ]
});

watch(["src", "images", "js", "lib", "webfonts", "css", "style.css", "favicon.ico"], {
    ignoreInitial: true,
    ignored: (filePath) => filePath.includes("node_modules") || filePath.includes("/dist/")
  })
  .on("all", (event, filePath) => rebuild(event, filePath));
