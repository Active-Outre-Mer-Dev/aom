import { Badge } from "ui";
import { allQuizzes } from "@/quizzes";
import { getCatColor } from "@/get-category-color";
import Link from "next/link";

type PropTypes = {
  slug: string;
};

export function RelatedQuizzes({ slug }: PropTypes) {
  const otherQuizzes = allQuizzes.all.filter(quiz => quiz.slug !== slug);
  return (
    <div>
      <p className="font-heading text-2xl mb-8 font-medium">Related Quizzes</p>
      <ul className="space-y-6">
        {otherQuizzes.map(props => {
          const { title, category } = props;
          return (
            <li className="group" key={props.slug}>
              <Link href={`/quiz/${props.slug}`}>
                <span className="block group-hover:text-primary-500 duration-200 ease-out text-lg font-medium">
                  {title}
                </span>
                <div className="flex gap-2 items-center">
                  {props.type === "question" && (
                    <>
                      <span className="text-neutral-700 text-sm">
                        {props.questions.length > 1 ? `${props.questions.length} questions` : `1 question`}
                      </span>{" "}
                    </>
                  )}
                  <Badge color={getCatColor(category)} className="capitalize">
                    {category}
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
