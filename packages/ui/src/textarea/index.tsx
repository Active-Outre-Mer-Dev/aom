import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { cx } from "../cx";

type PropTypes = ComponentPropsWithRef<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, PropTypes>((props, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      rows={props.rows || 3}
      className={cx(
        `ui-rounded-md placeholder:ui-text-neutral-400  ui-bg-neutral-900/0 ui-duration-200 
        ui-ease-out ui-text-neutral-900 ui-appearance-none ui-border ui-resize-none 
        ui-border-neutral-300 ui-outline-none focus:ui-border-primary-600 focus:dark:ui-border-primary-400
        dark:ui-border-neutral-700 placeholder:dark:ui-text-neutral-600 dark:ui-text-neutral-200 ui-pl-2  
        `,
        props.className
      )}
    />
  );
});
