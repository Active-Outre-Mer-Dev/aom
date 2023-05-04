"use client";
import * as RadixTabs from "@radix-ui/react-tabs";
import { cardStyles } from "../../index";
import { cx } from "../../cx";
import { VariantProps } from "cva";

function List(props: RadixTabs.TabsListProps) {
  return (
    <RadixTabs.List
      {...props}
      className={`ui-shrink-0 ui-border-b ui-border-neutral-300 dark:ui-border-neutral-700 ui-gap-1 ui-h-10
       ui-flex`}
    >
      {props.children}
    </RadixTabs.List>
  );
}

type TriggerProps = { customBg?: boolean } & RadixTabs.TabsTriggerProps;

function Trigger({ customBg, ...props }: TriggerProps) {
  return (
    <RadixTabs.Trigger
      {...props}
      className={cx(
        `ui-relative ui-text-neutral-800 dark:ui-text-neutral-100 ui-px-5 ui-flex-1 ui-flex ui-items-center 
        ui-justify-center ui-rounded-t-md ui-text-[15px] ui-leading-none ui-select-none  
        ui-outline-none ui-cursor-default hover:ui-cursor-pointer ui-duration-200 ui-ease-out 
        data-[state=inactive]:dark:ui-text-neutral-300 data-[state=inactive]:ui-text-neutral-600
        data-[state=inactive]:hover:dark:ui-bg-neutral-800/50 
        data-[state=inactive]:hover:ui-bg-neutral-300/10`,
        customBg ? "" : `ui-group`,
        props.className
      )}
    >
      {customBg ? (
        props.children
      ) : (
        <>
          <div
            className={`ui-absolute group-data-[state=active]:ui-block ui-hidden ui-bg-primary-600 
            dark:ui-bg-primary-500 ui-bottom-0 ui-h-[2px] ui-w-full ui-z-[5]`}
          />
          <span className="ui-relative">{props.children}</span>
        </>
      )}
    </RadixTabs.Trigger>
  );
}

function Content({
  className,
  variant = "outline",
  ...props
}: RadixTabs.TabsContentProps & VariantProps<typeof cardStyles>) {
  return (
    <RadixTabs.Content {...props} className={cx(cardStyles({ className, variant }), "ui-translate-y-2")}>
      {props.children}
    </RadixTabs.Content>
  );
}

export function Tabs(props: RadixTabs.TabsProps) {
  return (
    <RadixTabs.Root {...props} className={cx(`ui-flex ui-flex-col ui-min-w-[300px]`, props.className)}>
      {props.children}
    </RadixTabs.Root>
  );
}
Tabs.Content = Content;
Tabs.List = List;
Tabs.Trigger = Trigger;
