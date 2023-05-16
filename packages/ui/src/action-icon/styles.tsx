import { cva } from "cva";

export const actionIconStyles = cva(
  `ui-rounded-full ui-flex ui-justify-center 
ui-items-center active:ui-top-[2px] ui-relative`,
  {
    variants: {
      color: {
        primary: `ui-text-primary-600 ui-bg-primary-200/30 hover:ui-bg-primary-200/60 
        dark:ui-bg-primary-600/30 dark:ui-text-primary-200 hover:dark:ui-bg-primary-600/60`,
        secondary: `ui-text-secondary-600 ui-bg-secondary-200/30 dark:ui-bg-secondary-600/30
        dark:ui-text-secondary-200 hover:ui-bg-secondary-200/60 hover:dark:ui-bg-secondary-600/60`,
        success: `ui-text-success-600 ui-bg-success-200/30 dark:ui-bg-success-600/30 
        dark:ui-text-success-200 hover:ui-bg-success-200/60 hover:dark:ui-bg-success-600/60`,
        warn: `ui-text-warn-600 ui-bg-warn-200/30 dark:ui-text-warn-200 dark:ui-bg-warn-600/30
        hover:ui-bg-warn-200/60 hover:dark:ui-bg-warn-600/60`,
        error: `ui-text-error-600 ui-bg-error-200/30 dark:ui-text-error-20 dark:ui-bg-error-600/30
        hover:ui-bg-error-200/60 hover:dark:ui-bg-error-600/60`
      },
      variant: {
        light: ``,
        subtle: ``
      },
      size: {
        md: "ui-h-6 ui-w-6",
        lg: "ui-h-8 ui-w-8",
        xl: "ui-h-10 ui-w-10"
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
        className: "ui-bg-primary-100/0 dark:ui-bg-primary-100/0"
      }
    ]
  }
);
