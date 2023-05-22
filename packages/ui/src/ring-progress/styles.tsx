import { cva } from "cva";

export const ringStyles = cva("", {
  variants: {
    color: {
      primary: `ui-stroke-primary-600 dark:ui-stroke-primary-500`,
      success: ` ui-stroke-success-600 dark:ui-stroke-success-500`,
      error: ` ui-stroke-error-600 dark:ui-stroke-error-500`
    }
  }
});
