import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { forwardRef, useId } from "react";
import { Label } from "../label";
import { checkboxStyles } from "./styles";
import type { VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

type CheckboxProps = RadixCheckbox.CheckboxProps &
  ComponentPropsWithRef<"input"> & { label?: string } & VariantProps<typeof checkboxStyles>;

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, size, radius, ...props }, ref) => {
    const id = useId();
    return (
      <>
        <div className="flex gap-2 items-center">
          <RadixCheckbox.Root
            {...props}
            ref={ref}
            className={checkboxStyles({ className: props.className, radius, size })}
            id={props.id || id}
          >
            <RadixCheckbox.Indicator
              className={`text-primary-50 bg-primary-600 h-full w-full items-center flex justify-center
           dark:bg-primary-500 data-[state=unchecked]:opacity-0 data-[state=checked]:opacity-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"85%"}
                height={"85%"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
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
  }
);
