import { Card, Title, Badge } from "ui";
import Image from "next/image";
import { getCatColor } from "@/questions";
import { Select } from "./client";
import type { QuestionType } from "@/questions";

const articles = Array(9).fill(null);

type PropTypes = {
  getRandomBlob: () => any;
  title: "Community" | "Featured" | "Recently added" | "All";
  type: QuestionType;
};

export function Articles({ getRandomBlob, title, type }: PropTypes) {
  return (
    <>
      <Title order={2} className="font-heading mb-10">
        {title} articles
      </Title>
      <div className="grid lg:grid-cols-3 gap-4">
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
          const blob = getRandomBlob();
          return (
            <Card key={key} className="overflow-hidden">
              <Card.Section className=" h-36 mb-4 px-2 relative flex items-center justify-center ">
                <Image src={blob} fill alt="" className=" object-cover" />
                <Title order={3} className="relative capitalize text-center font-heading text-white">
                  Intro to SXM {type}
                </Title>
              </Card.Section>

              <p className="mb-2">
                Sit commodo reprehenderit mollit ullamco eiusmod est cupidatat esse exercitation ut. Nostrud
                cupidatat ullamco aute elit nisi eiusmod elit.
              </p>
              <div className="flex items-center text-sm gap-2 text-neutral-600">
                <span className="font-medium">5 mins </span> -{" "}
                <Badge color={getCatColor(type)} className="mb-1 capitalize">
                  {type}
                </Badge>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
