import { Popover } from "../popover";
import { cardStyles } from "../card/styles";
const MONTHS = [...Array(12).keys()];
import format from "date-fns/format";
type PropTypes = {
  setMonth: (date: Date) => void;
  children: React.ReactNode;
};

export function CustomLabel(props: PropTypes) {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <button
          className={`w-2/4 hover:bg-neutral-50 hover:dark:bg-neutral-700 rounded-md flex justify-center
         items-center text-neutral-800 dark:text-neutral-100`}
        >
          {props.children}
        </button>
      </Popover.Trigger>
      <Popover.Content className={cardStyles({ variant: "filled", className: "grid grid-cols-3 gap-2" })}>
        {MONTHS.map((month, key) => {
          const date = new Date();
          date.setMonth(key);
          const renderedMonth = new Date(2023, month);
          return (
            <button
              className={`rounded-md hover:bg-neutral-50 hover:dark:bg-neutral-700 px-2
              text-neutral-800 dark:text-neutral-100`}
              onClick={() => props.setMonth(date)}
              key={month}
            >
              {format(renderedMonth, "MMM")}
            </button>
          );
        })}
      </Popover.Content>
    </Popover>
  );
}
