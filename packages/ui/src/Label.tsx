import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";

type PropTypes = { htmlFor: string } & Omit<ComponentPropsWithRef<"label">, "htmlFor">;

export const Label = forwardRef<HTMLLabelElement, PropTypes>((props, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className="ui-text-sm ui-font-medium ui-text-neutral-800 dark:ui-text-neutral-100"
    >
      {props.children}
    </label>
  );
});

Label.displayName = "Label";
