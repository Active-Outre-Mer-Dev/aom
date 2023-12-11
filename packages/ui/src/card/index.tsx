import { Children, cloneElement, forwardRef } from "react";
import { Section } from "./section";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { cardStyles } from "../../styles/card.styles";
import { twMerge } from "tailwind-merge";

type CardProps = ComponentPropsWithRef<"div"> & VariantProps<typeof cardStyles>;

const _Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, noPadding, shadow, ...props }, ref) => {
    const _children = Children.toArray(props.children);
    const classes = cardStyles({ className, variant, noPadding, shadow });
    return (
      <div
        {...props}
        className={twMerge(classes)}
        ref={ref}
      >
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
);
_Card.displayName = "Card";

const Card = Object.assign(_Card, { Section });

export { Card };
