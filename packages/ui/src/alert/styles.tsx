import { cva } from "cva";

export const alertStyles = cva("px-2 py-3 grid grid-cols-12 gap-2 rounded-md", {
  variants: {
    color: {
      primary: `bg-primary-50 text-primary-700 dark:bg-primary-600/20 dark:text-primary-50 border
       border-primary-600/40`,
      secondary: `bg-secondary-50 text-secondary-700 dark:bg-secondary-600/20 dark:text-secondary-50 border
      border-secondary-600/40`,
      warn: `bg-warn-50 text-warn-700 dark:bg-warn-600/20 dark:text-warn-50 border
      border-warn-600/40`,
      success: `bg-success-50 text-success-700 dark:bg-success-600/20 dark:text-success-50 border
      border-success-600/40`,
      error: `bg-error-50 text-error-700 dark:bg-error-600/20 dark:text-error-50 border
      border-error-600/40`,
      tertiary: `bg-tertiary-50 text-tertiary-700 dark:bg-tertiary-600/20 dark:text-tertiary-50 border
      border-tertiary-600/40`
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

export const bodyStyles = cva("col-start-2 col-span-11", {
  variants: {
    color: {
      primary: `text-primary-800 dark:text-primary-100`,
      secondary: `text-secondary-800 dark:text-secondary-100`,
      warn: `text-warn-800 dark:text-warn-100`,
      success: `text-success-800 dark:text-success-100`,
      error: `text-error-800 dark:text-error-100`,
      tertiary: `text-tertiary-800 dark:text-tertiary-100`
    },
    title: {
      true: "row-start-2"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
