"use client";
import * as RadixProgress from "@radix-ui/react-progress";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";

type PropTypes = ComponentPropsWithRef<"progress"> & RadixProgress.ProgressProps;

export const Progress = forwardRef<HTMLDivElement, PropTypes>((props, ref) => {
  return (
    <RadixProgress.Root
      {...props}
      ref={ref}
      className={`ui-relative ui-overflow-hidden ui-bg-neutral-200 dark:ui-bg-neutral-700 
      ui-rounded-sm ui-w-[300px] ui-h-2`}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)"
      }}
    >
      <RadixProgress.Indicator
        className={`ui-bg-primary-600 dark:ui-bg-primary-500 ui-w-full ui-h-full 
        data-[state=indeterminate]:ui-animate-progress-indeterminate
         ui-transition-transform ui-duration-[660ms]
         ui-ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
        style={{ transform: `translateX(-${(props.max || 100) - (props.value || 0)}%)` }}
      />
    </RadixProgress.Root>
  );
});

Progress.displayName = "Progress";
