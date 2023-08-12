import { cva } from "cva";

export const checkboxStyles = cva(
  `disabled:grayscale  border border-neutral-300 dark:border-neutral-700 appearance-none outline-none overflow-hidden
data-[state=checked]:dark:border-primary-500 data-[state=checked]:bg-border-primary-600`,
  {
    variants: {
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      },
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10"
      }
    },
    defaultVariants: {
      radius: "sm",
      size: "md"
    }
  }
);
