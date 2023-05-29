import { cva } from "cva";

export const inputStyles = cva(
  `rounded-md  relative text-neutral-900  border 
border-neutral-300 outline-none 
 data-[error=true]:border-error-600 
data-[error=true]:dark:border-error-400 
dark:border-neutral-700  dark:text-neutral-200  
focus-within:ring focus-within:ring-offset-2 ring-0 
ring-offset-neutral-50 dark:ring-offset-neutral-900 dark:ring-primary-500 ring-primary-600
data-[error=true]:ring-error-400 data-[error=true]:dark:ring-error-600
`,
  {
    variants: {
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
