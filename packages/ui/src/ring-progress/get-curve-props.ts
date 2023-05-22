type GetCurveProps = {
  size: number;
  thickness?: number;
  sum: number;
  value: number;
  root?: boolean;
};

export function getCurveProps({ size, thickness = 5, sum, value, root }: GetCurveProps) {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;
  const accumulated = Math.PI * ((size * 0.9 - thickness * 2) / 2) * 2;
  const offset = accumulated;

  const strokeDasharray = root
    ? `${(100 - sum) * deg}, ${sum * deg}`
    : `${value * deg}, ${(100 - value) * deg}`;

  return {
    strokeWidth: thickness,
    cx: size / 2,
    cy: size / 2,
    r: radius,
    transform: root ? `scale(1, -1) translate(0, -${size})` : undefined,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset
  };
}
