import { Quiz } from "./quiz";
import { allQuizzes } from "@/questions";
import { RelatedQuizzes } from "./Related";
import { randomize } from "@/randomize-quiz";

export default function Page({ params }: { params: { slug: string } }) {
  const quizQuestions =
    params.slug === "random"
      ? allQuizzes[Math.floor(Math.random() * allQuizzes.length)]
      : allQuizzes.find(({ slug }) => slug === params.slug)!;
  const newQuestions = randomize(quizQuestions.questions);
  return (
    <div className="flex gap-10 w-4/5 mx-auto mt-20 mb-36">
      <main className="basis-4/5">
        <h1 className="font-heading text-4xl font-medium mb-10">{quizQuestions.title}</h1>
        <Quiz title={quizQuestions.title} questions={newQuestions} />
      </main>
      <aside className="grow h-64">
        <RelatedQuizzes key={quizQuestions.slug} slug={quizQuestions.slug} />
      </aside>
    </div>
  );
}
