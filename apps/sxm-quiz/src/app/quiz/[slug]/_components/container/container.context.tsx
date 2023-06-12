import type { QuestionCategory } from "@/questions";
import { useContext, createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import type { State } from "./reducer";

type ContextProps = {
  category: QuestionCategory;
  title: string;
  type: "question" | "list";
  description: string;
  onComplete: (score: number, time: number, streak: number) => void;
  onReset: () => void;
  questionCount: number;
  tab: string;
  onTabChange: (tab: string) => void;
} & State;

const ContainerContext = createContext<ContextProps | null>(null);

export function useQuiz() {
  const value = useContext(ContainerContext);
  if (!value) throw new Error("Must be rendered within Container provider");
  return value;
}

type PropTypes = Pick<ContextProps, "description" | "questionCount" | "category" | "title" | "type"> & {
  children: React.ReactNode;
};

export function ContainerProvider({ children, ...props }: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onReset = () => {
    dispatch({ type: "reset" });
  };

  const onComplete: ContextProps["onComplete"] = (score, time, streak) => {
    dispatch({ type: "completed", payload: { score, time, streak } });
  };

  const onTabChange = (tab: string) => {
    dispatch({ type: "tab", payload: tab });
  };

  return (
    <ContainerContext.Provider
      value={{
        ...props,
        ...state,
        onReset,
        onComplete,
        onTabChange
      }}
    >
      {children}
    </ContainerContext.Provider>
  );
}
