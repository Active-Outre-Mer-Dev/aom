"use client";
import { ActionIcon, Select } from "@aom/ui";
import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";
import { getRandomQuiz } from "@/lib/get-random-quiz";
import Link from "next/link";

type PropTypes = {
  search?: string;
};

export function Filters(props: PropTypes) {
  const router = useRouter();

  const onChange = (value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("topic", value);
    router.push(`/quiz?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-between items-center w-full mb-10">
      <div className="flex gap-4 items-center">
        <Select
          aria-label="Filter by category"
          defaultValue={props.search}
          onValueChange={onChange}
          items={[
            { label: "History", value: "history" },
            { label: "Geography", value: "geography" },
            { label: "Economy", value: "economy" },
            { label: "Environment", value: "environment" }
          ]}
        />
        <Link
          href={"/quiz"}
          className={`h-8 px-4 flex items-center justify-center text-primary-500 
          hover:bg-primary-200/20 rounded-md font-medium`}
        >
          Reset filters
        </Link>
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
