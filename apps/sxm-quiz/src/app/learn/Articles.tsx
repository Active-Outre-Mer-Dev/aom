import { Title, Badge } from "ui";
import Image from "next/image";
import { getCatColor } from "@/questions";
import { Select } from "./client";
import type { QuestionType } from "@/questions";
import pixel from "@/assets/pixel.webp";
import profile from "@/assets/agis.jpg";

type PropTypes = {
  title: "Community" | "Featured" | "Recently added" | "All";
  type: QuestionType;
  amount?: number;
};

export function Articles({ title, type, amount }: PropTypes) {
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
            <div key={key} className="overflow-hidden">
              <figure className="rounded-xl overflow-hidden h-36 mb-4 px-2 relative flex items-center justify-center ">
                <Image src={pixel} fill alt="" className=" object-cover" />
              </figure>
              <Title order={3} className="relative font-medium capitalize font-heading mb-4">
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
            </div>
          );
        })}
      </div>
    </>
  );
}
