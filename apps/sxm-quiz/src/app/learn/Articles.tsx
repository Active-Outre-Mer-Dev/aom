import { Card, Title, Badge } from "ui";
import Image from "next/image";
import { buttonStyles } from "ui/src/button/styles";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import type { QuestionType } from "@/questions";
import { getCatColor } from "@/questions";

const articles = Array(8).fill(null);

type PropTypes = {
  getRandomBlob: () => any;
  title: "Community" | "Featured" | "Recently added";
  type: QuestionType;
};

export function Articles({ getRandomBlob, title, type }: PropTypes) {
  return (
    <>
      <Title order={2} className="font-heading mb-10">
        {title} articles
      </Title>
      <div className="grid lg:grid-cols-4 gap-4">
        {articles.map((_, key) => {
          const blob = getRandomBlob();
          return (
            <Card key={key} className="overflow-hidden">
              <Card.Section className=" h-36 mb-1 px-2 relative flex items-center justify-center ">
                <Image src={blob} fill alt="" className=" object-cover" />
                <Title order={3} className="relative capitalize text-center font-heading text-white">
                  Intro to SXM {type}
                </Title>
              </Card.Section>
              <Badge color={getCatColor(type)} className="mb-1 capitalize">
                {type}
              </Badge>
              <p className="mb-4">Irure cupidatat deserunt laboris est sint exercitation.</p>
              <hr className="my-4 -mx-4 text-neutral-200" />
              <div className="flex gap-2">
                <Link href={"/learn"} className={buttonStyles({ className: "grow text-center" })}>
                  Read article
                </Link>
                <button
                  aria-label="Bookmark article"
                  className={`relative text-secondary-600 basis-10 flex items-center justify-center active:top-[2px]`}
                >
                  <Bookmark />
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
