"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const titles = [
  { id: "intro", label: "Intro" },
  { id: "title2", label: "Title 2" },
  { id: "title3", label: "Title 3" }
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );
    titles.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      titles.forEach(heading => {
        const element = document.getElementById(heading.id);
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
          {titles.map(heading => {
            return (
              <Item key={heading.id} active={activeId === heading.id} id={heading.id}>
                {heading.label}
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
