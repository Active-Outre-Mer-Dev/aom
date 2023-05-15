import { cva } from "cva";
import { ComponentPropsWithRef, forwardRef } from "react";
import type { VariantProps } from "cva";

const styles = cva(`ui-rounded-full ui-px-2 ui-text-sm ui-inline-flex ui-justify-center ui-items-center`, {
  variants: {
    color: {
      primary: `ui-bg-primary-200/30 ui-text-primary-600 dark:ui-bg-primary-600/30 
      dark:ui-text-primary-200`,
      success: `ui-bg-success-200/30 ui-text-success-600 dark:ui-bg-success-600/30 
      dark:ui-text-success-200`,
      error: "ui-bg-error-200/30 ui-text-error-600 dark:ui-bg-error-600/30 dark:ui-text-error-200",
      tertiary: `ui-bg-tertiary-200/30 ui-text-tertiary-600 dark:ui-bg-tertiary-600/30 
        dark:ui-text-tertiary-200`,
      secondary: `ui-bg-secondary-200/30 ui-text-secondary-600 dark:ui-bg-secondary-600/30 
        dark:ui-text-secondary-200`,
      warn: "ui-bg-warn-200/30 ui-text-warn-600 dark:ui-bg-warn-600/30 dark:ui-text-warn-200"
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit"
    },
    size: {
      sm: "ui-text-xs ui-px-2 h-4",
      md: "ui-text-sm ui-px-2 h-5",
      lg: "ui-text-base ui-px-2 h-6"
    }
  },
  defaultVariants: {
    color: "primary",
    fullWidth: false,
    size: "sm"
  }
});

export type BadgeProps = ComponentPropsWithRef<"div"> & VariantProps<typeof styles>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, color, fullWidth, size, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={styles({ className, color, fullWidth, size })}>
        {props.children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
