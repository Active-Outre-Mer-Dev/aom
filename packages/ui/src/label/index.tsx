import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { cx } from "../cx";

export type LabelProps = { htmlFor: string; disabled?: boolean } & Omit<
  ComponentPropsWithRef<"label">,
  "htmlFor"
>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, disabled, ...props }, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className={cx(
        "text-sm select-none font-medium text-gray-800 dark:text-gray-100",
        className,
        disabled ? "text-gray-300 dark:text-gray-700" : ""
      )}
    >
      {props.children}
    </label>
  );
});

Label.displayName = "Label";
