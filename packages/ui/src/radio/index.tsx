"use client";
import * as RadixRadio from "@radix-ui/react-radio-group";
import { useId } from "react";
import { Label } from "../label";

type PropTypes = { label?: string } & RadixRadio.RadioGroupItemProps;

export function Radio({ label, ...props }: PropTypes) {
  const id = useId();
  return (
    <div className="ui-flex ui-items-cente ui-gap-2">
      <RadixRadio.Item
        {...props}
        id={props.id || id}
        className={`data-[state=checked]:ui-bg-primary-600 data-[state=checked]:dark:ui-bg-primary-500 
        ui-bg-neutral-200 dark:ui-bg-neutral-700 ui-overflow-hidden ui-w-5 ui-h-5 ui-rounded-full ui-outline-none 
        ui-cursor-default ui-duration-200 ui-ease-out`}
      >
        <RadixRadio.Indicator
          className={`ui-flex ui-overflow-hidden ui-bg-primary-600 dark:ui-bg-primary-500 ui-items-center 
          ui-justify-center ui-w-full ui-h-full ui-relative after:ui-content-[''] after:ui-block 
          after:ui-w-2/4 after:ui-h-2/4 after:ui-rounded-full after:ui-bg-primary-50`}
        />
      </RadixRadio.Item>
      {label ? <Label htmlFor={props.id || id}>{label}</Label> : null}
    </div>
  );
}

function Group(props: RadixRadio.RadioGroupProps) {
  return (
    <RadixRadio.Root {...props} className="ui-flex ui-flex-col ui-gap-2.5">
      {props.children}
    </RadixRadio.Root>
  );
}

Radio.Group = Group;
