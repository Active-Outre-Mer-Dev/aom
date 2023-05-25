import { randomize } from "./randomize-quiz";
import { createSlug } from "./create-slug";
import lists from "./data-lists.json";
import { Question, QuestionCategory, questions } from "./questions";

type Quiz = {
  category: QuestionCategory;
  title: string;
  slug: string;
};

export type ListQuiz = { type: "list"; options: string[]; task: string } & Quiz;
export type QuestionQuiz = { type: "question"; questions: Question[] } & Quiz;

function createQuestionQuiz(category: QuestionCategory, title: string): QuestionQuiz {
  const q = category === "general" ? questions : questions.filter(question => question.category === category);
  return {
    type: "question",
    category,
    title,
    slug: createSlug(title),
    questions: q.map(question => {
      return {
        ...question,
        options: randomize([...question.options, question.answer])
      };
    })
  };
}

function createListQuiz(
  category: QuestionCategory,
  title: string,
  task: string,
  options: string[]
): ListQuiz {
  return {
    type: "list",
    title,
    category,
    task,
    options,
    slug: createSlug(title)
  };
}

function questionQuizPartial(category: QuestionCategory) {
  return function (title: string) {
    return createQuestionQuiz(category, title);
  };
}

function listQuizPartial(category: QuestionCategory) {
  return function (title: string, task: string, options: string[]) {
    return createListQuiz(category, title, task, options);
  };
}

const historyQuiz = questionQuizPartial("history");
const geoQuiz = questionQuizPartial("geography");
const ecoQuiz = questionQuizPartial("economy");
const envQuiz = questionQuizPartial("environment");

const sxmHistory = historyQuiz("SXM History Intro");
const sxmGeo = geoQuiz("SXM Geography Intro");
const sxmEco = ecoQuiz("SXM Economy Intro");
const sxmEnv = envQuiz("SXM Environment Intro");
const sxmGeneral = createQuestionQuiz("general", "General");

const allBeaches = listQuizPartial("geography")(
  "All SXM Beaches",
  "Name every beach on Saint Martin",
  lists.beaches
);

const allQuestionQuizzes = [sxmGeneral, sxmHistory, sxmEco, sxmGeo, sxmEnv];
const allListQuizzes = [allBeaches];

export const allQuizzes = {
  list: allListQuizzes,
  question: allQuestionQuizzes,
  all: [...allListQuizzes, ...allQuestionQuizzes]
};
