import { Title } from "ui";
import { facts } from "@/random-facts";
import { Button } from "./client";
export function RandomFacts() {
  return (
    <div className="rounded-xl text-center h-56 flex flex-col justify-between p-4 bg-gradient-to-r from-primary-600 to-primary-300 mx-auto w-3/4 text-white">
      <Title order={2} className="font-heading mb-2">
        Did you know?
      </Title>
      <p className="text-primary-50 text-xl mb-4">{facts[0]}</p>
      <div className="flex justify-center gap-2">
        <Button variant={"neutral"}>Previous</Button>
        <Button variant={"neutral"}>Next</Button>
      </div>
    </div>
  );
}
