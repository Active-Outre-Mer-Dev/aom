import { NavLink } from "@/components/navlink";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex container mx-auto">
      {" "}
      <div className="w-1/6">
        <p className="font-bold text-lg mb-6">Getting started</p>
        <ul>
          <li>
            <NavLink href={"/docs/button"}>Button</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-5/6">{children}</div>
    </div>
  );
}
