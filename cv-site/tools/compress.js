/**
 * Pre-compress static assets with brotli and gzip.
 *
 * static-web-server is configured with `compression-static = true`,
 * which means it will serve `foo.html.br` or `foo.html.gz` directly
 * if they exist - no runtime CPU cost.
 *
 * Compresses HTML, CSS, JS and SVG. Skips images (already compressed).
 *
 * Run after any change to text assets:  npm run compress
 */

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, parse, relative } from 'node:path';
import { brotliCompress, gzip, constants } from 'node:zlib';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const brotli = promisify(brotliCompress);
const gz = promisify(gzip);

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.svg', '.json', '.txt', '.xml']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

async function main() {
  const start = Date.now();
  let count = 0;
  let originalBytes = 0;
  let brBytes = 0;
  let gzBytes = 0;

  for await (const path of walk(PUBLIC)) {
    const { ext } = parse(path);
    if (!COMPRESSIBLE.has(ext.toLowerCase())) continue;
    if (path.endsWith('.br') || path.endsWith('.gz')) continue;

    const data = await readFile(path);
    originalBytes += data.length;

    const [brData, gzData] = await Promise.all([
      brotli(data, {
        params: {
          [constants.BROTLI_PARAM_QUALITY]: 11,
          [constants.BROTLI_PARAM_SIZE_HINT]: data.length,
        },
      }),
      gz(data, { level: 9 }),
    ]);

    await Promise.all([
      writeFile(`${path}.br`, brData),
      writeFile(`${path}.gz`, gzData),
    ]);

    brBytes += brData.length;
    gzBytes += gzData.length;
    count++;

    const rel = relative(PUBLIC, path);
    console.log(
      `  ${rel.padEnd(40)} ` +
      `${(data.length / 1024).toFixed(1).padStart(6)} KB ` +
      `→ br ${(brData.length / 1024).toFixed(1).padStart(5)} KB ` +
      `/ gz ${(gzData.length / 1024).toFixed(1).padStart(5)} KB`
    );
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(2);
  if (count === 0) {
    console.log('Nothing to compress.');
    return;
  }
  console.log(
    `\nCompressed ${count} file(s) in ${elapsed}s.\n` +
    `Original: ${(originalBytes / 1024).toFixed(1)} KB | ` +
    `Brotli: ${(brBytes / 1024).toFixed(1)} KB | ` +
    `Gzip: ${(gzBytes / 1024).toFixed(1)} KB`
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
