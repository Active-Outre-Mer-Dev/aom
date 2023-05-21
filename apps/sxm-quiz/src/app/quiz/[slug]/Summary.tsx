import { Card, Button } from "./client";
import { Rocket, Zap, Timer } from "lucide-react";
import styles from "./styles.module.css";
import { SummaryDetails } from "./Details";
import { Question } from "@/questions";

type PropTypes = {
  reset: () => Promise<void>;
  score: number;
  highestStreak: number;
  points: string;
  duration: number;
};

type PropType = { resultProps: PropTypes; detailsProps: { choices: string[]; questions: Question[] } };

export function Summary({ detailsProps, resultProps }: PropType) {
  return (
    <Card className="flex">
      <SummaryResult {...resultProps} />
      <SummaryDetails {...detailsProps} />
    </Card>
  );
}

function SummaryResult({ reset, score, highestStreak, points, duration }: PropTypes) {
  return (
    <div className=" basis-2/5 flex flex-col  gap-4 justify-between pr-4 py-6 border-r border-neutral-100 -my-4">
      <p className="text-center text-2xl  mb-4 font-medium font-heading ">Summary</p>
      <Ring percentage={score} />
      <ul className="space-y-4">
        <li className="flex p-2 justify-between text-success-600 bg-success-200/30 rounded-md">
          <p className="flex items-center gap-2">
            {" "}
            <Rocket size={16} />
            Correct answers:
          </p>
          <p>{points}</p>
        </li>
        <li className="flex p-2 justify-between text-warn-600 bg-warn-200/30 rounded-md">
          <p className="flex items-center gap-2">
            {" "}
            <Zap size={16} />
            Highest streak:
          </p>
          <p>{highestStreak}</p>
        </li>
        <li className="flex p-2 justify-between text-error-600 bg-error-200/30 rounded-md">
          <p className="flex items-center gap-2">
            {" "}
            <Timer size={16} /> Duration:
          </p>
          <p>{format(duration)}</p>
        </li>
      </ul>
      <Button onClick={reset} className="block mx-auto mt-5">
        Try again
      </Button>
    </div>
  );
}

function format(seconds: number) {
  return seconds <= 60 ? `${seconds} seconds` : seconds <= 3600 ? `${seconds / 60} minutes` : "WTF";
}

function Ring({ percentage }: { percentage: number }) {
  return (
    <div className="w-full  ">
      <div className="w-2/4 relative mx-auto  flex items-center justify-center aspect-square">
        <svg className="w-full h-full absolute">
          <circle
            strokeDashoffset={0}
            className={`fill-success-200/30 stroke-success-600 ${styles.circle}`}
            cx="70"
            cy="70"
            r="70"
          ></circle>
          <circle
            strokeDashoffset={440 - (440 * (100 - percentage)) / 100}
            className={`stroke-white ${styles.circle}`}
            cx="70"
            cy="70"
            r="70"
          ></circle>
        </svg>
        <p className="text-success-600 font-heading font-medium text-4xl">{percentage}</p>
      </div>
    </div>
  );
}
