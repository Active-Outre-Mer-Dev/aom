import { cva } from "cva";

export const skeletonStyles = cva(" ui-bg-neutral-200 dark:ui-bg-neutral-700", {
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
