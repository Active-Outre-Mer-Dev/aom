import { VariantProps, cva } from "cva";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

const styles = cva(
  `ui-font-semibold ui-rounded-md disabled:ui-grayscale disabled:ui-opacity-50
  disabled:ui-cursor-not-allowed`,
  {
    variants: {
      variant: {
        primary: "ui-bg-primary-600 ui-text-primary-50 dark:ui-bg-primary-200 dark:ui-text-primary-700",
        neutral: `ui-bg-transparent ui-ring-1 ui-ring-neutral-600 dark:ui-bg-transparent dark:ui-ring-neutral-100
         dark:ui-text-neutral-100`
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
type PropTypes = VariantProps<typeof styles> & ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, PropTypes>(
  ({ className, variant, size, fullWidth, ...props }: PropTypes, ref) => {
    return (
      <button ref={ref} {...props} className={styles({ className, variant, size, fullWidth })}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";
