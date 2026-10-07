// Builds the favicon / app-icon set from the full CyberDX lockup (scripts/art/cyberdx-logo.png).
// Only the orange "DX" mark is used so the icon stays legible at 16-32px.
//
//   node scripts/generate-brand-icons.mjs
//
// Needs `sharp` (present via @splinetool/react-spline) and ImageMagick's `magick` for the .ico.
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "scripts", "art", "cyberdx-logo.png");
const out = (name) => path.join(root, "public", name);

// 1. Locate the mark: the lockup keeps the DX symbol above y≈760; the wordmark/tagline sit below.
const MARK_ROWS = 760;
const { data, info } = await sharp(source)
  .extract({ left: 0, top: 0, width: 1254, height: MARK_ROWS })
  .raw()
  .toBuffer({ resolveWithObject: true });
let [x0, y0, x1, y1] = [info.width, info.height, 0, 0];
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    if (data[(y * info.width + x) * info.channels + 3] > 110) {
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
}
const mark = await sharp(source)
  .extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 })
  .toBuffer();
console.log(`mark bbox ${x0},${y0} → ${x1},${y1} (${x1 - x0 + 1}×${y1 - y0 + 1})`);

// 2. Place the mark centred on a square canvas.
async function square(size, { pad, background = { r: 0, g: 0, b: 0, alpha: 0 } }) {
  const inner = Math.round(size * (1 - pad * 2));
  const resized = await sharp(mark)
    .resize(inner, inner, { fit: "inside", kernel: "lanczos3" })
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: resized, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const tmp = mkdtempSync(path.join(tmpdir(), "brand-icons-"));
try {
  const files = {
    "favicon-16.png": await square(16, { pad: 0.04 }),
    "favicon-32.png": await square(32, { pad: 0.04 }),
    "cyberdx-icon.png": await square(512, { pad: 0.08 }),
    // iOS fills transparency with black and applies its own rounded mask, so give it an opaque dark tile.
    "apple-touch-icon.png": await square(180, { pad: 0.17, background: "#0a0a0c" }),
  };
  for (const [name, buf] of Object.entries(files)) {
    await sharp(buf).toFile(out(name));
    console.log("wrote public/" + name);
  }
  const ico = [16, 32, 48];
  for (const s of ico) await sharp(await square(s, { pad: 0.04 })).toFile(path.join(tmp, `${s}.png`));
  execFileSync("magick", [...ico.map((s) => path.join(tmp, `${s}.png`)), out("favicon.ico")]);
  console.log("wrote public/favicon.ico (16, 32, 48)");
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
