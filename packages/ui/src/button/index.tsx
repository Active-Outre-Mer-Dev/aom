import { forwardRef } from "react";
import { buttonStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

export type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentPropsWithRef<"button"> & { loading?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, ...props }: ButtonProps, ref) => {
    const classes = buttonStyles({ className, variant, size, fullWidth });
    return (
      <button
        ref={ref}
        {...props}
        data-loading={loading}
        disabled={loading || props.disabled}
        className={twMerge(classes)}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";
