import * as RadixDropdown from "@radix-ui/react-dropdown-menu";

function Item({
  icon,
  rightSection,
  ...props
}: RadixDropdown.DropdownMenuItemProps & { icon?: React.ReactNode; rightSection?: React.ReactNode }) {
  return (
    <RadixDropdown.Item
      {...props}
      className={`ui-group ui-text-sm ui-leading-none  ui-rounded-[3px] ui-flex ui-items-center
  ui-h-8 ui-px-[5px] ui-relative ui-pl-[25px] ui-select-none ui-outline-none 
  dark:ui-text-neutral-100 ui-text-neutral-900  
  data-[disabled]:ui-text-neutral-200 data-[highlighted]:ui-bg-primary-600 
  data-[highlighted]:ui-text-primary-50 data-[disabled]:dark:ui-text-neutral-500 
  data-[highlighted]:dark:ui-bg-primary-500 dark:ui-text-neutral-100`}
    >
      {icon ? <span className="mr-2 inline-block">{icon}</span> : null}
      {props.children}
      {rightSection ? (
        <div
          className={`ml-auto pl-[20px] ui-text-neutral-400 group-data-[highlighted]:ui-text-primary-50 
            group-data-[disabled]:dark:ui-text-neutral-600 dark:ui-text-neutral-500 
            group-data-[disabled]:ui-text-neutral-200`}
        >
          {rightSection}
        </div>
      ) : null}
    </RadixDropdown.Item>
  );
}

type ContentProps = {
  portalProps?: RadixDropdown.DropdownMenuPortalProps;
  arrow?: boolean;
} & RadixDropdown.DropdownMenuContentProps;

function Content({ arrow, portalProps, ...props }: ContentProps) {
  return (
    <RadixDropdown.Portal {...portalProps}>
      <RadixDropdown.Content
        {...props}
        sideOffset={5}
        className={`ui-min-w-[220px] ui-ring-1 dark:ui-ring-0 ui-ring-neutral-100 ui-bg-white ui-rounded-md
         ui-p-[5px]  
        ui-will-change-[opacity,transform] dark:ui-bg-neutral-800
  `}
      >
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
  return (
    <RadixDropdown.Label
      {...props}
      className={`ui-text-xs ui-h-5 dark:ui-text-neutral-300 ui-font-medium
   ui-flex ui-items-center ui-text-neutral-500 ui-mb-[2px] ui-px-[5px] ui-relative ui-pl-[25px]`}
    />
  );
}

function Separator(props: RadixDropdown.DropdownMenuSeparatorProps) {
  return (
    <RadixDropdown.Separator
      {...props}
      className="ui-h-[1px] dark:ui-bg-neutral-700 ui-bg-neutral-100 ui-my-[5px]"
    />
  );
}

Dropdown.Item = Item;
Dropdown.Content = Content;
Dropdown.Trigger = Trigger;
Dropdown.Label = Label;
Dropdown.Separator = Separator;
