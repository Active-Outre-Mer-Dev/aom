import { cva } from "cva";

export const progressStyles = cva(
  `ui-relative ui-overflow-hidden ui-bg-neutral-200 dark:ui-bg-neutral-700 
ui-rounded-full `,
  {
    variants: {
      size: {
        sm: "ui-h-1",
        md: "ui-h-2",
        lg: "ui-h-3"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
