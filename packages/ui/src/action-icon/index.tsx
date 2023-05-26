import { forwardRef } from "react";
import { actionIconStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

export type ActionIconProps = { label?: string } & ComponentPropsWithRef<"button"> &
  VariantProps<typeof actionIconStyles>;

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ className, color, size, label, variant, ...props }, ref) => {
    const classes = actionIconStyles({ className, color, size, variant });
    return <button ref={ref} aria-label={label} {...props} className={twMerge(classes)} />;
  }
);

ActionIcon.displayName = "ActionIcon";
