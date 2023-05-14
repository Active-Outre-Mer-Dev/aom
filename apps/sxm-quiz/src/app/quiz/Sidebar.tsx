"use client";
import { useRouter } from "next/navigation";
import { Select, TextInput, Button } from "./client";
import { Search, Shuffle } from "lucide-react";
import { useSearchParams, useParams } from "next/navigation";
import { allQuizzes } from "@/questions";

export function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const onChange = (value: string) => {
    const search = new URLSearchParams(searchParams);
    search.set("sort", value);
    router.push(`/quiz?${search.toString()}#quiz-section`);
  };

  const onRandom = () => {
    const quizzes = params ? allQuizzes.filter(({ slug }) => slug !== params.slug) : allQuizzes;
    const randomSlug = quizzes[Math.floor(Math.random() * quizzes.length)].slug;
    router.push(`/quiz/${randomSlug}`);
  };

  return (
    <>
      <Button
        onClick={onRandom}
        fullWidth
        className="text-center mb-4 flex gap-2 justify-center items-center"
      >
        Random quiz
        <Shuffle size={16} className="text-primary-50" />
      </Button>
      <TextInput icon={<Search size={12} />} placeholder="Search..." />
      <div>
        <p className="text-xl mb-2">Sort by</p>
        <Select
          defaultValue={searchParams.get("stort") || undefined}
          onValueChange={onChange}
          fullWidth
          items={[
            { label: "Oldest", value: "oldest" },
            { label: "Newest", value: "newest" },
            { label: "Name", value: "name" },
            { label: "Completed", value: "completed" },
            { label: "Incomplete", value: "incomplete" }
          ]}
        />
      </div>
    </>
  );
}
