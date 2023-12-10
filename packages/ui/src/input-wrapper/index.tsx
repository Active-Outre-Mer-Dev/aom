import { ComponentPropsWithoutRef } from "react";
import { cx } from "../cx";
import { Label } from "../label";
import { inputStyles } from "../../styles/input-wrapper.styles";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";

type InputWrapperProps = Pick<InputRootProps, "error"> &
  ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof inputStyles>;

function InputWrapper({ children, className, size, ...props }: InputWrapperProps) {
  const classes = inputStyles({ className, size });
  return (
    <div
      data-error={props.error ? true : false}
      className={twMerge(classes)}
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
  children?: React.ReactNode;
} & VariantProps<typeof inputStyles> &
  Pick<ComponentPropsWithoutRef<"input">, "id" | "className" | "required">;

export function InputRoot({ children, description, error, icon, id, label, required, size }: InputRootProps) {
  return (
    <div>
      {label ? (
        <Label
          htmlFor={id!}
          className={cx("block", description ? "" : "mb-1")}
        >
          {label}{" "}
          {required ? (
            <span
              aria-label="required"
              className="text-error-400"
            >
              *
            </span>
          ) : null}
        </Label>
      ) : null}
      {description ? (
        <span
          id={`${id}-description`}
          className="dark:text-neutral-200 text-xs inline-block mb-1"
        >
          {description}
        </span>
      ) : null}
      <InputWrapper
        error={error}
        size={size}
      >
        {icon ? (
          <span
            aria-hidden="true"
            className="absolute neutral-500 dark:neutral-300 top-2/4 left-2 -translate-y-2/4"
          >
            {icon}
          </span>
        ) : null}
        {children}
      </InputWrapper>
      {error ? <span className={"text-error-600 text-sm dark:text-error-400"}>{error}</span> : null}
    </div>
  );
}
