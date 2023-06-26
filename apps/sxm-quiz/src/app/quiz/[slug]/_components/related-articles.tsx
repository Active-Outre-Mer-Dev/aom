"use client";
import { Badge } from "@aom/ui";
import { getCatColor } from "@/get-category-color";
import Link from "next/link";
import { useQuiz } from "./container/container.context";

export function RelatedArticles() {
  const { relatedArticles } = useQuiz();
  return (
    <div>
      <p className="mb-6 text-neutral-600 font-medium">Related Articles</p>
      <ul className="space-y-4">
        {relatedArticles.map(article => {
          const { title, category, slug } = article;
          return (
            <li className="group" key={article.slug}>
              <Link className="flex justify-between item-center" href={`/learn/${category}/${slug}`}>
                <span className="block group-hover:text-primary-500 duration-200 ease-out font-medium">
                  {title}
                </span>
                <Badge color={getCatColor(category)} className="capitalize">
                  {category}
                </Badge>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
