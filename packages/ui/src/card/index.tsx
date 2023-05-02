import { cva } from "cva";
import { Children, cloneElement } from "react";
import { Section } from "./section";
import type { VariantProps } from "cva";
import type { ComponentPropsWithoutRef } from "react";

export const cardStyles = cva("ui-p-4 ui-rounded-md", {
  variants: {
    variant: {
      outline: "ui-ring-1 ui-ring-neutral-300 dark:ui-ring-neutral-500 ",
      filled: `ui-bg-neutral-50 ui-ring-neutral-100 ui-ring-1 dark:ui-ring-0  
      ui-shadow-md  dark:ui-bg-neutral-800`
    }
  },
  defaultVariants: {
    variant: "filled"
  }
});

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
