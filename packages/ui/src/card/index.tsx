import { Children, cloneElement } from "react";
import { Section } from "./section";
import type { VariantProps } from "cva";
import type { ComponentPropsWithoutRef } from "react";
import { cardStyles } from "./styles";

type PropTypes = ComponentPropsWithoutRef<"div"> & VariantProps<typeof cardStyles>;

export function Card({ className, variant, ...props }: PropTypes) {
  const _children = Children.toArray(props.children);
  return (
    <div className={cardStyles({ className, variant })}>
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
