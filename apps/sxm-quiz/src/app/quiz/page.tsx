import { Title, Card, Badge } from "@aom/ui";
import { allQuizzes } from "@/quizzes";
import Link from "next/link";
import { buttonStyles } from "@aom/ui/src/button/styles";
import { DetailsWrapper } from "@/components/quiz/details-modals";
import { Filters } from "./quiz-filters";

export const dynamic = "force-dynamic";

type Search = string | string[][] | Record<string, string> | URLSearchParams | undefined;

type PageProps = {
  searchParams: Search;
};

export default function Page({ searchParams }: PageProps) {
  const search = new URLSearchParams(searchParams);
  const topic = search.get("topic");
  const filteredQuizzes = topic
    ? allQuizzes.all.filter(({ category }) => category === topic)
    : allQuizzes.all;
  return (
    <>
      <section id="quiz-section" className="w-11/12 lg:container   mx-auto mt-16 lg:mt-20 mb-20">
        <Title order={1} className="capitalize mb-10 text-4xl lg:text-5xl font-heading font-medium">
          {topic ? topic : "all"} Quizzes
        </Title>
        <Filters search={topic || undefined} />
        <div className="grid gap-4 lg:grid-cols-3">
          {filteredQuizzes.map((quiz, key) => {
            // const randomScore = key === 0 ? undefined : Math.floor(Math.random() * 100);
            return <QuizCard {...quiz} key={key} />;
          })}
        </div>
      </section>
    </>
  );
}

type PropTypes = typeof allQuizzes.all[0] & { score?: number };

function QuizCard(props: PropTypes) {
  const color =
    props.category === "economy"
      ? "primary"
      : props.category === "geography"
      ? "secondary"
      : props.category === "history"
      ? "error"
      : props.category === "environment"
      ? "success"
      : "tertiary";

  const scoreColor = props.score
    ? props?.score > 85
      ? "text-success-600 bg-success-200/30"
      : props?.score > 50
      ? "text-warn-600 bg-warn-200/30"
      : "text-error-600 bg-error-200/30"
    : "bg-neutral-200/30";
  const isQuestionBased = props.type === "question";
  return (
    <>
      <Card className="relative flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <Title order={2} className="font-heading font-medium text-2xl">
              {props.title}
            </Title>
            <div
              className={`font-heading font-medium text-lg rounded-full
           flex items-center justify-center h-10 w-10 ${scoreColor}`}
            >
              {props.score ? props.score : <span className="h-[1px] w-1/4 bg-neutral-600"></span>}
            </div>
          </div>
        </div>

        <p className="mb-4">{props.description}</p>
        <div className="">
          <span className="text-sm text-gray-600 block mb-4 ">
            {isQuestionBased ? (
              <>
                {props.questions.length} {props.questions.length > 1 ? "questions" : "question"} -{" "}
              </>
            ) : (
              <>{props.options.length} options - </>
            )}
            <Badge color={color}>{props.category}</Badge>
          </span>
          <div className="flex gap-2">
            <Link
              className={buttonStyles({ size: "sm" })}
              href={`/quiz/${props.title.toLowerCase().replaceAll(" ", "-")}`}
            >
              Take quiz
            </Link>
            <DetailsWrapper badgeColor={color} {...props} />
          </div>
        </div>
      </Card>
    </>
  );
}
