import { getAllMetadata } from "@/lib/get-content";
import { Search } from "./Search";
import { allQuizzes } from "@/quizzes";

export type Articles = ReturnType<typeof getAllMetadata>;

export function SearchWrapper() {
  const articles = getAllMetadata();
  const listQuizzes = allQuizzes.list;
  const questionQuizzes = allQuizzes.question;
  return <Search articles={articles} quizzes={{ listQuizzes, questionQuizzes }} />;
}
