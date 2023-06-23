import type { ComponentPropsWithRef } from "react";
import { forwardRef, useId } from "react";
import { cx } from "../cx";
import { InputRoot } from "../input-wrapper";
import type { InputRootProps } from "../input-wrapper";
export type TextInputProps = InputRootProps & Omit<ComponentPropsWithRef<"input">, "size">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, label, description, error, size, icon, ...props }, ref) => {
    const inputId = useId();
    return (
      <InputRoot
        size={size}
        error={error}
        id={props.id || inputId}
        description={description}
        label={label}
        icon={icon}
        required={props.required}
      >
        <input
          {...props}
          ref={ref}
          id={props.id || inputId}
          aria-describedby={`${inputId}-description`}
          className={cx(
            `appearance-none relative  outline-none w-full bg-transparent h-full inline-block
          placeholder:dark:text-gray-600 placeholder:text-gray-400`,
            icon ? "pl-8" : "pl-2"
          )}
        />
      </InputRoot>
    );
  }
);

TextInput.displayName = "TextInput";
