import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = dirname(__dirname);
const distDir = join(rootDir, "dist");

const SITE_URL = normalizeSiteUrl(
  process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "https://falcon-ai-camera.vercel.app"
);

const SITE_NAME = "CyberDX";
const DEFAULT_IMAGE = "/cyberdx_logo.jpg";
const HOME_META = {
  title: "CyberDX | Falcon AI Camera System & Real-Time Video Analytics",
  description:
    "CyberDX provides Falcon AI Camera System and real-time video analytics solutions for intelligent camera monitoring, operational safety, and enterprise automation.",
  image: DEFAULT_IMAGE,
  slug: "",
  type: "website",
};

const sourceHtml = readFileSync(join(distDir, "index.html"), "utf8");

writeFileSync(join(distDir, "index.html"), withMetadata(sourceHtml, HOME_META));

console.log(`Generated metadata for the product landing page using ${SITE_URL}`);

function withMetadata(html, meta) {
  const url = meta.slug ? `${SITE_URL}/${meta.slug}/` : `${SITE_URL}/`;
  const imageUrl = absoluteUrl(meta.image);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const escapedUrl = escapeHtml(url);
  const escapedImage = escapeHtml(imageUrl);

  const metadata = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Falcon, AI camera system, real-time video analytics, intelligent camera monitoring, computer vision, edge AI, real-time monitoring, security automation, enterprise AI, Vietnam technology company" />
    <meta name="author" content="CyberDX" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${escapedUrl}" />

    <meta property="og:type" content="${meta.type}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${escapedImage}" />
    <meta property="og:image:secure_url" content="${escapedImage}" />
    <meta property="og:image:type" content="${imageType(meta.image)}" />
    <meta property="og:url" content="${escapedUrl}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="${SITE_NAME}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${escapedImage}" />`;

  return html.replace(
    /\s*<title>[\s\S]*?<\/title>[\s\S]*?<meta name="theme-color"/,
    `${metadata}\n\n    <meta name="theme-color"`
  );
}

function absoluteUrl(path) {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function imageType(path) {
  const extension = path.split(".").pop()?.toLowerCase();
  if (extension === "png") return "image/png";
  if (extension === "webp") return "image/webp";
  if (extension === "gif") return "image/gif";
  return "image/jpeg";
}

function normalizeSiteUrl(value) {
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
