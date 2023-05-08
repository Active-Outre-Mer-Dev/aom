import { questions } from "@/questions";
import { Quiz } from "./quiz";

function randomize(arr: string[]) {
  const newArr: string[] = [];
  const original = arr.slice();
  for (const _ of arr) {
    const random = Math.floor(Math.random() * original.length);
    const [el] = original.splice(random, 1);
    newArr.push(el);
  }
  return newArr;
}

export default function Page() {
  const newQuestions = questions.map(question => {
    return {
      ...question,
      options: randomize([...question.options, question.answer])
    };
  });
  return (
    <>
      <Quiz questions={newQuestions} />
    </>
  );
}
