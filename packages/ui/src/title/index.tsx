import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import { VariantProps, cva } from "cva";

const styles = cva("", {
  variants: {
    /**Used to render specific heading element from h1-h6
     * @default 1
     */
    order: {
      1: "ui-text-[4.25rem]",
      2: "ui-text-[2.333rem] ",
      3: "ui-text-[1.625rem]",
      4: "ui-text-[1.2917rem]",
      5: "ui-text-[1.1458rem]",
      6: "ui-text-base"
    }
  },
  defaultVariants: {
    order: 1
  }
});
type PropTypes = ComponentPropsWithRef<"h1"> & VariantProps<typeof styles>;

export const Title = forwardRef<HTMLHeadingElement, PropTypes>(({ order, className, ...props }, ref) => {
  const Component = `h${order}` as `h1`;
  return (
    <Component ref={ref} className={styles({ className, order })}>
      {props.children}
    </Component>
  );
});

Title.displayName = "Title";
