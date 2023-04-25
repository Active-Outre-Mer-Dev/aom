import { VariantProps, cva } from "cva";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

const styles = cva(
  `ui-font-semibold  ui-rounded-md disabled:ui-grayscale ui-appearance-none ui-outline-none 
  disabled:ui-opacity-50 focus-within:ui-ring focus-within:ui-ring-offset-2 ui-ring-0  
  disabled:ui-cursor-not-allowed ui-ring-offset-neutral-50 dark:ui-ring-offset-neutral-900 `,
  {
    variants: {
      variant: {
        primary: `ui-bg-primary-600 ui-text-primary-50 dark:ui-bg-primary-200 dark:ui-text-primary-700
        dark:ui-ring-primary-300 ui-ring-primary-500 
        `,
        neutral: `ui-bg-transparent ui-ring-1 ui-ring-neutral-600 dark:ui-bg-transparent 
        dark:ui-ring-neutral-100 dark:ui-text-neutral-100 ui-ring-off`,
        cta: "ui-bg-gradient-to-r ui-from-primary-500 ui-to-tertiary-400 ui-text-primary-50",
        error: `ui-bg-error-600 ui-text-neutral-50 ui-ring-error-500`
      },
      size: {
        small: "ui-px-2 ui-py-1 ui-text-sm",
        medium: "ui-px-4 ui-py-2 ui-text-base",
        large: "ui-text-lg ui-px-6 ui-py-4"
      },
      fullWidth: {
        true: "ui-w-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium"
    }
  }
);
type PropTypes = VariantProps<typeof styles> & ComponentPropsWithRef<"button"> & { loading?: boolean };

export const Button = forwardRef<HTMLButtonElement, PropTypes>(
  ({ className, variant, size, fullWidth, loading, ...props }: PropTypes, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        data-loading={loading}
        disabled={loading || props.disabled}
        className={styles({ className, variant, size, fullWidth })}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";