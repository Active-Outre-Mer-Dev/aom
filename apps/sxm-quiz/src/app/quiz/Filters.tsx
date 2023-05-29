"use client";
import { ActionIcon, Select } from "@aom/ui";
import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";
import { getRandomQuiz } from "@/lib/get-random-quiz";

type PropTypes = {
  search?: string;
};

export function Filters(props: PropTypes) {
  const router = useRouter();

  const onChange = (value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", value);
    router.push(`/quiz?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-between items-center w-full mb-10">
      <div className="flex gap-4">
        <Select
          defaultValue={props.search}
          onValueChange={onChange}
          items={[
            { label: "Newest", value: "new" },
            { label: "Oldest", value: "old" },
            { label: "Name", value: "name" },
            { label: "Popularity", value: "popularity" }
          ]}
        />
        <Select />
      </div>
      <div className="flex gap-2 items-center">
        <ActionIcon
          size={"lg"}
          onClick={async () => {
            const quiz = await getRandomQuiz();
            router.push(`quiz/${quiz.slug}`);
          }}
          aria-label="Select random quiz"
        >
          <Shuffle size={"50%"} />
        </ActionIcon>
        <span className="font-medium text-neutral-700">Random</span>
      </div>
    </div>
  );
}
