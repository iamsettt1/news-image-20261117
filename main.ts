// news-image-20261117 — entrypoint (Node 22, standard library only).
// The entry image is the entry.png beside this file; the program copies it
// to $MAKEFUN_OUTPUT_DIR (or /output) as entry.png, byte for byte, so the
// judge sees exactly the bytes of the front page this repository holds.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = fileURLToPath(new URL('./entry.png', import.meta.url));

// The grader's /output exists, but creating the directory makes the
// program work the same way when run locally with a fresh out directory.
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
