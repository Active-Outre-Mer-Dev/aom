import { VariantProps, cva } from "cva";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

const styles = cva("ui-font-semibold px-4 py-2 ui-rounded-md", {
  variants: {
    variant: {
      primary: "ui-bg-primary-600 ui-text-primary-50",
      neutral: "ui-bg-transparent ui-ring-1 ui-ring-neutral-50"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});
type PropTypes = VariantProps<typeof styles> & ComponentPropsWithRef<"button">;
export const Button = forwardRef<HTMLButtonElement, PropTypes>(({ className, variant }: PropTypes, ref) => {
  return (
    <button ref={ref} className={styles({ className, variant })}>
      Button
    </button>
  );
});

Button.displayName = "Button";
