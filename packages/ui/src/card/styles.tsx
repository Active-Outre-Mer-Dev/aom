import { cva } from "cva";

export const cardStyles = cva("ui-p-4 ui-rounded-md", {
  variants: {
    variant: {
      outline: "ui-ring-1 ui-ring-neutral-200 dark:ui-ring-neutral-700 ",
      filled: `ui-bg-white ui-ring-neutral-100 ui-ring-1   dark:ui-shadow-0
        ui-shadow-md  dark:ui-bg-neutral-800 dark:ui-ring-neutral-700`
    }
  },
  defaultVariants: {
    variant: "filled"
  }
});
