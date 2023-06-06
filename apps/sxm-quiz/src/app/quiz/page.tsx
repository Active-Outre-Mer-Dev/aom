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
      <section className="bg-gradient-to-r from-primary-500 to-primary-200 h-96 text-white relative flex items-center justify-center">
        <Title className="font-heading mb-4 text-center text-white" order={1}>
          Explore all of our quizzes
        </Title>
        <div className="custom-shape-divider-bottom-1684197028">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section id="quiz-section" className="container   mx-auto pt-20 mb-20">
        <Filters search={topic || undefined} />
        <div className="grid gap-4 grid-cols-3">
          {filteredQuizzes.map((quiz, key) => {
            const randomScore = key === 0 ? undefined : Math.floor(Math.random() * 100);
            return <QuizCard {...quiz} score={randomScore} key={key} />;
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
      <Card className="relative" style={{ backgroundColor: "white" }}>
        <div className="flex justify-between items-center mb-2">
          <Title order={3} className="font-heading">
            {props.title}
          </Title>
          <div
            className={`font-heading font-medium text-lg rounded-full
           flex items-center justify-center h-10 w-10 ${scoreColor}`}
          >
            {props.score ? props.score : <span className="h-[1px] w-1/4 bg-neutral-600"></span>}
          </div>
        </div>

        <p className="mb-4">
          Eiusmod proident exercitation enim dolor cupidatat sint fugiat excepteur eiusmod occaecat
          reprehenderit.
        </p>
        <span className="text-sm text-neutral-500 inline-block mb-4">
          {isQuestionBased && (
            <>
              {props.questions.length} {props.questions.length > 1 ? "questions" : "question"} -{" "}
            </>
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
      </Card>
    </>
  );
}
