import { forwardRef } from "react";
import { skeletonStyles } from "./styles";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof skeletonStyles>;

export const Skeleton = forwardRef<HTMLDivElement, PropTypes>(
  ({ animate, className, rounded, ...props }, ref) => {
    return <div ref={ref} {...props} className={skeletonStyles({ className, animate, rounded })} />;
  }
);

Skeleton.displayName = "Skeleton";
