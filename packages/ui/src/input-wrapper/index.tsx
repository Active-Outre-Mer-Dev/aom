import { ComponentPropsWithoutRef } from "react";
import { cx } from "../cx";
import { Label } from "../label";

type InputWrapperProps = Pick<InputRootProps, "error"> & ComponentPropsWithoutRef<"div">;

function InputWrapper({ children, className, ...props }: InputWrapperProps) {
  return (
    <div
      data-error={props.error ? true : false}
      className={cx(
        `ui-rounded-md  ui-relative ui-h-10 ui-duration-200 
        ui-ease-out ui-text-neutral-900  ui-border 
        ui-border-neutral-300 ui-outline-none focus-within:ui-border-primary-600 
        focus-within:dark:ui-border-primary-400 data-[error=true]:ui-border-error-600 
        data-[error=true]:dark:ui-border-error-400
        dark:ui-border-neutral-700  dark:ui-text-neutral-200  
        `,
        className
      )}
    >
      {children}
    </div>
  );
}

export type InputRootProps = {
  label?: string;
  icon?: React.ReactNode;
  description?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export function InputRoot({ children, ...props }: InputRootProps) {
  return (
    <div>
      {props.label ? (
        <Label htmlFor={props.id!} className={cx("ui-block", props.description ? "" : "ui-mb-1")}>
          {props.label}{" "}
          {props.required ? (
            <span aria-label="required" className="ui-text-error-400">
              *
            </span>
          ) : null}
        </Label>
      ) : null}
      {props.description ? (
        <span
          id={`${props.id}-description`}
          className="dark:ui-text-neutral-200 ui-text-xs ui-inline-block ui-mb-1"
        >
          {props.description}
        </span>
      ) : null}
      <InputWrapper error={props.error}>
        {props.icon ? (
          <span
            aria-hidden="true"
            className="ui-absolute ui-neutral-500 dark:ui-neutral-300 ui-top-2/4 ui-left-2 -ui-translate-y-2/4"
          >
            {props.icon}
          </span>
        ) : null}
        {children}
      </InputWrapper>
      {props.error ? (
        <span className={"ui-text-error-600 ui-text-sm dark:ui-text-error-400"}>{props.error}</span>
      ) : null}
    </div>
  );
}
