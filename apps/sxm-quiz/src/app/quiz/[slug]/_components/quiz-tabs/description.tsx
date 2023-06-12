import { ActionIcon, Badge, Title } from "@aom/ui";
import { Share, ThumbsDown } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { useQuiz } from "../container/container.context";
import { RelatedQuizzes } from "../related-quizzes";
import { getCatColor } from "@/get-category-color";

export function Description() {
  const { title, category: type } = useQuiz();
  return (
    <>
      <Title order={1} className="font-heading font-medium text-2xl mb-2">
        {title}
      </Title>
      <div className="flex justify-between items-end mb-6">
        <Badge color={getCatColor(type)}>{type}</Badge>
        <div className="flex gap-2">
          <ActionIcon variant={"subtle"} color="success" size={"md"}>
            <ThumbsUp size={"75%"} />
          </ActionIcon>
          <ActionIcon variant={"subtle"} size={"md"}>
            <ThumbsDown size={"75%"} />
          </ActionIcon>
          <ActionIcon variant={"subtle"} size={"md"}>
            <Share size={"75%"} />
          </ActionIcon>
        </div>
      </div>
      <p className="mb-8">
        Dolor ut culpa occaecat occaecat veniam irure reprehenderit esse dolor duis non. Ea qui incididunt
        tempor mollit velit dolore minim ut dolore aute.
      </p>
      <div className="flex justify-between">
        <div className="text-center grow">
          <span className="block text-neutral-600 font-medium text-sm mb-2">Times completed</span>
          <span className="font-semibold font-heading text-xl">40.1k</span>
        </div>
        <div className="w-[1px] bg-neutral-300" />
        <div className="text-center grow">
          <span className="block text-neutral-600 font-medium text-sm mb-2">Average score</span>
          <span className="font-semibold font-heading text-xl">85%</span>
        </div>
      </div>
      <hr className="text-neutral-100 w-full h-[1px] my-4" />
      <RelatedQuizzes />
    </>
  );
}
