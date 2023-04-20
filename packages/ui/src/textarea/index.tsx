"use client";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { cx } from "../cx";
import { Label } from "../label";
import { useId } from "react";

type PropTypes = ComponentPropsWithRef<"textarea"> & { label?: string; wrapperClass?: string };

export const TextArea = forwardRef<HTMLTextAreaElement, PropTypes>((props, ref) => {
  const id = useId();
  return (
    <div className={props.wrapperClass}>
      {props.label ? (
        <Label htmlFor={props.id || id} className="ui-block ui-mb-1">
          {props.label}
        </Label>
      ) : null}

      <textarea
        ref={ref}
        {...props}
        id={props.id || id}
        rows={props.rows || 3}
        className={cx(
          `ui-rounded-md placeholder:ui-text-neutral-400 ui-py-1 ui-bg-transparent ui-duration-200 
          ui-ease-out ui-text-neutral-900 ui-w-full ui-appearance-none ui-border ui-resize-none 
          ui-border-neutral-300 ui-outline-none focus:ui-border-primary-600 focus:dark:ui-border-primary-400
          dark:ui-border-neutral-700 placeholder:dark:ui-text-neutral-600 dark:ui-text-neutral-200 ui-pl-2  
          `,
          props.className
        )}
      />
    </div>
  );
});
