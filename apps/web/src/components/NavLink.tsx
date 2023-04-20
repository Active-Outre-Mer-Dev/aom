"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import yaloLogo from "@/assets/logo.png";

type PropTypes = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: PropTypes) {
  const path = usePathname();

  return (
    <li className={`${href === path ? "border-b-2" : ""} border-primary-400`}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export function Logo() {
  const path = usePathname();
  return (
    <Link href={"/"} aria-label="Homepage" className={"w-10 h-10 bg-neutral-900  container1"}>
      <i aria-hidden="true" style={{ opacity: path === "/" ? 1 : 0 }}></i>
      <div className="relative w-4/5 h-4/5">
        <Image alt={"AOM logo"} src={yaloLogo} fill className="-rotate-45" />
      </div>
    </Link>
  );
}
