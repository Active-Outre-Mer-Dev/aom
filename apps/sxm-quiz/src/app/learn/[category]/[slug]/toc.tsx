"use client";
import type { Heading } from "../../../../lib/get-content";
import Link from "next/link";
import { useEffect, useState } from "react";

type TOCProps = {
  headings: Heading[];
};

function createObserver(cb: (id: string) => void) {
  return new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cb(entry.target.id);
        }
      });
    },
    { rootMargin: "0% 0% -80% 0%" }
  );
}

export function TableOfContents({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    const observer = createObserver(setActiveId);

    const intro = document.getElementById("intro");
    if (intro) observer.observe(intro);
    headings.forEach(heading => {
      const element = document.getElementById(`user-content-${heading.data.hProperties.id}`);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      const intro = document.getElementById("intro");
      if (intro) observer.unobserve(intro);
      headings.forEach(heading => {
        const element = document.getElementById(`user-content-${heading.data.hProperties.id}`);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  return (
    <div className="basis-1/6  px-4">
      <div className="sticky top-20">
        <p className="font-medium text-lg mb-5">On this page</p>
        <ul className="space-y-2 mb-5">
          <Item active={activeId === "intro"} id={"intro"}>
            Intro
          </Item>
          {headings.map(heading => {
            return (
              <Item
                key={`user-content-${heading.data.hProperties.id}`}
                active={activeId === `user-content-${heading.data.hProperties.id}`}
                id={`user-content-${heading.data.hProperties.id}`}
              >
                {heading.value}
              </Item>
            );
          })}
        </ul>
        <div />
        <Link href={"/learn"} className="text-primary-600">
          ← Go back
        </Link>
      </div>
    </div>
  );
}

type PropTypes = {
  active: boolean;
  id: string;
  children: React.ReactNode;
};

function Item({ active, children, id }: PropTypes) {
  return (
    <li
      data-active={active}
      className={`data-[active=true]:text-primary-500 underline-offset-2 text-neutral-700
        data-[active=true]:underline data-[active=true]:font-medium`}
    >
      <a href={`/learn/sxm-history#${id}`}>{children}</a>
    </li>
  );
}
