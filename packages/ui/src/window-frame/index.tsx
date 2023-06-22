import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { ComponentPropsWithRef } from "react";
type PropTypes = { heading?: string; classNames?: { body?: string } } & ComponentPropsWithRef<"div">;

const className = `ring-1 ring-neutral-100 rounded-md dark:ring-neutral-700 bg-white
dark:bg-neutral-800`;

export const WindowFrame = forwardRef<HTMLDivElement, PropTypes>((props, ref) => {
  const classes = twMerge(className, props.className);
  const bodyClass = twMerge("px-3 py-4", props.classNames?.body);
  return (
    <div ref={ref} {...props} className={classes}>
      <div
        className={`flex border-b  border-b-neutral-100 px-3 py-1 relative
      dark:border-b-neutral-700`}
      >
        <div className="space-x-1">
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-600"
          ></span>
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-600"
          ></span>
          <span
            aria-hidden="true"
            className="inline-block h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-600"
          ></span>
        </div>
        {props.heading && (
          <p
            className={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4
           text-neutral-700 text-sm dark:text-neutral-200`}
          >
            {props.heading}
          </p>
        )}
      </div>
      <div className={bodyClass}>{props.children}</div>
    </div>
  );
});
