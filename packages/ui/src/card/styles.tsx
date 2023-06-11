import { cva } from "cva";

export const cardStyles = cva("rounded-md", {
  variants: {
    variant: {
      outline: "ring-1 ring-neutral-200 dark:ring-neutral-700 ",
      filled: `bg-white ring-neutral-100 ring-1  
          dark:bg-neutral-800 dark:ring-neutral-700`
    },
    noPadding: {
      false: "p-4"
    },
    shadow: {
      true: "shadow-md dark:shadow-none"
    }
  },
  defaultVariants: {
    variant: "filled",
    noPadding: false
  }
});
