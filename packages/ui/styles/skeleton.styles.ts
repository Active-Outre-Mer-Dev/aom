import { cva } from "cva";

export const skeletonStyles = cva(" bg-neutral-200 dark:bg-neutral-700", {
  variants: {
    animate: {
      true: "animate-pulse"
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md"
    }
  }
});
