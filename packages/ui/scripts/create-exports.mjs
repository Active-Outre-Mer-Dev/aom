import fs from "fs/promises";
import path from "path";
import { createWriteStream } from "fs";

const clientDir = path.join(process.cwd(), "packages", "ui", "client");
const dirs = await fs.readdir(clientDir);

const stream = createWriteStream(path.join(clientDir, "index.ts"));

dirs.filter((dir) => !dir.endsWith(".ts")).forEach((dir) => stream.write(`export * from "./${dir}"\n`));
stream.end();
