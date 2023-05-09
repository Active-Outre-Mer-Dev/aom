import type { Question } from "@/questions";
import { ScrollArea } from "./client";
import { useState } from "react";
import { Button } from "./client";

type PropTypes = {
  questions: Question[];
  choices: string[];
};

export function SummaryDetails({ choices, questions }: PropTypes) {
  return (
    <ScrollArea className="h-96 -mx-4 p-4">
      <p className="font-heading text-3xl mb-2">Details</p>
      <ul className="space-y-6">
        {questions.map((value, index) => {
          const choice = choices[index];
          return (
            <li key={value.question}>
              <p className="mb-4 text-lg font-medium">{value.question}</p>
              <Options answer={value.answer} choice={choice} options={value.options} />
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
}

type Props = {
  options: string[];
  answer: string;
  choice: string;
};

function Options({ answer, choice, options }: Props) {
  const [show, setShow] = useState(false);
  return (
    <ul className="space-y-2">
      {options.map(option => {
        return (
          <li
            key={option}
            className={`p-2 border rounded-md flex items-center justify-between ${
              (option === choice && choice === answer) || (option === answer && show)
                ? "bg-success-600 text-white"
                : option === choice && choice !== answer
                ? "bg-error-600 text-white"
                : "border-neutral-200"
            }`}
          >
            <span>{option}</span>{" "}
            {choice !== answer && option === choice && (
              <Button size={"small"} variant={"neutral"} onClick={() => setShow(true)}>
                Show answer
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
