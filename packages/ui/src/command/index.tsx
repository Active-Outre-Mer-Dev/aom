import { Command as CommandPrim } from "cmdk";
import { ComponentPropsWithoutRef } from "react";
import { Dialog } from "../dialog";
import { Search, X } from "lucide-react";

type CommandProps = ComponentPropsWithoutRef<typeof CommandPrim>;

type PropTypes = {
  commandProps?: CommandProps;
  contentProps?: ComponentPropsWithoutRef<typeof Dialog.Content>;
} & ComponentPropsWithoutRef<typeof Dialog>;

export function Command({ children, contentProps, ...props }: PropTypes) {
  return (
    <Dialog {...props}>
      <Dialog.Content {...contentProps} noPadding>
        <CommandPrim>{children}</CommandPrim>
      </Dialog.Content>
    </Dialog>
  );
}

type ItemProps = ComponentPropsWithoutRef<typeof CommandPrim.Item>;

function Item(props: ItemProps) {
  return (
    <CommandPrim.Item
      {...props}
      className={`dark:text-neutral-100 hover:bg-primary-600/30 p-3 rounded-md 
    cursor-pointer text-base first-of-type:`}
    />
  );
}

type InputProps = ComponentPropsWithoutRef<typeof CommandPrim.Input>;

function Input(props: InputProps) {
  return (
    <div
      className={`rounded-t-md overflow-hidden
   flex gap-2 border-b 
border-b-neutral-700  items-center px-2 mb-4`}
    >
      <Search size={16} className="basis-5 text-neutral-200" />
      <CommandPrim.Input
        {...props}
        className={`appearance-none h-12 outline-none grow block bg-wite dark:bg-neutral-800 
  dark:text-neutral-200`}
      />

      <button aria-label="Close command menu" className="basis-5 flex  items-center justify-center">
        <X size={16} className="basis-5 text-neutral-200" />
      </button>
    </div>
  );
}

type GroupProps = ComponentPropsWithoutRef<typeof CommandPrim.Group>;

function Group(props: GroupProps) {
  return <CommandPrim.Group {...props} className="text-neutral-300 space-y-1 text-sm" />;
}

function Seperator() {
  return <CommandPrim.Separator className="h-[1px] w-full dark:bg-neutral-700 my-4 block" />;
}

type ListProps = {
  emptyMessage?: string;
} & ComponentPropsWithoutRef<typeof CommandPrim.List>;

function List({ emptyMessage, children, ...props }: ListProps) {
  return (
    <CommandPrim.List {...props} className="space-y-2 mb-4 px-5 py-2">
      <CommandPrim.Empty className="text-neutral-800 dark:text-neutral-100">
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
