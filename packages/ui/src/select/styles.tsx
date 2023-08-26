import { cva } from "cva";

export const selectTriggerStyles = cva(
  `inline-flex items-center min-w-[150px] justify-between rounded px-[15px] 
text-sm leading-none  gap-[5px] bg-white text-gray-700 
dark:bg-neutral-800 focus:ring-2 dark:ring-offset-neutral-900 focus:ring-offset-2 
focus:ring-primary-600 focus:dark:ring-primary-500 border border-neutral-100
dark:border-neutral-700
dark:text-gray-100  outline-none data-[disabled]:grayscale data-[disabled]:bg-gray-200/50`,
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12"
      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
