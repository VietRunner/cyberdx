const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';
const tempProfileDir = path.join(__dirname, 'temp-edge-profile');

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

const urls = [
  { name: 'cxview', url: 'https://cxview.ai/' },
  { name: 'local', url: 'http://localhost:5173/' }
];

const screenshotDir = path.join(__dirname, 'docs', 'landing-compare', 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

urls.forEach(site => {
  viewports.forEach(vp => {
    const filename = `${site.name}-${vp.name}.png`;
    const destPath = path.join(screenshotDir, filename);
    
    console.log(`Taking screenshot for ${site.name} (${vp.name})...`);
    
    const cmd = `${edgePath} --headless --disable-gpu --no-sandbox --user-data-dir="${tempProfileDir}" --screenshot="${destPath}" --window-size=${vp.width},${vp.height} "${site.url}"`;
    
    try {
      execSync(cmd, { stdio: 'inherit' });
      console.log(`Saved to ${destPath}`);
    } catch (err) {
      console.error(`Failed to take screenshot for ${filename}:`, err.message);
    }
  });
});

console.log("Screenshot process finished!");
