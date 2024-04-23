"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type PropTypes = {
  children: React.ReactNode;
  renderBar?: boolean;
} & LinkProps;

export function NavLink(props: PropTypes) {
  const path = usePathname();
  const isActive = path === props.href;
  return (
    <Link
      {...props}
      data-active={isActive}
      className={`data-[active=true]:text-primary-300 text-gray-200 font-semibold hover:text-primary-300`}
    >
      {props.children}
      {isActive && props.renderBar && (
        <span className="bg-primary-300 h-[2px] left-0 absolute bottom-[0.5px] rounded w-full"></span>
      )}
    </Link>
  );
}
