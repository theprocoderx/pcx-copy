#!/usr/bin/env node

import { copyFile } from '../src/copyFile.js';

const [, , source, destination] = process.argv;

if (!source || !destination) {
  console.error(
    'Usage: pcx-copy <source-file> <destination-file>'
  );
  process.exit(1);
}

await copyFile(source, destination);