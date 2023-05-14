"use client";
import { Badge, Button, Card, Title } from "ui";
import { useState } from "react";
import { CloseModal } from "./CloseModal";
import { XCircle } from "lucide-react";
import Link from "next/link";
import { buttonStyles } from "ui/src/button/styles";
import { Bookmark } from "lucide-react";
import { Share } from "lucide-react";

type PropTypes = {
  title: string;
  badgeColor: "error" | "secondary" | "primary" | "success";
  type: string;
  slug: string;
};

export function DetailsModal({ title, badgeColor, type, slug }: PropTypes) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={"neutral"} onClick={() => setOpen(!open)}>
        View details
      </Button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 w-full flex justify-center items-center z-[999] bg-black/30 backdrop-blur-md h-screen"
        >
          <div onClick={e => e.stopPropagation()} className="w-2/4">
            <Card className="bg-white round w-full relative">
              <Card.Section className="flex items-center pt-2 justify-between px-4 mb-2">
                <Title order={2} className="font-heading  capitalize leading-none">
                  {title}
                </Title>
                <CloseModal onClose={() => setOpen(false)}>
                  <XCircle size={36} />
                </CloseModal>
              </Card.Section>
              <Badge color={badgeColor} className="capitalize mb-4">
                {type}
              </Badge>
              <p className="mb-4">
                Cillum dolor velit velit incididunt sint anim est non labore amet enim voluptate. Consectetur
                elit labore sint sunt pariatur aute commodo exercitation ex. Minim do et id fugiat labore amet
                nostrud nisi anim commodo cupidatat est. Laborum magna veniam consequat culpa officia nulla
                sit consectetur.
              </p>
              <span className="text-neutral-700 font-medium text-xl block mb-2 text-center">
                Related Lessons
              </span>
              <ul className="list-disc flex justify-evenly">
                <li className="marker:text-primary-500">Intro to sxm history</li>
                <li className="marker:text-primary-500">Intro to sxm geography</li>
                <li className="marker:text-primary-500">Intro to sxm economy</li>
              </ul>
              <hr className="h-1 text-neutral-100 my-4" />
              <div className="flex gap-4 justify-between text-center">
                <p className="border-r border-neutral-200 pr-6">
                  <span className="font-heading font-medium text-xl">445</span>
                  <br />
                  People have tried this quiz
                </p>
                <p className="border-r border-neutral-200 pr-6">
                  <span className="font-heading font-medium text-xl">87%</span>
                  <br />
                  Average score
                </p>
                <p>
                  <span className="font-heading font-medium text-xl">0.1%</span>
                  <br />
                  You&apos;re in the top percent of players
                </p>
              </div>
              <hr className="h-1 text-neutral-100 my-4" />
              <div className="flex gap-2">
                <Link href={`/quiz/${slug}`} className={buttonStyles({ className: "grow text-center" })}>
                  Take quiz
                </Link>
                <div className="basis-1/6 flex justify-center gap-4">
                  <button className=" ">
                    <Bookmark className="text-secondary-500" />
                  </button>
                  <button className=" ">
                    <Share className="text-tertiary-500" />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
