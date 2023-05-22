import { Badge } from "ui";
import { allQuizzes, getCatColor } from "@/questions";
import Link from "next/link";

type PropTypes = {
  slug: string;
};

export function RelatedQuizzes({ slug }: PropTypes) {
  const otherQuizzes = allQuizzes.filter(quiz => quiz.slug !== slug);
  return (
    <div>
      <p className="font-heading text-2xl mb-8 font-medium">Related Quizzes</p>
      <ul className="space-y-6">
        {otherQuizzes.map(({ title, type, questions, slug }) => {
          return (
            <li className="group" key={slug}>
              <Link href={`/quiz/${slug}`}>
                <span className="block group-hover:text-primary-500 duration-200 ease-out text-lg font-medium">
                  {title}
                </span>
                <div className="flex gap-2 items-center">
                  <span className="text-neutral-700 text-sm">
                    {questions.length > 1 ? `${questions.length} questions` : `1 question`}
                  </span>{" "}
                  -{" "}
                  <Badge color={getCatColor(type)} className="capitalize">
                    {type}
                  </Badge>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
