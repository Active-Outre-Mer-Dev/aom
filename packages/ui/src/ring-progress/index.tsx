import { Circle } from "./Circle";
import { ringStyles } from "../../styles/ring-progress.styles";
import { cx } from "../cx";
import type { VariantProps } from "cva";

export type RingProgressProps = {
  size: number;
  value: number;
  thickness?: number;
  label?: React.ReactNode;
  rounded?: boolean;
} & VariantProps<typeof ringStyles>;

type RootClass = {
  /**Classes to be applied to neutral circle */
  rootCircle?: string;
};

export function RingProgress({
  size,
  value,
  thickness = 5,
  color,
  label,
  rounded,
  rootCircle
}: RingProgressProps & RootClass) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative"
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        <Circle
          size={size}
          value={value}
          thickness={thickness}
          root
          className={cx("stroke-neutral-200 dark:stroke-neutral-700", rootCircle)}
        />
        <Circle
          strokeLinecap={rounded ? "round" : undefined}
          size={size}
          value={value}
          thickness={thickness}
          color={color || undefined}
        />
      </svg>
      {label && <div className="absolute -inset-0 flex items-center justify-center">{label}</div>}
    </div>
  );
}
