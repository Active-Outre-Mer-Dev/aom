import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { cx } from "../cx";
type PropTypes = { htmlFor: string } & Omit<ComponentPropsWithRef<"label">, "htmlFor">;

export const Label = forwardRef<HTMLLabelElement, PropTypes>(({ className, ...props }, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className={cx("ui-text-sm ui-font-medium ui-text-neutral-800 dark:ui-text-neutral-100", className)}
    >
      {props.children}
    </label>
  );
});

Label.displayName = "Label";
