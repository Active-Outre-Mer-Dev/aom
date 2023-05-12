"use client";
import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cx } from "../cx";

type PropTypes = {
  items?: { value: string; label: string }[];
  placeholder?: string;
  fullWidth?: boolean;
} & RadixSelect.SelectProps;

export const Select = ({ items = [], placeholder, fullWidth, ...props }: PropTypes) => (
  <RadixSelect.Root {...props}>
    <RadixSelect.Trigger
      className={cx(
        `ui-inline-flex ui-items-center ui-min-w-[150px] ui-justify-between ui-rounded ui-px-[15px] 
      ui-text-[13px] ui-leading-none ui-h-[35px] ui-gap-[5px] ui-bg-neutral-50 ui-text-neutral-700 
      dark:ui-bg-neutral-800 focus:ui-ring-2 dark:ui-ring-offset-neutral-900 focus:ui-ring-offset-2 
      focus:ui-ring-primary-600 focus:dark:ui-ring-primary-500
      dark:ui-text-neutral-100  ui-outline-none`,
        fullWidth ? "ui-w-full" : "ui-min-w-[150px]"
      )}
    >
      <RadixSelect.Value
        className="ui-text-neutral-600 dark:ui-text-neutral-400"
        placeholder={placeholder || "Select item..."}
      />
      <RadixSelect.Icon className="ui-text-neutral-200 ui-w-4 ui-h-4">
        <ChevronDown size={"100%"} />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content
        position="popper"
        className={`ui-overflow-hidden  ui-translate-y-1 ui-bg-neutral-50
        dark:ui-bg-neutral-800 ui-rounded-md ui-min-w-[--radix-select-trigger-width]`}
      >
        <RadixSelect.ScrollUpButton
          className={`ui-flex ui-items-center ui-justify-center ui-h-[25px] 
        ui-text-neutral-600 ui-cursor-default`}
        >
          <ChevronUp />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="ui-p-[5px]">
          {items.length > 0
            ? items.map(item => {
                return (
                  <Item key={item.value} value={item.value}>
                    {item.label}
                  </Item>
                );
              })
            : props.children}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton
          className={`ui-flex ui-items-center ui-justify-center ui-h-[25px] 
        ui-bg-primary-50 ui-text-primary-400 ui-cursor-default`}
        >
          <ChevronDown />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);

const Item = React.forwardRef<HTMLDivElement, RadixSelect.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={cx(
          `ui-text-[13px] ui-leading-none ui-text-neutral-800 dark:ui-text-neutral-100 ui-rounded-[3px] 
          ui-flex ui-items-center ui-h-[25px] ui-pr-[35px] ui-pl-[25px] ui-relative ui-select-none 
          data-[disabled]:ui-text-neutral-500 
           data-[disabled]:ui-pointer-events-none data-[highlighted]:ui-outline-none 
           data-[highlighted]:ui-bg-primary-600 data-[highlighted]:dark:ui-bg-primary-500 
           data-[highlighted]:ui-text-primary-50`,
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator
          className={`ui-absolute ui-left-1 ui-w-4 ui-inline-flex 
        ui-items-center ui-justify-center`}
        >
          <Check size={"100%"} />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    );
  }
);

function Group(props: RadixSelect.SelectGroupProps & { label: string }) {
  return (
    <>
      <RadixSelect.Group>
        <RadixSelect.Label
          className={`ui-px-[25px] ui-text-xs ui-leading-[25px] dark:ui-text-neutral-300 
        ui-text-neutral-500`}
        >
          {props.label}
        </RadixSelect.Label>
        {props.children}
      </RadixSelect.Group>
    </>
  );
}

Select.Group = Group;
Select.Item = Item;
