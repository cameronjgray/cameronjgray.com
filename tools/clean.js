/**
 * Remove generated images from public/img/.
 *
 * Only deletes the top-level `*.webp` files this build produces.
 * Hand-placed assets (public/img/icons/, public/img/tech/) are left alone.
 *
 * Use before a fresh build:  npm run clean
 */

import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG = join(__dirname, '..', 'public', 'img');

let removed = 0;
for (const entry of await readdir(IMG, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith('.webp')) {
    await rm(join(IMG, entry.name));
    removed++;
  }
}
console.log(`Removed ${removed} generated image(s).`);
