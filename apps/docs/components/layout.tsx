import { NavLink } from "./navlink";
import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b-neutral-700 border-b flex h-14 mb-12 sticky top-0 z-[50] backdrop-blur-md bg-neutral-900/60">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="font-bold text-xl"
          >
            AOMDevUI
          </Link>
        </div>
        <nav className="h-full">
          <ul className="flex gap-4 h-full">
            <li className="relative h-full flex items-center">
              <NavLink
                renderBar
                href={"/docs"}
              >
                Docs
              </NavLink>
            </li>
            <li className="relative h-full flex items-center">
              <NavLink
                renderBar
                href={"/examples"}
              >
                Examples
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
