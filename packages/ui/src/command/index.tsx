import { Command as CommandPrim } from "cmdk";
import { ComponentPropsWithRef, forwardRef } from "react";
import { Dialog } from "../dialog";
import { CommandProvider, useCommandProps } from "./command.context";
import type { ComponentPropsWithoutRef } from "react";
import type { DialogProps, DialogContentProps } from "../dialog";

type CommandProps = {
  label?: string | undefined;
  shouldFilter?: boolean | undefined;
  filter?: ((value: string, search: string) => number) | undefined;
  value?: string | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  loop?: boolean | undefined;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

type PropTypes = {
  commandProps?: CommandProps;
  contentProps?: DialogContentProps;
  children?: React.ReactNode;
} & Omit<DialogProps, "children">;

type ItemProps = {
  disabled?: boolean | undefined;
  onSelect?: ((value: string) => void) | undefined;
  value?: string | undefined;
  className?: string;
  children?: React.ReactNode;
};

function Item({ children, ...props }: ItemProps) {
  return (
    <CommandPrim.Item
      {...props}
      className={`text-gray-800 dark:text-gray-100  p-3 rounded-md 
    cursor-pointer text-base 
    data-[selected=true]:bg-primary-200/30 data-[selected=true]:dark:bg-primary-600/30`}
    >
      {children}
    </CommandPrim.Item>
  );
}

type InputProps = { value?: string } & Omit<ComponentPropsWithRef<"input">, "crossOrigin" | "value" | "type">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
        <circle cx="11" cy="11" r="8" />
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

function Group(props: GroupProps) {
  return <CommandPrim.Group {...props} className="text-gray-700 dark:text-gray-300 space-y-1 text-sm" />;
}

function Seperator() {
  return <CommandPrim.Separator className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-700 my-4 block" />;
}

type ListProps = {
  emptyMessage?: string;
} & ComponentPropsWithoutRef<"div">;

function List({ emptyMessage, children, ...props }: ListProps) {
  return (
    <CommandPrim.List {...props} className="space-y-2 mb-4 px-5 py-2">
      <CommandPrim.Empty className="text-gray-800 dark:text-gray-100">
        {emptyMessage || "No results found"}
      </CommandPrim.Empty>
      {children}
    </CommandPrim.List>
  );
}

export function Command({ children, contentProps, onOpenChange, commandProps, ...props }: PropTypes) {
  return (
    <Dialog {...props} onOpenChange={onOpenChange}>
      <CommandProvider {...commandProps} onClose={onOpenChange ? () => onOpenChange(false) : undefined}>
        <Dialog.Content {...contentProps} noPadding>
          <CommandPrim>{children}</CommandPrim>
        </Dialog.Content>
      </CommandProvider>
    </Dialog>
  );
}

Command.Item = Item;
Command.Seperator = Seperator;
Command.Group = Group;
Command.List = List;
Command.Input = Input;
