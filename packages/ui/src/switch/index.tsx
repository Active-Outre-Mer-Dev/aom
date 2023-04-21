"use client";
import { forwardRef } from "react";
import { Label } from "../label";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cva } from "cva";
import type { VariantProps } from "cva";

const styles = cva(
  `ui-bg-neutral-200  data-[state=checked]:ui-bg-primary-600 dark:ui-bg-neutral-700 
ui-rounded-full ui-relative data-[state=checked]:dark:ui-bg-primary-400 ui-outline-none ui-cursor-default`,
  {
    variants: {
      size: {
        sm: "ui-w-[36px] ui-h-4",
        md: "ui-w-[42px] ui-h-5",
        lg: "ui-w-[52px] ui-h-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const thumbStyles = cva(
  `ui-block ui-bg-neutral-50  ui-rounded-full ui-overflow-hidden  ui-relative
ui-transition-transform ui-duration-100 ui-translate-x-0.5 ui-will-change-transform 
`,
  {
    variants: {
      size: {
        sm: "ui-w-3 ui-h-3 data-[state=checked]:ui-translate-x-[22px]",
        md: "ui-w-4 ui-h-4 data-[state=checked]:ui-translate-x-[24px]",
        lg: "ui-w-5 ui-h-5 data-[state=checked]:ui-translate-x-[30px]"
      }
    }
  }
);

type PropTypes = {
  label?: string;
  thumbIcon?: React.ReactNode;
} & RadixSwitch.SwitchProps &
  VariantProps<typeof styles>;

export const Switch = forwardRef<HTMLInputElement, PropTypes>(
  ({ className, size, thumbIcon, ...props }, ref) => (
    <>
      <div className="ui-flex ui-items-center ui-gap-2">
        {props.label ? <Label htmlFor="airplane-mode">Airplane mode</Label> : null}
        <RadixSwitch.Root ref={ref} {...props} className={styles({ className, size })} id="airplane-mode">
          <RadixSwitch.Thumb className={thumbStyles({ size })}>
            {thumbIcon ? (
              <span
                aria-hidden="true"
                className={`ui-absolute ui-flex ui-justify-center ui-items-center ui-top-2/4 ui-left-2/4
               -ui-translate-x-2/4 -ui-translate-y-2/4`}
              >
                {thumbIcon}
              </span>
            ) : null}
          </RadixSwitch.Thumb>
        </RadixSwitch.Root>
      </div>
    </>
  )
);
