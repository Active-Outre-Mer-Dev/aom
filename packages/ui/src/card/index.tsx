import { Children, cloneElement } from "react";
import { Section } from "./section";
import type { VariantProps } from "cva";
import type { ComponentPropsWithoutRef } from "react";
import { cardStyles } from "./styles";
import { twMerge } from "tailwind-merge";

type CardProps = ComponentPropsWithoutRef<"div"> & VariantProps<typeof cardStyles>;

export function Card({ className, variant, noPadding, shadow, ...props }: CardProps) {
  const _children = Children.toArray(props.children);
  const classes = cardStyles({ className, variant, noPadding, shadow });
  return (
    <div className={twMerge(classes)}>
      {_children.map((child, index) => {
        if (typeof child === "object" && "type" in child && child.type === Section)
          return cloneElement(child, {
            "data-first": index === 0,
            "data-last": index === _children.length - 1
          });
        return child;
      })}
    </div>
  );
}

Card.Section = Section;
