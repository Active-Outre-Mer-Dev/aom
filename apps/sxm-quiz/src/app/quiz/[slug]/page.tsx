import { Quiz } from "./quiz";
import { allQuizzes } from "@/questions";

function randomize<T>(arr: T[]) {
  const newArr: T[] = [];
  const original = arr.slice();
  for (const _ of arr) {
    const random = Math.floor(Math.random() * original.length);
    const [el] = original.splice(random, 1);
    newArr.push(el);
  }
  return newArr;
}

export default function Page({ params }: { params: { slug: string } }) {
  const quizQuestions =
    params.slug === "random"
      ? allQuizzes[Math.floor(Math.random() * allQuizzes.length)]
      : allQuizzes.find(({ slug }) => slug === params.slug)!;
  const newQuestions = randomize(quizQuestions.questions).map(question => {
    return {
      ...question,
      options: randomize([...question.options, question.answer])
    };
  });
  return (
    <>
      <Quiz title={quizQuestions.title} questions={newQuestions} />
    </>
  );
}
