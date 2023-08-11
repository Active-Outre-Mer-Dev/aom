import { forwardRef } from "react";
import { actionIconStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

export type ActionIconProps = ComponentPropsWithRef<"button"> & VariantProps<typeof actionIconStyles>;

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ className, color, size, variant, ...props }, ref) => {
    const classes = actionIconStyles({ className, color, size, variant });
    return <button ref={ref} {...props} data-color={color || "primary"} className={twMerge(classes)} />;
  }
);

ActionIcon.displayName = "ActionIcon";
