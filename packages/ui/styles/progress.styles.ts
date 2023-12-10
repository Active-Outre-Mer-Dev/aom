import { cva } from "cva";

export const progressStyles = cva(
  `overflow-hidden bg-neutral-200 dark:bg-neutral-700 
rounded-full `,
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
