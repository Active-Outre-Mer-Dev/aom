import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cx } from "../cx";

export type SelectProps = {
  items?: { value: string; label: string }[];
  placeholder?: string;
  fullWidth?: boolean;
} & RadixSelect.SelectProps;

export const Select = ({ items = [], placeholder, fullWidth, ...props }: SelectProps) => (
  <RadixSelect.Root {...props}>
    <RadixSelect.Trigger
      className={cx(
        `inline-flex items-center min-w-[150px] justify-between rounded px-[15px] 
      text-sm leading-none h-8 gap-[5px] bg-white text-neutral-700 
      dark:bg-neutral-800 focus:ring-2 dark:ring-offset-neutral-900 focus:ring-offset-2 
      focus:ring-primary-600 focus:dark:ring-primary-500 border border-neutral-100
      dark:border-neutral-700
      dark:text-neutral-100  outline-none`,
        fullWidth ? "w-full" : "min-w-[150px]"
      )}
    >
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
        min-w-[--radix-select-trigger-width]`}
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
          className={`px-[25px] text-xs leading-[25px] dark:text-neutral-300 
        text-neutral-500`}
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
