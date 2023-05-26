import { forwardRef } from "react";
import { cx } from "../cx";
import { Label } from "../label";
import { useId } from "react";
import type { ComponentPropsWithRef } from "react";

export type TextareaProps = ComponentPropsWithRef<"textarea"> & { label?: string; wrapperClass?: string };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const id = useId();
  return (
    <div className={props.wrapperClass}>
      {props.label ? (
        <Label htmlFor={props.id || id} className="block mb-1">
          {props.label}
        </Label>
      ) : null}

      <textarea
        ref={ref}
        {...props}
        id={props.id || id}
        rows={props.rows || 3}
        className={cx(
          `rounded-md placeholder:text-neutral-400 py-1 bg-transparent duration-200 
          ease-out text-neutral-900 w-full appearance-none border resize-none 
          border-neutral-300 outline-none focus:border-primary-600 focus:dark:border-primary-400
          dark:border-neutral-700 placeholder:dark:text-neutral-600 dark:text-neutral-200 pl-2  
          `,
          props.className
        )}
      />
    </div>
  );
});

Textarea.displayName = "Textarea";
