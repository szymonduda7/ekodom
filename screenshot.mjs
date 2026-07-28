import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const width = Number(process.argv[4]) || 1440;
const height = Number(process.argv[5]) || 900;

const dir = "temporary screenshots";
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

let n = 1;
while (fs.existsSync(path.join(dir, `screenshot-${n}${label ? "-" + label : ""}.png`))) n++;
const file = path.join(dir, `screenshot-${n}${label ? "-" + label : ""}.png`);

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

// Force all lazy images to load before capturing a full-page screenshot:
// Chrome only fetches loading="lazy" images once they enter the viewport,
// and Puppeteer's fullPage capture resizes the viewport just before the
// shot with no guaranteed settle time for those late fetches.
await page.evaluate(async () => {
  document.querySelectorAll("img[loading='lazy']").forEach((img) => (img.loading = "eager"));
  const imgs = [...document.images];
  await Promise.all(
    imgs.map((img) =>
      img.complete ? Promise.resolve() : new Promise((res) => { img.onload = img.onerror = res; })
    )
  );
});
await new Promise((res) => setTimeout(res, 150));

await page.screenshot({ path: file, fullPage: true });
await browser.close();
console.log("Saved " + file);
