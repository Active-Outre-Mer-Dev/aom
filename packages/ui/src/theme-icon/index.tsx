import { forwardRef } from "react";
import { themeIconStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof themeIconStyles>;

export const ThemeIcon = forwardRef<HTMLDivElement, PropTypes>(
  ({ radius, size, color, variant, ...props }, ref) => {
    const className = twMerge(themeIconStyles({ radius, color, size, variant, className: props.className }));
    return <div {...props} ref={ref} className={className} />;
  }
);
