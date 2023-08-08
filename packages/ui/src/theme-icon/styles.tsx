import { cva } from "cva";

export const themeIconStyles = cva("flex items-center justify-center", {
  variants: {
    color: {
      primary: ` bg-primary-600  ring-primary-500  `,
      secondary: `bg-secondary-600  ring-secondary-500 `,
      success: `bg-success-600  ring-success-500 `,
      warn: `bg-warn-600  ring-warn-500 `,
      error: `bg-error-600  ring-error-500 `,
      gray: "bg-gray-600  ring-gray-500  ",
      tertiary: "bg-tertiary-600 ring-tertiary-500"
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    },
    variant: {
      light: `data-[color=primary]:bg-primary-200/30 data-[color=primary]:dark:bg-primary-600/30 
      data-[color=secondary]:bg-secondary-200/30 data-[color=secondary]:dark:bg-secondary-600/30 
      data-[color=success]:bg-success-200/30 data-[color=success]:dark:bg-success-600/30 
      data-[color=error]:bg-error-200/30 data-[color=error]:dark:bg-error-600/30 
      data-[color=warn]:bg-warn-200/30 data-[color=warn]:dark:bg-warn-600/30  
      data-[color=tertiary]:bg-tertiary-200/30 data-[color=tertiary]:dark:bg-tertiary-600/30  
      data-[color=gray]:bg-gray-200/30 data-[color=gray]:dark:bg-gray-600/30  
      `,
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
      variant: ["outline", "light"],
      className: "text-primary-600 dark:text-primary-200"
    },
    {
      color: ["secondary"],
      variant: ["outline", "light"],
      className: "text-secondary-600 dark:text-secondary-200"
    },
    {
      color: ["success"],
      variant: ["outline", "light"],
      className: "text-success-600 dark:text-success-200"
    },
    {
      color: ["warn"],
      variant: ["outline", "light"],
      className: "text-warn-600 dark:text-warn-200"
    },
    {
      color: ["error"],
      variant: ["outline", "light"],
      className: "text-error-600 dark:text-error-200"
    },
    {
      color: ["gray"],
      variant: ["outline", "light"],
      className: "text-gray-600 dark:text-gray-200"
    },
    {
      color: ["tertiary"],
      variant: ["outline", "light"],
      className: "text-tertiary-600 dark:text-tertiary-200"
    }
  ]
});
