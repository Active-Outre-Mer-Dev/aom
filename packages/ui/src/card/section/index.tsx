import { cva } from "cva";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";
import { cardSectionStyles } from "./styles";

type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof cardSectionStyles>;

export const Section = forwardRef<HTMLDivElement, PropTypes>(
  ({ className, inheritPadding, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cardSectionStyles({ className, inheritPadding })}>
        {props.children}
      </div>
    );
  }
);

Section.displayName = "CardSection";
