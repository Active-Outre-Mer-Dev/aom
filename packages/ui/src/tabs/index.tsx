import * as RadixTabs from "@radix-ui/react-tabs";
import { cardStyles } from "../card/styles";
import { cx } from "../cx";
import type { VariantProps } from "cva";

function List(props: RadixTabs.TabsListProps) {
  return (
    <RadixTabs.List
      {...props}
      className={`shrink-0 border-b border-neutral-300 dark:border-neutral-700 gap-1 h-10
       flex`}
    >
      {props.children}
    </RadixTabs.List>
  );
}

export type TabsTriggerProps = { customBg?: boolean } & RadixTabs.TabsTriggerProps;

function Trigger({ customBg, ...props }: TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      {...props}
      className={cx(
        `relative text-neutral-800 dark:text-neutral-100 px-5 flex-1 flex items-center 
        justify-center rounded-t-md text-[15px] leading-none select-none  
        outline-none cursor-default hover:cursor-pointer duration-200 ease-out 
        data-[state=inactive]:dark:text-neutral-300 data-[state=inactive]:text-neutral-600
        data-[state=inactive]:hover:dark:bg-neutral-800/50 
        data-[state=inactive]:hover:bg-neutral-300/10`,
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

function Content({ className, variant = "outline", ...props }: TabsContentProps) {
  return (
    <RadixTabs.Content {...props} className={cx(cardStyles({ className, variant }), "translate-y-2")}>
      {props.children}
    </RadixTabs.Content>
  );
}

export function Tabs(props: RadixTabs.TabsProps) {
  return (
    <RadixTabs.Root {...props} className={cx(`flex flex-col min-w-[300px]`, props.className)}>
      {props.children}
    </RadixTabs.Root>
  );
}
Tabs.Content = Content;
Tabs.List = List;
Tabs.Trigger = Trigger;
