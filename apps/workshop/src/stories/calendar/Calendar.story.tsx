import { StoryObj, Meta } from "@storybook/react";
import { Calendar } from "@aom/ui";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

const meta = { component: Calendar, title: "Atoms/Calendar" } satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <CalendarDemo />;
  }
};

export const WithDisabledDates: Story = {
  render: () => {
    const date1 = new Date();
    date1.setDate(date1.getDate() - 1);
    const date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    return <CalendarDemo disabled={[date1, date2]} />;
  }
};

export const MinDate: Story = {
  render: () => {
    return <CalendarDemo disabled={[{ before: new Date() }]} />;
  }
};

export const DayFormatter: Story = {
  render: () => {
    const month = new Date().getMonth();
    return (
      <CalendarDemo
        bookedDates={[
          new Date(2023, month, 5).toDateString(),
          new Date(2023, month, 25).toDateString(),
          new Date(2023, month, 1).toDateString(),
          new Date(2023, month, 17).toDateString()
        ]}
      />
    );
  }
};

type PropTypes = {
  disabled?: (Date | { before: Date })[];
  bookedDates?: string[];
};

function CalendarDemo({ disabled, bookedDates }: PropTypes) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      showOutsideDays
      formatters={{
        formatDay: d => {
          const hasBooking = bookedDates?.includes(d.toDateString());
          return (
            <>
              {hasBooking ? (
                <span className="w-full h-full relative flex items-center justify-center">
                  {d.getDate()}
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-error-600"></span>
                </span>
              ) : (
                d.getDate()
              )}
            </>
          );
        }
      }}
      disabled={disabled}
      onSelect={setDate}
      className="p-2 rounded-md border border-neutral-100 dark:border-neutral-700 w-fit"
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: `flex justify-center pt-1 relative items-center`,
        caption_label: "text-sm font-medium text-neutral-800 dark:text-neutral-100",
        nav: "space-x-1 flex items-center",
        nav_button: `h-7 w-7 flex items-center justify-center bg-transparent p-0 opacity-50 
        hover:opacity-100 text-neutral-700 dark:text-neutral-200 border border-neutral-300 
        dark:border-neutral-700 rounded-md`,
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-700 dark:text-neutral-300 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2 gap-[1px]",
        cell: `text-center text-sm p-0 relative hover:bg-neutral-100 hover:dark:bg-neutral-700
        [&:has([aria-selected])]:text-white
        [&:has([aria-selected])]:bg-primary-600 [&:has([aria-selected])]:dark:bg-primary-500
         rounded-md
        duration-200 ease-out
        focus-within:relative focus-within:z-20
        [&:has(button:disabled)]:hover:bg-transparent`,
        day: `rounded-md text-neutral-900 dark:text-neutral-50 h-9 w-9 p-0 font-normal 
         duration-200 ease-out`,
        day_selected: `bg-primary-600 dark:bg-primary-500 text-primary-50 
        `,
        day_today: "bg-accent text-accent-foreground",
        day_outside: `text-neutral-600 dark:text-neutral-400 opacity-50
        aria-selected:text-white`,
        day_disabled: "text-neutral-600 dark:text-neutral-400 bg-none dark:bg-none opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible"
      }}
      components={{
        IconLeft: ({ ...props }) => <IconChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <IconChevronRight className="h-4 w-4" />
      }}
    />
  );
}
