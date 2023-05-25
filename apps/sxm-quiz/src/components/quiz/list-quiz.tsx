"use client";
import { FormEvent, useEffect, useReducer, useRef, useState } from "react";
import { Button, Progress, TextInput } from "ui";

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
  title: string;
  task: string;
  options: string[];
};

export function ListQuiz(props: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [options, setOptions] = useState(props.options.map(option => option.toLowerCase()));
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [state.score]);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    for (const option of options) {
      if (option === value.toLowerCase()) {
        dispatch({ type: "next", value });
        setOptions(prev => prev.filter(option => option !== value));

        break;
      }
    }
  };

  const onReset = () => {
    dispatch({ type: "reset" });
    setOptions(props.options.map(option => option.toLowerCase()));
  };

  return (
    <div>
      {state.inputs.length < props.options.length ? (
        <>
          <div className="justify-between flex items-end border-b border-b-neutral-200 pb-4">
            <Progress
              value={(state.inputs.length / props.options.length) * 100}
              size={"sm"}
              className="w-1/4"
            />

            <p>Beaches left: {props.options.length - state.score}</p>
          </div>
          <p className="font-heading text-center text-3xl">{props.task}</p>
          <TextInput ref={ref} key={state.score} onChange={onChange} />
          <ul className="list-disc">
            {state.inputs.map(option => {
              return <li key={option}>{option}</li>;
            })}
          </ul>
        </>
      ) : (
        <Summary>
          <Button onClick={onReset}>Reset</Button>
        </Summary>
      )}
    </div>
  );
}

function Summary({ children }: { children: React.ReactNode }) {
  return (
    <p>
      Yes!!!
      {children}
    </p>
  );
}
