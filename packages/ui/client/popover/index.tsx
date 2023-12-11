import * as RadixPopover from "@radix-ui/react-popover";

function Trigger(props: RadixPopover.PopoverTriggerProps) {
  return <RadixPopover.Trigger {...props} />;
}

type ContentProps = {
  portalProps?: RadixPopover.PopoverPortalProps;
} & RadixPopover.PopperContentProps;

function Content({ portalProps, ...props }: ContentProps) {
  return (
    <RadixPopover.Portal {...portalProps}>
      <RadixPopover.Content {...props}>{props.children}</RadixPopover.Content>
    </RadixPopover.Portal>
  );
}

function Close(props: RadixPopover.PopoverCloseProps) {
  return (
    <RadixPopover.Close
      {...props}
      className={`w-6 h-6 rounded-full inline-flex hover:bg-neutral-100 hover:dark:bg-neutral-700
     items-center justify-center text-neutral-700 dark:text-neutral-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"85%"}
        height={"85%"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </RadixPopover.Close>
  );
}

export function Popover(props: RadixPopover.PopoverProps) {
  return <RadixPopover.Root {...props} />;
}

Popover.Content = Content;
Popover.Trigger = Trigger;
Popover.Close = Close;
