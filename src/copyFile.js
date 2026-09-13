import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function copyFile(source, destination) {
  try {
    const sourcePath = resolve(source);
    const destinationPath = resolve(destination);

    const content = await readFile(sourcePath);

    await writeFile(destinationPath, content);

    console.log(
      `Successfully copied "${source}" to "${destination}"`
    );
  } catch (error) {
    console.error(`Failed to copy file: ${error.message}`);
    process.exit(1);
  }
}