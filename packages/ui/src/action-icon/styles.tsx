import { cva } from "cva";

export const actionIconStyles = cva(
  `rounded-full flex justify-center 
items-center active:top-[2px] relative`,
  {
    variants: {
      color: {
        primary: `text-primary-600 bg-primary-200/30 hover:bg-primary-200/60 
        dark:bg-primary-600/30 dark:text-primary-200 hover:dark:bg-primary-600/60`,
        secondary: `text-secondary-600 bg-secondary-200/30 dark:bg-secondary-600/30
        dark:text-secondary-200 hover:bg-secondary-200/60 hover:dark:bg-secondary-600/60`,
        success: `text-success-600 bg-success-200/30 dark:bg-success-600/30 
        dark:text-success-200 hover:bg-success-200/60 hover:dark:bg-success-600/60`,
        warn: `text-warn-600 bg-warn-200/30 dark:text-warn-200 dark:bg-warn-600/30
        hover:bg-warn-200/60 hover:dark:bg-warn-600/60`,
        error: `text-error-600 bg-error-200/30 dark:text-error-20 dark:bg-error-600/30
        hover:bg-error-200/60 hover:dark:bg-error-600/60`
      },
      variant: {
        light: ``,
        subtle: ``
      },
      size: {
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10"
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      variant: "light"
    },
    compoundVariants: [
      {
        color: ["primary", "secondary", "success"],
        variant: "subtle",
        className: "bg-primary-100/0 dark:bg-primary-100/0"
      }
    ]
  }
);
