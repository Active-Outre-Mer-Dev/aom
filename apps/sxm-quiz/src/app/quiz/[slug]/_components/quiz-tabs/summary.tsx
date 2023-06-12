import { Button } from "@aom/ui";
import { useQuiz } from "../container/container.context";
import { ListSummary } from "../list-quiz/list-summary";
import { QuestionSummary } from "../question-quiz/summary";

export function SummaryResult() {
  const { onReset, type } = useQuiz();
  return (
    <div className=" basis-2/5 flex flex-col  gap-4 justify-between pr-4 py-6 -my-4">
      {type === "question" ? <QuestionSummary /> : <ListSummary />}
      <Button fullWidth onClick={onReset} className="block mt-5">
        Try again
      </Button>
    </div>
  );
}
