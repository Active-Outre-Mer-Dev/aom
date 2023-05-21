"use client";

interface GetCurveProps {
  size: number;
  thickness: number;
  sum: number;
  value: number;
  root: boolean;
}

type PropTypes = {
  size: number;
  value: number;
};

export function Ring({ size, value }: PropTypes) {
  return (
    <div style={{ height: size, width: size }} className="relative">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          className="stroke-neutral-200 fill-success-200/30"
          {...getCurveProps({ size, root: true, sum: value, value: value, thickness: 5 })}
        ></circle>
        <circle
          strokeLinecap="round"
          className="stroke-success-600"
          {...getCurveProps({ size, root: false, sum: value, value: value, thickness: 5 })}
          fill="none"
        ></circle>
      </svg>
      <p className="absolute font-heading text-success-600 text-2xl font-medium top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        {value}
      </p>
    </div>
  );
}

function getCurveProps({ size, thickness, sum, value, root }: GetCurveProps) {
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
