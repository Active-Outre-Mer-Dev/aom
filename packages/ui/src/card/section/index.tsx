import { forwardRef } from "react";
import { cardSectionStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

type CardSectionProps = ComponentPropsWithRef<"div"> & VariantProps<typeof cardSectionStyles>;

export const Section = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, inheritPadding, ...props }, ref) => {
    const classes = cardSectionStyles({ className, inheritPadding });
    return (
      <div {...props} ref={ref} className={twMerge(classes)}>
        {props.children}
      </div>
    );
  }
);

Section.displayName = "CardSection";
