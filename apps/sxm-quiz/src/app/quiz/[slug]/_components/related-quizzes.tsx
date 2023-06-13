"use client";
import { Badge } from "@aom/ui";
import { allQuizzes } from "@/quizzes";
import { getCatColor } from "@/get-category-color";
import Link from "next/link";
import { useParams } from "next/navigation";

type Params = {
  slug: string;
};

export function RelatedQuizzes() {
  const { slug } = useParams() as Params;
  const otherQuizzes = allQuizzes.all.filter(quiz => quiz.slug !== slug).slice(0, 3);
  return (
    <div>
      <p className="mb-6 text-neutral-600 font-medium">Related Quizzes</p>
      <ul className="space-y-4">
        {otherQuizzes.map(props => {
          const { title, category } = props;
          return (
            <li className="group" key={props.slug}>
              <Link className="flex justify-between item-center" href={`/quiz/${props.slug}`}>
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
