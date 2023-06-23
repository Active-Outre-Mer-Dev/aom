import { forwardRef } from "react";
import { badgeStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

export type BadgeProps = ComponentPropsWithRef<"div"> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, color, fullWidth, size, variant, ...props }, ref) => {
    const classes = badgeStyles({ className, color, fullWidth, size, variant });
    return (
      <div
        {...props}
        data-color={color || "primary"}
        data-variant={variant}
        ref={ref}
        className={twMerge(classes)}
      >
        {props.children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
