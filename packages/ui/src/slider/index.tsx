import * as RadixSlider from "@radix-ui/react-slider";
import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import { cx } from "../cx";

export type SliderProps = RadixSlider.SliderProps & ComponentPropsWithRef<"input">;

export const Slider = forwardRef<HTMLInputElement, SliderProps>((props, ref) => (
  <>
    <RadixSlider.Root
      ref={ref}
      {...props}
      className={cx(
        "ui-relative ui-flex ui-items-center ui-select-none ui-touch-none ui-h-5",
        props.className
      )}
    >
      <RadixSlider.Track
        className={`ui-bg-neutral-200 dark:ui-bg-neutral-700 ui-relative ui-grow
       ui-rounded-full ui-h-[3px]`}
      >
        <RadixSlider.Range
          className={`ui-absolute ui-bg-primary-600 dark:ui-bg-primary-500 ui-rounded-full 
        ui-h-full`}
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className={`ui-block ui-w-5 ui-h-5 ui-bg-primary-600 dark:ui-bg-primary-500 ui-outline-none 
        focus:ui-ring-8 ui-ring-primary-600/10 dark:ui-ring-primary-200/10
       ui-rounded-[10px] `}
      />
    </RadixSlider.Root>
  </>
));

Slider.displayName = "Slider";
