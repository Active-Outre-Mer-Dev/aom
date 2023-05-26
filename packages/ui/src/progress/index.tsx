import * as RadixProgress from "@radix-ui/react-progress";
import { forwardRef } from "react";
import { progressStyles } from "./styles";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

export type ProgressProps = ComponentPropsWithRef<"progress"> &
  RadixProgress.ProgressProps &
  VariantProps<typeof progressStyles>;

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(({ size, className, ...props }, ref) => {
  return (
    <RadixProgress.Root
      {...props}
      ref={ref}
      className={progressStyles({ className, size })}
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)"
      }}
    >
      <RadixProgress.Indicator
        className={`bg-primary-600 dark:bg-primary-500 w-full h-full 
        data-[state=indeterminate]:animate-progress-indeterminate relative
         transition-transform duration-[660ms]
         ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
        style={{ transform: `translateX(-${(props.max || 100) - (props.value || 0)}%)` }}
      />
    </RadixProgress.Root>
  );
});

Progress.displayName = "Progress";
