"use client";
import type { Question } from "@/questions";
import { useReducer } from "react";
import { Button } from "./client";
import { initialState, reducer } from "./reducer";
import { usePathname } from "next/navigation";

type PropTypes = {
  questions: Question[];
  action: (path: string) => Promise<void>;
};

export function Quiz(props: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const path = usePathname();
  const question = props.questions[state.current];

  const complete = state.current === props.questions.length;
  const options = !complete ? question.options : [];

  const score = complete ? (state.points / props.questions.length) * 100 : 0;
  return (
    <div className="w-2/4 mx-auto p-4 overflow-hidden rounded-md mt-20 ring-black/5 shadow-md ring ">
      <div className="flex justify-between items-center bg-success-700 text-white border-b border-neutral-100 -mx-4 -mt-4 p-2">
        <p className="font-heading text-2xl">General</p>
        <p className="text-lg font-medium">
          {!complete ? `${state.current + 1} of ${props.questions.length}` : "Complete"}
        </p>
        <div className="">
          <p>Highest streak: {state.highStreak}</p>
          <p>Current streak: {state.streak}</p>
        </div>
      </div>
      {!complete ? (
        <>
          <p className="font-heading font-medium text-4xl text-center mt-4 mb-6">{question.question}</p>
          <div className="grid grid-cols-2 w-4/5 mx-auto gap-4">
            {options.map(option => {
              return (
                <Button
                  onClick={() =>
                    dispatch({ type: "next", value: { answer: question.answer, choice: option } })
                  }
                  key={option}
                  variant={"neutral"}
                >
                  {option}
                </Button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <p className="text-center mt-10 font-medium text-2xl">You completed the quiz!!</p>
          <p className="text-center mb-10 text-lg">
            You got{" "}
            <span
              className={score > 85 ? "text-success-600" : score > 50 ? "text-warn-600" : "text-error-600"}
            >
              {state.points}/{props.questions.length}
            </span>{" "}
            questions correct!
          </p>
          <Button
            className="mx-auto block"
            onClick={async () => {
              await props.action(path);
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </Button>
        </>
      )}
    </div>
  );
}
