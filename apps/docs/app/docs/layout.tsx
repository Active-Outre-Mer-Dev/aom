import { NavLink } from "@/components/navlink";
import { Toc } from "@/components/toc";
import { getLinks } from "@/lib/get-sidebar";

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const links = await getLinks();
  return (
    <div className="flex container mx-auto gap-6 pb-16">
      {" "}
      <div className="w-1/6 ">
        <div className="sticky top-16">
          <p className="font-bold text-lg mb-6">Getting started</p>
          <ul className="space-y-4 mb-8">
            <li>
              <NavLink href={"/docs"}>Installation</NavLink>
            </li>
            <li>
              <NavLink href={"/docs/styles"}>Styles</NavLink>
            </li>
          </ul>
          <p className="font-bold text-lg mb-6">Components</p>
          <ul className="space-y-4">
            {links.map((link) => {
              return (
                <li
                  key={link.label}
                  className="capitalize"
                >
                  <NavLink href={`/docs/${link.href}`}>{link.label}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        id="markdown-content"
        className="w-5/6"
      >
        {children}
      </div>
    </div>
  );
}
