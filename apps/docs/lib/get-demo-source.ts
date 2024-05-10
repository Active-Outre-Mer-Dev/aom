import path from "path";
import fs from "fs/promises";

export async function getDemoSource(filePath: string) {
  const source = await fs.readFile(path.join(process.cwd(), filePath), "utf-8");
  return source;
}
