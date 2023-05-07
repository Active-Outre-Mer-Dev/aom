"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

export function NavItem(props: LinkProps & { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <li className={`text-lg font-medium ${path === props.href ? "text-primary-600" : "text-neutral-800"}`}>
      <Link {...props}>{props.children}</Link>
    </li>
  );
}
