import { NavLink } from "./nav-link";
import { BookOpen, LayoutGrid } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav style={{ height: "calc(100vh - 64px)" }} className="w-1/6 p-4  space-y-6 fixed top-16 left-0">
        <div>
          <p className="text-lg text-neutral-700 font-medium mb-2 flex items-center gap-2">
            <BookOpen size={18} className="text-neutral-700 text-lg" />
            Articles
          </p>
          <ul className="w-full border-l-2 border-neutral-100 space-y-[2px]">
            <NavLink href={"/learn"}>Community articles</NavLink>
            <NavLink href={"/learn/beta"}>Beta articles</NavLink>
          </ul>
        </div>
        <div>
          <p className="text-lg flex items-center gap-2 text-neutral-700 font-medium mb-2">
            <LayoutGrid size={18} className="text-neutral-700" />
            Categories
          </p>
          <ul className="w-full">
            <NavLink href={"/learn/history"}>History</NavLink>
            <NavLink href={"/learn/geography"}>Geography</NavLink>
            <NavLink href={"/learn/economy"}>Economy</NavLink>
            <NavLink href={"/learn/environment"}>Environment</NavLink>
          </ul>
        </div>
      </nav>
      <div className="ml-auto w-5/6 px-4 mt-10">{children}</div>
    </main>
  );
}
