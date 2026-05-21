/**
 * Image pipeline.
 *
 * Reads source images from ../images-src/ and writes optimised
 * AVIF, WebP and JPEG variants at multiple widths into ../public/img/.
 *
 * Drop your originals (any reasonable format) into images-src/, then
 * run `npm run images`. The output filenames follow the convention
 * `<name>-<width>.<ext>` to match the <picture> srcsets in index.html.
 *
 * Tweak SIZES and quality settings to taste.
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

const SIZES = [400, 800, 1200];

const AVIF_OPTS = { quality: 55, effort: 6 };
const WEBP_OPTS = { quality: 78 };
const JPEG_OPTS = { quality: 82, mozjpeg: true };

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
  let written = 0;
  let totalBytes = 0;

  for (const file of sources) {
    const { name } = parse(file);
    const inputPath = join(SRC, file);
    const { width: srcWidth } = await sharp(inputPath).metadata();

    for (const width of SIZES) {
      // Don't upscale - skip sizes larger than the source.
      if (srcWidth && width > srcWidth) continue;

      const pipeline = sharp(inputPath).resize(width, null, { withoutEnlargement: true });

      const variants = [
        { ext: 'avif', method: 'avif', opts: AVIF_OPTS },
        { ext: 'webp', method: 'webp', opts: WEBP_OPTS },
        { ext: 'jpg',  method: 'jpeg', opts: JPEG_OPTS },
      ];

      for (const v of variants) {
        const outPath = join(OUT, `${name}-${width}.${v.ext}`);
        await pipeline.clone()[v.method](v.opts).toFile(outPath);
        const size = (await stat(outPath)).size;
        totalBytes += size;
        written++;
        console.log(`  ${name}-${width}.${v.ext.padEnd(4)} ${(size / 1024).toFixed(1).padStart(7)} KB`);
      }
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(2);
  console.log(`\nWrote ${written} files (${(totalBytes / 1024).toFixed(1)} KB total) in ${elapsed}s.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
