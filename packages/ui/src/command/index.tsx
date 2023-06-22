import { Command as CommandPrim } from "cmdk";
import { ComponentPropsWithRef, forwardRef } from "react";
import { Dialog } from "../dialog";
import { Search, X } from "lucide-react";
import { CommandProvider, useCommandProps } from "./command.context";
import type { ComponentPropsWithoutRef } from "react";

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrim>;

type PropTypes = {
  commandProps?: CommandProps;
  contentProps?: ComponentPropsWithoutRef<typeof Dialog.Content>;
} & ComponentPropsWithoutRef<typeof Dialog>;

export function Command({ children, contentProps, onOpenChange, ...props }: PropTypes) {
  return (
    <Dialog {...props} onOpenChange={onOpenChange}>
      <CommandProvider onClose={onOpenChange ? () => onOpenChange(false) : undefined}>
        <Dialog.Content {...contentProps} noPadding>
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

function Item(props: ItemProps) {
  return (
    <CommandPrim.Item
      {...props}
      className={`text-gray-800 dark:text-gray-100  p-3 rounded-md 
    cursor-pointer text-base hover:bg-primary-200/30 hover:dark:bg-primary-600/30 
    data-[selected=true]:bg-primary-200/30 data-[selected=true]:dark:bg-primary-600/30`}
    />
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
      <Search size={16} className="basis-5 text-gray-600 dark:text-gray-200" />
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
        <X size={16} className="basis-5 text-gray-600 dark:text-gray-200" />
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
} & ComponentPropsWithoutRef<typeof CommandPrim.List>;

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

Command.Item = Item;
Command.Seperator = Seperator;
Command.Group = Group;
Command.List = List;
Command.Input = Input;
