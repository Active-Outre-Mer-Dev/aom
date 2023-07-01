import { StoryObj, Meta } from "@storybook/react";
import { Calendar, Popover, Button } from "@aomdev/ui";
import { cardStyles } from "@aomdev/ui/src/card/styles";
import { useState } from "react";
import { IconCalendar } from "@tabler/icons-react";
import { inputStyles } from "@aomdev/ui/src/input-wrapper/styles";

const meta = { component: Calendar, title: "Atoms/DatePicker" } satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render() {
    return <DatePicker />;
  }
};

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div>
      <Popover>
        <Popover.Trigger asChild>
          <button className={inputStyles({ className: "px-4 flex items-center" })}>
            <span className="inline-block mr-2 text-neutral-600 dark:text-neutral-300">
              <IconCalendar size={16} />
            </span>
            {formatDate(date)}
          </button>
        </Popover.Trigger>
        <Popover.Content sideOffset={5} className={cardStyles({ variant: "outline" })}>
          <Calendar selected={date} onSelect={setDate} mode="single" />
        </Popover.Content>
      </Popover>
      <input hidden type="date" value={date?.toISOString()} />
    </div>
  );
}

function formatDate(date: Date | undefined) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}
