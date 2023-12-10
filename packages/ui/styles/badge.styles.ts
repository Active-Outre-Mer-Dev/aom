import { cva } from "cva";

export const badgeStyles = cva(
  `rounded-full px-2 text-sm inline-flex justify-center items-center relative
  data-[variant=status]:before:absolute data-[variant=status]:before:top-2/4 
      data-[variant=status]:before:left-[5px] data-[variant=status]:before:h-2 
      data-[variant=status]:before:w-2 
      data-[variant=status]:before:rounded-full 
      data-[variant=status]:before:-translate-y-2/4 data-[variant=status]:before:ring-1 
      data-[variant=status]:before:dark:ring-neutral-700 data-[variant=status]:before:ring-neutral-100 
      data-[variant=status]:before:ring-offset-1 data-[variant=status]:before:dark:ring-offset-neutral-900 
      data-[variant=status]:before:ring-offset-white
      data-[variant=status]:before:content-[' '] data-[variant=status]:pl-5
      data-[color=primary]:before:bg-primary-500
      data-[color=error]:before:bg-error-500
      data-[color=secondary]:before:bg-secondary-500
      data-[color=success]:before:bg-success-500
      data-[color=tertiary]:before:bg-tertiary-500
      data-[color=warn]:before:bg-warn-500
      `,
  {
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
      variant: {
        light: "",
        status: "font-medium dark:text-gray-100 text-gray-800"
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
      size: "sm",
      variant: "light"
    },
    compoundVariants: [
      {
        variant: "status",
        color: ["error", "primary", "secondary", "success", "tertiary", "warn"],
        className: `bg-white dark:bg-neutral-900 ring-1 ring-neutral-100 dark:ring-neutral-700
      `
      }
    ]
  }
);
