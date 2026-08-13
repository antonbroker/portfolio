import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const roots = ["public/img"];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(absolute);
  }
  return files;
}

for (const root of roots) {
  const files = await walk(root);
  for (const source of files) {
    const parsed = path.parse(source);
    const destination = path.join(parsed.dir, `${parsed.name}.webp`);
    await sharp(source)
      .rotate()
      .resize({ width: 1600, height: 1400, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 6, smartSubsample: true })
      .toFile(destination);
    console.log(`${source} -> ${destination}`);
  }
}
