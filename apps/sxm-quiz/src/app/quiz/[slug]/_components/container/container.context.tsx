import type { QuestionCategory } from "@/questions";
import { useContext, createContext, useReducer, useTransition } from "react";
import { initialState, reducer } from "./reducer";
import type { State } from "./reducer";
import { useParams } from "next/navigation";
import { RelatedArticle } from "@/quizzes";

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
  average: number;
  relatedArticles: RelatedArticle[];
} & State;

const ContainerContext = createContext<ContextProps | null>(null);

export function useQuiz() {
  const value = useContext(ContainerContext);
  if (!value) throw new Error("Must be rendered within Container provider");
  return value;
}

type PropTypes = Pick<
  ContextProps,
  "description" | "questionCount" | "category" | "title" | "type" | "average" | "relatedArticles"
> & {
  children: React.ReactNode;
  count: number;
  update: () => Promise<void>;
};

export function ContainerProvider({ children, ...props }: PropTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [, startTransition] = useTransition();
  const params = useParams();

  const onReset = () => {
    startTransition(() => {
      props.update();
      dispatch({ type: "reset" });
    });
  };

  const onComplete: ContextProps["onComplete"] = async (score, time, streak) => {
    dispatch({ type: "completed", payload: { score, time, streak } });
    const userScore = (score / props.questionCount) * 100;
    fetch(`/api/quiz`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: props.count + 1, score: userScore, slug: params.slug })
    });
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
