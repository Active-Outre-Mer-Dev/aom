import { cva } from "cva";
import { forwardRef } from "react";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const cardStyles = cva("ui-p-4 ui-rounded-xl", {
  variants: {
    variant: {
      outline: "ui-ring-1 ui-ring-neutral-300 dark:ui-ring-neutral-500 ",
      filled: "ui-bg-neutral-100 dark:ui-bg-neutral-800"
    }
  },
  defaultVariants: {
    variant: "filled"
  }
});
type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof cardStyles>;

export const Card = forwardRef<HTMLDivElement, PropTypes>(({ className, variant, ...props }, ref) => {
  return (
    <div ref={ref} className={cardStyles({ className, variant })}>
      {props.children}
    </div>
  );
});
