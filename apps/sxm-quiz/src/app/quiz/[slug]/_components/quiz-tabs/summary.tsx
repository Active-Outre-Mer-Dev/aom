import { Button } from "@aom/ui";
import { useQuiz } from "../container/container.context";
import { Suspense, lazy } from "react";

const ListSummary = lazy(() => import("../list-quiz/list-summary"));
const QuestionSummary = lazy(() => import("../question-quiz/summary"));

export function SummaryResult() {
  const { onReset, type } = useQuiz();
  return (
    <div className=" basis-2/5 flex flex-col  gap-4 justify-between pr-4 py-6 -my-4">
      <Suspense fallback={<p>Loading summary...</p>}>
        {type === "question" ? <QuestionSummary /> : <ListSummary />}
      </Suspense>
      <Button fullWidth onClick={onReset} className="block mt-5">
        Try again
      </Button>
    </div>
  );
}
