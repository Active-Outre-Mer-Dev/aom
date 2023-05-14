import { Title, Card, Badge } from "ui";
import { Shuffle } from "lucide-react";
import { allQuizzes } from "@/questions";
import { TopicLink } from "./TopicLink";
import Link from "next/link";
import { buttonStyles } from "ui/src/button/styles";
import { Dropdown } from "./Dropdown";
import { DetailsModal } from "@/components/quiz/details-modals";

type Search = string | string[][] | Record<string, string> | URLSearchParams | undefined;

type PageProps = {
  searchParams: Search;
};

const topicLinks = [
  { label: "All topics", href: "/quiz" },
  { label: "History", href: "/quiz?topic=history" },
  { label: "Geography", href: "/quiz?topic=geography" },
  { label: "Economy", href: "/quiz?topic=economy" }
];

export default function Page({ searchParams }: PageProps) {
  const search = new URLSearchParams(searchParams);
  const topic = search.get("topic");
  const filteredQuizzes = topic ? allQuizzes.filter(({ type }) => type === topic) : allQuizzes;
  return (
    <>
      {/* <section className="container mx-auto mt-4">
        <header className="w-3/4 mx-auto mb-10">
          <Title order={1} className=" font-heading leading-tight">
            Some lessons before you get started
          </Title>
        </header>
        <div className="grid w-3/4 mx-auto mb-10 gap-4 text-2xl font-heading grid-cols-3">
          <div className="bg-error-600  space-y-4  p-4 rounded-md text-white">
            <p>SXM History</p>
            <Button variant={"neutral"}>Learn</Button>
          </div>
          <div className="bg-warn-600 text-white rounded-md p-4 space-y-4 ">
            <p>SXM Geo</p>
            <Button variant={"neutral"}>Learn</Button>
          </div>
          <div className="bg-primary-600 text-white rounded-md p-4 space-y-4 ">
            <p>SXM Econo</p>
            <Button variant={"neutral"}>Learn</Button>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap w-3/4 mx-auto text-xl text-white">
          <div className="basis-1/6 p-4 rounded-md bg-success-700 flex justify-center items-center aspect-square grow">
            {" "}
            Random lesson
          </div>
          <div className="basis-1/6 p-4 rounded-md bg-success-700 flex justify-center items-center aspect-square grow">
            {" "}
            Random lesson
          </div>
          <div className="basis-1/6 p-4 rounded-md bg-success-700 flex justify-center items-center aspect-square grow">
            {" "}
            Random lesson
          </div>
          <div className="basis-1/6 p-4 rounded-md bg-success-700 flex justify-center items-center aspect-square grow">
            {" "}
            Random lesson
          </div>
          <div className="basis-1/6 p-4 rounded-md bg-success-700 flex justify-center items-center aspect-square grow">
            {" "}
            Random lesson
          </div>
        </div>
      </section> */}
      <Title className="font-heading mb-4 text-center" order={1}>
        Quiz
      </Title>
      <section id="quiz-section" className="container flex gap-4  mx-auto pt-20 mb-20">
        <div className="grow">
          <div className="flex gap-4 justify-around mb-4 text-center items-center">
            {topicLinks.map(link => {
              const active = topic === link.label.toLowerCase() || (!topic && link.href === "/quiz");
              return <TopicLink {...link} key={`${link.href}`} active={active} />;
            })}
            <Link
              href={"/quiz/random"}
              className="basis-10 p-1 aspect-square bg-neutral-100 rounded-full flex justify-center items-center"
            >
              <Shuffle size={"90%"} />
            </Link>
          </div>
          <ul className="space-y-4">
            {filteredQuizzes.map(quiz => {
              return <QuizCard key={quiz.title} {...quiz} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

type PropTypes = typeof allQuizzes[0];

function QuizCard(props: PropTypes) {
  const color =
    props.type === "economy"
      ? "primary"
      : props.type === "geography"
      ? "secondary"
      : props.type === "history"
      ? "error"
      : "success";
  return (
    <li>
      <Card className="relative">
        <Dropdown />
        <div className="flex gap-2 items-center mb-2">
          <Title order={3} className="font-heading">
            {props.title}
          </Title>
          <Badge className="h-fit capitalize" color={color}>
            {props.type}
          </Badge>
        </div>
        <span className="text-sm text-neutral-500 inline-block mb-4">
          {props.questions.length} {props.questions.length > 1 ? "questions" : "question"} - Score:{" "}
          <span className="text-success-600   text-sm font-medium">100</span>
        </span>

        <p className="mb-4">Quick description about quiz.</p>
        <div className="flex gap-2">
          <Link className={buttonStyles({})} href={`/quiz/${props.title.toLowerCase().replaceAll(" ", "-")}`}>
            Take quiz
          </Link>
          <DetailsModal badgeColor={color} {...props} />
        </div>
      </Card>
    </li>
  );
}
