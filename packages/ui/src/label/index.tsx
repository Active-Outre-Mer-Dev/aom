import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { cx } from "../cx";
type PropTypes = { htmlFor: string; disabled?: boolean } & Omit<ComponentPropsWithRef<"label">, "htmlFor">;

export const Label = forwardRef<HTMLLabelElement, PropTypes>(({ className, disabled, ...props }, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className={cx(
        "ui-text-sm ui-select-none ui-font-medium ui-text-neutral-800 dark:ui-text-neutral-100",
        className,
        disabled ? "ui-text-neutral-300 dark:ui-text-neutral-700" : ""
      )}
    >
      {props.children}
    </label>
  );
});

Label.displayName = "Label";
