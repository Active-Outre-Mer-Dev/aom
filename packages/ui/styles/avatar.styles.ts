import { cva } from "cva";

export const avatarStyles = cva("rounded-full inline-block ", {
  variants: {
    size: {
      sm: "h-10 w-10",
      md: "w-12 h-12",
      lg: "w-14 h-14"
    },
    color: {
      primary: "bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-100",
      gray: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-100",
      success: "bg-success-100 dark:bg-success-800 text-success-700 dark:text-success-100",
      error: "bg-error-100 dark:bg-error-800 text-error-600 dark:text-error-100"
    }
  },
  defaultVariants: {
    size: "md",
    color: "gray"
  }
});

export const avatarGroupStyles = cva("flex", {
  variants: {
    spacing: {
      sm: "-space-x-6",
      md: "-space-x-5",
      lg: "-space-x-4"
    }
  },
  defaultVariants: {
    spacing: "sm"
  }
});
