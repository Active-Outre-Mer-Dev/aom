import { Title } from "ui";
import { facts } from "@/random-facts";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RandomFacts() {
  return (
    <div className="rounded-xl relative flex flex-col items-center  radial-gradient text-center h-56  p-4  mx-auto w-3/4 text-white">
      <Title order={2} className="font-heading ">
        Did you know?
      </Title>
      <p className="text-primary-50 text-xl mt-8">{facts[0]}</p>

      <button
        className={`absolute flex items-center justify-center bg-white h-7 w-7 rounded-full
       text-primary-600 top-2/4 -translate-y-2/4 left-4`}
      >
        <ChevronLeft size={"75%"} />
      </button>
      <button
        className={`absolute flex items-center justify-center bg-white h-7 w-7 rounded-full
       text-primary-600 top-2/4 -translate-y-2/4 right-4`}
      >
        <ChevronRight size={"75%"} />
      </button>
    </div>
  );
}
