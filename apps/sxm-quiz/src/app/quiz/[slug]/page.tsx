import { allQuizzes } from "@/quizzes";
import { randomize } from "@/randomize-quiz";
import { Container } from "./_components/container";
import { Suspense, lazy } from "react";

const Quiz = lazy(() => import("./_components/question-quiz"));
const ListQuiz = lazy(() => import("./_components/list-quiz"));

const desc = `Occaecat dolor ex deserunt eu. Esse incididunt commodo qui voluptate dolore Lorem enim elit 
ullamco nostrud veniam sit deserunt.`;

export default function Page({ params }: { params: { slug: string } }) {
  const quizGame =
    params.slug === "random"
      ? allQuizzes.all[Math.floor(Math.random() * allQuizzes.all.length)]
      : allQuizzes.all.find(({ slug }) => slug === params.slug)!;
  const questions = quizGame.type === "question" ? randomize(quizGame.questions) : [];
  return (
    <main style={{ minHeight: "calc(100vh - 64px - 80px)" }} className="flex gap-5 w-4/5 mx-auto mt-5 mb-36">
      <Container
        category={quizGame.category}
        questionCount={quizGame.type === "question" ? questions.length : quizGame.options.length}
        description={desc}
        title={quizGame.title}
        type={quizGame.type}
      >
        <Suspense fallback={<p>Loading quiz...</p>}>
          {quizGame.type === "list" && <ListQuiz options={quizGame.options} task={quizGame.task} />}
          {quizGame.type === "question" && <Quiz questions={questions} />}
        </Suspense>
      </Container>
    </main>
  );
}
