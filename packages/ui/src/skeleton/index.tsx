import { cva } from "cva";
import type { VariantProps } from "cva";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";

const styles = cva(" ui-bg-neutral-200 dark:ui-bg-neutral-700", {
  variants: {
    animate: {
      true: "ui-animate-pulse"
    },
    rounded: {
      true: "ui-rounded-full",
      false: "ui-rounded-md"
    }
  }
});

type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof styles>;

export const Skeleton = forwardRef<HTMLDivElement, PropTypes>(
  ({ animate, className, rounded, ...props }, ref) => {
    return <div ref={ref} {...props} className={styles({ className, animate, rounded })} />;
  }
);

Skeleton.displayName = "Skeleton";
