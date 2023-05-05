"use client";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef } from "react";
import { Label } from "../label";

type PropTypes = RadixCheckbox.CheckboxProps & ComponentPropsWithRef<"input"> & { label?: string };

export const Checkbox = forwardRef<HTMLButtonElement, PropTypes>(({ label, ...props }, ref) => {
  const id = useId();
  return (
    <>
      <div className="ui-flex ui-gap-2">
        <RadixCheckbox.Root
          {...props}
          ref={ref}
          className={`ui-flex ui-h-5 disabled:ui-grayscale ui-w-5 ui-border ui-border-neutral-300 dark:ui-border-neutral-700 
          ui-appearance-none ui-items-center ui-justify-center ui-rounded-sm  ui-outline-none 
          data-[state=checked]:dark:ui-border-primary-500 data-[state=checked]:bg-border-primary-600`}
          id={props.id || id}
        >
          <RadixCheckbox.Indicator
            className={`ui-text-primary-50 ui-bg-primary-600
           dark:ui-bg-primary-500 data-[state=unchecked]:ui-opacity-0 data-[state=checked]:ui-opacity-100`}
          >
            <Check size={"100%"} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label ? (
          <Label disabled={props.disabled} htmlFor={props.id || id}>
            {label}
          </Label>
        ) : null}
      </div>
    </>
  );
});
