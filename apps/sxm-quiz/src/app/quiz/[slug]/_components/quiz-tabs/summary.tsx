import { Button, RingProgress } from "@aom/ui";
import { Timer } from "lucide-react";
import { Rocket, Zap } from "lucide-react";
import { useQuiz } from "../container/container.context";

export function SummaryResult() {
  const { score, time, onReset, questionCount, streak } = useQuiz();
  const percentage = Math.round((score / questionCount) * 100);
  return (
    <div className=" basis-2/5 flex flex-col  gap-4 justify-between pr-4 py-6 -my-4">
      <p className="text-center text-2xl  mb-4 font-medium font-heading ">Summary</p>
      <div className="flex justify-center">
        <RingProgress
          rounded
          rootCircle="fill-success-200/30"
          color={"success"}
          label={<RingLabel>{percentage}</RingLabel>}
          thickness={5}
          size={100}
          value={percentage}
        />
      </div>
      <ul className="space-y-4">
        <li className="flex p-2 justify-between text-success-600 bg-success-200/30 rounded-md">
          <p className="flex items-center gap-2">
            {" "}
            <Rocket size={16} />
            Correct answers:
          </p>
          <p>
            {score}/{questionCount}
          </p>
        </li>
        <li className="flex p-2 justify-between text-warn-600 bg-warn-200/30 rounded-md">
          <p className="flex items-center gap-2">
            {" "}
            <Zap size={16} />
            Highest streak:
          </p>
          <p>{streak}</p>
        </li>
        <li className="flex p-2 justify-between text-error-600 bg-error-200/30 rounded-md">
          <p className="flex items-center gap-2">
            {" "}
            <Timer size={16} /> Duration:
          </p>
          <p>{format(time)}</p>
        </li>
      </ul>
      <Button fullWidth onClick={onReset} className="block mt-5">
        Try again
      </Button>
    </div>
  );
}
function RingLabel({ children }: { children: React.ReactNode }) {
  return <span className="font-heading text-success-600 text-2xl font-medium">{children}</span>;
}
function format(seconds: number) {
  return seconds <= 60 ? `${seconds} seconds` : seconds <= 3600 ? `${seconds / 60} minutes` : "WTF";
}
