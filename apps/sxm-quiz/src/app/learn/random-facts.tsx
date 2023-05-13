import { Title } from "ui";
import { facts } from "@/random-facts";

export function RandomFacts() {
  return (
    <div className="rounded-xl p-4 bg-primary-600 mx-auto w-3/4 text-white">
      <Title order={2} className="font-heading mb-2">
        Did you know?
      </Title>
      <p className="text-primary-50 text-xl">{facts[0]}</p>
    </div>
  );
}
