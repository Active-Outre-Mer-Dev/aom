"use client";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import { styles } from "./styles";

type PropTypes = VariantProps<typeof styles> & ComponentPropsWithRef<"button"> & { loading?: boolean };

export const Button = forwardRef<HTMLButtonElement, PropTypes>(
  ({ className, variant, size, fullWidth, loading, ...props }: PropTypes, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        data-loading={loading}
        disabled={loading || props.disabled}
        className={styles({ className, variant, size, fullWidth })}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";
