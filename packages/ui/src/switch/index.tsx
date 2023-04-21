"use client";
import { forwardRef } from "react";
import { Label } from "../label";
import * as RadixSwitch from "@radix-ui/react-switch";

type PropTypes = {
  label?: string;
} & RadixSwitch.SwitchProps;

export const Switch = forwardRef<HTMLInputElement, PropTypes>((props, ref) => (
  <>
    <div className="ui-flex ui-items-center ui-gap-2">
      {props.label ? <Label htmlFor="airplane-mode">Airplane mode</Label> : null}
      <RadixSwitch.Root
        ref={ref}
        {...props}
        className={`ui-w-[42px] ui-h-5 ui-neutral-700 ui-bg-neutral-200 
        data-[state=checked]:ui-bg-primary-600 dark:ui-bg-neutral-700 ui-rounded-full 
        ui-relative ui-focus:shadow-[0_0_0_2px] focus:shadow-black
         data-[state=checked]:dark:ui-bg-primary-400 ui-outline-none ui-cursor-default`}
        id="airplane-mode"
      >
        <RadixSwitch.Thumb
          className={`ui-block ui-w-[16px] ui-h-[16px] ui-bg-neutral-50 ui-rounded-full  
        ui-transition-transform ui-duration-100 ui-translate-x-0.5 ui-will-change-transform 
        data-[state=checked]:ui-translate-x-[24px]`}
        />
      </RadixSwitch.Root>
    </div>
  </>
));
