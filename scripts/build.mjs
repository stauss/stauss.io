import { cp, mkdir, readdir, rm, stat, copyFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import pug from "pug";
import * as sass from "sass";
import { projects, projectAsset } from "../src/data/projects.mjs";

const root = process.cwd();
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");

const staticDirs = ["css", "images", "js", "lib", "webfonts"];
const staticFiles = ["style.css", "favicon.ico", "contact.php"];

const pugPages = [
  {
    src: path.join(srcDir, "pug/pages/index.pug"),
    dest: path.join(distDir, "index.html"),
    locals: {
      title: "Caleb Stauss — Product Design Portfolio",
      description:
        "VP, SVP, and director-level product design portfolio by Caleb Stauss.",
      canonical: "https://stauss.io/",
      ogImage: "https://stauss.io/images/05hero.jpg",
      assetPrefix: "",
      bodyClass: "disable-preloader enable-lenis hayler home-index-page",
      headerMode: "index",
      headerCta: "Let's Talk",
      extraCss: ["css/showcase.css", "css/portfolio.css"],
      projects
    }
  },
  {
    src: path.join(srcDir, "pug/pages/about.pug"),
    dest: path.join(distDir, "about.html"),
    locals: {
      title: "About — Caleb Stauss",
      description:
        "About Caleb Stauss, a product designer and systems engineer with more than 15 years of digital product experience.",
      canonical: "https://stauss.io/about.html",
      ogImage: "https://stauss.io/images/05hero.jpg",
      assetPrefix: "",
      bodyClass: "disable-preloader enable-lenis hayler about-page",
      headerMode: "index",
      headerCta: "Let's Talk",
      extraCss: ["css/showcase.css", "css/portfolio.css"],
      pageBgColor: "#000000",
      projects
    }
  },
  {
    src: path.join(srcDir, "pug/projects/all-projects-template.pug"),
    dest: path.join(distDir, "projects", "all-projects-template.html"),
    locals: {
      title: "All Projects — Layout Reference",
      description: "A reference page showing all project section and layout types.",
      canonical: "https://stauss.io/projects/all-projects-template.html",
      ogImage: "https://stauss.io/dist/images/web/og-image.png",
      assetPrefix: "../",
      bodyClass: "disable-preloader enable-lenis hayler",
      headerMode: "case",
      headerCta: "Let's Talk",
      projects
    }
  },
  ...projects.map((project) => ({
    src: path.join(srcDir, "pug/projects/template.pug"),
    dest: path.join(distDir, "projects", `${project.slug}.html`),
    locals: {
      title: project.metaTitle,
      description: project.description,
      canonical: `https://stauss.io/projects/${project.slug}.html`,
      ogImage: project.ogImage,
      assetPrefix: "../",
      bodyClass: "disable-preloader enable-lenis hayler case-study-page",
      headerMode: "case",
      headerCta: "Early Access",
      pageScripts: ["js/case-study.js"],
      projects,
      project,
      projectAsset
    }
  }))
];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyStaticAssets() {
  for (const dir of staticDirs) {
    const source = path.join(root, dir);
    if (!(await exists(source))) continue;
    await cp(source, path.join(distDir, dir), { recursive: true });
  }

  for (const file of staticFiles) {
    const source = path.join(root, file);
    if (!(await exists(source))) continue;
    await copyFile(source, path.join(distDir, file));
  }

  const generatedJsDir = path.join(srcDir, "js");
  if (await exists(generatedJsDir)) {
    const files = await readdir(generatedJsDir);
    await mkdir(path.join(distDir, "js"), { recursive: true });
    await Promise.all(
      files
        .filter((file) => file.endsWith(".js"))
        .map((file) => copyFile(path.join(generatedJsDir, file), path.join(distDir, "js", file)))
    );
  }
}

async function compileScss() {
  const result = sass.compile(path.join(srcDir, "scss/main.scss"), {
    loadPaths: [path.join(srcDir, "scss")],
    style: "expanded",
    sourceMap: true
  });

  await import("node:fs/promises").then(({ writeFile }) =>
    Promise.all([
      writeFile(path.join(distDir, "css/case-study.css"), result.css),
      writeFile(path.join(distDir, "css/case-study.css.map"), JSON.stringify(result.sourceMap))
    ])
  );
}

async function compilePug() {
  for (const page of pugPages) {
    const html = pug.renderFile(page.src, {
      basedir: path.join(srcDir, "pug"),
      pretty: true,
      ...page.locals
    });
    await mkdir(path.dirname(page.dest), { recursive: true });
    await import("node:fs/promises").then(({ writeFile }) => writeFile(page.dest, html));
  }
}

async function cleanDist() {
  if (await exists(distDir)) {
    const entries = await readdir(distDir);
    await Promise.all(entries.map((entry) => rm(path.join(distDir, entry), { recursive: true, force: true })));
  } else {
    await mkdir(distDir, { recursive: true });
  }
}

export async function build({ clean = true } = {}) {
  if (clean) await cleanDist();
  await mkdir(distDir, { recursive: true });
  await copyStaticAssets();
  await compileScss();
  await compilePug();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  build().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
