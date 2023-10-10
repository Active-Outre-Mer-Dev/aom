import { Card, Title } from "@aomdev/ui";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Link from "next/link";

const getHome = () => {
  const client = createClient();
  return client.getSingle("homepage");
};

const getLinks = async () => {
  const client = createClient();
  return client.getAllByType("marketing");
};

export async function generateMetadata() {
  const { data } = await getHome();
  return {
    title: data.meta_title,
    description: data.meta_description
  };
}

export default async function Home() {
  const page = await getHome();
  const links = await getLinks();
  const cards = links.map(data => {
    const href = data.uid.toLowerCase();
    return {
      href,
      label: data.uid.replaceAll("-", " ")
    };
  });

  return (
    <main className="w-2/4 mx-auto mt-16 ">
      <SliceZone components={components} slices={page.data.slices} />
      <section className="mt-20">
        <header className="text-center mb-8">
          <Title order={2} className="font-medium">
            Categories
          </Title>
        </header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gridAutoRows: "minmax(150px,1fr)"
          }}
          className=" mx-auto w-3/5 gap-6 [grid-auto-rows:150px]"
        >
          {cards.map(link => {
            return (
              <Link href={`/${link.href}`} className=" h-full block">
                <Card
                  variant={"outline"}
                  className="capitalize relative overflow-hidden text-center text-xl h-full flex items-center justify-center"
                >
                  {link.label}
                  <span
                    style={{
                      background: "radial-gradient(circle at 0% 0%, #37245c, rgba(48, 37, 76, 0) 50%)"
                    }}
                    className="w-full h-full absolute dark:block hidden top-0 opacity-75 blur-lg left-0"
                    aria-hidden="true"
                  />
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
