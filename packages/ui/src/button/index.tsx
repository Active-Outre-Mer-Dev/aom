import { forwardRef } from "react";
import { buttonStyles } from "./styles";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

export type ButtonProps = VariantProps<typeof buttonStyles> &
  ComponentPropsWithRef<"button"> & { loading?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, ...props }: ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        data-loading={loading}
        disabled={loading || props.disabled}
        className={buttonStyles({ className, variant, size, fullWidth })}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";
