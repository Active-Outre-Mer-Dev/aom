import type { VariantProps } from "cva";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { actionIconStyles } from "./styles";

export type ActionIconProps = { label?: string } & ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof actionIconStyles>;

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ className, color, size, label, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        {...props}
        className={actionIconStyles({ className, color, size })}
      />
    );
  }
);

ActionIcon.displayName = "ActionIcon";
