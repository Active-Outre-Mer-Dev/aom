import { cva } from "cva";

export const ringStyles = cva("", {
  variants: {
    color: {
      primary: `stroke-primary-600 dark:stroke-primary-500`,
      success: ` stroke-success-600 dark:stroke-success-500`,
      error: ` stroke-error-600 dark:stroke-error-500`
    }
  }
});
