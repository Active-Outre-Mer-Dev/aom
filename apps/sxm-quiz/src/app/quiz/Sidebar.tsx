"use client";
import { useRouter } from "next/navigation";

import { Select, TextInput } from "./client";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChange = (value: string) => {
    const search = new URLSearchParams(searchParams);
    search.set("sort", value);
    router.push(`/quiz?${search.toString()}#quiz-section`);
  };

  return (
    <>
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
