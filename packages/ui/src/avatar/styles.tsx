import { cva } from "cva";

export const avatarStyles = cva("rounded-full inline-block dark:text-gray-200 text-gray-700", {
  variants: {
    size: {
      sm: "h-10 w-10",
      md: "w-12 h-12",
      lg: "w-14 h-14"
    },
    color: {
      primary: "bg-primary-100 dark:bg-primary-800",
      gray: "bg-gray-100 dark:bg-gray-800",
      success: "bg-success-100 dark:bg-success-800",
      error: "bg-error-100 dark:bg-error-800"
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
