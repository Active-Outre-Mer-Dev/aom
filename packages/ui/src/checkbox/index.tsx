"use client";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { forwardRef, useId } from "react";
import type { ComponentPropsWithRef } from "react";
import { Label } from "../label";

type CheckboxProps = RadixCheckbox.CheckboxProps & ComponentPropsWithRef<"input"> & { label?: string };

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ label, ...props }, ref) => {
  const id = useId();
  return (
    <>
      <div className="flex gap-2">
        <RadixCheckbox.Root
          {...props}
          ref={ref}
          className={`flex h-5 disabled:grayscale w-5 border border-neutral-300 dark:border-neutral-700 
          appearance-none items-center justify-center rounded-sm  outline-none 
          data-[state=checked]:dark:border-primary-500 data-[state=checked]:bg-border-primary-600`}
          id={props.id || id}
        >
          <RadixCheckbox.Indicator
            className={`text-primary-50 bg-primary-600
           dark:bg-primary-500 data-[state=unchecked]:opacity-0 data-[state=checked]:opacity-100`}
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
