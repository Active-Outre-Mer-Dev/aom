"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LinkProps } from "next/link";

export function NavLink(props: LinkProps & { children?: React.ReactNode }) {
  const path = usePathname();
  return (
    <li data-active={path === props.href} className="group w-full">
      <Link
        {...props}
        className={`rounded-md p-1 inline-block w-full group-data-[active='true']:bg-primary-200/30 
        text-neutral-700 hover:bg-primary-200/30 group-data-[active='true']:font-medium
        group-data-[active='true']:text-primary-600 duration-200 ease-out
      `}
      />
    </li>
  );
}
