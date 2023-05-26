import { Timer } from "lucide-react";
import { Rocket } from "lucide-react";
import { Card, RingProgress } from "ui";
import { secondsToMinutes } from "date-fns";

type PropTypes = {
  options: string[];
  inputs: string[];
  children: React.ReactNode;
  score: number;
  points: string;
  duration: number;
};
export function Summary({ children, options, inputs, score, points, duration }: PropTypes) {
  return (
    <Card className="flex">
      <div className=" basis-2/5 flex flex-col  gap-4 justify-between pr-4 py-6 border-r border-neutral-100 -my-4">
        <p className="text-center text-2xl  mb-4 font-medium font-heading ">Summary</p>
        <div className="flex justify-center">
          <RingProgress
            rounded
            rootCircle="fill-success-200/30"
            color={"success"}
            label={<RingLabel>{score}</RingLabel>}
            thickness={5}
            size={100}
            value={score}
          />
        </div>
        <ul className="space-y-4">
          <li className="flex p-2 justify-between text-success-600 bg-success-200/30 rounded-md">
            <p className="flex items-center gap-2">
              {" "}
              <Rocket size={16} />
              Correct answers:
            </p>
            <p>{points}</p>
          </li>
          <li className="flex p-2 justify-between text-error-600 bg-error-200/30 rounded-md">
            <p className="flex items-center gap-2">
              {" "}
              <Timer size={16} /> Duration:
            </p>
            <p>{format(duration)}</p>
          </li>
        </ul>
        {children}
      </div>
      <div className="grow p-2">
        <p className="text-center text-2xl   mb-4 font-medium font-heading ">All Beaches</p>
        <div className="grid grid-cols-4 gap-2">
          {options.map(option => {
            return (
              <p
                key={option}
                className={`text-white rounded-sm p-2 ${
                  inputs.includes(option.toLowerCase()) ? "bg-success-700 text" : "bg-error-600"
                }`}
              >
                {option}
              </p>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

function RingLabel({ children }: { children: React.ReactNode }) {
  return <span className="font-heading text-success-600 text-2xl font-medium">{children}</span>;
}

function format(seconds: number) {
  const minutes = secondsToMinutes(seconds) > 1 ? `${secondsToMinutes(seconds)} minutes` : "1 minute";
  return seconds <= 60 ? `${seconds} seconds` : minutes;
}
