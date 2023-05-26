import { forwardRef } from "react";
import { titleStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

export type TitleProps = ComponentPropsWithRef<"h1"> & VariantProps<typeof titleStyles>;

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ order, className, ...props }, ref) => {
  const Component = `h${order}` as `h1`;
  const classes = twMerge(titleStyles({ className, order }));
  return (
    <Component ref={ref} className={classes} {...props}>
      {props.children}
    </Component>
  );
});

Title.displayName = "Title";
