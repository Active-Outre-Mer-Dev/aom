import { StoryObj, Meta } from "@storybook/react";
import { Calendar } from "@aom/ui";
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
    />
  );
}
