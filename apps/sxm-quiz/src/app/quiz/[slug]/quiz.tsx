"use client";
import type { Question } from "@/questions";
import { useReducer, useState, useRef } from "react";
import { Button } from "./client";
import { initialState, reducer } from "./reducer";
import { Summary } from "./Summary";
import { SummaryDetails } from "./Details";

type PropTypes = {
  questions: Question[];
  title: string;
};

function useTimer() {
  const [time, setTime] = useState(0);
  const id = useRef<NodeJS.Timer>();

  const clear = () => {
    clearInterval(id.current);
  };
  const start = () => {
    id.current = setInterval(() => setTime(prev => prev + 1), 1 * 1000);
  };
  const reset = () => {
    setTime(0);
    clear();
  };

  return [time, { clear, start, reset }] as const;
}

export function Quiz(props: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [time, timer] = useTimer();

  const question = props.questions[state.current];

  const complete = state.current === props.questions.length;
  const options = !complete ? question.options : [];

  const score = complete ? (state.points / props.questions.length) * 100 : 0;

  const onReset = async () => {
    dispatch({ type: "reset" });
    timer.reset();
  };

  return (
    <>
      {complete ? (
        <Summary
          highestStreak={state.highStreak}
          points={`${state.points}/${props.questions.length}`}
          score={Math.round(score)}
          reset={onReset}
          duration={time}
        >
          <SummaryDetails choices={state.choices} questions={props.questions} />
        </Summary>
      ) : (
        <div className="w-2/4 mx-auto p-4 overflow-hidden rounded-md mt-20 ring-black/5 shadow-md ring ">
          <div className="flex justify-between items-center bg-success-700 text-white border-b border-neutral-100 -mx-4 -mt-4 p-2">
            <p className="font-heading text-2xl">{props.title}</p>
            <p className="text-lg font-medium">
              {!complete ? `${state.current + 1} of ${props.questions.length}` : "Complete"}
            </p>
            <div className="">
              <p>Highest streak: {state.highStreak}</p>
              <p>Current streak: {state.streak}</p>
            </div>
          </div>

          <p className="font-heading font-medium text-4xl text-center mt-4 mb-6">{question.question}</p>
          <div className="grid grid-cols-2 w-4/5 mx-auto gap-4">
            {options.map((option, index) => {
              return (
                <Button
                  onClick={() => {
                    dispatch({ type: "next", value: { answer: question.answer, choice: option } });
                    if (state.current === 0) timer.start();
                    if (state.current === props.questions.length - 1) timer.clear();
                  }}
                  key={option}
                  variant={"neutral"}
                >
                  {option}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
