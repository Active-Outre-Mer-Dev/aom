import { NavLink, Logo } from "./NavLink";
// import { ScrollToTop } from "./ScrollToTop";
import { Suspense } from "react";
export function Nav() {
  return (
    <header className="px-16 h-20 fixed top-0  z-50 border-b border-neutral-700 left-0 w-full backdrop-blur-lg bg-neutral-900/5">
      <Suspense fallback={null}>{/* <ScrollToTop /> */}</Suspense>
      <nav className="flex justify-center items-center h-full">
        <ul className="flex gap-4 h-full items-center">
          <NavLink href={"/about"}>About</NavLink>
          <NavLink href={"/services"}>Services</NavLink>
          <li>
            <Logo />
          </li>
          <NavLink href={""}>Portfolio</NavLink>
          <NavLink href={"/contact"}>Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}
