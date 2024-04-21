import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cx } from "../../src/cx";
import type { VariantProps } from "cva";
import { itemStyles } from "../../styles/dropdown.styles";

export type DropdownItemProps = VariantProps<typeof itemStyles> & {
  icon?: React.ReactNode;
  rightSection?: React.ReactNode;
} & RadixDropdown.MenuItemProps;

export function DropdownItem({ icon, rightSection, color, className, ...props }: DropdownItemProps) {
  return (
    <RadixDropdown.Item
      {...props}
      className={itemStyles({ className, color })}
    >
      {icon ? <span className="mr-2 inline-block">{icon}</span> : null}
      {props.children}
      {rightSection ? (
        <div
          className={`ml-auto pl-[20px] text-gray-400 group-data-[highlighted]:text-primary-300 
          group-data-[highlighted]:dark:text-primary-400
            group-data-[disabled]:dark:text-gray-600 dark:text-gray-500 
            group-data-[disabled]:text-gray-200`}
        >
          {rightSection}
        </div>
      ) : null}
    </RadixDropdown.Item>
  );
}

export type DropdownContentProps = {
  portalProps?: RadixDropdown.DropdownMenuPortalProps;
  arrow?: boolean;
} & RadixDropdown.DropdownMenuContentProps;

export function DropdownContent({ arrow, portalProps, ...props }: DropdownContentProps) {
  const className = cx(
    `min-w-[220px] bg-white rounded-md p-[5px] 
  dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700
  `,
    props.className
  );
  return (
    <RadixDropdown.Portal {...portalProps}>
      <RadixDropdown.Content
        {...props}
        sideOffset={5}
        className={className}
      >
        {props.children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

export function DropdownTrigger(props: RadixDropdown.DropdownMenuTriggerProps) {
  return <RadixDropdown.Trigger {...props} />;
}

export function Dropdown(props: RadixDropdown.DropdownMenuProps) {
  return <RadixDropdown.Root {...props} />;
}

export function DropdownLabel(props: RadixDropdown.DropdownMenuLabelProps) {
  const className = cx(
    `text-xs h-5 dark:text-gray-300 font-medium
  flex items-center text-gray-500 mb-[2px] px-[5px] relative pl-[25px]`,
    props.className
  );
  return (
    <RadixDropdown.Label
      {...props}
      className={className}
    />
  );
}

export function DropdownSeparator(props: RadixDropdown.DropdownMenuSeparatorProps) {
  const className = cx("h-[1px] dark:bg-neutral-700 bg-neutral-100 my-[5px]", props.className);
  return (
    <RadixDropdown.Separator
      {...props}
      className={className}
    />
  );
}

export function DropdownSub(props: RadixDropdown.DropdownMenuSubProps) {
  return <RadixDropdown.Sub {...props} />;
}

export type DropdownSubTriggerProps = VariantProps<typeof itemStyles> &
  RadixDropdown.DropdownMenuSubTriggerProps;

export function DropdownSubTrigger({ color, className, ...props }: DropdownSubTriggerProps) {
  return (
    <RadixDropdown.SubTrigger
      {...props}
      className={itemStyles({ className, color })}
    />
  );
}

export type SubContentProps = {
  portalProps?: RadixDropdown.MenuPortalProps;
} & RadixDropdown.MenuSubContentProps;

export function DropdownSubContent({ portalProps, ...props }: SubContentProps) {
  const className = cx(
    `min-w-[220px] bg-white rounded-md p-[5px] 
      dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700
      `,
    props.className
  );
  return (
    <RadixDropdown.Portal {...portalProps}>
      <RadixDropdown.SubContent
        {...props}
        className={className}
      />
    </RadixDropdown.Portal>
  );
}

Dropdown.Sub = DropdownSub;
Dropdown.SubContent = DropdownSubContent;
Dropdown.SubTrigger = DropdownSubTrigger;
Dropdown.Item = DropdownItem;
Dropdown.Content = DropdownContent;
Dropdown.Trigger = DropdownTrigger;
Dropdown.Label = DropdownLabel;
Dropdown.Separator = DropdownSeparator;
