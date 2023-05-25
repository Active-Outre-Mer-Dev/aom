"use client";
import type { Question } from "@/questions";
import { useReducer, useState, useRef } from "react";
import { Button, Progress } from "ui";
import { initialState, reducer } from "./reducer";
import { Summary } from "./Summary";

type PropTypes = {
  questions: Question[];
  title: string;
};

function useTimer() {
  const [time, setTime] = useState(0);
  const id = useRef<NodeJS.Timer>();

  const stop = () => {
    clearInterval(id.current);
  };
  const start = () => {
    id.current = setInterval(() => setTime(prev => prev + 1), 1 * 1000);
  };
  const reset = () => {
    setTime(0);
    stop();
  };

  return [time, { stop, start, reset }] as const;
}

export function Quiz(props: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [time, timer] = useTimer();

  const question = props.questions[state.current];

  const complete = state.current === props.questions.length;
  const options = !complete ? question.options : [];
  const progress = (state.current / props.questions.length) * 100;
  const score = complete ? Math.round((state.points / props.questions.length) * 100) : 0;

  const onReset = async () => {
    dispatch({ type: "reset" });
    timer.reset();
  };

  const onChoose = (choice: string) => {
    if (state.current === 0) timer.start();
    dispatch({ type: "next", value: { answer: question.answer, choice } });
    if (state.current === props.questions.length - 1) timer.stop();
  };

  const result = {
    highestStreak: state.highStreak,
    points: `${state.points}/${props.questions.length}`,
    score,
    reset: onReset,
    duration: time
  };

  const details = {
    choices: state.choices,
    questions: props.questions
  };

  return (
    <>
      {complete ? (
        <Summary resultProps={result} detailsProps={details} />
      ) : (
        <>
          <div className=" flex justify-between items-end border-b border-neutral-200 pb-2 mb-5">
            <Progress aria-label="Quiz progression" size={"sm"} className="w-1/4" value={progress} />
            <span className="font-medium">
              Streak: <span className="font-heading">{state.streak}</span>
            </span>
          </div>
          <div className="">
            <p className="mb-6 text-center text-3xl font-medium font-heading ">{question.question}</p>
            <div className="flex gap-4 flex-wrap">
              {options.map(option => {
                return <Option key={option} option={option} onChoose={onChoose} />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

type OptionProps = { onChoose: (choice: string) => void; option: string };

function Option({ option, onChoose }: OptionProps) {
  const onClick = () => onChoose(option);
  return (
    <Button variant={"neutral"} onClick={onClick} className="grow basis-1/3">
      {option}
    </Button>
  );
}
