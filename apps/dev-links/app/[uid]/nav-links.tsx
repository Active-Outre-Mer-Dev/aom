"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

type PropTypes = {
  href: string;
  children: React.ReactNode;
};

export function NavigationLink({ href, children }: PropTypes) {
  const params = useParams<{ uid: string }>();
  return (
    <li
      data-active={params.uid === href}
      className="group data-[active=true]:bg-primary-600/30 data-[active=true]text-primary-200 rounded "
    >
      <Link className="capitalize px-4 py-2 block" href={href}>
        {children}
      </Link>
    </li>
  );
}
