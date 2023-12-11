import { forwardRef } from "react";
import { skeletonStyles } from "../../styles/skeleton.styles";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

export type SkeletonProps = ComponentPropsWithRef<"div"> & VariantProps<typeof skeletonStyles>;

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animate, className, rounded, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={skeletonStyles({ className, animate, rounded })}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
