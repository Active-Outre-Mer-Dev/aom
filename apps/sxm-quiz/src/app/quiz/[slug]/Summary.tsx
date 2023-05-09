"use client";
import { Card, Button } from "./client";
import { Rocket, Zap, Timer } from "lucide-react";

type PropTypes = {
  reset: () => Promise<void>;
  score: number;
  highestStreak: number;
  points: string;
  duration: number;
  children: React.ReactNode;
};

export function Summary({ reset, score, highestStreak, points, duration, children }: PropTypes) {
  const scoreMsg =
    score === 100 ? "Perfect!!" : score >= 85 ? "Amazing!" : score >= 50 ? "Not bad" : "Needs work";
  return (
    <Card className="w-2/5 mx-auto mt-20 overflow-hidden mb-20">
      <Card.Section className="flex border-b border-neutral-200">
        <div className="grow basis-2/5 flex flex-col gap-4 justify-between text-white px-2 py-4 bg-gradient-to-b to-primary-500 from-tertiary-400">
          <p className="text-center text-2xl basis-[24px] font-medium font-heading text-white">Result</p>
          <div className="grow-[5] mx-auto rounded-full aspect-square bg-gradient-to-b from-primary-500 to-tertiary-400 justify-center flex flex-col font-heading items-center text-2xl ">
            <p>{score}</p>
            <hr className="w-[3ch] border-2 text-white" />
            <p>100</p>
          </div>
          <div className="text-center space-y-2 grow text-neutral-100">
            <p>{scoreMsg}</p>
          </div>
        </div>
        <div className="grow basis-3/5 p-2">
          <p className="font-heading text-2xl font-medium mb-4 ">Summary</p>
          <ul className="space-y-4">
            <li className="flex p-2 justify-between text-primary-800 bg-primary-600/20 rounded-md">
              <p className="flex items-center gap-2">
                {" "}
                <Rocket size={16} />
                Correct answers:
              </p>
              <p>{points}</p>
            </li>
            <li className="flex p-2 justify-between text-success-800 bg-success-600/20 rounded-md">
              <p className="flex items-center gap-2">
                {" "}
                <Zap size={16} />
                Highest streak:
              </p>
              <p>{highestStreak}</p>
            </li>
            <li className="flex p-2 justify-between text-warn-800 bg-warn-600/20 rounded-md">
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
      </Card.Section>
      {children}
    </Card>
  );
}

function format(seconds: number) {
  return seconds <= 60 ? `${seconds} seconds` : seconds <= 3600 ? `${seconds / 60} minutes` : "WTF";
}
