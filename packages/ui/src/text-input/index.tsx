import type { ComponentPropsWithRef } from "react";
import { forwardRef, useId } from "react";
import { Label } from "../label";
import { cx } from "../cx";

export type TextInputProps = {
  label?: string;
  icon?: React.ReactNode;
  description?: string;
  error?: string;
} & ComponentPropsWithRef<"input">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, ...props }, ref) => {
    const inputId = useId();
    return (
      <div>
        {label ? (
          <Label htmlFor={props.id || inputId} className={cx("block", props.description ? "" : "mb-1")}>
            {label}{" "}
            {props.required ? (
              <span aria-label="required" className="text-error-400">
                *
              </span>
            ) : null}
          </Label>
        ) : null}
        {props.description ? (
          <span id={`${inputId}-description`} className="dark:text-neutral-200 text-xs inline-block mb-1">
            {props.description}
          </span>
        ) : null}
        <div
          data-error={props.error ? true : false}
          className={cx(
            `rounded-md  relative h-10 duration-200 
          ease-out text-neutral-900  border 
          border-neutral-300 outline-none focus-within:border-primary-600 
          focus-within:dark:border-primary-400 data-[error=true]:border-error-600 
          data-[error=true]:dark:border-error-400
          dark:border-neutral-700  dark:text-neutral-200  
          `,
            className
          )}
        >
          {props.icon ? (
            <span
              aria-hidden="true"
              className="absolute neutral-500 dark:neutral-300 top-2/4 left-2 -translate-y-2/4"
            >
              {props.icon}
            </span>
          ) : null}
          <input
            {...props}
            ref={ref}
            id={props.id || inputId}
            aria-describedby={`${inputId}-description`}
            className={cx(
              `appearance-none relative  outline-none w-full bg-transparent h-full inline-block
          placeholder:dark:text-neutral-600 placeholder:text-neutral-400`,
              props.icon ? "pl-8" : "pl-2"
            )}
          />
        </div>
        {props.error ? (
          <span className={"text-error-600 text-sm dark:text-error-400"}>{props.error}</span>
        ) : null}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
