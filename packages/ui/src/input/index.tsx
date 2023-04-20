"use client";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

function cx(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(" ");
}

type PropTypes = {
  label?: string;
} & ComponentPropsWithRef<"input">;

export const TextInput = forwardRef<HTMLInputElement, PropTypes>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={cx(
        className,
        `ui-rounded-md placeholder:ui-text-neutral-400 ui-h-10 ui-bg-neutral-900/0 ui-duration-200 
        ui-ease-out ui-text-neutral-900 ui-appearance-none ui-border 
        ui-border-neutral-300 ui-outline-none focus:ui-border-primary-600 focus:dark:ui-border-primary-400
        dark:ui-border-neutral-700 placeholder:dark:ui-text-neutral-600 dark:ui-text-neutral-200 ui-pl-2  
        `
      )}
    />
  );
});

TextInput.displayName = "TextInput";
