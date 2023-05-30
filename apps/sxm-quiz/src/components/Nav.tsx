import { NavItem } from "./NavItem";
import { Button, TextInput } from ".";
import { Search } from "lucide-react";
import { SearchWrapper } from "./SearchWrapper";

export function Nav() {
  return (
    <header className="border-b z-50 bg-white sticky top-0 left-0 items-center border-neutral-100">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <span className="font-heading leading-none text-2xl font-medium">SXM Quiz</span>
          <nav className="h-full">
            <ul className="flex h-full gap-4">
              <NavItem href={"/"}>Home</NavItem>
              <NavItem href={"/quiz"}>Quiz</NavItem>
              <NavItem href={"/learn"}>Learn</NavItem>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4 ">
          <SearchWrapper />
          <Button variant="neutral" size={"sm"}>
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}
