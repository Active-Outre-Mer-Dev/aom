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
        "text-sm select-none font-medium text-neutral-800 dark:text-neutral-100",
        className,
        disabled ? "text-neutral-300 dark:text-neutral-700" : ""
      )}
    >
      {props.children}
    </label>
  );
});

Label.displayName = "Label";
