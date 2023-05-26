import { cva } from "cva";

export const cardStyles = cva("p-4 rounded-md", {
  variants: {
    variant: {
      outline: "ring-1 ring-neutral-200 dark:ring-neutral-700 ",
      filled: `bg-white ring-neutral-100 ring-1   dark:shadow-0
        shadow-md  dark:bg-neutral-800 dark:ring-neutral-700`
    }
  },
  defaultVariants: {
    variant: "filled"
  }
});
