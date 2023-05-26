import { ComponentPropsWithoutRef } from "react";
import { cx } from "../cx";
import { Label } from "../label";

type InputWrapperProps = Pick<InputRootProps, "error"> & ComponentPropsWithoutRef<"div">;

function InputWrapper({ children, className, ...props }: InputWrapperProps) {
  return (
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
        <Label htmlFor={props.id!} className={cx("block", props.description ? "" : "mb-1")}>
          {props.label}{" "}
          {props.required ? (
            <span aria-label="required" className="text-error-400">
              *
            </span>
          ) : null}
        </Label>
      ) : null}
      {props.description ? (
        <span id={`${props.id}-description`} className="dark:text-neutral-200 text-xs inline-block mb-1">
          {props.description}
        </span>
      ) : null}
      <InputWrapper error={props.error}>
        {props.icon ? (
          <span
            aria-hidden="true"
            className="absolute neutral-500 dark:neutral-300 top-2/4 left-2 -translate-y-2/4"
          >
            {props.icon}
          </span>
        ) : null}
        {children}
      </InputWrapper>
      {props.error ? (
        <span className={"text-error-600 text-sm dark:text-error-400"}>{props.error}</span>
      ) : null}
    </div>
  );
}
