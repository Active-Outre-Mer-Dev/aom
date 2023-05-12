import Link from "next/link";
import { NavLink } from "./NavLink";
import { Select, TextInput } from "./client";
import { Search } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav
        style={{ height: "calc(100vh - 64px)" }}
        className="w-1/6 border-r border-neutral-100 p-4 space-y-6 fixed top-16 left-0"
      >
        <TextInput icon={<Search size={12} />} placeholder="Search..." />
        <div>
          <p className="text-lg text-neutral-800 font-medium mb-2">Sort by:</p>
          <Select
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
        <div>
          <p className="text-lg text-neutral-800 font-medium mb-2">Articles</p>
          <ul className="space-y-4 w-full">
            <NavLink href={"/learn"}>All lessons</NavLink>
            <NavLink href={"/learn/community"}>Community lessons</NavLink>
            <NavLink href={"/learn/beta"}>Beta lessons</NavLink>
          </ul>
        </div>
        <div>
          <p className="text-lg text-neutral-800 font-medium mb-2">Categories</p>
          <ul className="space-y-4 w-full">
            <NavLink href={"/learn/categories/history"}>History</NavLink>
            <NavLink href={"/learn/categories/geography"}>Geography</NavLink>
            <NavLink href={"/learn/categories/economy"}>Economy</NavLink>
          </ul>
        </div>
      </nav>
      <div className="ml-auto w-5/6 px-4 mt-10">{children}</div>
    </main>
  );
}
