import fs from "fs";
import path from "path";
import html from "remark-html";
import matter from "gray-matter";
import { remark } from "remark";
import format from "date-fns/fp/format";
import { headingTree } from "./get-headings";

type ArticleData = {
  type: string;
  slug: string;
  title: string;
  author: string;
  intro: string;
  creationDate: string;
};

const contentFolder = path.join(process.cwd(), "src", "content");

function getCreationDate(file: string) {
  const stat = fs.statSync(path.join(contentFolder, file));
  return format("PP")(stat.birthtime);
}

function getMetadata(fileData: string, file: string) {
  const { content, data } = matter(fileData);
  data.slug = file.replace(".md", "");
  data.creationDate = getCreationDate(file);
  return { metadata: data as ArticleData, content };
}

export type Heading = {
  value: string;
  data: { hProperties: { id: string } };
};

export async function generateContent(slug: string) {
  const file = `${slug}.md`;
  const fileData = fs.readFileSync(path.join(contentFolder, file), "utf-8");
  const data = getMetadata(fileData, file);
  const contentHTML = await remark().use(html).use(headingTree).process(data.content);
  return {
    content: contentHTML.toString(),
    metadata: data.metadata,
    headings: contentHTML.data.headings as Heading[]
  };
}
