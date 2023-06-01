import { Search } from "./Search";
import { allQuizzes } from "@/quizzes";

export function SearchWrapper() {
  const listQuizzes = allQuizzes.list;
  const questionQuizzes = allQuizzes.question;
  return <Search quizzes={{ listQuizzes, questionQuizzes }} />;
}
