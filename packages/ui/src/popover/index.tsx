import * as RadixPopover from "@radix-ui/react-popover";
import { X } from "lucide-react";

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
      <X size={"85%"} />
    </RadixPopover.Close>
  );
}

export function Popover(props: RadixPopover.PopoverProps) {
  return <RadixPopover.Root {...props} />;
}

Popover.Content = Content;
Popover.Trigger = Trigger;
Popover.Close = Close;
