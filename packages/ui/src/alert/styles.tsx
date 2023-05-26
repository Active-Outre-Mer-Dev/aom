import { cva } from "cva";

export const alertStyles = cva("px-2 py-3 grid grid-cols-12 gap-2 rounded-md", {
  variants: {
    color: {
      primary: "bg-primary-700 text-primary-50",
      secondary: "bg-secondary-700 text-secondary-50",
      warn: "bg-warn-700 text-warn-50",
      success: "bg-success-700 text-success-50",
      error: "bg-error-700 text-error-50",
      tertiary: "bg-tertiary-700 text-tertiary-50"
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
