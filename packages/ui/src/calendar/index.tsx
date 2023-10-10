import * as React from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import { DayPicker } from "react-day-picker";
import { CustomLabel } from "./caption-label";
import { format } from "date-fns";
import { useState } from "react";
import { cx } from "../cx";
import { Popover } from "../popover";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  labelContentProps?: React.ComponentProps<typeof Popover.Content>;
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  labelContentProps,
  ...props
}: CalendarProps) {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cx("p-3", className)}
      month={date}
      onMonthChange={setDate}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: `flex justify-center pt-1 relative items-center w-full`,
        caption_label: "text-sm font-medium text-gray-800 dark:text-gray-100",
        nav: "space-x-1 flex items-center",
        nav_button: `h-7 w-7 flex items-center justify-center bg-transparent p-0 opacity-50 
        hover:opacity-100 text-gray-700 dark:text-gray-200 border border-neutral-300 
        dark:border-neutral-700 rounded-md`,
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-evenly",
        head_cell: "text-gray-700 dark:text-gray-300 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full  justify-evenly mt-2 gap-[1px]",
        cell: `text-center  text-sm p-0 relative hover:bg-neutral-100 hover:dark:bg-neutral-700
        text-gray-900 dark:text-gray-50
        [&:has([aria-selected])]:text-white [&:has([aria-selected])]:dark:text-white
        [&:has([aria-selected])]:bg-primary-600 [&:has([aria-selected])]:dark:bg-primary-500
         rounded-md
        duration-200 ease-out
        focus-within:relative focus-within:z-20
        [&:has(button:disabled)]:hover:bg-transparent`,
        day: `rounded-md  h-9 w-9 p-0 font-normal 
         duration-200 ease-out flex items-center justify-center`,
        day_selected: `bg-primary-600 dark:bg-primary-500 text-primary-50 
        `,
        day_today: "bg-accent text-accent-foreground",
        day_outside: `text-gray-600 dark:text-gray-400 opacity-50
        aria-selected:text-white`,
        day_disabled: "text-gray-600 dark:text-gray-400 bg-none dark:bg-none opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        caption_start: "w-full",
        caption_end: "w-full",
        ...classNames
      }}
      components={{
        IconLeft: () => <ChevronLeft />,
        IconRight: () => <ChevronRight />,
        CaptionLabel: () => (
          <CustomLabel labelContentProps={labelContentProps} date={date} setDate={setDate}>{`${format(
            date,
            "MMMM"
          )} ${format(date, "yyyy")}`}</CustomLabel>
        )
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";
