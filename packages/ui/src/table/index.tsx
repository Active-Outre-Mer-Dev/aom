import { ComponentPropsWithRef, forwardRef } from "react";
import { cx } from "../cx";

const Row = forwardRef<HTMLTableRowElement, ComponentPropsWithRef<"tr">>((props, ref) => {
  return (
    <tr
      ref={ref}
      {...props}
      className="border-b border-neutral-100 dark:border-neutral-700 transition-colors hover:bg-gray-200/20 hover:dark:bg-gray-600/20"
    />
  );
});

const Cell = forwardRef<HTMLTableDataCellElement, ComponentPropsWithRef<"td">>((props, ref) => {
  return (
    <td
      ref={ref}
      {...props}
      className={cx("p-2 align-middle text-gray-800 dark:text-gray-100", props.className)}
    />
  );
});

const Head = forwardRef<HTMLTableHeaderCellElement, ComponentPropsWithRef<"th">>((props, ref) => {
  return (
    <th
      ref={ref}
      {...props}
      className={cx(
        "h-10 px-2 text-left align-middle font-medium text-gray-600 dark:text-gray-300",
        props.className
      )}
    />
  );
});

const Header = forwardRef<HTMLTableSectionElement, ComponentPropsWithRef<"thead">>((props, ref) => {
  return (
    <thead
      ref={ref}
      {...props}
      className="[&_tr:last-child]:border-0 border-b border-b-neutral-100 dark:border-b-neutral-700"
    />
  );
});

const Body = forwardRef<HTMLTableSectionElement, ComponentPropsWithRef<"tbody">>((props, ref) => {
  return <tbody ref={ref} {...props} className="[&_tr:last-child]:border-0" />;
});

const Caption = forwardRef<HTMLElement, ComponentPropsWithRef<"caption">>((props, ref) => {
  const className = cx(props.className, "text-sm text-gray-500 dark:text-gray-400");
  return <caption ref={ref} {...props} className={className} />;
});

const _Table = forwardRef<HTMLTableElement, ComponentPropsWithRef<"table">>((props, ref) => {
  const className = cx(props.className, "text-sm");
  return <table ref={ref} {...props} className={className} />;
});

const Table = Object.assign(_Table, { Body, Caption, Cell, Head, Header, Row });

Body.displayName = "TableBody";
Caption.displayName = "TableCaption";
Cell.displayName = "TableCell";
Head.displayName = "TableHead";
Header.displayName = "TableHeader";
Row.displayName = "TableRow";
Table.displayName = "Table";

export { Table };
