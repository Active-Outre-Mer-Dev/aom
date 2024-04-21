import { Command as CommandPrim } from "cmdk";
import { ComponentPropsWithRef, forwardRef } from "react";
import { Dialog } from "../dialog";
import { CommandProvider, useCommandProps } from "./command.context";
import type { ComponentPropsWithoutRef } from "react";

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrim>;

type PropTypes = {
  commandProps?: CommandProps;
  contentProps?: ComponentPropsWithoutRef<typeof Dialog.Content>;
} & ComponentPropsWithoutRef<typeof Dialog>;

export function Command({ children, contentProps, onOpenChange, ...props }: PropTypes) {
  return (
    <Dialog
      {...props}
      onOpenChange={onOpenChange}
    >
      <CommandProvider onClose={onOpenChange ? () => onOpenChange(false) : undefined}>
        <Dialog.Content
          {...contentProps}
          noPadding
        >
          <CommandPrim>{children}</CommandPrim>
        </Dialog.Content>
      </CommandProvider>
    </Dialog>
  );
}

type ItemProps = {
  disabled?: boolean | undefined;
  onSelect?: ((value: string) => void) | undefined;
  value?: string | undefined;
  className?: string;
  children?: React.ReactNode;
};

export function CommandItem(props: ItemProps) {
  return (
    <CommandPrim.Item
      {...props}
      className={`text-gray-800 dark:text-gray-100  p-3 rounded-md 
    cursor-pointer text-base 
    data-[selected=true]:bg-primary-200/30 data-[selected=true]:dark:bg-primary-600/30`}
    />
  );
}

type InputProps = { value?: string } & Omit<ComponentPropsWithRef<"input">, "crossOrigin" | "value" | "type">;

export const CommandInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const commandProps = useCommandProps();
  const onClose = commandProps?.onClose;

  return (
    <div
      className={`rounded-t-md overflow-hidden flex gap-2 border-b
     border-b-neutral-100 dark:border-b-neutral-700
      items-center px-2 mb-4`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="basis-5 text-gray-600 dark:text-gray-200"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
        />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <CommandPrim.Input
        {...props}
        ref={ref}
        className={`appearance-none h-12 outline-none grow block bg-wite dark:bg-neutral-800 
  dark:text-gray-200`}
      />

      <button
        onClick={onClose}
        aria-label="Close command menu"
        className="basis-5 flex  items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="basis-5 text-gray-600 dark:text-gray-200"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
});

type GroupProps = ComponentPropsWithoutRef<"div"> & { heading?: string; value?: string };

export function CommandGroup(props: GroupProps) {
  return (
    <CommandPrim.Group
      {...props}
      className="text-gray-700 dark:text-gray-300 space-y-1 text-sm"
    />
  );
}

export function CommandSeperator() {
  return <CommandPrim.Separator className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-700 my-4 block" />;
}

type ListProps = {
  emptyMessage?: string;
} & ComponentPropsWithoutRef<typeof CommandPrim.List>;

export function CommandList({ emptyMessage, children, ...props }: ListProps) {
  return (
    <CommandPrim.List
      {...props}
      className="space-y-2 mb-4 px-5 py-2"
    >
      <CommandPrim.Empty className="text-gray-800 dark:text-gray-100">
        {emptyMessage || "No results found"}
      </CommandPrim.Empty>
      {children}
    </CommandPrim.List>
  );
}

Command.Item = CommandItem;
Command.Seperator = CommandSeperator;
Command.Group = CommandGroup;
Command.List = CommandList;
Command.Input = CommandInput;
