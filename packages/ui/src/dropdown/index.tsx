import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cva } from "cva";
import { cx } from "../cx";
import type { VariantProps } from "cva";

const itemStyles = cva(
  `group text-sm leading-none rounded-[3px] flex items-center h-8 px-[5px]
   relative pl-[25px] select-none outline-none`,
  {
    variants: {
      color: {
        warn: `text-warn-600 dark:text-warn-200 data-[highlighted]:bg-warn-200/30
        data-[highlighted]:dark:bg-warn-600/30`,
        error: `text-error-600 dark:text-error-200 
        data-[highlighted]:bg-error-200/30 data-[highlighted]:dark:bg-error-600/30`,
        default: `dark:text-gray-100 text-gray-900  
      data-[disabled]:text-gray-200 data-[highlighted]:bg-primary-200/30 
      data-[highlighted]:text-primary-600 data-[highlighted]:dark:text-primary-200
      data-[disabled]:dark:text-gray-500 data-[highlighted]:dark:bg-primary-600/30`
      }
    },
    defaultVariants: {
      color: "default"
    }
  }
);

export type DropdownItemProps = VariantProps<typeof itemStyles> & {
  icon?: React.ReactNode;
  rightSection?: React.ReactNode;
} & RadixDropdown.MenuItemProps;

function Item({ icon, rightSection, color, className, ...props }: DropdownItemProps) {
  return (
    <RadixDropdown.Item {...props} className={itemStyles({ className, color })}>
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

function Content({ arrow, portalProps, ...props }: DropdownContentProps) {
  const className = cx(
    `min-w-[220px] bg-white rounded-md p-[5px] 
  dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700
  `,
    props.className
  );
  return (
    <RadixDropdown.Portal {...portalProps}>
      <RadixDropdown.Content {...props} sideOffset={5} className={className}>
        {props.children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

function Trigger(props: RadixDropdown.DropdownMenuTriggerProps) {
  return <RadixDropdown.Trigger {...props} />;
}

export function Dropdown(props: RadixDropdown.DropdownMenuProps) {
  return <RadixDropdown.Root {...props} />;
}

function Label(props: RadixDropdown.DropdownMenuLabelProps) {
  const className = cx(
    `text-xs h-5 dark:text-gray-300 font-medium
  flex items-center text-gray-500 mb-[2px] px-[5px] relative pl-[25px]`,
    props.className
  );
  return <RadixDropdown.Label {...props} className={className} />;
}

function Separator(props: RadixDropdown.DropdownMenuSeparatorProps) {
  const className = cx("h-[1px] dark:bg-neutral-700 bg-neutral-100 my-[5px]", props.className);
  return <RadixDropdown.Separator {...props} className={className} />;
}

Dropdown.Item = Item;
Dropdown.Content = Content;
Dropdown.Trigger = Trigger;
Dropdown.Label = Label;
Dropdown.Separator = Separator;
