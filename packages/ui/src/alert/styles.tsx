import { cva } from "cva";

export const alertStyles = cva("ui-px-2 ui-py-3 ui-grid ui-grid-cols-12 ui-gap-2 ui-rounded-md", {
  variants: {
    color: {
      primary: "ui-bg-primary-700 ui-text-primary-50",
      secondary: "ui-bg-secondary-700 ui-text-secondary-50",
      warn: "ui-bg-warn-700 ui-text-warn-50",
      success: "ui-bg-success-700 ui-text-success-50",
      error: "ui-bg-error-700 ui-text-error-50",
      tertiary: "ui-bg-tertiary-700 ui-text-tertiary-50"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
