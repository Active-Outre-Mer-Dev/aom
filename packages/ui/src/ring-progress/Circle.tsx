import { getCurveProps } from "./get-curve-props";
import { ringStyles } from "./styles";
import type { RingProgressProps } from ".";
import type { ComponentPropsWithoutRef } from "react";

type CircleProps = Omit<RingProgressProps, "label" | "rounded"> & {
  root?: boolean;
} & ComponentPropsWithoutRef<"circle">;

export function Circle({ size, value, thickness, root, color, className, ...props }: CircleProps) {
  return (
    <circle
      {...props}
      fill="none"
      className={ringStyles({ color, className })}
      {...getCurveProps({ size, root, sum: value, thickness, value })}
    />
  );
}
