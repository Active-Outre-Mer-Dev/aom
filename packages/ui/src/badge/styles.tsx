import { cva } from "cva";

export const badgeStyles = cva(`rounded-full px-2 text-sm inline-flex justify-center items-center`, {
  variants: {
    color: {
      primary: `bg-primary-200/30 text-primary-600 dark:bg-primary-600/30 
        dark:text-primary-200`,
      success: `bg-success-200/30 text-success-600 dark:bg-success-600/30 
        dark:text-success-200`,
      error: "bg-error-200/30 text-error-600 dark:bg-error-600/30 dark:text-error-200",
      tertiary: `bg-tertiary-200/30 text-tertiary-600 dark:bg-tertiary-600/30 
          dark:text-tertiary-200`,
      secondary: `bg-secondary-200/30 text-secondary-600 dark:bg-secondary-600/30 
          dark:text-secondary-200`,
      warn: "bg-warn-200/30 text-warn-600 dark:bg-warn-600/30 dark:text-warn-200"
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit"
    },
    size: {
      sm: "text-xs px-2 h-4",
      md: "text-sm px-2 h-5",
      lg: "text-base px-2 h-6"
    }
  },
  defaultVariants: {
    color: "primary",
    fullWidth: false,
    size: "sm"
  }
});
