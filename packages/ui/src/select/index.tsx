import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cx } from "../cx";
import { selectTriggerStyles } from "./styles";
import type { VariantProps } from "cva";

export type SelectProps = {
  items?: { value: string; label: string }[];
  placeholder?: string;
} & RadixSelect.SelectProps &
  VariantProps<typeof selectTriggerStyles>;

export const Select = ({ items = [], placeholder, fullWidth, size, ...props }: SelectProps) => (
  <RadixSelect.Root {...props}>
    <RadixSelect.Trigger className={selectTriggerStyles({ fullWidth, size })}>
      <RadixSelect.Value
        className="text-neutral-600 dark:text-neutral-400"
        placeholder={placeholder || "Select item..."}
      />
      <RadixSelect.Icon className="text-neutral-200 w-4 h-4">
        <ChevronDown size={"100%"} />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content
        position="popper"
        className={`overflow-hidden border  translate-y-1 bg-white border-neutral-100
        dark:bg-neutral-800 rounded-md  dark:border-neutral-700
        min-w-[var(--radix-select-trigger-width)]`}
      >
        <RadixSelect.ScrollUpButton
          className={`flex items-center justify-center h-[25px] 
        text-neutral-600 cursor-default`}
        >
          <ChevronUp />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="p-[5px]">
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
          className={`flex items-center justify-center h-[25px] 
        bg-primary-50 text-primary-400 cursor-default`}
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
          `text-sm leading-none text-neutral-800 dark:text-neutral-100 rounded-[3px] 
          flex items-center pr-[35px] pl-[25px] relative select-none 
          data-[disabled]:text-neutral-500  h-8 
           data-[disabled]:pointer-events-none data-[highlighted]:outline-none 
           data-[highlighted]:bg-primary-200/30 data-[highlighted]:dark:bg-primary-600/30 
           data-[highlighted]:text-primary-600 data-[highlighted]:dark:text-primary-200
           data-[state=checked]:bg-primary-600 data-[state=checked]:text-white 
           data-[state=checked]:dark:bg-primary-500 data-[state=checked]:dark:text-white
           `,
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator
          className={`absolute left-1 w-4 inline-flex 
        items-center justify-center`}
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
          className={`px-[25px] text-xs leading-[25px] dark:text-gray-300 
        text-gray-500`}
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
