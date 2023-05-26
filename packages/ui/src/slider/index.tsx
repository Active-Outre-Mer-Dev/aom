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
      className={cx("relative flex items-center select-none touch-none h-5", props.className)}
    >
      <RadixSlider.Track
        className={`bg-neutral-200 dark:bg-neutral-700 relative grow
       rounded-full h-[3px]`}
      >
        <RadixSlider.Range
          className={`absolute bg-primary-600 dark:bg-primary-500 rounded-full 
        h-full`}
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className={`block w-5 h-5 bg-primary-600 dark:bg-primary-500 outline-none 
        focus:ring-8 ring-primary-600/10 dark:ring-primary-200/10
       rounded-[10px] `}
      />
    </RadixSlider.Root>
  </>
));

Slider.displayName = "Slider";
