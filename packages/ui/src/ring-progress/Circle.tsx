import { getCurveProps } from "./get-curve-props";
import { ringStyles } from "./styles";
import type { RingProgressProps } from ".";
import { ComponentPropsWithoutRef } from "react";

type CircleProps = Omit<RingProgressProps, "label"> & { root?: boolean } & ComponentPropsWithoutRef<"circle">;

export function Circle({ size, value, thickness, root, color, className }: CircleProps) {
  return (
    <circle
      fill="none"
      className={ringStyles({ color, className })}
      {...getCurveProps({ size, root, sum: value, thickness, value })}
    />
  );
}
