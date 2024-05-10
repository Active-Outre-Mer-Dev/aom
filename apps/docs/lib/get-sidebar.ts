import fs from "fs/promises";
import path from "path";

export async function getLinks() {
  const files = (await fs.readdir(path.join(process.cwd(), "/content/components"))).filter((file) =>
    file.includes(".mdx")
  );
  return files.map((file) => {
    return {
      label: file.replace(".mdx", "").replaceAll("-", " "),
      href: file.replace(".mdx", "")
    };
  });
}
