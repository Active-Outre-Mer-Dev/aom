import { cva } from "cva";

export const actionIconStyles = cva(
  `rounded-full flex justify-center relative focus-within:ring focus-within:ring-offset-1 ring-0 
items-center ring-offset-neutral-50 dark:ring-offset-neutral-900`,
  {
    variants: {
      color: {
        primary: `bg-primary-600 ring-primary-600`,
        secondary: `bg-secondary-600 ring-secondary-600`,
        success: `bg-success-600 ring-success-600`,
        warn: `bg-warn-600 ring-warn-600`,
        error: `bg-error-600 ring-error-600`,
        tertiary: `bg-tertiary-600 ring-tertiary-600`,
        gray: `bg-gray-600 ring-gray-600`
      },
      variant: {
        light: `data-[color=primary]:bg-primary-200/30 data-[color=primary]:dark:bg-primary-600/30 
        data-[color=secondary]:bg-secondary-200/30 data-[color=secondary]:dark:bg-secondary-600/30 
        data-[color=success]:bg-success-200/30 data-[color=success]:dark:bg-success-600/30 
        data-[color=error]:bg-error-200/30 data-[color=error]:dark:bg-error-600/30 
        data-[color=warn]:bg-warn-200/30 data-[color=warn]:dark:bg-warn-600/30  
        data-[color=tertiary]:bg-tertiary-200/30 data-[color=tertiary]:dark:bg-tertiary-600/30  
        data-[color=gray]:bg-gray-200/30 data-[color=gray]:dark:bg-gray-600/30  ring-opacity-30
        `,
        subtle: ``,
        filled: ` text-white`
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
        color: ["primary", "secondary", "success", "error", "gray", "tertiary", "warn"],
        variant: "subtle",
        className: "bg-primary-100/0 dark:bg-primary-100/0"
      },
      {
        color: ["primary"],
        variant: ["subtle", "light"],
        className: "text-primary-600 dark:text-primary-200"
      },
      {
        color: ["secondary"],
        variant: ["subtle", "light"],
        className: "text-secondary-600 dark:text-secondary-200"
      },
      {
        color: ["success"],
        variant: ["subtle", "light"],
        className: "text-success-600 dark:text-success-200"
      },
      {
        color: ["warn"],
        variant: ["subtle", "light"],
        className: "text-warn-600 dark:text-warn-200"
      },
      {
        color: ["error"],
        variant: ["subtle", "light"],
        className: "text-error-600 dark:text-error-200"
      },
      {
        color: ["gray"],
        variant: ["subtle", "light"],
        className: "text-gray-600 dark:text-gray-200"
      },
      {
        color: ["tertiary"],
        variant: ["subtle", "light"],
        className: "text-tertiary-600 dark:text-tertiary-200"
      }
    ]
  }
);
