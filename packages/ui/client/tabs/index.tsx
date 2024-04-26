import * as RadixTabs from "@radix-ui/react-tabs";
import { cardStyles } from "../../src/card/styles";
import { cx } from "../../src/cx";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "cva";

export type TabsListProps = {
  grow?: boolean;
} & RadixTabs.TabsListProps;

export function TabsList({ grow, ...props }: TabsListProps) {
  return (
    <RadixTabs.List
      {...props}
      data-grow={grow}
      className={`shrink-0 border-b border-neutral-300 dark:border-neutral-700 gap-1 h-10 group
       flex`}
    >
      {props.children}
    </RadixTabs.List>
  );
}

export type TabsTriggerProps = { customBg?: boolean } & RadixTabs.TabsTriggerProps;

export function TabsTrigger({ customBg, ...props }: TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      {...props}
      className={cx(
        `relative text-gray-800 dark:text-gray-100 px-5 flex items-center group-data-[grow=true]:grow
        justify-center rounded-t-md text-[15px] leading-none select-none  
        outline-none cursor-default hover:cursor-pointer duration-200 ease-out 
        data-[state=inactive]:dark:text-gray-300 data-[state=inactive]:text-gray-600
        data-[state=inactive]:hover:dark:bg-neutral-800/50 
        data-[state=inactive]:hover:bg-neutral-300/10
        data-[state=inactive]:data-[disabled]:text-gray-400 
        data-[state=inactive]:data-[disabled]:dark:text-gray-500
        data-[disabled]:hover:bg-white/0 data-[disabled]:hover:dark:bg-white/0
         data-[disabled]:cursor-default`,
        customBg ? "" : `group`,
        props.className
      )}
    >
      {customBg ? (
        props.children
      ) : (
        <>
          <div
            className={`absolute group-data-[state=active]:block hidden bg-primary-600 
            dark:bg-primary-500 bottom-0 h-[2px] w-full z-[5]`}
          />
          <span className="relative">{props.children}</span>
        </>
      )}
    </RadixTabs.Trigger>
  );
}

export type TabsContentProps = RadixTabs.TabsContentProps & VariantProps<typeof cardStyles>;

export function TabsContent({ variant = "outline", noPadding, ...props }: TabsContentProps) {
  const classes = cx("p-4 translate-y-2", props.className);
  const className = twMerge(classes);
  return (
    <RadixTabs.Content
      {...props}
      className={className}
    >
      {props.children}
    </RadixTabs.Content>
  );
}

export function Tabs(props: RadixTabs.TabsProps) {
  return (
    <RadixTabs.Root
      {...props}
      className={cx(`flex flex-col min-w-[300px]`, props.className)}
    >
      {props.children}
    </RadixTabs.Root>
  );
}
Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
