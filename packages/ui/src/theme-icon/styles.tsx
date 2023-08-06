import { cva } from "cva";

export const themeIconStyles = cva("flex items-center justify-center", {
  variants: {
    color: {
      primary: ` bg-primary-200 dark:bg-primary-600 ring-primary-200 dark:ring-primary-600 `,
      secondary: `bg-secondary-200 dark:bg-secondary-600 ring-secondary-200 dark:ring-secondary-600`,
      success: `text-success-600 bg-success-200 dark:bg-success-600 ring-success-200 dark:ring-success-600`,
      warn: `bg-warn-200 dark:bg-warn-600 ring-warn-200 dark:ring-warn-600`,
      error: `bg-error-200 dark:bg-error-600 ring-error-200 dark:ring-error-600`,
      gray: "bg-gray-200 dark:bg-gray-600 ring-gray-200 dark:ring-gray-600"
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    },
    variant: {
      light: `bg-opacity-30 dark:bg-opacity-30`,
      outline: `ring-2 bg-primary-100/0 dark:bg-primary-100/0`,
      filled: "text-white"
    },
    size: {
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    radius: "md",
    variant: "filled"
  },
  compoundVariants: [
    {
      color: ["primary"],
      variant: "outline",
      className: "text-primary-600 dark:text-primary-200"
    },
    {
      color: ["secondary"],
      variant: "outline",
      className: "text-secondary-600 dark:text-secondary-200"
    },
    {
      color: ["success"],
      variant: "outline",
      className: "text-secondary-600 dark:text-secondary-200"
    },
    {
      color: ["warn"],
      variant: "outline",
      className: "text-warn-600 dark:text-warn-200"
    },
    {
      color: ["error"],
      variant: "outline",
      className: "text-error-600 dark:text-error-200"
    },
    {
      color: ["gray"],
      variant: "outline",
      className: "text-gray-600 dark:text-gray-200"
    }
  ]
});
