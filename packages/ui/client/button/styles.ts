import { cva } from "cva";

export const buttonStyles = cva(
  `font-medium  rounded-md disabled:grayscale appearance-none outline-none flex items-center justify-center
    disabled:opacity-50 focus-within:ring focus-within:ring-offset-2 ring-0  
    disabled:cursor-not-allowed ring-offset-neutral-50 dark:ring-offset-neutral-900 `,
  {
    variants: {
      variant: {
        primary: `bg-primary-600 text-primary-50 dark:bg-primary-500
          dark:ring-primary-400 ring-primary-500 
          `,
        neutral: `bg-white ring-1 ring-neutral-200 dark:bg-white/10 
          dark:ring-white/10 dark:text-neutral-100 `,
        cta: "bg-gradient-to-r from-primary-500 to-tertiary-400 text-primary-50",
        error: `bg-error-600 text-neutral-50 ring-error-500`,
        outline: `bg-transparent ring-1 ring-primary-500 text-primary-500 
        dark:bg-transparent dark:text-primary-300 dark:ring-primary-300`
      },
      size: {
        sm: "h-8 px-2 text-sm",
        md: "px-4 h-10 text-base",
        lg: "text-lg px-6 h-12"
      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
