import { NavItem } from "./NavItem";
import { Button } from ".";

export function Nav() {
  return (
    <header className="h-16 border-b bg-primary-50 sticky top-0 left-0 items-center border-neutral-100">
      <div className="container mx-auto h-full flex items-center justify-between">
        <nav>
          <ul className="flex gap-4">
            <NavItem href={"/"}>Home</NavItem>
            <NavItem href={"/quiz"}>Quiz</NavItem>
            <NavItem href={"/learn"}>Learn</NavItem>
          </ul>
        </nav>
        <div>
          <Button variant="neutral">Sign in</Button>
        </div>
      </div>
    </header>
  );
}
