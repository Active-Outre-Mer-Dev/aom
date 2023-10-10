import { createClient } from "@/prismicio";
import { Card } from "@aomdev/ui";
import LinkDescription from "@/slices/LinkDescription";
import Link from "next/link";
import { NavigationLink } from "./nav-links";
import { Search } from "./search";

const getLinks = async () => {
  const client = createClient();
  return client.getAllByType("marketing");
};

const getLink = async (params: string) => {
  const client = createClient();
  return client.getByUID("marketing", params);
};

export async function generateStaticParams() {
  const links = await getLinks();
  return links.map(link => {
    return { uid: link.uid };
  });
}

export default async function Page({
  params,
  searchParams
}: {
  searchParams: string | Record<string, string> | URLSearchParams | string[][] | undefined;
  params: { uid: string };
}) {
  const search = new URLSearchParams(searchParams);
  const links = await getLinks();
  const allLinks = await getLink(params.uid);
  const cards = allLinks.data.slices
    .map(slice => {
      const title = slice.primary.title[0]?.text || "";
      const query = title.toLowerCase();
      return { title, query };
    })
    .filter(data => data.title);
  const currentLink = allLinks.data.slices.find(
    data => data.primary.title[0]?.text.toLowerCase() === search.get("title")?.toString()
  );
  const navigationLinks = links.map(data => {
    const href = data.uid.toLowerCase();
    return {
      href,
      label: data.uid.replaceAll("-", " ")
    };
  });

  const q = search.get("q");

  const filteredCards = q
    ? cards.filter(data => {
        const search = q.toString().toLowerCase().replaceAll("+", " ");
        return data.title.toLowerCase().includes(search);
      })
    : cards;

  return (
    <div className="flex">
      <aside className="basis-[14%] bg-neutral-800 h-screen pt-16 sticky top-0 left-0">
        <Link href={"/"} className="font-bold block text-center text-3xl">
          DevLinks
        </Link>
        <nav className="px-4 mx-auto mt-6">
          <ul className="space-y-4">
            {navigationLinks.map((link, key) => {
              return (
                <NavigationLink key={key} href={link.href}>
                  {link.label}
                </NavigationLink>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="basis-[90%] grow">
        <section className="grid grid-cols-12  mt-16 container mx-auto">
          <div className="col-span-3 space-y-6">
            <Search id={params.uid} searchParams={search} />
            {filteredCards.map((data, key) => {
              return (
                <Link
                  key={key}
                  href={`/${params.uid}?title=${data.query}`}
                  data-active={data.title === currentLink?.primary.title[0]?.text}
                  className="block data-[active=true]:ring ring-primary-400 rounded-md"
                >
                  <Card key={data.query}>{data.title}</Card>
                </Link>
              );
            })}
          </div>
          <div className="col-span-8 col-start-5">
            {!currentLink ? (
              <>Select link</>
            ) : (
              <>
                <LinkDescription context={undefined} index={0} slices={[]} slice={currentLink} />
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
