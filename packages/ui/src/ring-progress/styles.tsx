import { cva } from "cva";

export const ringStyles = cva("", {
  variants: {
    color: {
      primary: `ui-fill-primary-200/30 ui-stroke-primary-600 dark:ui-fill-primary-600/30 
      dark:ui-stroke-primary-200`,
      success: `ui-fill-success-200/30 ui-stroke-success-600 dark:ui-fill-success-600/30
      dark:ui-stroke-success-200`,
      error: `ui-fill-error-200/30 ui-stroke-error-600 dark:ui-fill-error-600/30
      dark:ui-stroke-error-200`
    }
  }
});
