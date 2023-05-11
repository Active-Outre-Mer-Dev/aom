import { cva } from "cva";

export const cardStyles = cva("ui-p-4 ui-rounded-md", {
  variants: {
    variant: {
      outline: "ui-ring-1 ui-ring-neutral-300 dark:ui-ring-neutral-700 ",
      filled: `ui-bg-neutral-50 ui-ring-neutral-100 ui-ring-1 dark:ui-ring-0  
        ui-shadow-md  dark:ui-bg-neutral-800`
    }
  },
  defaultVariants: {
    variant: "filled"
  }
});
