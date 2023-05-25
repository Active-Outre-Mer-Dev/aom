type QuestionOptions = [string, string, string];
export type QuestionCategory = "history" | "geography" | "economy" | "general" | "environment";

export type Question = {
  question: string;
  answer: string;
  options: string[];
  category: QuestionCategory;
  description?: string;
};

export const questions: Question[] = [];

function createQuestion(
  category: QuestionCategory,
  question: string,
  answer: string,
  options: QuestionOptions,
  description = "No description available"
) {
  questions.push({
    category,
    answer,
    options,
    question,
    description
  });
}

function questionPartial(type: QuestionCategory) {
  return function (question: string, answer: string, options: QuestionOptions, description?: string) {
    return createQuestion(type, question, answer, options, description);
  };
}

const historyQ = questionPartial("history");
const economyQ = questionPartial("economy");
const geographyQ = questionPartial("geography");
const environmentQ = questionPartial("environment");

historyQ(
  "When was St Martin discovered?",
  "1493",
  ["1568", "1392", "1501"],
  `Christopher Columbus discovered and named Saint Martin on November 11, 1493 without ever 
    setting foot on the island`
);
historyQ("When is SXM Day?", "11 November", ["4 July", "14 July", "17 August"]);
historyQ(
  "When was the island divided into two parts?",
  "1648",
  ["1492", "1776", "1555"],
  `On March 23, 1648 the Dutch and French signed the Treaty of Concordia which led to the island being 
    split into two parts`
);
historyQ(
  "When was the national flag of SXM unveiled?",
  "1990",
  ["1996", "1987", "1965"],
  `The national flag of St Martin was unveiled on August 31, 1990 and represents both sides of the island 
    as one nation`
);

geographyQ("What is St Martin?", "Island", ["Continent", "City", "Country"]);
geographyQ("Where is Princess Juliana Airport located?", "Maho", ["Simpson Bay", "Cole Bay", "Grand-Case"]);
geographyQ("What is the capital of the French Side?", "Marigot", ["Grand-Case", "St James", "Sandy-Ground"]);
geographyQ("What is the capital of the Dutch Side", "Philipsburg", ["Simpson Bay", "St Peters", "Cole Bay"]);
geographyQ(
  "What is the highest hill in Saint Martin/Sint Maarten?",
  "Pic Paradis",
  ["Mont des Accords", "St Peters hill", "Morne Valois"],
  `Pic Paradis is 424m high`
);
geographyQ(
  "The national flag for Sxm is made up of what colors?",
  "Yellow, Red, Green, Blue",
  ["White, Red, Blue", "White, Red, Green", "Yellow, Blue, Red, Brown"],
  `Yellow represents the sun, Blue represents the sea, Red represents the blood of St Martiners, and Green
   represents the land of Saint Martin.`
);
geographyQ("How many ponds are there in Sxm?", "20", ["37", "19", "12"]);
geographyQ(
  "How many beaches are there in Sxm?",
  "37",
  ["47", "16", "23"],
  `There are 25 beaches on the French Side and 12 beaches on the Dutch Side`
);

economyQ("What is SXM's GDP", "900k USD", ["400k USD", "500k USD", "100k USD"]);

environmentQ(
  "What is the national tree of the island?",
  "Flamboyant Tree",
  ["Palm Tree", "Mango Tree", "Coconut Tree"],
  `The Flamboyant tree has a special significance since it's associated with the abolition of slavery in July 
  when the tree was in full bloom.`
);
environmentQ("What is Sxm's national animal?", "Brown Pelican", ["Ground Dove", "Hummingbird", "Blackbird"]);
