import { Title, Badge } from "@aom/ui";
import Image from "next/image";
import { getCatColor } from "@/get-category-color";
import { Select } from "./client";
import pixel from "@/assets/sxm2.jpg";
import profile from "@/assets/agis.jpg";
import Link from "next/link";
import type { QuestionCategory } from "@/questions";

type PropTypes = {
  title: "Community" | "Featured" | "Recently added" | "All";
  type: QuestionCategory;
  amount?: number;
  category: string;
};

export function Articles({ title, type, amount, category }: PropTypes) {
  const articles = Array(amount ?? 3).fill(null);

  return (
    <>
      <Title order={2} className="font-heading mb-10">
        {title} articles
      </Title>
      <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16">
        {title === "All" && (
          <div className="col-span-full">
            <Select
              items={[
                { label: "Popular", value: "popular" },
                { label: "Recent", value: "recent" }
              ]}
            />
          </div>
        )}
        {articles.map((_, key) => {
          return (
            <Link href={`/learn/${category}/sxm-history`} key={key} className="overflow-hidden group">
              <figure
                className={`rounded-xl overflow-hidden h-36 mb-4 px-2 relative flex items-center 
              justify-center  `}
              >
                <Image
                  src={pixel}
                  fill
                  alt=""
                  className=" object-cover group-hover:scale-110 duration-200 ease-out"
                />
              </figure>
              <Title
                order={3}
                className={`relative group-hover:text-primary-500 font-medium capitalize font-heading mb-4
                duration-200 ease-out`}
              >
                Intro to SXM {type}
              </Title>
              <p className="mb-4">
                Sit commodo reprehenderit mollit ullamco eiusmod est cupidatat esse exercitation ut. Nostrud
                cupidatat ullamco aute elit nisi eiusmod elit.
              </p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-4">
                  <img
                    src={profile.src}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                    alt={""}
                  />
                  <div>
                    <span className="block text-sm font-medium">Agis Carty</span>
                    <span className="block text-sm text-neutral-600">{new Date().toDateString()}</span>
                  </div>
                </div>
                <Badge color={getCatColor(type)}>{type}</Badge>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
