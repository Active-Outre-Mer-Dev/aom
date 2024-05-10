"use client";
import { useEffect, useState } from "react";

function createId(elements: HTMLElement[]) {
  return elements.map((element) => {
    element.id = element.innerText.toLocaleLowerCase().replaceAll(" ", "-");
    return element;
  });
}

function getHeadings(container: HTMLElement) {
  const h1Elements = Array.from(container.getElementsByTagName("h1"));
  const h1 = h1Elements[0];
  h1.id = "intro";
  const h2 = createId(Array.from(container.getElementsByTagName("h2")));
  const h3 = createId(Array.from(container.getElementsByTagName("h3")));
  return [h1, ...h2, ...h3].map((element) => {
    return {
      href: element.id,
      label: element.innerText
    };
  });
}

export function Toc() {
  const [items, setItems] = useState<ReturnType<typeof getHeadings>>([]);
  useEffect(() => {
    const container = document.getElementById("markdown-content");
    if (!container) return;
    setItems(getHeadings(container));
  }, []);
  return (
    <ul className="space-y-4">
      {items.map((item, index) => {
        return (
          <li
            key={item.href}
            className="text-gray-200"
          >
            <a
              href={`#${item.href}`}
              className="hover:text-primary-300"
            >
              {index === 0 ? "Intro" : item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
