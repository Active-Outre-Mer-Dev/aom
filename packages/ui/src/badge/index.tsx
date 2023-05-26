import { forwardRef } from "react";
import { badgeStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

export type BadgeProps = ComponentPropsWithRef<"div"> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, color, fullWidth, size, ...props }, ref) => {
    const classes = badgeStyles({ className, color, fullWidth, size });
    return (
      <div {...props} ref={ref} className={twMerge(classes)}>
        {props.children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
