/**
 * Image pipeline.
 *
 * Reads source images from ../images-src/ and writes one optimised WebP
 * per image into ../public/img/, capped at MAX_WIDTH (no upscaling).
 *
 * Drop your originals (any reasonable format) into images-src/, then
 * run `npm run build`. Output is `<name>.webp` - reference it directly,
 * e.g. an image named `hestia.jpg` becomes `/img/hestia.webp`.
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SRC = join(ROOT, 'images-src');
const OUT = join(ROOT, 'public', 'img');

const MAX_WIDTH = 1000;
const WEBP_OPTS = { quality: 80 };

const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff']);

async function main() {
  await mkdir(OUT, { recursive: true });

  let files;
  try {
    files = await readdir(SRC);
  } catch (err) {
    console.error(`Could not read ${SRC}. Drop source images in there.`);
    process.exit(1);
  }

  const sources = files.filter(f => SOURCE_EXTS.has(parse(f).ext.toLowerCase()));
  if (sources.length === 0) {
    console.log('No source images found in images-src/.');
    return;
  }

  console.log(`Processing ${sources.length} source image(s)...\n`);
  const start = Date.now();
  let totalBytes = 0;

  for (const file of sources) {
    const { name } = parse(file);
    const outPath = join(OUT, `${name}.webp`);
    await sharp(join(SRC, file))
      .resize(MAX_WIDTH, null, { withoutEnlargement: true })
      .webp(WEBP_OPTS)
      .toFile(outPath);
    const size = (await stat(outPath)).size;
    totalBytes += size;
    console.log(`  ${`${name}.webp`.padEnd(28)} ${(size / 1024).toFixed(1).padStart(7)} KB`);
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(2);
  console.log(`\nWrote ${sources.length} files (${(totalBytes / 1024).toFixed(1)} KB total) in ${elapsed}s.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
