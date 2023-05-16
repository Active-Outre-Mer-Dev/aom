import { ComponentPropsWithRef, forwardRef } from "react";
import type { VariantProps } from "cva";
import { badgeStyles } from "./styles";

export type BadgeProps = ComponentPropsWithRef<"div"> & VariantProps<typeof badgeStyles>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, color, fullWidth, size, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={badgeStyles({ className, color, fullWidth, size })}>
        {props.children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
