import { forwardRef } from "react";
import { Label } from "../label";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cva } from "cva";
import type { VariantProps } from "cva";

const styles = cva(
  `bg-neutral-200  data-[state=checked]:bg-primary-600 dark:bg-neutral-700 
rounded-full relative data-[state=checked]:dark:bg-primary-500 outline-none cursor-default`,
  {
    variants: {
      size: {
        sm: "w-[36px] h-4",
        md: "w-[42px] h-5",
        lg: "w-[52px] h-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const thumbStyles = cva(
  `block bg-neutral-50  rounded-full overflow-hidden  relative
transition-transform duration-100 translate-x-0.5 will-change-transform 
`,
  {
    variants: {
      size: {
        sm: "w-3 h-3 data-[state=checked]:translate-x-[22px]",
        md: "w-4 h-4 data-[state=checked]:translate-x-[24px]",
        lg: "w-5 h-5 data-[state=checked]:translate-x-[30px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export type SwitchProps = {
  label?: string;
  thumbIcon?: React.ReactNode;
} & RadixSwitch.SwitchProps &
  VariantProps<typeof styles>;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, size, thumbIcon, ...props }, ref) => (
    <>
      <div className="flex items-center gap-2">
        {props.label ? <Label htmlFor="airplane-mode">{props.label}</Label> : null}
        <RadixSwitch.Root ref={ref} {...props} className={styles({ className, size })} id="airplane-mode">
          <RadixSwitch.Thumb className={thumbStyles({ size })}>
            {thumbIcon ? (
              <span
                aria-hidden="true"
                className={`absolute flex justify-center items-center top-2/4 left-2/4
               -translate-x-2/4 -translate-y-2/4`}
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

Switch.displayName = "Switch";
