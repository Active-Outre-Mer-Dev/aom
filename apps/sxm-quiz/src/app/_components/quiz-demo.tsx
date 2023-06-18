"use client";
import { useState } from "react";

export function QuizDemo() {
  const [state, setState] = useState<"quiz" | "list">("quiz");
  const toggle = (type: typeof state) => {
    setState(type);
  };
  return (
    <>
      <div className="basis-1/2 space-y-10">
        <div className="flex gap-4">
          <Button active={state === "quiz"} type="quiz" onToggle={toggle} />
          <Button active={state === "list"} type="list" onToggle={toggle} />
        </div>
        <Demo>{state === "list" ? "List" : "Quiz"}</Demo>
      </div>
    </>
  );
}

function Demo({ children }: { children: React.ReactNode }) {
  return (
    <div className="basis-1/2  relative aspect-video">
      <div className="-inset-0.5 bg-primary-300 blur-md absolute" />
      <div className="relative bg-white w-full h-full">{children}</div>
    </div>
  );
}

function Button({
  type,
  active,
  onToggle
}: {
  type: "list" | "quiz";
  onToggle: (type: "list" | "quiz") => void;
  active: boolean;
}) {
  const onClick = () => onToggle(type);
  return (
    <button
      data-active={active}
      onClick={onClick}
      className={`group bg-white ring-primary-600 ring-1 text-neutral-900 px-4 
    py-1 bg-white data-[active=true]:bg-primary-600  data-[active=true]:text-white 
    data-[active=false]:ring-neutral-200 rounded-md capitalize relative duration-200 ease-out`}
    >
      {type}
    </button>
  );
}
