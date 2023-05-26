import { Rocket, Timer } from "lucide-react";
import { RingProgress } from "ui";

type PropTypes = {
  children: React.ReactNode;
  score: number;
  points: string;
  duration: number;
};

export function ListResult({ children, score, points, duration }: PropTypes) {
  return (
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
      <ul className="space-y-4 font-medium">
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
  );
}

function RingLabel({ children }: { children: React.ReactNode }) {
  return <span className="font-heading text-success-600 text-2xl font-medium">{children}</span>;
}

function format(seconds: number) {
  return new Intl.NumberFormat("en-US", {
    unit: seconds >= 60 ? "minute" : "second",
    style: "unit",
    unitDisplay: "long"
  }).format(seconds >= 60 ? Math.floor(seconds / 60) : seconds);
}
