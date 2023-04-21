import { cva } from "cva";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

type PropTypes = ComponentPropsWithRef<"div"> & VariantProps<typeof styles>;

const styles = cva(
  `-ui-mx-4 data-[first=true]:-ui-mt-4  data-[first=true]:ui-rounded-t-xl 
data-[last=true]:ui-rounded-b-xl data-[last=true]:-ui-mb-4  `,
  {
    variants: {
      inheritPadding: {
        true: "ui-p-4"
      }
    }
  }
);

export const Section = forwardRef<HTMLDivElement, PropTypes>(
  ({ className, inheritPadding, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={styles({ className, inheritPadding })}>
        {props.children}
      </div>
    );
  }
);
