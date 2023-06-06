import { Quiz } from "./quiz";
import { allQuizzes } from "@/quizzes";
import { RelatedQuizzes } from "./related-quizzes";
import { randomize } from "@/randomize-quiz";
import { ListQuiz } from "@/components/quiz/list-quiz";

export default function Page({ params }: { params: { slug: string } }) {
  const quizGame =
    params.slug === "random"
      ? allQuizzes.all[Math.floor(Math.random() * allQuizzes.all.length)]
      : allQuizzes.all.find(({ slug }) => slug === params.slug)!;
  return (
    <div style={{ minHeight: "calc(100vh - 64px - 80px)" }} className="flex gap-10 w-4/5 mx-auto mt-20 mb-36">
      <main className="basis-4/5">
        <h1 className="font-heading text-4xl font-medium mb-10">{quizGame.title}</h1>
        {quizGame.type === "question" ? (
          <Quiz title={quizGame.title} questions={randomize(quizGame.questions)} />
        ) : (
          <ListQuiz task={quizGame.task} options={quizGame.options} />
        )}
      </main>
      <aside className="grow h-64">
        <RelatedQuizzes key={quizGame.slug} slug={quizGame.slug} />
      </aside>
    </div>
  );
}
