"use client";
import type { ComponentPropsWithRef } from "react";
import { forwardRef, useId } from "react";
import { Label } from "../label";
import { cx } from "../cx";

type PropTypes = {
  label?: string;
  icon?: React.ReactNode;
  description?: string;
  error?: string;
} & ComponentPropsWithRef<"input">;

export const TextInput = forwardRef<HTMLInputElement, PropTypes>(({ className, label, ...props }, ref) => {
  const inputId = useId();
  return (
    <div>
      {label ? (
        <Label htmlFor={props.id || inputId} className={cx("ui-block", props.description ? "" : "ui-mb-1")}>
          {label}{" "}
          {props.required ? (
            <span aria-label="required" className="ui-text-error-400">
              *
            </span>
          ) : null}
        </Label>
      ) : null}
      {props.description ? (
        <span
          id={`${inputId}-description`}
          className="dark:ui-text-neutral-200 ui-text-xs ui-inline-block ui-mb-1"
        >
          {props.description}
        </span>
      ) : null}
      <div
        data-error={props.error ? true : false}
        className={cx(
          className,
          `ui-rounded-md  ui-relative ui-h-10 ui-bg-neutral-900/0 ui-duration-200 
        ui-ease-out ui-text-neutral-900 ui-appearance-none ui-border 
        ui-border-neutral-300 ui-outline-none focus-within:ui-border-primary-600 
        focus-within:dark:ui-border-primary-400 data-[error=true]:ui-border-error-600 
        data-[error=true]:dark:ui-border-error-400
        dark:ui-border-neutral-700  dark:ui-text-neutral-200  
        `
        )}
      >
        {props.icon ? (
          <span
            aria-hidden="true"
            className="ui-absolute ui-neutral-500 dark:ui-neutral-300 ui-top-2/4 ui-left-2 -ui-translate-y-2/4"
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
            `ui-appearance-none ui-relative  ui-outline-none ui-w-full ui-bg-transparent ui-h-full ui-inline-block
          placeholder:dark:ui-text-neutral-600 placeholder:ui-text-neutral-400`,
            props.icon ? "ui-pl-8" : "ui-pl-2"
          )}
        />
      </div>
      {props.error ? (
        <span className={"ui-text-error-600 ui-text-sm dark:ui-text-error-400"}>{props.error}</span>
      ) : null}
    </div>
  );
});

TextInput.displayName = "TextInput";
