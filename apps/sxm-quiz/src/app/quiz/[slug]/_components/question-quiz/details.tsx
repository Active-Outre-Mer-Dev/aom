"use client";
import { ScrollArea, Button } from "@aom/ui";
import { useState } from "react";
import type { Question } from "@/questions";

type PropTypes = {
  questions: Question[];
  choices: string[];
};

export default function QuestionQuizDetails({ choices, questions }: PropTypes) {
  return (
    <div className="basis-3/5 grow relative">
      <ScrollArea
        style={{ height: window.screen.height - 64 - 80 - 80 || 300 }}
        className="h-96 -mr-4 pb-4 pr-4 grow"
      >
        <p className="font-heading text-2xl font-medium mb-4 ">Details</p>
        <ul className="space-y-6">
          {questions.map((value, index) => {
            const choice = choices[index];
            return (
              <li key={value.question}>
                <p className="mb-4 text-lg font-medium">{value.question}</p>
                <Options
                  description={value.description || ""}
                  answer={value.answer}
                  choice={choice}
                  options={value.options}
                />
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}

type Props = {
  options: string[];
  answer: string;
  choice: string;
  description: string;
};

function Options({ answer, choice, options, description }: Props) {
  const [show, setShow] = useState(false);
  return (
    <ul className="space-y-2">
      {options.map(option => {
        return (
          <li key={option}>
            <span
              className={`p-2 border rounded-md flex items-center justify-between ${
                (option === choice && choice === answer) || (option === answer && show)
                  ? "bg-success-600 text-white"
                  : option === choice && choice !== answer
                  ? "bg-error-600 text-white"
                  : "border-neutral-200"
              }`}
            >
              {option}{" "}
              {choice !== answer && option === choice && (
                <Button
                  size={"sm"}
                  variant={"neutral"}
                  className="text-neutral-800"
                  onClick={() => setShow(true)}
                >
                  Show answer
                </Button>
              )}
            </span>{" "}
            {show && option === answer && <span className="mt-2 text-sm">{description}</span>}
          </li>
        );
      })}
    </ul>
  );
}
