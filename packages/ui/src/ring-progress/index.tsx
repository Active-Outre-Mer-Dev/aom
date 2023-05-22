import { Circle } from "./Circle";
import type { VariantProps } from "cva";
import { ringStyles } from "./styles";

export type RingProgressProps = {
  size: number;
  value: number;
  thickness?: number;
  label?: string;
} & VariantProps<typeof ringStyles>;

export function RingProgress({ size, value, thickness = 5, color, label }: RingProgressProps) {
  return (
    <div style={{ width: size, height: size }} className="ui-relative">
      <svg width={size} height={size} className="-ui-rotate-90">
        <Circle size={size} value={value} thickness={thickness} root className="ui-stroke-neutral-200" />
        <Circle size={size} value={value} thickness={thickness} color={color || undefined} />
      </svg>
      {label && (
        <span className="ui-absolute ui-top-2/4 ui-left-2/4 -ui-translate-x-2/4 -ui-translate-y-2/4">
          {label}
        </span>
      )}
    </div>
  );
}
