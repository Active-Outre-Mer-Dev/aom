export type QuestionType = "history" | "geography" | "economy" | "general";
type ColorTypes = "secondary" | "primary" | "error" | "success";
export type Question = {
  question: string;
  answer: string;
  options: string[];
  type: QuestionType;
};

export function getCatColor(type: QuestionType): ColorTypes {
  switch (type) {
    case "economy": {
      return "primary";
    }

    case "general": {
      return "success";
    }
    case "geography": {
      return "secondary";
    }
    case "history": {
      return "error";
    }
    default:
      return "success";
  }
}

export const questions: Question[] = [
  {
    answer: "Island",
    question: "What is St Martin?",
    options: ["Continent", "City", "Country"],
    type: "geography"
  },
  {
    answer: "1493",
    question: "When was St Martin discovered?",
    options: ["1568", "1392", "1501"],
    type: "history"
  },
  {
    answer: "900k USD",
    question: "What is SXM's GDP",
    options: ["400k USD", "500k USD", "100k USD"],
    type: "economy"
  },
  {
    answer: "Maho",
    options: ["Simpson Bay", "Marigot", "Grand-Case"],
    question: "Where is Princess Juliana Airport located?",
    type: "geography"
  },
  {
    answer: "11 November",
    options: ["4 July", "14 July", "17 August"],
    question: "When is SXM Day?",
    type: "history"
  },
  {
    answer: "1648",
    options: ["1492", "1776", "1555"],
    question: "When was the island divided into two parts?",
    type: "history"
  },
  {
    answer: "Marigot",
    options: ["Grand-Case", "St James", "Sandy-Ground"],
    question: "What is the capital of the French Side",
    type: "geography"
  },
  {
    answer: "Philipsburg",
    options: ["Simpson Bay", "St Peters", "Cole Bay"],
    question: "What is the capital of the Dutch Side",
    type: "geography"
  },
  {
    answer: "Pic Paradis",
    options: ["Mont des Accords", "St Peters hill", "Morne Valois"],
    question: "What is the highest hill in Saint Martin/Sint Maarten?",
    type: "geography"
  },
  {
    answer: "1990",
    question: "When was the national flag of SXM unveiled?",
    type: "history",
    options: ["1996", "1987", "1965"]
  },
  {
    answer: "Yellow, Red, Green, Blue",
    options: ["White, Red, Blue", "White, Red, Green", "Yellow, Blue, Red, Brown"],
    question: "The national flag for Sxm is made up of what colors?",
    type: "geography"
  },
  {
    answer: "37",
    question: "How many beaches are there in Sxm?",
    type: "geography",
    options: ["47", "16", "23"]
  },
  {
    answer: "Brown Pelican",
    options: ["Ground Dove", "Hummingbird", "Blackbird"],
    question: "What is Sxm's national animal?",
    type: "general"
  },
  {
    answer: "20",
    options: ["37", "19", "12"],
    question: "How many ponds are there in Sxm?",
    type: "geography"
  }
];

class Quiz {
  public slug: string;
  constructor(public title: string, public type: QuestionType, public questions: Question[]) {
    this.title = title;
    this.type = type;
    this.questions = questions;
    this.slug = title.toLowerCase().trim().replaceAll(" ", "-");
  }
}

const sxmHistory = new Quiz(
  "SXM History intro",
  "history",
  questions.filter(({ type }) => type === "history")
);
const sxmGeo = new Quiz(
  "SXM Geography Intro",
  "geography",
  questions.filter(({ type }) => type === "geography")
);
const sxmEco = new Quiz(
  "SXM Economy Intro",
  "economy",
  questions.filter(({ type }) => type === "economy")
);
const sxmGeneral = new Quiz("General", "general", questions);

export const allQuizzes = [sxmGeneral, sxmHistory, sxmEco, sxmGeo];
