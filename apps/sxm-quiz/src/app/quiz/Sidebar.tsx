"use client";
import { useRouter } from "next/navigation";

import { Card } from "ui";
import { Select, TextInput } from "./client";
import { Search } from "lucide-react";

type PropTypes = {
  defaultValue?: string;
};

export function Sidebar({ defaultValue }: PropTypes) {
  const router = useRouter();

  const onChange = (value: string) => {
    const search = new URLSearchParams(location.search);
    search.set("sort", value);
    router.push(`/quiz?${search.toString()}#quiz-section`);
  };

  return (
    <Card variant={"outline"} className="basis-2/6 space-y-4 h-fit sticky top-20">
      <TextInput icon={<Search size={12} />} placeholder="Search..." />
      <div>
        <p className="text-xl mb-2">Sort by</p>
        <Select
          defaultValue={defaultValue}
          onValueChange={onChange}
          items={[
            { label: "Oldest", value: "oldest" },
            { label: "Newest", value: "newest" },
            { label: "Name", value: "name" },
            { label: "Completed", value: "completed" },
            { label: "Incomplete", value: "incomplete" }
          ]}
        />
      </div>
    </Card>
  );
}
