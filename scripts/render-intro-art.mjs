// Renders the intro-screen artwork (scripts/art/*.html) to transparent WebP files in
// public/intro/. Uses the locally installed Google Chrome in headless mode, then sharp
// (already present in node_modules via @splinetool/react-spline) to compress.
//
//   node scripts/render-intro-art.mjs            # render everything
//   node scripts/render-intro-art.mjs falcon-core twin
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "scripts", "art");
const outDir = path.join(root, "public", "intro");
const CHROME =
  process.env.CHROME_BIN || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const SIZE = 800;

const names = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["falcon-core", "falcon-rings", "beaver", "twin"];

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME}. Set CHROME_BIN to override.`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
const tmp = mkdtempSync(path.join(tmpdir(), "intro-art-"));

try {
  for (const name of names) {
    const html = path.join(srcDir, `${name}.html`);
    const png = path.join(tmp, `${name}.png`);
    execFileSync(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--default-background-color=00000000",
        `--window-size=${SIZE},${SIZE}`,
        `--screenshot=${png}`,
        pathToFileURL(html).href,
      ],
      { stdio: "ignore" },
    );
    const out = path.join(outDir, `${name}.webp`);
    await sharp(png)
      .resize(SIZE, SIZE, { fit: "cover", position: "top" })
      .webp({ quality: 90, alphaQuality: 95, effort: 6 })
      .toFile(out);
    console.log("rendered", path.relative(root, out));
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
