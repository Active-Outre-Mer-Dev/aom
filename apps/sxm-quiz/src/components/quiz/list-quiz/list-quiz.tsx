"use client";
import { FormEvent, useEffect, useReducer, useRef, useState } from "react";
import { Button, TextInput } from "ui";
import { QuizProgression } from "./quiz-progress";
import { Summary } from "./summary";

type State = {
  score: number;
  inputs: string[];
};

const initialState: State = {
  score: 0,
  inputs: []
};

type Action =
  | {
      type: "next";
      value: string;
    }
  | { type: "reset" };

function reducer(state: typeof initialState, action: Action): State {
  switch (action.type) {
    case "next": {
      return {
        score: state.score + 1,
        inputs: [...state.inputs, action.value]
      };
    }
    case "reset": {
      return {
        score: 0,
        inputs: []
      };
    }

    default:
      return state;
  }
}

type PropTypes = {
  task: string;
  options: string[];
};

function useInterval(cb: () => void, ms?: number) {
  const timer = useRef<NodeJS.Timer>();

  const clear = () => {
    clearInterval(timer.current);
    timer.current = undefined;
  };

  const start = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => cb(), ms);
  };
  return [start, clear];
}

export function ListQuiz(props: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [duration, setDuration] = useState(0);
  const [start, clear] = useInterval(() => setDuration(prev => prev + 1), 1000 * 1);
  const [hasStarted, setHasStarted] = useState(false);
  const [giveUp, setGiveUp] = useState(false);
  const [options, setOptions] = useState(props.options.map(option => option.toLowerCase()));
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasStarted) ref.current?.focus();
  }, [state.score, hasStarted]);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    let count = state.inputs.length;
    for (const option of options) {
      if (option === value.toLowerCase()) {
        dispatch({ type: "next", value: value.toLowerCase() });
        setOptions(prev => prev.filter(option => option !== value));
        count++;
        break;
      }
    }
    if (count === props.options.length) clear();
  };

  const isFinished = state.inputs.length === props.options.length;

  const onStart = () => {
    start();
    setHasStarted(true);
  };

  const onReset = () => {
    dispatch({ type: "reset" });
    setOptions(props.options.map(option => option.toLowerCase()));
    setHasStarted(false);
    setDuration(0);
    setGiveUp(false);
  };

  const onGiveUp = () => {
    setGiveUp(true);
    clear();
  };

  const summaryProps = {
    options: props.options,
    inputs: state.inputs,
    duration,
    points: `${state.inputs.length}/${props.options.length}`,
    score: Math.round((state.inputs.length / props.options.length) * 100)
  };

  return (
    <div>
      {!isFinished && !giveUp ? (
        <>
          <QuizProgression
            progress={(state.inputs.length / props.options.length) * 100}
            optionsLeft={props.options.length - state.inputs.length}
          />
          <p className="font-heading text-2xl mb-6">{props.task}</p>
          {hasStarted ? (
            <div className="flex gap-2">
              <TextInput ref={ref} key={state.score} onChange={onChange} />
              <Button onClick={onGiveUp} variant="error">
                Give up
              </Button>
            </div>
          ) : (
            <Button onClick={onStart}>Start</Button>
          )}
          <div className="grid grid-cols-4 mt-6">
            {state.inputs.map(option => {
              return <Inputs key={option} option={option} />;
            })}
          </div>
        </>
      ) : (
        <Summary {...summaryProps}>
          <Button onClick={onReset}>Reset</Button>
        </Summary>
      )}
    </div>
  );
}

function Inputs({ option }: { option: string }) {
  return <p className="capitalize">{option}</p>;
}
