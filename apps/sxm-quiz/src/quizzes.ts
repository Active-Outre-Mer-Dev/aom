import { randomize } from "./randomize-quiz";
import { createSlug } from "./create-slug";
import lists from "./data-lists.json";
import { Question, QuestionCategory, questions } from "./questions";

type Quiz = {
  category: QuestionCategory;
  title: string;
  slug: string;
  description: string;
};

export type ListQuiz = { type: "list"; options: string[]; task: string } & Quiz;
export type QuestionQuiz = { type: "question"; questions: Question[] } & Quiz;

function createQuestionQuiz(category: QuestionCategory, title: string, description: string): QuestionQuiz {
  const q = category === "general" ? questions : questions.filter(question => question.category === category);
  return {
    type: "question",
    category,
    title,
    description,
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
  description: string,
  options: string[]
): ListQuiz {
  return {
    type: "list",
    title,
    category,
    task,
    options,
    description,
    slug: createSlug(title)
  };
}

function questionQuizPartial(category: QuestionCategory) {
  return function (title: string, description: string) {
    return createQuestionQuiz(category, title, description);
  };
}

function listQuizPartial(category: QuestionCategory) {
  return function (title: string, task: string, description: string, options: string[]) {
    return createListQuiz(category, title, task, description, options);
  };
}

const historyQuiz = questionQuizPartial("history");
const geoQuiz = questionQuizPartial("geography");
const ecoQuiz = questionQuizPartial("economy");
const envQuiz = questionQuizPartial("environment");

const sxmHistory = historyQuiz(
  "SXM History Intro",
  `Embark on a quiz journey through history in Saint Martin! 
Dive into its captivating details, uncover hidden insights, and deepen your understanding of this 
fascinating subject.`
);
const sxmGeo = geoQuiz(
  "SXM Geography Intro",
  `Embark on a quiz journey through geography in Saint Martin! 
Dive into its captivating details, uncover hidden insights, and deepen your understanding of this 
fascinating subject.`
);
const sxmEco = ecoQuiz(
  "SXM Economy Intro",
  `Embark on a quiz journey through economics in Saint Martin! 
Dive into its captivating details, uncover hidden insights, and deepen your understanding of this 
fascinating subject.`
);
const sxmEnv = envQuiz(
  "SXM Environment Intro",
  `Explore the environmental treasures of Saint Martin with our captivating quiz! Delve into its ecosystems,
   biodiversity, and sustainability, and deepen your connection to the island's remarkable natural environment.`
);
const sxmGeneral = createQuestionQuiz(
  "general",
  "General",
  `Explore diverse topics and broaden your knowledge
 of Saint Martin in an interactive and enjoyable experience.`
);

const allBeaches = listQuizPartial("geography")(
  "All SXM Beaches",
  "Name as many beaches as you can",
  `Get ready for the ultimate beach challenge! Test your knowledge of Saint Martin's coastline by 
  listing every captivating beach in this exciting quiz.`,
  lists.beaches
);

const allQuestionQuizzes = [sxmGeneral, sxmHistory, sxmEco, sxmGeo, sxmEnv];
const allListQuizzes = [allBeaches];

export const allQuizzes = {
  list: allListQuizzes,
  question: allQuestionQuizzes,
  all: [...allListQuizzes, ...allQuestionQuizzes]
};
